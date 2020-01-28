import { CraftingLogColumnConfig } from "../../columnConfigs";

export const Weaver_Restoration = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.restoration`;

    return {
        name: "Restoration",
        storageKey,
        columns: CraftingLogColumnConfig,
        tasks: [
            {
                "level": 20,
                name: "Skybuilders' Rope",
                "mat-1": "6 Skybuilders' Hemp",
                "mat-2": "1 Straw",
                "mat-3": "X",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "4 Lighning Shard, 2 Wind Shard",
                "special": "Ishgard, Collectable"
            },
            {
                "level": 40,
                name: "Skybuilders' Cloth",
                "mat-1": "4 Skybuilders' Flax",
                "mat-2": "4 Skybuilders' Spring Water",
                "mat-3": "2 Fleece",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "4 Lightning Shard, 2 Wind Shard",
                "special": "Ishgard, Collectable"
            },
            {
                "level": 60,
                name: "Skybuilders' Broom",
                "mat-1": "6 Skybuilders' Straw",
                "mat-2": "6 Skybuilders' Camphorwood Log",
                "mat-3": "2 Ramie Thread",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "4 Lightning Crystal, 2 Wind Crystal",
                "special": "Ishgard, Collectable"
            },
            {
                "level": 70,
                name: "Skybuilders' Gloves",
                "mat-1": "6 Skybuilders' Cocoon",
                "mat-2": "6 Skybuilders' Ruby Sea Water",
                "mat-3": "6 Skybuilders' Vine",
                "mat-4": "1 Tiger Leather",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "4 Lightning Crystal, 2 Wind Crystal",
                "special": "Ishgard, Collectable"
            },
            {
                "level": 80,
                name: "Skybuilders' Waterproof Sheet",
                "mat-1": "8 Skybuilders' Cotton Boll",
                "mat-2": "8 Skybuilders' Highland Spring Water",
                "mat-3": "8 Skybuilders' Resin",
                "mat-4": "1 Atrociraptor Leather",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "4 Lightning Crystal, 2 Wind Crystal",
                "special": "Ishgard, Collectable"
            }
        ]
    };
};
