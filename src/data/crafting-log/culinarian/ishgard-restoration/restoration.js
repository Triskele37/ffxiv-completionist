import { CraftingLogColumnConfig } from "../../columnConfigs";

export const Culinarian_Restoration = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.restoration`;

    return {
        name: "Restoration",
        storageKey,
        columns: CraftingLogColumnConfig,
        tasks: [
            {
                "level": 20,
                name: "Skybuilders' Hemp Milk",
                "mat-1": "6 Skybuilders' Hemp",
                "mat-2": "Maple Syrup",
                "mat-3": "X",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "4 Fire Shard, 2 Water Shard",
                "special": "Ishgard, Collectable"
            },
            {
                "level": 40,
                name: "Skybuilders' Uncooked Pasta",
                "mat-1": "4 Skybuilders' Rock Salt",
                "mat-2": "4 Skybuilders' Spring Water",
                "mat-3": "3 Sunset Wheat Flour",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "4 Fire Shard, 2 Water Shard",
                "special": "Ishgard, Collectable"
            },
            {
                "level": 60,
                name: "Skybuilders' Tea",
                "mat-1": "6 Skybuilders' Tea Leaves",
                "mat-2": "6 Skybuilders' Dravanian Spring Water",
                "mat-3": "2 Yak Milk",
                "mat-4": "X",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "4 Fire Crystal, 2 Water Crystal",
                "special": "Ishgard, Collectable"
            },
            {
                "level": 70,
                name: "Skybuilders' All-purpose Infusion",
                "mat-1": "6 Skybuilders' Adder",
                "mat-2": "6 Skybuilders' Ruby Sea Water",
                "mat-3": "6 Skybuilders' vine",
                "mat-4": "2 Holy Basil",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "4 Fire Crystal, 2 Water Crystal",
                "special": "Ishgard, Collectable"
            },
            {
                "level": 80,
                name: "Skybuilders' Stew",
                "mat-1": "8 Skybuilders' Wheat",
                "mat-2": "8 Skybuilders' Highland Spring Water",
                "mat-3": "8 Skybuilders' Sea Salt",
                "mat-4": "2 Rail Tenderloin",
                "mat-5": "X",
                "mat-6": "X",
                "catalysts": "4 Fire Crystal, 2 Water Crystal",
                "special": "Ishgard, Collectable"
            }
        ]
    };
};
