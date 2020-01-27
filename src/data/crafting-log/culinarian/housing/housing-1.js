import { CraftingLogColumnConfig } from "../../columnConfigs";

export const Culinarian_Housing_1 = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.housing-1`;

    return {
        name: "Housing 1",
        storageKey,
        columns: CraftingLogColumnConfig,
        tasks: [
            {
                "level": 78,
                "item": "Baker's Stall",
                "mat-1": "Walnut Dining Table",
                "mat-2": "Glade Pendant Lamp",
                "mat-3": "Dwarven Cotton",
                "mat-4": "Upland Wheat Flour",
                "mat-5": "Highland Spring Water",
                "mat-6": "Ala Mhigan Salt Crystal",
                "catalysts": "28 Fire Crystal, 28 Water Crystal",
                "special": "Housing (Outdoor Furnishing)"
            },
            {
                "level": 78,
                "item": "Fruiterer's Stall",
                "mat-1": "Walnut Dining Table",
                "mat-2": "Glade Pendant Lamp",
                "mat-3": "Dwarven Cotton",
                "mat-4": "Royal Grapes",
                "mat-5": "Pixie Apple",
                "mat-6": "Prickly Pineapple",
                "catalysts": "28 Fire Crystal, 28 Water Crystal",
                "special": "Housing (Outdoor Furnishing)"
            },
            {
                "level": 78,
                "item": "Greengrocer's Stall",
                "mat-1": "Walnut Dining Table",
                "mat-2": "Glade Pendant Lamp",
                "mat-3": "Dwarven Cotton",
                "mat-4": "Blood Tomato",
                "mat-5": "Russet Popoto",
                "mat-6": "Sun Cabbage",
                "catalysts": "28 Fire Crystal, 28 Water Crystal",
                "special": "Housing (Outdoor Furnishing)"
            },
            {
                "level": 78,
                "item": "Butcher's Stall",
                "mat-1": "Walnut Dining Table",
                "mat-2": "Glade Pendant Lamp",
                "mat-3": "Dwarven Cotton",
                "mat-4": "Ovim Meat",
                "mat-5": "Rail Tenderloin",
                "mat-6": "Dzo Chuck",
                "catalysts": "28 Fire Crystal, 28 Water Crystal",
                "special": "Housing (Outdoor Furnishing)"
            }
        ]
    };
};
