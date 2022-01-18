export enum Status {
    Success = 'success',
    Failure = 'failure'
}

export type Match = {
    id: number;
    name: string;
    path: string;
};

export type MatchGroup = {
    path: string;
    matchesString?: string;
    tasks: MatchGroupTask[];
};

type MatchGroupTask = {
    id: number;
    name: string;
};
