export type Filters = {
    [key: string]: {
        // for 'completion' filter
        completed?: boolean;
        incomplete?: boolean;
        excluded?: boolean;

        // for any other filter
        key?: string;
        value?: string;
    };
};

export type UniqueValues = {
    [key: string]: string[];
};

export type DragEvent = {
    dragIndex: number;
    dropIndex: number;
};
