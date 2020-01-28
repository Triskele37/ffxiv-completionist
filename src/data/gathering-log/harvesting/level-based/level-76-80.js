import { GatheringColumnConfig } from "../../columnConfigs";

export const Harvesting_Log_Level_76_80 = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.level-76-80`;

    return {
        name: "Levels 76-80",
        storageKey,
        columns: GatheringColumnConfig,
        tasks: [
            {
                level: "76",
                name: "Russet Popoto",
                zone: "Amh Araeng",
                location: "The Dragging Tail"
            }, {
                level: "76",
                name: "White Clay",
                zone: "Kholusia",
                location: "Scree"
            }, {
                level: "76",
                name: "Sweet Alyssum",
                zone: "The Rak'tika Greatwood",
                location: "The Wild Fete"
            }, {
                level: "76",
                name: "Sweet Marjoram",
                zone: "The Rak'tika Greatwood",
                location: "The Wild Fete"
            }, {
                level: "77",
                name: "Fernleaf Lavender",
                zone: "The Rak'tika Greatwood",
                location: "The Wild Fete"
            }, {
                level: "78",
                name: "Mist Spinach",
                zone: "The Rak'tika Greatwood",
                location: "Bowrest"
            }, {
                level: "78",
                name: "Coffee Beans",
                zone: "Kholusia",
                location: "Scree"
            }, {
                level: "78",
                name: "Bomba Rice",
                zone: "Kholusia",
                location: "Scree"
            }, {
                level: "78",
                name: "Lime Basil",
                zone: "Lakeland",
                location: "Weed"
            }, {
                level: "78",
                name: "Megafauna Trace",
                zone: "The Rak'tika Greatwood",
                location: "The Wild Fete"
            }, {
                level: "79",
                name: "Dwarven Cotton Boll",
                zone: "Kholusia",
                location: "Scree"
            }, {
                level: "79",
                name: "Tiger Lily",
                zone: "Lakeland",
                location: "Weed"
            }, {
                level: "79",
                name: "Light Gerbera",
                zone: "Lakeland",
                location: "Weed"
            }, {
                level: "80",
                name: "Bog Sage",
                zone: "Lakeland",
                location: "Weed"
            },
        ],
    };
};
