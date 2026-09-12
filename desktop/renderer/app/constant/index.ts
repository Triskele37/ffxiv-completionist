/** Flags are either of type Completion or a number
 * in string format
 * */
export type CompletionFlag = Completion | string;

export enum Completion {
    Y = 'Y',
    N = 'N',
    X = 'X'
}

export enum Lang {
    EN = 'en',
    FR = 'fr'
}
