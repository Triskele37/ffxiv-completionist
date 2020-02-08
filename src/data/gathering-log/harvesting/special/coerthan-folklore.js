import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Harvesting_Special_Coerthan_Folklore = function(parent) {
    return new DataGroup("Coerthan Folklore", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "60★",
        name: "Dravanian Paprika",
        zone: "Coerthas Western Highlands",
        location: "The Bed of Bones",
        usage: "CUL, Collectable",
        special: "Legendary (7 PM), Unlocked w/ Botanical Folklore- Coerthas",
    }, {
        level: "60★",
        name: "Vanilla Beans",
        zone: "Coerthas Western Highlands",
        location: "The Watcher",
        usage: "CUL, Collectable",
        special: "Legendary (5 PM), Unlocked w/ Botanical Folklore- Coerthas",
    }, {
        level: "60★",
        name: "Frost Cotton Boll",
        zone: "Coerthas Western Highlands",
        location: "Gorgagne Holding",
        usage: "WVR, Collectable",
        special: "Legendary (1 PM), Unlocked w/ Botanical Folklore - Coerthas",
    },
];
