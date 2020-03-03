import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Logging_Special_Gyr_Abanian_Folklore = function(parent) {
    return new DataGroup("Gyr Abanian Folklore", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "70★",
        name: "Torreya Log",
        zone: "The Lochs",
        closestAetheryte: "Porta Praetoria",
        coordinates: "(x11,y13)",
        usage: "CRP, Collectable",
        special: "Legendary (6AM/PM), Unlocked w/ Botanical Folklore - Gyr Abanian"
    }, {
        level: "70★★",
        name: "Black Willow Log",
        zone: "The Fringes",
        closestAetheryte: "Castrum Oriens",
        coordinates: "(x15,y21)",
        usage: "CRP",
        special: "Legendary (4AM/PM), Unlocked w/ Botanical Folklore - Gyr Abanian"
    }, {
        level: "70★★",
        name: "Hardened Veteran Tree Sap",
        zone: "The Fringes",
        closestAetheryte: "Castrum Oriens",
        coordinates: "(x15,y21)",
        usage: "ALC",
        special: "Legendary (4AM/PM), Unlocked w/ Botanical Folklore - Gyr Abanian"
    }, {
        level: "70★★★",
        name: "Urunday Log",
        zone: "The Peaks",
        closestAetheryte: "Ala Gannha",
        coordinates: "(x32,y10)",
        usage: "CRP",
        special: "Legendary (4AM/PM), Unlocked w/ Botanical Folklore - Gyr Abanian"
    },
];
