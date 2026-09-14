import { AfterViewInit, Component, ElementRef, HostListener, inject, OnDestroy, ViewChild } from '@angular/core';
import { NgIcon } from '@ng-icons/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ButtonDirective } from 'primeng/button';
import { ButtonGroup } from 'primeng/buttongroup';

import { Difficulty } from './Difficulty';
import { Letter, Word } from './types';
import { TypingMinigameService } from './typing-minigame.service';
import { NgClass } from '@angular/common';

const MIN_BOMB = 3; // index of min difficulty for bombs

type AutoPlay = { name: string; timeout: number; override?: number; };

@Component({
    selector: 'com-typing-minigame',
    templateUrl: './typing-minigame.component.html',
    styleUrls: ['./typing-minigame.component.scss'],
    imports: [
        NgIcon,
        TranslatePipe,
        ButtonDirective,
        ButtonGroup,
        NgClass,
    ]
})
export class TypingMinigameComponent implements AfterViewInit, OnDestroy {
    game = inject(TypingMinigameService);

    autoplayIndex = 0;
    autoplayStart = 0;
    autoplays: AutoPlay[] = [
        // { name: 'Beginner', timeout: 400 },
        // { name: 'Average', timeout: 250 },
        // { name: 'Pro', timeout: 170 },
        // { name: 'Advanced', timeout: 120 },
        // { name: 'Elite', timeout: 80 },
        // { name: 'Meme', timeout: 1, override: 2 }
    ];

    ngAfterViewInit() {
        if(this.autoplays.length) {
            this.autoplayGame(this.autoplays[0]);
        }
    }

    ngOnDestroy() {
        if(this.game.state === 'running') {
            this.togglePauseGame();
        }
    }

    @HostListener('window:keydown', ['$event'])
    onWindowKeydown($event: KeyboardEvent): void {
        if(!$event.isTrusted) return;
        if(this.game.state !== 'running') return;

        $event.preventDefault();
        $event.stopPropagation();

        if($event.key === 'Enter') {
            this.game.targetWord = null;
        }
        else if($event.key === 'Escape') {
            this.togglePauseGame();
        }
        else if($event.key === 'Tab' && this.game.bombs().length > 0) {
            this.useBomb();
        }
        else {
            this.onLetterTyped($event.key);
        }
    }

    //#region ------------------------------------------------------- Play Area
    @ViewChild('playArea') playArea!: ElementRef;

    // Only used so a getter isn't attached in the template
    playHeight: number = 0;

    get playAreaWidth(): number {
        return this.playArea.nativeElement.clientWidth;
    }

    get playAreaHeight(): number {
        return this.playArea.nativeElement.clientHeight;
    }

    //#endregion

    //#region ------------------------------------------------------- Difficulty
    getRandomDifficultyRange(): Difficulty {
        // Give pity word of bomb difficulty after 100 non-bomb
        if(this.game.wordsTyped - this.game.lastBombAt > 100) {
            this.game.lastBombAt = this.game.wordsTyped;
            return this.game.difficulties[MIN_BOMB];
        }

        const difficulty = this.game.getRandomDifficulty();

        // Update last bomb difficulty word to track pity
        if(difficulty.index >= MIN_BOMB) this.game.lastBombAt = this.game.wordsTyped;

        return difficulty;
    }

    getWordDifficulty(word: Word | string): Difficulty {
        const wordLength = (typeof word === 'string' ? word : word.value).length;

        for(const difficulty of this.game.difficulties) {
            if(wordLength >= difficulty.minLength && wordLength <= difficulty.maxLength) {
                return difficulty
            }
        }

        return this.game.difficulties[0];
    }

    //#endregion

    //#region ------------------------------------------------------- Play
    startGame(): void {
        // setTimeout(() => this.stopGame(), 5000);

        this.game.resetState();
        this.playHeight = this.playAreaHeight;

        // Game tick
        this.startTicks();
        this.game.state = 'running';
    }

    stopGame(): void {
        this.game.state = 'stopped';
        this.game.showStatistics = true;
        this.game.targetWord = null;
        this.stopTicks();

        if(this.autoplays.length) {
            console.log([
                `----------- ${this.autoplays[this.autoplayIndex].name}`,
                `Played for: ${(Date.now() - this.autoplayStart) * this.gameSpeed}`,
                ...this.game.getStatisticsLog()
            ].join('\n'));

            this.autoplayIndex++;
            const nextAutoplay = this.autoplays[this.autoplayIndex];
            if(nextAutoplay) {
                setTimeout(() => this.autoplayGame(nextAutoplay), 1000);
            }
        }
    }

