import { DataGroup } from "../../../DataGroup";

export const Quests_Sidequests_Ul_Dahn_Central_Thanalan = function(parent) {
    return new DataGroup("Central Thanalan", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "6",
        name: "The Slaying of the Shrews",
        npc: "Hihiyaja",
        unlock: ""
    }, {
        level: "7",
        name: "The Tasting of the Shrews",
        npc: "Wowobaru",
        unlock: ""
    }, {
        level: "7",
        name: "Listen to Your Fish",
        npc: "Hihiyaja",
        unlock: ""
    }, {
        level: "8",
        name: "Bloodied and Bowed",
        npc: "Aethelgyth",
        unlock: ""
    }, {
        level: "9",
        name: "In the Court of the Rat King",
        npc: "Zezeda",
        unlock: ""
    }, {
        level: "9",
        name: "Sometimes the Old Ways Are Best",
        npc: "Zezeda",
        unlock: ""
    }, {
        level: "11",
        name: "Need Not Apply in Person",
        npc: "Hamund",
        unlock: ""
    }, {
        level: "12",
        name: "Alternative Medicine",
        npc: "Blayves",
        unlock: ""
    }, {
        level: "12",
        name: "Fringe Benefits",
        npc: "Amalberga",
        unlock: ""
    }, {
        level: "19",
        name: "Forging the Spirit",
        npc: "Swynbroes",
        unlock: "Materia Assimilating"
    }, {
        level: "19",
        name: "Waking the Spirit",
        npc: "F'hobhas",
        unlock: "Materia Melding"
    }, {
        level: "19",
        name: "Marvelously Mutable Materia",
        npc: "Kokosamu",
        unlock: ""
    }, {
        level: "25",
        name: "Melding Materia Muchly",
        npc: "Mutamix Bubblypots",
        unlock: "Advanced Materia Melding"
    }
];
