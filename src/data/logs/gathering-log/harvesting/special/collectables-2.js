import { DataGroup } from "../../../../DataGroup";

export const Logs_Gathering_Log_Harvesting_Special_Collectables_2 = function(parent) {
    return new DataGroup("Collectables (2)", parent).initializeTasks(tasks);
};

const tasks = [
    {
        "level": "71",
        "name_en": "Rarefied Bright Flax",
        "zone": "Lakeland",
        "closestTeleport": "Fort Jobb",
        "coordinates": "(x23,y14)"
    },
    {
        "level": "80",
        "name_en": "Rarefied Night Pepper",
        "zone": "Amh Araeng",
        "closestTeleport": "The Inn at Journey's Head",
        "coordinates": "(x28,y31)"
    },
];
