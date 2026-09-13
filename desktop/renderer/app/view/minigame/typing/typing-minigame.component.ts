import { Component, ElementRef, HostListener, inject, signal } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonDirective } from 'primeng/button';

import { DataGroup } from '@model/DataGroup';
import { DataService } from '@service/data/data-service';

import { Difficulty, Letter, Word } from './types';

const NameRegex = /^[a-zA-Z0-9 ,.'!?:+\-/]*$/;
// const NameRegex = /^[\x20-\x7E]*$/;

const MIN_BOMB = 3; // index of min difficulty for bombs

@Component({
    selector: 'com-typing-minigame',
    templateUrl: './typing-minigame.component.html',
    styleUrls: ['./typing-minigame.component.scss'],
    imports: [
        NgIcon,
        TranslatePipe,
        ButtonDirective,
    ]
})
export class TypingMinigameComponent {
    private svcData = inject(DataService);
    private elementRef = inject(ElementRef);

    gameRunning: boolean = false;
    words: string[] = [];
    activeWords = signal<Word[]>([]);

    // Tick Config
    tick = signal(0);
    tickSpeed: number = 200;
    tickInterval: any;
    wordSpeed: number = this.tickSpeed * 15;
    wordTimeout: any;

    pxPerTick: number = 10;
    playHeight: number = 0;
    targetWord: Word | null = null;

    // Difficulties
    difficulties: Difficulty[] = [
        new Difficulty(10, 1, 40),
        new Difficulty(20, 2, 70),
        new Difficulty(30, 3, 90),
        new Difficulty(40, 4, 99),
        new Difficulty(Infinity, 5, 100),
    ];

    // Resources
    scorePerLetter: number = 1;
    scorePerWord: number = 10;
    heightScoreFactor: number = 2;
    caseScoreFactor: number = 1.1;
    score = signal(0);
    streak: number = 0;
    healthPerHit: number = 5;
    health = signal(100);
    bombs = signal([null]);
    bombProgress = signal(0);
    lastBombAt: number = 0;

    // Statistics
    showStatistics: boolean = false;
    highestStreak: number = 0;
    lettersTyped: number = 0;
    wordsTyped: number = 0;
    bombsUsed: number = 0;

    constructor() {
        this.populateWords();
    }

    //#region ------------------------------------------------------- Init
    populateWords(): void {
        this.words = this.getFlatNames(this.svcData.data)
            .filter((n) => n.length > 2)
            .filter((n) => NameRegex.test(n));

        this.words.sort((a, b) => a.length - b.length);

        this.initDifficulties();
    }

    getFlatNames(group: DataGroup): string[] {
        const arr: string[] = [];

        const nameColumn = group.columns?.find((c) => c.key === 'name');
        if(group.tasks && !nameColumn?.link) {
            arr.push(...group.tasks.map((t) => t.name));
        }

        const subGroups = group.subGroups?.values() ?? [];
        for(const subGroup of subGroups) {
            if(subGroup) arr.push(...this.getFlatNames(subGroup));
        }

        return arr;
    }

    initDifficulties(): void {
        for(let i = 0; i < this.difficulties.length; i++) {
            this.difficulties[i].setStars(i + 1);
            if(i < this.difficulties.length - 1) {
                this.difficulties[i + 1].minLength = this.difficulties[i].maxLength + 1;
            }
        }

        for(let i = 0; i < this.words.length; i++) {
            const wordL = this.words[i].length;

            for(let j = 0; j < this.difficulties.length - 1; j++) {
                const difficulty = this.difficulties[j];

                if(difficulty.end === 0 && wordL > difficulty.maxLength) {
                    difficulty.end = i - 1;
                    this.difficulties[j + 1].start = i;
                }
            }
        }

        this.difficulties[this.difficulties.length - 1].end = this.words.length - 1;
    }

    //#endregion

    //#region ------------------------------------------------------- Play
    startGame(): void {
        // setTimeout(() => this.stopGame(), 5000);
        // this.memeGame();

        this.showStatistics = false;
        this.activeWords.set([]);

        // Reset resources
        this.tick.set(0);
        this.score.set(0);
        this.health.set(100);
        this.bombs.set([null]);
        this.highestStreak = 0;
        this.streak = 0;
        this.playHeight = this.getPlayArea()[1];

        // Reset statistics
        this.wordsTyped = 0;
        for(const difficulty of this.difficulties) {
            difficulty.reset();
        }
        this.lettersTyped = 0;
        this.bombsUsed = 0;

        // Game tick
        this.tickInterval = setInterval(() => this.onTick(), this.tickSpeed);
        this.gameRunning = true;

        this.addWord();
    }

    stopGame(): void {
        this.gameRunning = false;
        this.showStatistics = true;
        this.targetWord = null;

        clearInterval(this.tickInterval);
        clearTimeout(this.wordTimeout);
    }

    memeGame(): void {
        this.tickSpeed = 2;

        const inter = setInterval(() => {
            for(const letter of this.activeWords()[0]?.letters ?? []) {
                if(!letter.hit) {
                    this.hitLetters(letter.char);
                    // break;
                }
            }

            if(this.wordsTyped > 10000) clearInterval(inter);
        }, 1);
    }

    onTick(): void {
        this.tick.set(this.tick() + 1);

        const [, height] = this.getPlayArea();
        this.activeWords.update((activeWords) => {
            const updatedWords = [...activeWords];

            for(let i = 0; i < updatedWords.length; i++) {
                const word = updatedWords[i];

                if(word.y > (height - 40)) {
                    this.takeDamage();
                    updatedWords.splice(i, 1);
                    i--;
                }
                else {
                    word.y += this.pxPerTick;
                }
            }

            return [...updatedWords];
        });
    }

    getPlayArea(): [number, number] {
        const { clientWidth, clientHeight } = this.elementRef.nativeElement.firstChild;
        return [clientWidth, clientHeight];
    }

    //#endregion

    //#region ------------------------------------------------------- Add Word
    addWord(): void {
        if(!this.gameRunning) return;

        const name = this.pickRandomWord();

        this.activeWords.update((activeNames) => [...activeNames, name]);

        this.wordTimeout = setTimeout(() =>
            this.addWord(),
            Math.max(this.wordSpeed - this.tick(), this.tickSpeed)
        );
    }

    pickRandomWord(): Word {
        const wordValue = this.getRandomWord();

        const [width] = this.getPlayArea();
        const wordWidth = wordValue.length * 10;
        const start = 100;
        const end = width - (100 + wordWidth);
        const randomX = Math.floor(Math.random() * (end - start + 1)) + start;

        const difficulty = this.getWordDifficulty(wordValue);

        return {
            value: wordValue,
            difficulty: difficulty.stars,
            x: randomX,
            y: 0,
            letters: wordValue.split('').map((l) => ({
                char: l,
                hit: false
            }))
        };
    }

    getRandomWord(): string {
        while(true) {
            const { start, end } = this.getRandomDifficultyRange();
            const rIndex = Math.floor(Math.random() * (end - start + 1)) + start;
            const word = this.words[rIndex];
            const exists = this.activeWords().some((w) => w.value === word);
            if(!exists) return word;
        }
    }

    getRandomDifficultyRange(): Difficulty {
        if(this.wordsTyped - this.lastBombAt > 100) {
            this.lastBombAt = this.wordsTyped;
            return this.difficulties[MIN_BOMB];
        }

        const rDifficulty = Math.floor(Math.random() * 100);

        let outDifficulty = this.difficulties[this.difficulties.length - 1];
        for(const difficulty of this.difficulties) {
            if(rDifficulty <= difficulty.percentile) {
                outDifficulty = difficulty;
                break;
            }
        }

        const index = this.difficulties.indexOf(outDifficulty);
        if(index >= MIN_BOMB) this.lastBombAt = this.wordsTyped;

        return outDifficulty;
    }

    //#endregion

    //#region ------------------------------------------------------- Hit
    @HostListener('window:keydown', ['$event'])
    onWindowKeydown($event: KeyboardEvent): void {
        if(!this.gameRunning) return;

        $event.preventDefault();
        $event.stopPropagation();

        if($event.key === 'Escape') {
            this.targetWord = null;
        }
        else if($event.key === 'Tab' && this.bombs().length > 0) {
            this.useBomb();
        }
        else {
            this.hitLetters($event.key);
        }
    }

    useBomb(): void {
        this.bombs.update((b) => b.filter((_, i) => i > 0));
        this.bombsUsed++;
        this.targetWord = null;

        let addedScore = 0;
        for(const word of this.activeWords()) {
            addedScore += this.getWordScore(word);
        }
        this.score.update((s) => s + Math.floor(addedScore * 0.5));

        this.activeWords.set([]);
    }

    hitLetters(typedLetter: string): void {
        this.activeWords.update((activeWords) => {
            const updatedWords = [...activeWords];

            if(!this.targetWord) {
                this.targetWord = updatedWords.find((word) => {
                    for(const letter of word.letters) {
                        if(letter.hit) continue;
                        if(letter.char === typedLetter) return true;
                        if(letter.char.toLowerCase() === typedLetter) return true;
                        break;
                    }
                }) ?? null;
            }

            this.targetWord?.letters.some((letter) => {
                if(letter.hit) return;

                const caseMatch = letter.char === typedLetter;
                const match = letter.char.toLowerCase() === typedLetter;

                if(caseMatch || match) {
                    if(this.finishLetter(this.targetWord!, letter, caseMatch)) {
                        const index = this.activeWords().indexOf(this.targetWord!);
                        updatedWords.splice(index, 1);
                        this.targetWord = null;
                    }
                }

                // Allow skipping spaces
                return letter.char !== ' ';
            });

            return [...updatedWords];
        });
    }

    finishLetter(word: Word, letter: Letter, caseMatch: boolean): boolean {
        let wordFinished = false;

        letter.hit = true;
        let addedScore = this.getLetterScore(word, caseMatch);
        this.lettersTyped++;

        // Remove word if last letter hit
        if(word.letters.indexOf(letter) === word.letters.length - 1) {
            addedScore += this.finishWord(word);
            wordFinished = true;
        }

        this.score.update((s) => s + addedScore);
        return wordFinished;
    }

    finishWord(word: Word): number {
        this.getWordDifficulty(word).wordsTypes++;
        this.wordsTyped++;
        this.streak++;

        if(this.streak > this.highestStreak) {
            this.highestStreak = this.streak;
        }

        // Gain bomb progress for long words
        if(word.value.length >= this.difficulties[MIN_BOMB].maxLength) {
            if(this.bombProgress() % 4 === 0) {
                this.bombs.update((bs) => [...bs, null]);
                this.bombProgress.set(0);
            }
            else {
                this.bombProgress.update((p) => p + 1);
            }
        }

        return this.getWordScore(word);
    }

    //#endregion

    //#region ------------------------------------------------------- Score
    getWordDifficulty(word: Word | string): Difficulty {
        const wordLength = (typeof word === 'string' ? word : word.value).length;

        for(const difficulty of this.difficulties) {
            if(wordLength >= difficulty.minLength && wordLength <= difficulty.maxLength) {
                return difficulty
            }
        }

        return this.difficulties[0];
    }

    getHeightMult(word: Word): number {
        const factor = (this.playHeight - word.y) / this.playHeight;
        return Math.max(0, factor * this.heightScoreFactor);
    }

    getStreakMult(): number {
        return 1 + (this.streak / 100);
    }

    getLetterScore(word: Word, caseMatch: boolean): number {
        return Math.round(
            this.scorePerLetter *
            this.getWordDifficulty(word).multiplier *
            this.getHeightMult(word) *
            this.getStreakMult() *
            (caseMatch ? this.caseScoreFactor : 1)
        );
    }

    getWordScore(word: Word): number {
        return Math.round(
            this.scorePerWord *
            this.getWordDifficulty(word).multiplier *
            this.getHeightMult(word) *
            this.getStreakMult()
        );
    }

    takeDamage(): void {
        this.streak = 0;

        this.health.update((h) => {
            const newHealth = h - this.healthPerHit;
            if(newHealth <= 0) this.stopGame();
            return Math.max(newHealth, 0);
        });
    }

    //#endregion
}
