import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Harvesting_Special_Vrandtic_Folklore = function(parent) {
    return new DataGroup("Vrandtic Folklore", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "80★",
        name: "Ethereal Cocoon",
        zone: "Lakeland",
        closestAetheryte: "Fort Jobb",
        coordinates: "(x27,y10)",
        nodeTimer: "Legendary (8AM/PM), Unlocked w/ Botanical Folklore - Vrandtic"
    }, {
        level: "80★★",
        name: "Duskblooms",
        zone: "Amh Araeng",
        closestAetheryte: "The Inn at Journey's Head",
        coordinates: "(x32,y33)",
        nodeTimer: "Legendary (4AM/PM), Unlocked w/ Botanical Folklore - Vrandtic"
    }, {
        level: "80★★",
        name: "Imperial Fern",
        zone: "Kholusia",
        closestAetheryte: "Stilltide",
        coordinates: "(x28,y21)",
        nodeTimer: "Legendary (12AM/PM), Unlocked w/ Botanical Folklore - Vrandtic"
    }, {
        level: "80★★",
        name: "Tender Dill",
        zone: "Kholusia",
        closestAetheryte: "Stilltide",
        coordinates: "(x28,y21)",
        nodeTimer: "Legendary (12AM/PM), Unlocked w/ Botanical Folklore - Vrandtic"
    },
];
