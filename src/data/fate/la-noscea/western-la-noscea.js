import { DataGroup } from "../../DataGroup";

export const FATEs_La_Noscea_Western = function(parent) {
    return new DataGroup("Western", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "10",
        name: "Barometz Soup",
        location: "Quarterstone (36,28)",
        type: "Notorious Monster"
    }, {
        level: "10",
        name: "Shredding Wheat",
        location: "Quarterstone (34,29)",
        type: "Slay Enemies"
    }, {
        level: "12",
        name: "Tender Buttons",
        location: "Quarterstone (32,28)",
        type: "Notorious Monster"
    }, {
        level: "12",
        name: "The Last Straw",
        location: "Quarterstone (33,29)",
        type: "Slay Enemies"
    }, {
        level: "13",
        name: "(I Just) Died in Six Arms Tonight",
        location: "Quarterstone (30,29)",
        type: "Notorious Monster"
    }, {
        level: "15",
        name: "Goblin Chain",
        location: "Skull Valley (27,24)",
        type: "Slay Enemies"
    }, {
        level: "15",
        name: "Between Aurochs",
        location: "Skull Valley (29,25)",
        type: "Slay Enemies"
    }, {
        level: "16",
        name: "Absolutely, Positively",
        location: "Skull Valley (26,25)",
        type: "Escort"
    }, {
        level: "16",
        name: "In the Sac",
        location: "Skull Valley (22,23)",
        type: "Slay Enemies"
    }, {
        level: "17",
        name: "Don't Call Him a Fishback",
        location: "Skull Valley (24,23)",
        type: "Slay Enemies"
    }, {
        level: "17",
        name: "Letters from Tidegate",
        location: "Skull Valley (24,24)",
        type: "Defense"
    }, {
        level: "18",
        name: "Tryp Fantastic",
        location: "Skull Valley (26,22)",
        type: "Notorious Monster"
    }, {
        level: "18",
        name: "Iron Contra Affair",
        location: "Skull Valley (28,24)",
        type: "Gather Items"
    }, {
        level: "40",
        name: "Dead Man's Rest",
        location: "The Isles of Umbra (16,32)",
        type: "Slay Enemies"
    }, {
        level: "40",
        name: "The King's Justice",
        location: "The Isles of Umbra (14,34)",
        type: "Notorious Monster"
    }, {
        level: "44",
        name: "Gauging North Tidegate",
        location: "Halfstone (20,19)",
        type: "Slay Enemies"
    }, {
        level: "44",
        name: "Breaching North Tidegate",
        location: "Halfstone (21,19)",
        type: "Notorious Monster"
    }, {
        level: "44",
        name: "Sharknado",
        location: "Halfstone (17,19)",
        type: "Notorious Monster"
    }, {
        level: "45",
        name: "Breaching South Tidegate",
        location: "Halfstone (18,22)",
        type: "Notorious Monster"
    }, {
        level: "45",
        name: "Gauging South Tidegate",
        location: "Halfstone (18,21)",
        type: "Slay Enemies"
    }, {
        level: "45",
        name: "The Mandragoras",
        location: "The Isles of Umbra (16,35)",
        type: "Notorious Monster"
    }, {
        level: "46",
        name: "Tail of a Whale",
        location: "Sapsa Spawning Grounds (17,16)",
        type: "Notorious Monster"
    }, {
        level: "48",
        name: "Watch Your Tongue",
        location: "Halfstone (14,17)",
        type: "Slay Enemies"
    }, {
        level: "49",
        name: "Making Waves",
        location: "Sapsa Spawning Grounds (11,13)",
        type: "Notorious Monster"
    }
];
