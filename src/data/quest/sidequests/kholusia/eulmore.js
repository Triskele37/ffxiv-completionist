import { DataGroup } from "../../../DataGroup";

export const Quests_Sidequests_Kholusia_Eulmore = function(parent) {
    return new DataGroup("Eulmore", parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "70",
        name: "Children of the Derelicts",
        npc: "Sristialla",
        unlock: ""
    }, {
        level: "70",
        name: "Little and Late",
        npc: "Forlorn Free Citizen",
        unlock: ""
    }, {
        level: "70",
        name: "My Heart Will (Not) Go On",
        npc: "Queen Bee",
        unlock: ""
    }, {
        level: "70",
        name: "Near, Far, Wherever You Are",
        npc: "Solina",
        unlock: ""
    }, {
        level: "70",
        name: "Of Legacies Lost and Reclaimed",
        npc: "Debonair Dame",
        unlock: ""
    }, {
        level: "70",
        name: "One Good Meal",
        npc: "Eulmoran Soldier",
        unlock: ""
    }, {
        level: "70",
        name: "Rebuild, Reuse, Recycle",
        npc: "Tui-shirr",
        unlock: ""
    }, {
        level: "70",
        name: "Scattered to the Winds",
        npc: "Aarner",
        unlock: ""
    }, {
        level: "70",
        name: "The Invisible Hand",
        npc: "Zoi-chorr",
        unlock: ""
    }, {
        level: "70",
        name: "Oh, Beehive Yourself",
        npc: "Kai-Shirr",
        unlock: "Kai-Shirr's Custom Deliveries"
    }, {
        level: "70",
        name: "Commercially Flyable",
        npc: "Bosta-Zia",
        unlock: ""
    }, {
        level: "70",
        name: "A Ship on His Shoulder",
        npc: "Anfrigg",
        unlock: ""
    }, {
        level: "80",
        name: "Yet Another Striking Opportunity",
        npc: "Weary Dockworker",
        unlock: ""
    }, {
        level: "80",
        name: "Akadaemia Anyder",
        npc: "Overwrought Ondo",
        unlock: ""
    }
];
