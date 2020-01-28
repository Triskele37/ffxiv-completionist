import { CraftingLogColumnConfig } from "../../columnConfigs";

export const Carpenter_Restoration = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.restoration`;

    return {
        name: "Restoration",
        storageKey,
        columns: CraftingLogColumnConfig,
        tasks: [
            {
                "level": 20,
                name: "Skybuilders' Plywood",
                "mat-1": "6 Skybuilders' Yew Log",
                "mat-2": "Yew Log",
                "mat-3": "X",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "4 Wind Shard, 2 Ice Shard",
                "special": "Ishgard, Collectable"
            },
            {
                "level": 40,
                name: "Skybuilders' Wain",
                "mat-1": "4 Skybuilders' Ash Log",
                "mat-2": "4 Skybuilders' Rock Salt",
                "mat-3": "Mythril Ingot",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "4 Wind Shard, 2 Ice Shard",
                "special": "Ishgard, Collectable"
            },
            {
                "level": 60,
                name: "Skybuilders' Barrel",
                "mat-1": "6 Skybuilders' Camphorwood Log",
                "mat-2": "6 Skybuilders' Straw",
                "mat-3": "Titanium Nugget",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "4 Wind Crystal, 2 Ice Crystal",
                "special": "Ishgard, Collectable"
            },
            {
                "level": 70,
                name: "Skybuilders' Pedestal",
                "mat-1": "6 Skybuilders' Urunday Log",
                "mat-2": "6 Skybuilders' Molybdenum Ore",
                "mat-3": "6 Skybuilders' Horsetail",
                "mat-4": "Oroshigane Ingot",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "4 Wind Crystal, 2 Ice Crystal",
                "special": "Ishgard, Collectable"
            },
            {
                "level": 80,
                name: "Skybuilders' Bed",
                "mat-1": "8 Skybuilders' White Ash Log",
                "mat-2": "8 Skybuilders' Wheat",
                "mat-3": "8 Skybuilders' Cotton Boll",
                "mat-4": "Pixie Cotton",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "4 Wind Crystal, 2 Ice Crystal",
                "special": "Ishgard, Collectable"
            }
        ]
    };
};
