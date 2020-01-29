import { GatheringColumnConfig } from "../../columnConfigs";

export const Mining_Log_Special_Ishgard_Restoration_Folklore = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.ishgard-restoration`;

    return {
        name: "Ishgard Restoration",
        storageKey,
        columns: GatheringColumnConfig,
        tasks
    };
};

const tasks = [
    {
        level: "5",
        name: "Skybuilders' Iron Ore",
        zone: "Middle La Noscea",
        location: "Zephyr Drift"
    }, {
        level: "35",
        name: "Skybuilders' Electrum Ore",
        zone: "Upper La Noscea",
        location: "Fool Falls"
    }, {
        level: "35",
        name: "Skybuilders' Rock Salt",
        zone: "Upper La Noscea",
        location: "Fool Falls"
    }, {
        level: "45",
        name: "Skybuilders' Spring Water",
        zone: "Coerthas Central Highlands",
        location: "Providence Point"
    }, {
        level: "55",
        name: "Skybuilders' Dravanian Spring Water",
        zone: "The Dravanian Forelands",
        location: "The Hundred Throes"
    }, {
        level: "60",
        name: "Skybuilders' Hardsilve Ore",
        zone: "The Dravanian Hinterlands",
        location: "The Answering Quarter"
    }, {
        level: "65",
        name: "Skybuilders' Nightsteel Ore",
        zone: "The Ruby Sea",
        location: "The Turquoise Trench"
    }, {
        level: "65",
        name: "Skybuilders' Ruby Sea Spring Water",
        zone: "The Ruby Sea",
        location: "The Turquoise Trench"
    }, {
        level: "70",
        name: "Skybuilders' Molybdenum Ore",
        zone: "The Lochs",
        location: "Loch Seld"
    }, {
        level: "70",
        name: "Skybuilders' Ala Mhigan Rock Salt",
        zone: "The Lochs",
        location: "Loch Seld"
    }, {
        level: "75",
        name: "Skybuilders' Truegold Ore",
        zone: "Il Mheg",
        location: "Good Jenanna's Grace"
    }, {
        level: "75",
        name: "Skybuilders' Highland Spring Water",
        zone: "Il Mheg",
        location: "Good Jenanna's Grace"
    }, {
        level: "80",
        name: "Skybuilders' Reef Rock",
        zone: "The Tempest",
        location: "Walls of the Forgotten"
    }, {
        level: "80",
        name: "Skybuildres' Sea Salt",
        zone: "The Tempest",
        location: "Walls of the Forgotten"
    },
];
