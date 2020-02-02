import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Mining_Special_Dravanian_Folklore = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "60★",
        name: "Aurum Regis Ore",
        zone: "The Churning Mists",
        location: "Mother of the Sheave",
        usage: "GSM, Collectable",
        special: "Legendary (5 AM), Unlocked w/ Geological Folklore - Dravania",
    }, {
        level: "60★",
        name: "Lumythrite Ore",
        zone: "The Churning Mists",
        location: "Sothton Walls",
        usage: "ARM, BSM, Collectable",
        special: "Legendary (3 AM), Unlocked w/ Geological Folklore - Dravania",
    },
];
