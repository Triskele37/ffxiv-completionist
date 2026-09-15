import { inject, Injectable, signal } from '@angular/core';

import { DataGroup } from '@model/DataGroup';
import { DataService } from '@service/data/data-service';

import { Difficulty } from './Difficulty';
import { Word } from './types';

type GameStateState =
    | 'running'
    | 'paused'
    | 'stopped';

// const NameRegex = /^[\x20-\x7E]*$/;
// const NameRegex = /^[a-zA-Z0-9 ,.'!?:+\-/]*$/;
const NameRegex = /^[a-zA-Z0-9 ,.'\-/]*$/;

@Injectable({
    providedIn: 'root'
})
export class TypingMinigameService {
    private svcData = inject(DataService);

    state: GameStateState = 'stopped';
    nextWord: number = 0;
    tick = signal(0);

    streak = signal(0);
    score = signal(0);

    health = signal(100);

    lastBombAt: number = 0;
    bombProgress = signal(0);
    bombs = signal([true]);

    targetWord: Word | null = null;

    constructor() {
        this.populateWords();
        this.initDifficulties();
    }

    resetState(): void {
        this.showStatistics = false;
        this.activeWords.set([]);
        this.nextWord = 0;

        this.tick.set(0);
        this.score.set(0);
        this.health.set(100);
        this.bombs.set([true]);
        this.streak.set(0);

        this.resetStatistics();
    }

    //#region ------------------------------------------------------- Difficulty
    difficulties: Difficulty[] = [
        new Difficulty(0, 0, 10, 1, 40),
        new Difficulty(1, 11, 20, 2, 70),
        new Difficulty(2, 21, 30, 3, 90),
        new Difficulty(3, 31, 40, 4, 99),
        new Difficulty(4, 41, Infinity, 5, 100),
    ];

    private initDifficulties(): void {
        // Find start/end indexes in `words` for each difficulty
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

    getRandomDifficulty(): Difficulty {
        // return this.difficulties[3];

        const rDifficulty = Math.floor(Math.random() * 100);

        for(const difficulty of this.difficulties) {
            if(rDifficulty <= difficulty.percentile) {
                return difficulty;
            }
        }

        return this.difficulties[this.difficulties.length - 1];
    }

    //#endregion

    //#region ------------------------------------------------------- Words
    words: string[] = [];
    activeWords = signal<Word[]>([]);

    private populateWords(): void {
        this.words = this.getFlatNames(this.svcData.data)
            .filter((n) => n.length > 2)
            .filter((n) => NameRegex.test(n));

        this.words.sort((a, b) => a.length - b.length);
    }

    private getFlatNames(group: DataGroup): string[] {
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

    //#endregion

    //#region ------------------------------------------------------- Statistics
    showStatistics: boolean = false;
    highestStreak: number = 0;
    lettersTyped: number = 0;
    wordsTyped: number = 0;
    bombsUsed: number = 0;

    resetStatistics(): void {
        this.highestStreak = 0;
        this.lettersTyped = 0;
        this.wordsTyped = 0;
        this.bombsUsed = 0;

        for(const difficulty of this.difficulties) {
            difficulty.reset();
        }
    }

    getStatisticsLog(): string[] {
        return [
            `Score: ${this.score()}`,
            `Streak: ${this.highestStreak}`,
            `Bombs: ${this.bombsUsed}`,
            `Letters: ${this.lettersTyped}`,
            `Words: ${this.wordsTyped}`,
            ...this.difficulties.map((d) => `${d.stars}: ${d.wordsTypes}`)
        ];
    }

    //#endregion

}
