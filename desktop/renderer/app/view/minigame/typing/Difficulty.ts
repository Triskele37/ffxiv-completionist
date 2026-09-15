export class Difficulty {
    // Place of this difficulty in array
    index: number;

    // String length range
    minLength: number;
    maxLength: number;

    percentile: number;
    multiplier: number;
    start: number = 0;
    end: number = 0;
    wordsTypes: number = 0;
    stars: string = '';

    constructor(
        _index: number,
        _minLength: number,
        _maxLength: number,
        _multiplier: number,
        _percentile: number,
    ) {
        this.index = _index;

        this.minLength = _minLength;
        this.maxLength = _maxLength;

        this.multiplier = _multiplier;
        this.percentile = _percentile;
        this.stars = '★'.repeat(_index + 1);
    }

    reset(): void {
        this.wordsTypes = 0;
    }
}
