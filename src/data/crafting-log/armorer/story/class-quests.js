import { CraftingLogColumnConfig } from "../../columnConfigs";

export const Armorer_Story_ClassQuests = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.class-quests`;

    return {
        name: "Class Quests",
        storageKey,
        columns: CraftingLogColumnConfig,
        tasks: [
            {
                "level": 63,
                name: "Paladin Mail",
                "mat-1": "Plate Mail Materials",
                "mat-2": "X",
                "mat-3": "X",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "2 Ice Crystal, Earth Crystal",
                "special": "X"
            },
            {
                "level": 65,
                name: "Titanium Kote",
                "mat-1": "Kote Materials",
                "mat-2": "X",
                "mat-3": "X",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "2 Ice Crystal, Earth Crystal",
                "special": "X"
            },
            {
                "level": 68,
                name: "Tournament Somen",
                "mat-1": "Somen Materials",
                "mat-2": "X",
                "mat-3": "X",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "2 Ice Crystal, Earth Crystal",
                "special": "X"
            },
            {
                "level": 70,
                name: "Lominsan Hara-ate",
                "mat-1": "Hara-ate Materials",
                "mat-2": "X",
                "mat-3": "X",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "2 Ice Crystal, Earth Crystal",
                "special": "X"
            }
        ]
    };
};
