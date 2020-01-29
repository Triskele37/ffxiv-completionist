import { GatheringColumnConfig } from "../../columnConfigs";

export const Harvesting_Log_Level_71_75 = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.level-71-75`;

    return {
        name: "Levels 71-75",
        storageKey,
        columns: GatheringColumnConfig,
        tasks
    };
};

const tasks = [
    {
        level: "71",
        name: "Purple Carrot",
        zone: "Lakeland",
        location: "The Forest of the Lost Shepherd"
    }, {
        level: "71",
        name: "Curly Parsley",
        zone: "Il Mheg",
        location: "The Woolen Way"
    }, {
        level: "71",
        name: "Blood Tomato",
        zone: "Il Mheg",
        location: "The Woolen Way"
    }, {
        level: "71",
        name: "Bright Flax",
        zone: "Lakeland",
        location: "The Forest of the Lost Shepherd"
    }, {
        level: "72",
        name: "Garden Beet",
        zone: "Il Mheg",
        location: "The Woolen Way"
    }, {
        level: "72",
        name: "Broad Beans",
        zone: "Il Mheg",
        location: "Phisor Lran"
    }, {
        level: "72",
        name: "Iridescent Cocoon",
        zone: "Il Mheg",
        location: "The Woolen Way"
    }, {
        level: "73",
        name: "Upland Wheat",
        zone: "Kholusia",
        location: "Seagazer"
    }, {
        level: "73",
        name: "Animal Droppings",
        zone: "Lakeland",
        location: "The Forest of the Lost Shepherd"
    }, {
        level: "74",
        name: "Peppermint",
        zone: "Lakeland",
        location: "Embrasure"
    }, {
        level: "74",
        name: "Pixie Floss Boll",
        zone: "The Rak'tika Greatwood",
        location: "The Deliberating Doll"
    }, {
        level: "75",
        name: "Creamtop Mushroom",
        zone: "The Rak'tika Greatwood",
        location: "The Deliberating Doll"
    }, {
        level: "75",
        name: "Royal Grapes",
        zone: "The Rak'tika Greatwood",
        location: "The Deliberating Doll"
    }, {
        level: "75",
        name: "Megafauna Leftovers",
        zone: "Il Mheg",
        location: "The Woolen Way"
    },
];
