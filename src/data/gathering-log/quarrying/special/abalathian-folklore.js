import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Quarrying_Special_Abalathian_Folklore = function(parent) {
    return new DataGroup("Abalathian Folklore", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "60★",
        name: "Sun Mica",
        zone: "The Sea of Clouds",
        closestAetheryte: "Camp Cloudtop",
        coordinates: "(x35,y39)",
        usage: "ARM, BSM, CRP, GSM, Collectable",
        special: "Legendary (4AM/PM), Unlocked w/ Geological Folklore - Abalanthia's Spine"
    },
];
