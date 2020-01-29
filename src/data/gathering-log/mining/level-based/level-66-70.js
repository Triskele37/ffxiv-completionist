import { GatheringColumnConfig } from "../../columnConfigs";

export const Mining_Log_Level_66_70 = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.level-66-70`;

    return {
        name: "Levels 66-70",
        storageKey,
        columns: GatheringColumnConfig,
        tasks
    };
};

const tasks = [
    {
        level: "66",
        name: "Schorl",
        zone: "The Azim Steppe",
        location: "Onsal Hakair"
    }, {
        level: "66",
        name: "Raw Azurite",
        zone: "The Azim Steppe",
        location: "The Towering Still"
    }, {
        level: "68",
        name: "Durium Ore",
        zone: "Yanxia",
        location: "Unseen Spirits Laughing"
    }, {
        level: "68",
        name: "Hard Place Furnishing Materials",
        zone: "The Lochs",
        location: "The High Bank"
    }, {
        level: "68",
        name: "Raw Imperial Jade",
        zone: "Yanxia",
        location: "Valley of the Fallen Rainbow"
    }, {
        level: "70",
        name: "Molybdenum Ore",
        zone: "The Lochs",
        location: "The High Bank"
    }, {
        level: "70",
        name: "Raw Rhodonite",
        zone: "The Peaks",
        location: "Rustrock"
    }, {
        level: "70",
        name: "Sturdy Vat Material",
        zone: "Yanxia",
        location: "Unseen Spirits Laughing"
    }, {
        level: "70",
        name: "Clinquant Stones",
        zone: "Il Mheg",
        location: "Thysm Lran"
    }, {
        level: "70★",
        name: "Almandine",
        zone: "The Lochs",
        location: "The High Bank"
    }, {
        level: "70★★",
        name: "Yanxian Soil",
        zone: "Yanxia",
        location: "Unseen Spirits Laughing"
    }, {
        level: "70★★",
        name: "Raw Hematite",
        zone: "Kholusia",
        location: "Governor's Row"
    },
];
