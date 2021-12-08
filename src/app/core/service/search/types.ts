export type Match = {
    id: string;
    name: string;
    path: string;
};

export type MatchGroup = {
    path: string;
    matchesString?: string;
    tasks: MatchGroupTask[];
};

type MatchGroupTask = {
    id: string;
    name: string;
};
