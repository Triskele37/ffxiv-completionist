import { DataGroup } from "../DataGroup";

export const Gathering_Log_Folklore_Gathering_Books = function(parent) {
    return new DataGroup("Folklore Gathering Books", parent).initializeTasks(tasks, [
        { key: "name", header: "Book" },
        { key: "npc", header: "NPC" },
        { key: "requirements", header: "Requirements" }
    ]);
};

const tasks = [
    //------------------------------------------------------- Miner
    {
        name: "Tome of Geological Folklore - Coerthas",
        npc: "Splendor Vendor: Idyllshire (x5, y7)",
        requirements: "5 Rowena's Tokens (Blue Gatherers' Scrip)"
    },
    {
        name: "Tome of Geological Folklore - Dravania",
        npc: "Splendor Vendor: Idyllshire (x5, y7)",
        requirements: "5 Rowena's Tokens (Blue Gatherers' Scrip)"
    },
    {
        name: "Tome of Geological Folklore - Abalathia's Spine",
        npc: "Splendor Vendor: Idyllshire (x5, y7)",
        requirements: "5 Rowena's Tokens (Blue Gatherers' Scrip)"
    },
    {
        name: "Tome of Geological Folklore - Gyr Abania",
        npc: "Splendor Vendor: Rhalgar's Reach (x9, y12)",
        requirements: "50 Rowena's Tokens (Regional Folklore)"
    },
    {
        name: "Tome of Geological Folklore - Othard",
        npc: "Splendor Vendor: Rhalgar's Reach (x9, y12)",
        requirements: "50 Rowena's Tokens (Regional Folklore)"
    },
    {
        name: "Tome of Geological Folklore - Norvrandt",
        npc: "Splendor Vendor: Eulmore (x11, y11)",
        requirements: "40 Regional Folklore Trade Tokens"
    },
    //------------------------------------------------------- Botanist
    {
        name: "Tome of Botanical Folklore - Coerthas",
        npc: "Splendor Vendor: Idyllshire (x5, y7)",
        requirements: "5 Rowena's Tokens (Blue Gatherers' Scrip)"
    },
    {
        name: "Tome of Botanical Folklore - Dravania",
        npc: "Splendor Vendor: Idyllshire (x5, y7)",
        requirements: "5 Rowena's Tokens (Blue Gatherers' Scrip)"
    },
    {
        name: "Tome of Botanical Folklore - Abalathia's Spine",
        npc: "Splendor Vendor: Idyllshire (x5, y7)",
        requirements: "5 Rowena's Tokens (Blue Gatherers' Scrip)"
    },
    {
        name: "Tome of Botanical Folklore - Gyr Abania",
        npc: "Splendor Vendor: Rhalgar's Reach (x9, y12)",
        requirements: "50 Rowena's Tokens (Regional Folklore)"
    },
    {
        name: "Tome of Botanical Folklore - Othard",
        npc: "Splendor Vendor: Rhalgar's Reach (x9, y12)",
        requirements: "50 Rowena's Tokens (Regional Folklore)"
    },
    {
        name: "Tome of Botanical Folklore - Norvrandt",
        npc: "Splendor Vendor: Eulmore (x11, y11)",
        requirements: "40 Regional Folklore Trade Tokens"
    },
    //------------------------------------------------------- Fisher
    {
        name: "Tome of Ichthyological Folklore - Coerthas",
        npc: "Splendor Vendor: Idyllshire (x5, y7)",
        requirements: "5 Rowena's Tokens (Blue Gatherers' Scrip)"
    },
    {
        name: "Tome of Ichthyological Folklore - Dravania",
        npc: "Splendor Vendor: Idyllshire (x5, y7)",
        requirements: "5 Rowena's Tokens (Blue Gatherers' Scrip)"
    },
    {
        name: "Tome of Ichthyological Folklore - Abalathia's Spine",
        npc: "Splendor Vendor: Idyllshire (x5, y7)",
        requirements: "5 Rowena's Tokens (Blue Gatherers' Scrip)"
    },
    {
        name: "Tome of Ichthyological Folklore - Gyr Abania",
        npc: "Splendor Vendor: Rhalgar's Reach (x9, y12)",
        requirements: "50 Rowena's Tokens (Regional Folklore)"
    },
    {
        name: "Tome of Ichthyological Folklore - Othard",
        npc: "Splendor Vendor: Rhalgar's Reach (x9, y12)",
        requirements: "50 Rowena's Tokens (Regional Folklore)"
    },
    {
        name: "Tome of Ichthyological Folklore - Norvrandt",
        npc: "Splendor Vendor: Eulmore (x11, y11)",
        requirements: "40 Regional Folklore Trade Tokens"
    },
];