    togglePauseGame(): void {
        if(this.game.state === 'running') {
            this.game.state = 'paused';
            this.stopTicks();
        }
        else if(this.game.state === 'paused') {
            setTimeout(() => {
                this.game.state = 'running';
                this.startTicks();
            }, 1000);
        }
    }

    autoplayGame(config: AutoPlay): void {
        this.tickSpeed = config.override ?? this.tickSpeed;
        this.autoplayStart = Date.now();
        this.startGame();

        const inter = setInterval(() => {
            if(this.game.wordsTyped > 10000 || this.game.state === 'stopped') {
                clearInterval(inter);
                return;
            }

            if(this.game.state === 'paused') return;

            for(const word of this.game.activeWords()) {
                if(word.y > this.playAreaHeight - 100 && this.game.bombs().length) {
                    this.useBomb();
                    return;
                }
            }

            for(const letter of this.game.activeWords()[0]?.letters ?? []) {
                if(!letter.hit) {
                    this.onLetterTyped(letter.char);
                    break;
                }
            }
        }, config.timeout / this.gameSpeed);
    }

    //#endregion

    //#region ------------------------------------------------------- Tick
    gameSpeed: number = 1;
    tickSpeed: number = 200 / this.gameSpeed;
    tickInterval: any;

    minWordSpeed: number = 1000 / this.gameSpeed;
    baseWordSpeed: number = 3000 / this.gameSpeed;
    wordSpeedRamp: number = 20 / this.gameSpeed;
    wordCc: number = 1000 / this.gameSpeed;

    msBeforeBottom: number = 15000 / this.gameSpeed;
    ticksBeforeBottom: number = this.msBeforeBottom / this.tickSpeed;

    startTicks(): void {
        this.tickInterval = setInterval(() => this.onTick(), this.tickSpeed);
    }

    stopTicks(): void {
        clearInterval(this.tickInterval);
    }

    onTick(): void {
        const tick = this.game.tick() + 1;
        this.game.tick.set(tick);

        this.game.activeWords.update((activeWords) => {
            const updatedWords = [...activeWords];

            for(let i = 0; i < updatedWords.length; i++) {
                const word = updatedWords[i];

                if(word.y > (this.playAreaHeight - 40)) {
                    this.takeDamage();
                    if(this.game.targetWord === word) this.game.targetWord = null;
                    updatedWords.splice(i, 1);
                    i--;
                }
                else if(this.game.targetWord !== word || (Date.now() - this.lastTypedTime) > this.wordCc) {
                    word.y += this.playAreaHeight / this.ticksBeforeBottom;
                }
            }

            return updatedWords;
        });

        if(this.game.nextWord <= tick) {
            const word = this.addWord();

            this.game.nextWord = this.getNextWordTick(tick, word);
        }
    }

    getNextWordTick(currentTick: number, word: Word | undefined): number {
        const millis = Math.max(
            this.minWordSpeed,
            this.baseWordSpeed - (this.game.wordsTyped * this.wordSpeedRamp)
        );
        const ticks = Math.round(millis / this.tickSpeed);
        const offset = word ? this.getWordDifficulty(word).index * 2 : 0;
        return currentTick + ticks + offset;
    }

    //#endregion

    //#region ------------------------------------------------------- Word
    addWord(): Word | undefined {
        if(!this.game.state) return;

        const word = this.pickRandomWord();
        this.game.activeWords.update((activeNames) => [...activeNames, word]);

        return word;
    }

