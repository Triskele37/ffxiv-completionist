export type Filters = CompletionFilter | DataFilter;

export type CompletionFilter = {
    completion: {
        completed?: boolean;
        incomplete?: boolean;
        excluded?: boolean;
    };
};

export type DataFilter = {
    [key: string]: {
        key: string;
        value: string;
    };
};

export type UniqueValues = {
    [key: string]: string[];
};

export type DragEvent = {
    dragIndex: number;
    dropIndex: number;
};
