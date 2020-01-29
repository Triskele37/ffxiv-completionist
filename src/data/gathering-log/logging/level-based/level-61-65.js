import { GatheringColumnConfig } from "../../columnConfigs";

export const Logging_Log_Level_61_65 = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.level-61-65`;

    return {
        name: "Levels 61-65",
        storageKey,
        columns: GatheringColumnConfig,
        tasks
    };
};

const tasks = [
    {
        level: "61",
        name: "Loquat",
        zone: "The Fringes",
        location: "East End"
    }, {
        level: "61",
        name: "Beech Log",
        zone: "The Fringes",
        location: "East End"
    }, {
        level: "63",
        name: "Bamboo Shoot",
        zone: "Yanxia",
        location: "Kusakari"
    }, {
        level: "63",
        name: "Larch Log",
        zone: "The Ruby Sea",
        location: "Onokoro"
    }, {
        level: "64",
        name: "Pine Resin",
        zone: "Yanxia",
        location: "The Heron's Flight"
    }, {
        level: "65",
        name: "Shiitake Mushroom",
        zone: "The Ruby Sea",
        location: "Onokoro"
    }, {
        level: "65",
        name: "Sparkstone",
        zone: "The Ruby Sea",
        location: "Onokoro"
    }, {
        level: "65",
        name: "Pine Log",
        zone: "Yanxia",
        location: "The Heron's Flight"
    }, {
        level: "65",
        name: "Malleable Still Material",
        zone: "Yanxia",
        location: "The Heron's Flight"
    },
];
