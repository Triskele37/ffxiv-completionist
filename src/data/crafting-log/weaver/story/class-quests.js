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
                name: "Elegant Bustle",
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
                name: "Winsome Spring Dress",
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
                name: "Seductive Bustier",
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
                name: "Tennyo Hagoromo",
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
