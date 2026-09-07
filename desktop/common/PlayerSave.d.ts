export type SaveLoad = {
    data: PlayerSave;
    successful: boolean;
};

export type PlayerSave = {
    overall: Record<string, any>;
    custom: Record<string, any>;
    'bookmarked-groups': string[];
    'bookmarked-tasks': string[];
    'starting-class': string;
    version: string;
};
