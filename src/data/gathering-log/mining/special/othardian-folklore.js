import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Mining_Special_Othardian_Folklore = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "70★",
        name: "Palladium Ore",
        zone: "Yanxia",
        location: "Monzen"
    }, {
        level: "70★★",
        name: "Nightsteel Ore",
        zone: "The Ruby Sea",
        location: "The Isle of Zekki"
    }, {
        level: "70★★",
        name: "Silvergrace Ore",
        zone: "The Azim Steppe",
        location: "Nhaama's Retreat"
    }, {
        level: "70★★",
        name: "Hawk's Eye",
        zone: "The Ruby Sea",
        location: "The Isle of Zekki"
    }, {
        level: "70★★",
        name: "Azim Spring Water",
        zone: "The Azim Steppe",
        location: "Nhaama's Retreat"
    },
];
