export type CustomMeta = {
    name: string;
    [key: string]: string | CustomMeta | CustomTask;
};

export type CustomTask = {
    name: string;
    notes: string;
};
