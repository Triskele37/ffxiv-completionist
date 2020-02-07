import { DataGroup } from "../../../DataGroup";

export const Quests_Sidequests_Side_Story_Further_Hildibrand_Adventures = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "60",
        name: "A Gentleman Falls, Rather than Flies",
        npc: "Nashu Mhakaracca",
        unlock: ""
    }, {
        level: "60",
        name: "Don't Call It a Comeback",
        npc: "Cyr",
        unlock: ""
    }, {
        level: "60",
        name: "The Gigi Situation",
        npc: "Cyr",
        unlock: ""
    }, {
        level: "60",
        name: "The Measure of a Mammet",
        npc: "Hildibrand",
        unlock: ""
    }, {
        level: "60",
        name: "A Gazebo to Call Our Own",
        npc: "Cyr",
        unlock: ""
    }, {
        level: "60",
        name: "Don't Trust Anyone over Sixty",
        npc: "Hildibrand",
        unlock: ""
    }, {
        level: "60",
        name: "The Proud and the Pointy-eyed",
        npc: "Cyr",
        unlock: ""
    }, {
        level: "60",
        name: "If I Could Turn Back Time",
        npc: "Hildibrand",
        unlock: "Gigi Minion"
    }
];
