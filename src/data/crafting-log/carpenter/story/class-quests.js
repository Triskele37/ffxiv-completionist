import { CraftingLogColumnConfig } from "../../columnConfigs";

export const Carpenter_Story_ClassQuests = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.class-quests`;

    return {
        name: "Class Quests",
        storageKey,
        columns: CraftingLogColumnConfig,
        tasks: [
            {
                "level": 63,
                name: "Lavish Dressing Case",
                "mat-1": "Dressing Case Materials",
                "mat-2": "X",
                "mat-3": "X",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "2 Wind Crystal, Ice Crystal",
                "special": "Housing (Other)"
            },
            {
                "level": 65,
                name: "Stylish Pipe Box",
                "mat-1": "Pipe Box Materials",
                "mat-2": "X",
                "mat-3": "X",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "2 Wind Crystal, Ice Crystal",
                "special": "X"
            },
            {
                "level": 68,
                name: "Ornate Partition",
                "mat-1": "Partition Materials",
                "mat-2": "X",
                "mat-3": "X",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "2 Wind Crystal, Ice Crystal",
                "special": "X"
            },
            {
                "level": 70,
                name: "Teahouse Bench",
                "mat-1": "Teahouse Bench Materials",
                "mat-2": "X",
                "mat-3": "X",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "2 Wind Crystal, Ice Crystal",
                "special": "X"
            }
        ]
    };
};
