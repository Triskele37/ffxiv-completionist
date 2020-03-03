import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Harvesting_Special_Dravanian_Folklore = function(parent) {
    return new DataGroup("Dravanian Folklore", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "60★",
        name: "Snurbleberry",
        zone: "The Dravanian Hinterlands",
        closestAetheryte: "Idyllshire -> The Dravanian Hinterlands",
        coordinates: "(x39,y26)",
        usage: "CUL, Collectable",
        special: "Legendary (10AM/PM), Unlocked w/ Botanical Folklore- Dravania"
    }, {
        level: "60★",
        name: "Seventh Heaven",
        zone: "The Churning Mists",
        closestAetheryte: "Zenith",
        coordinates: "(x17,y36)",
        usage: "ALC, GSM, Collectable",
        special: "Legendary (4AM/PM), Unlocked w/ Botanical Folklore- Dravania"
    }, {
        level: "60★★★",
        name: "Noble Sage",
        zone: "The Dravanian Forelands",
        closestAetheryte: "Tailfeather",
        coordinates: "(x33,y30)",
        usage: "ALC",
        special: "Legendary (6AM/PM), Unlocked w/ Botanical Folklore- Dravania"
    },
];
