export type UniqueValues = {
    [key: string]: string[];
};

export type CompletionFilter = {
    completed: boolean;
    incomplete: boolean;
    excluded: boolean;
};

export type Filter = {
    key: string;
    value: string | string[];
};

export type Filters = {
    [key: string]: Filter | null;
};

// Type passed into Prime table
export type ExpandedRows = {
    [key: string]: true;
};
