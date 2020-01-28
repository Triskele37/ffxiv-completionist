import { CraftingLogColumnConfig } from "../../columnConfigs";

export const Leatherworker_Restoration = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.restoration`;

    return {
        name: "Restoration",
        storageKey,
        columns: CraftingLogColumnConfig,
        tasks: [
            {
                "level": 20,
                name: "Skybuilders' Leather",
                "mat-1": "6 Skybuilders' Yew Log",
                "mat-2": "Aldgoat Skin",
                "mat-3": "X",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "4 Earth Shard, 2 Wind Shard",
                "special": "Ishgard, Collectable"
            },
            {
                "level": 40,
                name: "Skybuilders' Leather Straps",
                "mat-1": "4 Skybuilders' Ash Log",
                "mat-2": "4 Skybuilders' Toad",
                "mat-3": "2 Rosewood Branch",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "4 Earth Shard, 2 Wind Shard",
                "special": "Ishgard, Collectable"
            },
            {
                "level": 60,
                name: "Skybuilders' Rug",
                "mat-1": "6 Skybuilders' Tea Leaves",
                "mat-2": "6 Skybuilders' Dravanian Spring Water",
                "mat-3": "2 Dhalmel Hide",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "4 Earth Shard, 2 Wind Shard",
                "special": "Ishgard, Collectable"
            },
            {
                "level": 70,
                name: "Skybuilders' Longboots",
                "mat-1": "6 Skybuilders' Adder",
                "mat-2": "6 Skybuilders' Urunday Log",
                "mat-3": "6 Skybuilders' Vine",
                "mat-4": "Kudzu Cloth",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "4 Earth Crystal, 2 Wind Crystal",
                "special": "Ishgard, Collectable"
            },
            {
                "level": 80,
                name: "Skybuilders' Overalls",
                "mat-1": "8 Skybuilders' Dawn Lizard",
                "mat-2": "8 Skybuilders' White Ash Log",
                "mat-3": "8 Skybuilders' Cotton Boll",
                "mat-4": "Pixie Cotton",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "4 Earth Crystal, 2 Wind Crystal",
                "special": "Ishgard, Collectable"
            }
        ]
    };
};
