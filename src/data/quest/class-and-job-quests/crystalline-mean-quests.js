export const CrystallineMeanQuests = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.crystalline-mean`;

    return {
        name: "Crystalline Mean",
    	storageKey,
        columns: [
            { header: "Facet", key: "facet" },
            { header: "Level", key: "level" },
            { header: "Name", key: "name" },
            { header: "NPC", key: "npc" },
        ],
        tasks: [
            //------------------------------------------------------------------ Facet of Forging
            { level: "70", facet: "Forging", name: "Iola, Forgemaster", npc: "Iola" },
            { level: "75", facet: "Forging", name: "To Struggle Nu Mou", npc: "Iola" },
            { level: "80", facet: "Forging", name: "The Iron Bellows", npc: "Iola" },
            //------------------------------------------------------------------ Facet of Crafting
            { level: "70", facet: "Crafting", name: "Cherished Memories", npc: "Recording Node" },
            { level: "75", facet: "Crafting", name: "For Sentimental Reasons", npc: "Thiuna" },
            { level: "80", facet: "Crafting", name: "The Notes of Bond Restoring", npc: "Thiuna" },
            //------------------------------------------------------------------ Facet of Nourishing
            { level: "70", facet: "Nourishing", name: "Friends of a Feather", npc: "Bethric" },
            { level: "75", facet: "Nourishing", name: "Where We Belong", npc: "Bethric" },
            { level: "80", facet: "Nourishing", name: "Healing Old Wounds", npc: "Bethric" },
            //------------------------------------------------------------------ Facet of Gathering
            { level: "70", facet: "Gathering", name: "On the Trail of a Myth", npc: "Qeshi-rae" },
            { level: "75", facet: "Gathering", name: "Shedding Light on the Myth", npc: "Qeshi-rae" },
            { level: "80", facet: "Gathering", name: "The Myth Takes Form", npc: "Qeshi-rae" },
            //------------------------------------------------------------------ Facet of Fishing
            { level: "70", facet: "Fishing", name: "Well Eel Be Damned", npc: "Frithrik" },
            { level: "75", facet: "Fishing", name: "Fishing for Confidence", npc: "Frithrik" },
            { level: "80", facet: "Fishing", name: "Morsel of the Deep", npc: "Frithrik" },
            //------------------------------------------------------------------
            { level: "70", facet: "", name: "The Crystalline Mean", npc: "Katliss" },
            { level: "80", facet: "", name: "For Every Child a Star", npc: "Katliss" }
        ]
    };
};
