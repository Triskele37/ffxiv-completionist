import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Quarrying_Special_Dravanian_Folklore = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "60★",
        name: "Blue Quartz",
        zone: "The Dravanian Hinterlands",
        location: "The Answering Quarter",
        usage: "ARM, BSM, Collectable",
        special: "Legendary (7 AM), Unlocked w/ Geological Folklore - Dravania",
    }, {
        level: "60★★★",
        name: "Zeolite Ore",
        zone: "The Dravanian Hinterlands",
        location: "Quickspill Delta",
        usage: "ALC",
        special: "Legendary (8AM), Unlocked w/ Geological Folklore - Dravania",
    },
];
