// https://xivapi.com/search?indexes=Quest&filters=JournalGenreTargetID=11&columns=ID,Name&limit=6
import { QuestColumnConfig } from "../columnConfigs";

export const Quest_COANE_Bahamut = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.bahamut`;

    return {
        name: "Bahamut",
    	storageKey,
    	columns: QuestColumnConfig,
        tasks
    };
};

const tasks = [
    {
        level: "50",
        name: "Primal Awakening",
        npc: "Urianger",
        unlock: "The Binding Coil of Bahamut"
    }, {
        level: "50",
        name: "Alisaie's Pledge",
        npc: "Urianger",
        unlock: ""
    }, {
        level: "50",
        name: "Another Turn in the Coil",
        npc: "Urianger",
        unlock: ""
    }, {
        level: "50",
        name: "Alisaie's Resolve",
        npc: "Alisaie",
        unlock: ""
    }, {
        level: "50",
        name: "Fragments of Truth",
        npc: "Urianger",
        unlock: ""
    }, {
        level: "50",
        name: "Alisaie's Path",
        npc: "Alisaie",
        unlock: ""
    }
];