    pickRandomWord(): Word {
        const wordValue = this.getRandomWord();

        const wordWidth = wordValue.length * 10;
        const start = 100;
        const end = this.playAreaWidth - (100 + wordWidth);
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
            const word = this.game.words[rIndex];
            const exists = this.game.activeWords().some((w) => w.value === word);
            if(!exists) return word;
        }
    }

    //#endregion

    //#region ------------------------------------------------------- Hit
    lastTypedTime: number = 0;

    onLetterTyped(typedLetter: string): void {
        this.lastTypedTime = Date.now();

        this.game.activeWords.update((activeWords) => {
            const updatedWords = [...activeWords];

            if(!this.game.targetWord) this.setTargetWord(typedLetter);

            this.game.targetWord?.letters.some((letter) => {
                if(letter.hit) return;

                const letterScore = this.finishLetter(this.game.targetWord!, letter, typedLetter);
                const wordScore = this.finishWord(this.game.targetWord!);

                if(letterScore || wordScore) {
                    // Knockback word
                    this.game.targetWord!.y = Math.max(
                        0,
                        this.game.targetWord!.y - (this.playAreaHeight / this.ticksBeforeBottom)
                    );

                    this.game.score.update((s) => s + letterScore + wordScore);
                }

                if(wordScore) {
                    const index = this.game.activeWords().indexOf(this.game.targetWord!);
                    updatedWords.splice(index, 1);
                    this.game.targetWord = null;
                }

                // Allow skipping spaces
                return letter.char !== ' ';
            });

            return [...updatedWords];
        });
    }

    setTargetWord(typedLetter: string): void {
        this.game.targetWord = this.game.activeWords().find((word) => {
            for(let i = 0; i < word.letters.length; i++) {
                const letter = word.letters[i];
                if(letter.hit) continue;

                if(matches(letter.char, typedLetter)) return true;

                if(letter.char === ' ') {
                    if(matches(word.letters[i + 1].char, typedLetter)) return true;
                }

                break;
            }
        }) ?? null;

        function matches(a: string, b: string) {
            if(a === b) return true;
            return a.toLowerCase() === b.toLowerCase();
        }
    }

    finishLetter(word: Word, letter: Letter, typedLetter: string): number {
        // Check for match
        const caseMatch = letter.char === typedLetter;
        const match = letter.char.toLowerCase() === typedLetter.toLowerCase();
        if(!caseMatch && !match) return 0;

        // mark all previous letters complete
        const stop = word.letters.findIndex((l) => l === letter);
        for(let i = 0; i < stop; i++) word.letters[i].hit = true;

        letter.hit = true;
        this.game.lettersTyped++;
        return this.getLetterScore(word, caseMatch);
    }

    finishWord(word: Word): number {
        const wordFinished = word.letters
            .filter((l) => l.char !== ' ')
            .every((l) => l.hit);

        if(!wordFinished) return 0;

        this.getWordDifficulty(word).wordsTypes++;
        this.game.wordsTyped++;
        this.game.streak.update((s) => s + 1);

        if(this.game.streak() > this.game.highestStreak) {
            this.game.highestStreak = this.game.streak();
        }

        if(word.value.length >= this.game.difficulties[MIN_BOMB].minLength) {
            this.incrementBombProgress();
        }

        return this.getWordScore(word);
    }

    //#endregion

    //#region ------------------------------------------------------- Health
    healthPerHit: number = 5;

    takeDamage(): void {
        this.game.streak.set(0);

        this.game.health.update((h) => {
            const newHealth = h - this.healthPerHit;
            if(newHealth <= 0) this.stopGame();
            return Math.max(newHealth, 0);
        });
    }

    //#endregion

    //#region ------------------------------------------------------- Bomb
    useBomb(): void {
        this.game.bombs.update((b) => b.filter((_, i) => i > 0));
        this.game.bombsUsed++;
        this.game.targetWord = null;

        let addedScore = 0;
        for(const word of this.game.activeWords()) {
            addedScore += this.getWordScore(word);
        }

        this.game.score.update((s) => s + Math.floor(addedScore * 0.5));

        this.game.activeWords.set([]);
    }

    incrementBombProgress(): void {
        this.game.bombProgress.update((p) => {
            const next = p + 1;

            if(next >= 4) {
                this.game.bombs.update((bs) => [...bs, true]);
                return 0;
            }

            return next;
        });
    }

    //#endregion

    //#region ------------------------------------------------------- Score
    scorePerLetter: number = 1;
    scorePerWord: number = 10;
    heightScoreFactor: number = 2;
    caseScoreFactor: number = 1.1;

    getHeightMult(word: Word): number {
        const factor = (this.playAreaHeight - word.y) / this.playAreaHeight;
        return Math.max(0.5, factor * this.heightScoreFactor);
    }

    getStreakMult(): number {
        return 1 + (this.game.streak() / 100);
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

    //#endregion

}
