import { CraftingLogColumnConfig } from "../../columnConfigs";

export const Weaver_Story_ClassQuests = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.class-quests`;

    return {
        name: "Class Quests",
        storageKey,
        columns: CraftingLogColumnConfig,
        tasks: [
            {
                "level": 63,
                "item": "Elegant Bustle",
                "mat-1": "Bustle Materials",
                "mat-2": "X",
                "mat-3": "X",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "2 Lightning Crystal, Wind Crystal",
                "special": "X"
            },
            {
                "level": 65,
                "item": "Winsome Spring Dress",
                "mat-1": "Spring Dress Materials",
                "mat-2": "X",
                "mat-3": "X",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "2 Lightning Crystal, Wind Crystal",
                "special": "X"
            },
            {
                "level": 68,
                "item": "Seductive Bustier",
                "mat-1": "Bustier Materials",
                "mat-2": "X",
                "mat-3": "X",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "2 Lightning Crystal, Wind Crystal",
                "special": "X"
            },
            {
                "level": 70,
                "item": "Tennyo Hagoromo",
                "mat-1": "Hagoromo Materials",
                "mat-2": "X",
                "mat-3": "X",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "2 Lightning Crystal, Wind Crystal",
                "special": "X"
            }
        ]
    };
};
