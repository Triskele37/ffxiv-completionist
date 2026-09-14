export type GameState =
    | 'running'
    | 'paused'
    | 'stopped';

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
