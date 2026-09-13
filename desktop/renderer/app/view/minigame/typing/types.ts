export class Difficulty {
    percentile: number;
    multiplier: number;
    minLength: number = 0;
    maxLength: number;
    start: number = 0;
    end: number = 0;
    wordsTypes: number = 0;
    stars: string = '';

    constructor(
        _maxLength: number,
        _multiplier: number,
        _percentile: number,
    ) {
        this.maxLength = _maxLength;
        this.multiplier = _multiplier;
        this.percentile = _percentile;
    }

    setStars(_stars: number): void {
        this.stars = '★'.repeat(_stars);
    }

    reset(): void {
        this.wordsTypes = 0;
    }
}

export type Word = Drawable & {
    letters: Letter[];
    difficulty: string; // ★
};

export type Letter = {
    char: string;
    hit: boolean;
};

export type Drawable = {
    value: string;
    x: number;
    y: number;
};
