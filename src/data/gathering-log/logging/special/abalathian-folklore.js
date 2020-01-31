import { DataGroup } from "../../../DataGroup";

export const Gathering_Logs_Logging_Special_Abalathian_Folklore = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "60★",
        name: "Honeydew Almonds",
        zone: "The Sea of Clouds",
        location: "The Gauntlet"
    }, {
        level: "60★",
        name: "Wattle Bark",
        zone: "Azys Lla",
        location: "Alpha Quadrant"
    },
];
