export type CustomTaskMeta = {
    name: string;
    notes: string;
};

export type CustomTaskMetaMap = Record<string, CustomTaskMeta>;

export type CustomGroupMeta = {
    name: string;
} & Record<string, CustomTaskMeta>;

export type CustomGroupMetaMap = Record<string, CustomGroupMeta>;
