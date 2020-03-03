import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Logging_Special_Abalathian_Folklore = function(parent) {
    return new DataGroup("Abalathian Folklore", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "60★",
        name: "Honeydew Almonds",
        zone: "The Sea of Clouds",
        closestAetheryte: "Ok'Zundu",
        coordinates: "(x24,y6)",
        usage: "CUL, Collectable",
        special: "Legendary (12AM/PM), Unlocked w/ Botanical Folklore- Abalathia's Spine"
    }, {
        level: "60★",
        name: "Wattle Bark",
        zone: "Azys Lla",
        closestAetheryte: "Helix",
        coordinates: "(x22,y10)",
        usage: "LTW, Collectable",
        special: "Legendary (2AM/PM), Unlocked w/ Botanical Folklore- Abalathia's Spine"
    },
];
