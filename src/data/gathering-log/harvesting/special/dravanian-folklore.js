import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Harvesting_Special_Dravanian_Folklore = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "60★",
        name: "Snurbleberry",
        zone: "The Dravanian Hinterlands",
        location: "The Daggers",
        usage: "CUL, Collectable",
        special: "Legendary (7 PM), Unlocked w/ Botanical Folklore- Dravania",
    }, {
        level: "60★",
        name: "Seventh Heaven",
        zone: "The Churning Mists",
        location: "The Lost Landlord",
        usage: "ALC, GSM, Collectable",
        special: "Legendary (5 PM), Unlocked w/ Botanical Folklore- Dravania",
    }, {
        level: "60★★★",
        name: "Noble Sage",
        zone: "The Dravanian Forelands",
        location: "Chocobo Forest",
        usage: "ALC",
        special: "Unlocked w/ Botanical Folklore- Dravania",
    },
];
