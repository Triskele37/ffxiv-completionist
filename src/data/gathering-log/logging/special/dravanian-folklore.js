import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Logging_Special_Dravanian_Folklore = function(parent) {
    return new DataGroup("Dravanian Folklore", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "60★",
        name: "Old-growth Camphorwood Log",
        zone: "The Churning Mists",
        closestAetheryte: "Zenith",
        coordinates: "(x11,y10)",
        usage: "CRP, Collectable",
        special: "Legendary (8AM/PM), Unlocked w/ Botanical Folklore - Dravania"
    }, {
        level: "60★",
        name: "Crystalized Sap",
        zone: "The Churning Mists",
        closestAetheryte: "Zenith",
        coordinates: "(x11,y10)",
        usage: "Collectable",
        special: "Unlocked w/ Botanical Folklore - Dravania"
    }, {
        level: "60★★★",
        name: "Brown Mushroom",
        zone: "The Churning Mists",
        closestAetheryte: "Zenith",
        coordinates: "(x12,y37)",
        usage: "CUL",
        special: "Legendary (10AM/PM), Unlocked w/ Botanical Folklore - Dravania"
    }, {
        level: "60★★★",
        name: "Teak Log",
        zone: "The Dravanian Hinterlands",
        closestAetheryte: "Idyllshire -> The Dravanian Hinterlands",
        coordinates: "(x6,y28)",
        usage: "CRP",
        special: "Legendary (12AM/PM) Unlocked w/ Botanical Folklore - Dravania"
    },
];
