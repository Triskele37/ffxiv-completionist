import { CraftingLogColumnConfig } from "../../columnConfigs";

export const CarpenterLevels_16_20 = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.level-16-20`;

    return {
        name: "Levels 16-20",
        storageKey,
        columns: CraftingLogColumnConfig,
        tasks: [{
            "level": "16",
            name: "Elm Lumber",
            "mat-1": "3 Elm Log",
            "mat-2": "X",
            "mat-3": "X",
            "mat-4": "X",
            "mat-5": "X",
            "mat-6": "X",
            "catalysts": "Wind Shard",
            "special": "Buyable, Ingredient (CRP, BSM, ALC, WVR, LTW ARM, GSM, FCC), Levequest"
        },
            {
                "level": "16",
                name: "Elm Fishing Rod",
                "mat-1": "Elm Lumber",
                "mat-2": "Ash Branch",
                "mat-3": "Iron Ingot",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "Wind Shard, Ice Shard",
                "special": "Buyable, Provisioning"
            },
            {
                "level": "17",
                name: "Iron Spear",
                "mat-1": "Elm Lumber",
                "mat-2": "Iron Ingot",
                "mat-3": "Clove Oil",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "Wind Shard, Ice Shard",
                "special": "Buyable, Levequest, Provisioning"
            },
            {
                "level": "18",
                name: "Elm Cane",
                "mat-1": "Elm Lumber",
                "mat-2": "Growth Formula Beta",
                "mat-3": "X",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "Wind Shard, Ice Shard",
                "special": "Buyable, Levequest, Provisioning"
            },
            {
                "level": "19",
                name: "Elm Longbow",
                "mat-1": "Elm Lumber",
                "mat-2": "2 Ash Branch",
                "mat-3": "Cotton Yarn",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "Wind Shard, Ice Shard",
                "special": "Buyable, Provisioning"
            },
            {
                "level": "19",
                name: "Elm Crook",
                "mat-1": "Elm Lumber",
                "mat-2": "Beastkin Blood",
                "mat-3": "X",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "Wind Shard, Ice Shard",
                "special": "Buyable, Provisioning"
            },
            {
                "level": "19",
                name: "Initiate's Spinning Wheel",
                "mat-1": "Elm Lumber",
                "mat-2": "2 Bronze Rivets",
                "mat-3": "X",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "Wind Shard, Ice Shard",
                "special": "Buyable, Provisioning"
            },
            {
                "level": "20",
                name: "Blank Grade 1 Orchestrion Roll",
                "mat-1": "Moko Grass",
                "mat-2": "Elm Log",
                "mat-3": "X",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "Wind Shard",
                "special": "Ingredient (ALC)"
            },
            {
                "level": "20",
                name: "Iron Lance",
                "mat-1": "Elm Lumber",
                "mat-2": "2 Iron Ingot",
                "mat-3": "Hard Leather",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "Wind Shard, Ice Shard",
                "special": "Buyable, Levequest, Provisioning"
            },
            {
                "level": "20",
                name: "Initiate's Fishing Rod",
                "mat-1": "Elm Lumber",
                "mat-2": "Yew Branch",
                "mat-3": "Iron Ingot",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "Wind Shard, Ice Shard",
                "special": "Buyable, Provisioning"
            },
            {
                "level": "20",
                name: "Ash Mask (Lapis Lazuli)",
                "mat-1": "Ash Lumber",
                "mat-2": "Lapis Lazulis",
                "mat-3": "Clove Oil",
                "mat-4": "Leather",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "Wind Shard, Ice Shard",
                "special": "Buyable, Levequest, Provisioning"
            },
        ]
    };
};
