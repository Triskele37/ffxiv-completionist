import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Quarrying_Special_Abalathian_Folklore = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "60★",
        name: "Sun Mica",
        zone: "The Sea of Clouds",
        location: "The Nidifice",
        usage: "ARM, BSM, CRP, GSM, Collectable",
        special: "Legendary (5 AM), Unlocked w/ Geological Folklore - Abalanthia's Spine",
    },
];
