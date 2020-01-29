import { QuestColumnConfig } from "../../columnConfigs";

export const Quest_Sidequests_Side_Story_Wandering_Minstrel = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.wandering-minstrel`;

    return {
        name: "Wandering Minstrel",
    	storageKey,
    	columns: QuestColumnConfig,
        tasks
    };
};

const tasks = [
    {
        level: "50",
        name: "The Ultimate Ballad",
        npc: "Alys",
        unlock: "Unlocks The Minstrel's Ballad: Ultima's Bane"
    }, {
        level: "50",
        name: "Sing Me Another Song",
        npc: "Alys",
        unlock: "Unlocks The Second Coil of Bahamut (Savage)"
    }, {
        level: "60",
        name: "Thordan's Reign",
        npc: "Alys",
        unlock: "Unlocks The Minstrel's Ballad: Thordan's Reign"
    }, {
        level: "60",
        name: "Nidhogg's Rage",
        npc: "Alys",
        unlock: "Unlocks The Minstrel's Ballad: Nidhogg's Rage"
    }, {
        level: "60",
        name: "A Song of Steam and Steel",
        npc: "Wandering Minstrel",
        unlock: "Unlocks Alexander: Gordias (Savage)"
    }, {
        level: "60",
        name: "A Refrain for the Undaunted",
        npc: "Wandering Minstrel",
        unlock: "Unlocks Alexander: Midas (Savage)"
    }, {
        level: "60",
        name: "Who Lives, Who Dies, Who Retells Your Story",
        npc: "Wandering Minstrel",
        unlock: "Unlocks Alexander: The Creator (Savage)"
    }
];
