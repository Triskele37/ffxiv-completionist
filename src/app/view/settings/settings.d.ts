export interface Settings {
    storeName: StringSetting;
    storeLocation: StringSetting;
    startingClass: StringSetting;
    lang: StringSetting;
    tableFilters: {
        completed: BoolSetting;
        incomplete: BoolSetting;
        excluded: BoolSetting;
    };
    showCompletedGroups: BoolSetting;
    showEmptyGroups: BoolSetting;
    chainingEnabled: BoolSetting;
    chainHistoryLimit: NumberSetting;
    chainMinThreshold: NumberSetting;
}

export type Setting = {
    key: string;
};

export type StringSetting = Setting & {
    value?: string;
};

export type BoolSetting = Setting & {
    value?: boolean;
};

export type NumberSetting = Setting & {
    value?: number;
    min: number;
    max: number;
};
