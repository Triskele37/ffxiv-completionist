import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Logging_Special_Abalathian_Folklore = function(parent) {
    return new DataGroup("Abalathian Folklore", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "60★",
        name: "Honeydew Almonds",
        zone: "The Sea of Clouds",
        location: "The Gauntlet",
        usage: "CUL, Collectable",
        special: "Legendary (5 PM), Unlocked w/ Botanical Folklore- Abalathia's Spine",
    }, {
        level: "60★",
        name: "Wattle Bark",
        zone: "Azys Lla",
        location: "Alpha Quadrant",
        usage: "LTW, Collectable",
        special: "Legendary (7 PM), Unlocked w/ Botanical Folklore- Abalathia's Spine",
    },
];
