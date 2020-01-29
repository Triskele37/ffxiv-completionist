import { QuestColumnConfig } from "../../columnConfigs";

export const Quest_Sidequests_Lominsan_Western_La_Noscea = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.western`;

    return {
        name: "Western La Noscea",
    	storageKey,
    	columns: QuestColumnConfig,
        tasks
    };
};

const tasks = [
    {
        level: "10",
        name: "Simply the Hest (Limsa Lominsa)",
        npc: "Swygskyf",
        unlock: ""
    }, {
        level: "12",
        name: "Need to Breed",
        npc: "Lyulf",
        unlock: ""
    }, {
        level: "15",
        name: "Leves of Aleport",
        npc: "Orwen",
        unlock: ""
    }, {
        level: "15",
        name: "Keep Your Day Job",
        npc: "S'nairoh",
        unlock: ""
    }, {
        level: "15",
        name: "Mountains out of Molehills",
        npc: "S'nairoh",
        unlock: ""
    }, {
        level: "15",
        name: "Walk of Shame",
        npc: "S'nairoh",
        unlock: ""
    }, {
        level: "15",
        name: "On a Wing and a Prayer",
        npc: "Ahldfoet",
        unlock: ""
    }, {
        level: "15",
        name: "Mummy Dearest",
        npc: "Ahldfoet",
        unlock: ""
    }, {
        level: "15",
        name: "Like Cats and Dogs",
        npc: "Skribyld",
        unlock: ""
    }, {
        level: "15",
        name: "Man's Best Fiend",
        npc: "Skribyld",
        unlock: "Wolf Pup Minion"
    }, {
        level: "15",
        name: "Curiosity Killed the Coeurl",
        npc: "Skribyld",
        unlock: "Coeurl Kitten Minion"
    }, {
        level: "16",
        name: "Nest We Forget",
        npc: "Falkbryda",
        unlock: ""
    }, {
        level: "16",
        name: "Toxic Avenger",
        npc: "Wiltswys",
        unlock: ""
    }, {
        level: "16",
        name: "My Brother's Not a Keeper",
        npc: "Wiltswys",
        unlock: ""
    }, {
        level: "16",
        name: "Flowers for Aerghaemr",
        npc: "Alyrloef",
        unlock: ""
    }, {
        level: "16",
        name: "Scythe Extra Large",
        npc: "Roehanth",
        unlock: ""
    }, {
        level: "16",
        name: "I Hereby Relieve You",
        npc: "Falkbryda",
        unlock: ""
    }, {
        level: "42",
        name: "Grave Happenings",
        npc: "Otan Yaratan",
        unlock: ""
    }, {
        level: "42",
        name: "Pickled and Brined",
        npc: "Ahlduwil",
        unlock: ""
    }, {
        level: "42",
        name: "Too Many Cooks",
        npc: "Erapi Taropi",
        unlock: ""
    }, {
        level: "48",
        name: "Pier Review",
        npc: "Falkbryda",
        unlock: ""
    }, {
        level: "48",
        name: "Long Walk Off a Short Pier",
        npc: "Ururu Kogururu",
        unlock: ""
    }, {
        level: "48",
        name: "To Catch a Cutthroat",
        npc: "U'jughal",
        unlock: ""
    }, {
        level: "48",
        name: "Serpent's Tongue-lashing",
        npc: "Ahtzatrach",
        unlock: ""
    }, {
        level: "48",
        name: "Culling the Horde",
        npc: "Eilis",
        unlock: ""
    }, {
        level: "48",
        name: "Sibling Rivalry",
        npc: "Eilis",
        unlock: ""
    }, {
        level: "48",
        name: "Wag the Sea Dogs",
        npc: "Eilis",
        unlock: ""
    }, {
        level: "48",
        name: "Sea Wasp Run",
        npc: "Nortmoen",
        unlock: ""
    }, {
        level: "48",
        name: "No Sea Wasp for You",
        npc: "Sthalrhet",
        unlock: ""
    }, {
        level: "48",
        name: "The Way the Crystals Crumble",
        npc: "Falkbryda",
        unlock: ""
    }, {
        level: "50",
        name: "Sirius Business",
        npc: "Diamanda",
        unlock: "Pharos Sirius"
    }, {
        level: "50",
        name: "Why So Sirius",
        npc: "Diamanda",
        unlock: ""
    }
];
