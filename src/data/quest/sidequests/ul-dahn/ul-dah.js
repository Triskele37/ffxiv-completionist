import { QuestColumnConfig } from "../../columnConfigs";

export const UlDah = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.ul-dah`;

    return {
        name: "Ul'dah",
    	storageKey,
    	columns: QuestColumnConfig,
        tasks: [{
        	level: "1",
        	name: "Coming to Ul'dah",
        	npc: "Wymond",
        	unlock: ""
        }, {
        	level: "1",
        	name: "Due Diligence",
        	npc: "Wymond",
        	unlock: ""
        }, {
        	level: "1",
        	name: "Motivational Speaking",
        	npc: "Gelther",
        	unlock: ""
        }, {
        	level: "1",
        	name: "Gil for Gold",
        	npc: "Didilata",
        	unlock: ""
        }, {
        	level: "1",
        	name: "Unholy Matrimony",
        	npc: "Hihito",
        	unlock: ""
        }, {
        	level: "1",
        	name: "The Great Gladiator",
        	npc: "Zazarikku",
        	unlock: ""
        }, {
        	level: "1",
        	name: "With Open Arms",
        	npc: "Juliana",
        	unlock: ""
        }, {
        	level: "1",
        	name: "No Lady Is an Island",
        	npc: "Genevieve",
        	unlock: ""
        }, {
        	level: "2",
        	name: "Decisions, Decisions",
        	npc: "Bitter Snow",
        	unlock: ""
        }, {
        	level: "2",
        	name: "Vox Populi",
        	npc: "Aethelwine",
        	unlock: ""
        }, {
        	level: "2",
        	name: "A Luxury Long Lost",
        	npc: "Alewyn",
        	unlock: ""
        }, {
        	level: "2",
        	name: "The Wealth of Nations",
        	npc: "Landebert",
        	unlock: ""
        }, {
        	level: "3",
        	name: "Tougher than Leather",
        	npc: "Jajakuta",
        	unlock: ""
        }, {
        	level: "3",
        	name: "Beet-red Beetles Beat Red",
        	npc: "Wolkan",
        	unlock: ""
        }, {
        	level: "3",
        	name: "In the Name of Science",
        	npc: "Erasmus",
        	unlock: ""
        }, {
        	level: "4",
        	name: "Fantastic Voyage",
        	npc: "Kekezani",
        	unlock: ""
        }, {
        	level: "4",
        	name: "Catch Your Breath",
        	npc: "Botulf",
        	unlock: ""
        }, {
        	level: "10",
        	name: "Leves of Horizon",
        	npc: "Eustace",
        	unlock: "Leves"
        }, {
        	level: "14",
        	name: "Help Me, Lord of the Dance",
        	npc: "P'molminn",
        	unlock: "/balldance Emote"
        }, {
        	level: "15",
        	name: "In Could Happen to You",
        	npc: "Well Heeled Youth",
        	unlock: "Gold Saucer"
        }, {
        	level: "17",
        	name: "An Ill-conceived Venture (Ul'dah)",
        	npc: "Troubled Adventurer",
        	unlock: "Retainer Ventures"
        }, {
        	level: "20",
        	name: "My Little Chocobo (Immortal Flames)",
        	npc: "Swift",
        	unlock: "Chocobo Mount"
        }, {
        	level: "30",
        	name: "Gone to Pieces",
        	npc: "Syntgoht",
        	unlock: "Desynthesis"
        }, {
        	level: "38",
        	name: "Hold for Customer Support",
        	npc: "Syntgoht",
        	unlock: ""
        }, {
        	level: "38",
        	name: "Dishonor Before Death",
        	npc: "Sibold",
        	unlock: ""
        }, {
        	level: "38",
        	name: "A Tale of Three Cities",
        	npc: "Syntgoht",
        	unlock: ""
        }, {
        	level: "50",
        	name: "Corpse Groom",
        	npc: "Paiyo Reiyo",
        	unlock: ""
        }]
    };
};
