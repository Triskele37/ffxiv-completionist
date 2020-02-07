import { DataGroup } from "../../../DataGroup";

export const Quests_Sidequests_Side_Story_Heavensward_Beast_Tribe = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "60",
        name: "When Good Dragons Go Bad",
        npc: "Idyllshire",
        rep: "2nd Highest Rep Level With All Heavensward Tribes"
    }, {
        level: "60",
        name: "Who Was That Masked Man",
        npc: "Master Mogzin",
        rep: "2nd Highest Rep Level With All Heavensward Tribes"
    }, {
        level: "60",
        name: "Lift Me to the Moon",
        npc: "Vath Deftarm",
        rep: "2nd Highest Rep Level With All Heavensward Tribes"
    }, {
        level: "60",
        name: "Eternity, Loyalty, Honesty",
        npc: "Vath Deftarm",
        rep: "2nd Highest Rep Level With All Heavensward Tribes"
    }
];
