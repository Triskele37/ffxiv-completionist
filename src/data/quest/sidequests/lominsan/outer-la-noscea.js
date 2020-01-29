import { QuestColumnConfig } from "../../columnConfigs";

export const Quest_Sidequests_Lominsan_Outer_La_Noscea = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.outer`;

    return {
        name: "Outer La Noscea",
    	storageKey,
    	columns: QuestColumnConfig,
        tasks
    };
};

const tasks = [
    {
        level: "34",
        name: "Never Trout that I Love",
        npc: "Bloeidin",
        unlock: ""
    }, {
        level: "34",
        name: "Dead or Sumfin' Like It",
        npc: "Augustine",
        unlock: ""
    }, {
        level: "34",
        name: "Return to Your Dust",
        npc: "Bloeidin",
        unlock: ""
    }, {
        level: "34",
        name: "Deduce, Reuse, Recycle",
        npc: "Swygrael",
        unlock: ""
    }, {
        level: "34",
        name: "Don't Let the Cat out of the Bag",
        npc: "Swygrael",
        unlock: ""
    }, {
        level: "34",
        name: "Looking for Trouble",
        npc: "Bloeidin",
        unlock: ""
    }, {
        level: "34",
        name: "Helm Me You Love Me",
        npc: "Bloeidin",
        unlock: ""
    }, {
        level: "47",
        name: "A Pirate's Life for Me",
        npc: "Bloeidin",
        unlock: ""
    }, {
        level: "47",
        name: "Honor the Fallen",
        npc: "F'majha",
        unlock: ""
    }, {
        level: "47",
        name: "Operation: Crucible Down",
        npc: "Bloeidin",
        unlock: ""
    }, {
        level: "47",
        name: "Claiming the Booty",
        npc: "Bloeidin",
        unlock: ""
    }
];
