import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Quarrying_Level_21_25 = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "21",
        name: "Earth Rock",
        zone: "South Shroud",
        location: "Upper Paths"
    }, {
        level: "22",
        name: "Silver Sand",
        zone: "South Shroud",
        location: "Upper Paths"
    }, {
        level: "23",
        name: "Fire Rock",
        zone: "Upper La Noscea",
        location: "Oakwood"
    }, {
        level: "23",
        name: "Ice Rock",
        zone: "South Shroud",
        location: "Upper Paths"
    }, {
        level: "24",
        name: "Lightning Rock",
        zone: "Upper La Noscea",
        location: "Oakwood"
    }, {
        level: "24",
        name: "Wind Rock",
        zone: "South Shroud",
        location: "Upper Paths"
    }, {
        level: "25",
        name: "Water Rock",
        zone: "Upper La Noscea",
        location: "Oakwood"
    },
];
