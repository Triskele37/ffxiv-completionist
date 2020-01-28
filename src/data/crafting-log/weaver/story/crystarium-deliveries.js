import { CraftingLogColumnConfig } from "../../columnConfigs";

export const Weaver_Story_Crystarium = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.crystarium-deliveries`;

    return {
        name: "Crystarium Deliveries",
        storageKey,
        columns: CraftingLogColumnConfig,
        tasks: [
            {
                "level": 70,
                "item": "Canvas Repair Materials",
                "mat-1": "2 Zelkova Lumber",
                "mat-2": " Kudzu Cloth",
                "mat-3": "X",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "2 Lightning Crystal, 2 Wind Crystal",
                "special": "X"
            },
            {
                "level": 73,
                "item": "Upholstery Repair Materials",
                "mat-1": " Miracle Apple Lumber",
                "mat-2": " Iridescent Silk",
                "mat-3": " Green Glider Leather",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "2 Lightning Crystal, 2 Wind Crystal",
                "special": "X"
            },
            {
                "level": 75,
                "item": "Amaro Barding Repair Materials",
                "mat-1": " Atrociraptor Leather",
                "mat-2": " Pixie Cotton",
                "mat-3": " White Ash Lumber",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "2 Lightning Crystal, 2 Wind Crystal",
                "special": "X"
            },
            {
                "level": 75,
                "item": "Workshop Sign",
                "mat-1": " Workshop Sign Materials",
                "mat-2": "X",
                "mat-3": "X",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "2 Lightning Crystal, 2 Wind Crystal",
                "special": "X"
            },
            {
                "level": 78,
                "item": "Lute Repair Materials",
                "mat-1": " Lignum Vitae Lumber",
                "mat-2": " Dwarven Cotton",
                "mat-3": " Sea Swallow Leather",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "2 Lightning Crystal, 2 Wind Crystal",
                "special": "X"
            },
            {
                "level": 80,
                "item": "Lute Modification Component",
                "mat-1": " Lute Modification Component Materials",
                "mat-2": "X",
                "mat-3": "X",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "2 Lightning Crystal, 2 Wind Crystal",
                "special": "X"
            }
        ]
    };
};
