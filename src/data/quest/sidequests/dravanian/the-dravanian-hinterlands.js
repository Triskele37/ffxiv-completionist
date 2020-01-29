import { QuestColumnConfig } from "../../columnConfigs";

export const Quest_Sidequests_Dravanian_The_Dravanian_Hinterlands = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.the-dravanian-hinterlands`;

    return {
        name: "The Dravanian Hinterlands",
    	storageKey,
    	columns: QuestColumnConfig,
        tasks
    };
};

const tasks = [
    {
        level: "58",
        name: "Louder than Words",
        npc: "Tapklix",
        unlock: "Aether Current"
    }, {
        level: "58",
        name: "A Bum Rap",
        npc: "Tapklix",
        unlock: ""
    }, {
        level: "58",
        name: "Feltsmox Needs Bait",
        npc: "Feltsmox",
        unlock: ""
    }, {
        level: "58",
        name: "Feltsmox's Reel Problems",
        npc: "Feltsmox",
        unlock: ""
    }, {
        level: "58",
        name: "Feltsmox Can't Bear It",
        npc: "Feltsmox",
        unlock: ""
    }, {
        level: "58",
        name: "Feltsmox Tackles the Morbols",
        npc: "Salvaging Goblin",
        unlock: ""
    }, {
        level: "58",
        name: "A Slimier Stymier",
        npc: "Boomshox",
        unlock: ""
    }, {
        level: "58",
        name: "Mission Unpossible",
        npc: "Boomshox",
        unlock: ""
    }, {
        level: "58",
        name: "What the Boat Brought In",
        npc: "Midnight Dew",
        unlock: ""
    }, {
        level: "58",
        name: "Over My Dead Gobbie",
        npc: "Midnight Dew",
        unlock: ""
    }, {
        level: "58",
        name: "Uncoordinated Defense",
        npc: "Tapklix",
        unlock: ""
    }, {
        level: "58",
        name: "The Missing Logbook",
        npc: "Dripwix",
        unlock: ""
    }, {
        level: "60",
        name: "An Overgrown Ambition",
        npc: "Tetchy Treasure Hunter",
        unlock: ""
    }
];
