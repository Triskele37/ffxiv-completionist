import { DataGroup } from "../DataGroup";

export const Character_Grand_Company_Rank = function(parent) {
    const data = new DataGroup("Grand Company Rank", parent);

    data.columnConfig = [
        { header: "Rank", key: "name", },
        { header: "Grand Company", key: "grandCompany", filterable: true },
        { header: "Requirement", key: "requirement" },
        { header: "Entitlements", key: "entitlements" }
    ];

    data.initializeTasks(tasks);

    return data;
};

const tasks = [
    //------------------------------------------------------------------ Maelstrom
    {
        "name_en": "Storm Private Third Class",
        "grandCompany": "Maelstrom",
        "requirement": "Completion of Till Sea Swallows All Quest",
        "entitlements": "10,000 Seal Cap; Deliveries"
    },
    {
        "name_en": "Storm Private Second Class",
        "grandCompany": "Maelstrom",
        "requirement": "2,000 Storm Seals",
        "entitlements": "15,000 Seal Cap"
    },
    {
        "name_en": "Storm Private First Class",
        "grandCompany": "Maelstrom",
        "requirement": "3,000 Storm Seals",
        "entitlements": "20,000 Seal Cap"
    },
    {
        "name_en": "Storm Corporal",
        "grandCompany": "Maelstrom",
        "requirement": "4,000 Storm Seals",
        "entitlements": "25,000 Seal Cap"
    },
    {
        "name_en": "Storm Sergeant Third Class",
        "grandCompany": "Maelstrom",
        "requirement": "Completion of Hunting Log: Maelstrom Rank 1 & 5,000 Storm Seals",
        "entitlements": "30,000 Seal Cap; Level 30 GC Leves; Whitebrim GC Leves"
    },
    {
        "name_en": "Storm Sergeant Second Class",
        "grandCompany": "Maelstrom",
        "requirement": "6,000 Storm Seals",
        "entitlements": "35,000 Seal Cap; Expert Deliveries"
    },
    {
        "name_en": "Storm Sergeant First Class",
        "grandCompany": "Maelstrom",
        "requirement": "7,000 Storm Seals",
        "entitlements": "40,000 Seal Cap"
    },
    {
        "name_en": "Chief Storm Sergeant",
        "grandCompany": "Maelstrom",
        "requirement": "Completion of Shadows Uncast (Maelstrom) Quest & 8,000 Storm Seals",
        "entitlements": "45,000 Seal Cap; Mor Dhona GC Leves"
    },
    {
        "name_en": "Second Storm Lieutenant",
        "grandCompany": "Maelstrom",
        "requirement": "Completion of Hunting Log: Maelstrom Rank 2, Gilding the Bilious (Maelstrom) & 9,000 Storm Seals",
        "entitlements": "50,000 Seal Cap; Adventurer Squadrons"
    },
    {
        "name_en": "First Storm Lieutenant",
        "grandCompany": "Maelstrom",
        "requirement": "Completion of \"Flagged Mission: Crystal Recovery\" via Adventurer Squadrons",
        "entitlements": "80,000 Seal Cap"
    },
    {
        "name_en": "Storm Captain",
        "grandCompany": "Maelstrom",
        "requirement": "Completion of 5 Different Command Missions & Completion of \"Flagged Mission: Sapper Strike\" via Adventurer Squadrons",
        "entitlements": "90,000 Seal Cap"
    },
    //------------------------------------------------------------------ Twin Adder
    {
        "name_en": "Serpent Private Third Class",
        "grandCompany": "Order of the Twin Adder",
        "requirement": "Completion of Till Sea Swallows All Quest",
        "entitlements": "10,000 Seal Cap; Deliveries"
    },
    {
        "name_en": "Serpent Private Second Class",
        "grandCompany": "Order of the Twin Adder",
        "requirement": "2,000 Serpent Seals",
        "entitlements": "15,000 Seal Cap"
    },
    {
        "name_en": "Serpent Private First Class",
        "grandCompany": "Order of the Twin Adder",
        "requirement": "3,000 Serpent Seals",
        "entitlements": "20,000 Seal Cap"
    },
    {
        "name_en": "Serpent Corporal",
        "grandCompany": "Order of the Twin Adder",
        "requirement": "4,000 Serpent Seals",
        "entitlements": "25,000 Seal Cap"
    },
    {
        "name_en": "Serpent Sergeant Third Class",
        "grandCompany": "Order of the Twin Adder",
        "requirement": "Completion of Hunting Log: Order of the Twin Adder Rank 1 & 5,000 Serpent Seals",
        "entitlements": "30,000 Seal Cap; Level 30 GC Leves; Whitebrim GC Leves"
    },
    {
        "name_en": "Serpent Sergeant Second Class",
        "grandCompany": "Order of the Twin Adder",
        "requirement": "6,000 Serpent Seals",
        "entitlements": "35,000 Seal Cap; Expert Deliveries"
    },
    {
        "name_en": "Serpent Sergeant First Class",
        "grandCompany": "Order of the Twin Adder",
        "requirement": "7,000 Serpent Seals",
        "entitlements": "40,000 Seal Cap"
    },
    {
        "name_en": "Chief Serpent Sergeant",
        "grandCompany": "Order of the Twin Adder",
        "requirement": "Completion of Shadows Uncast (Twin Adder) Quest & 8,000 Serpent Seals",
        "entitlements": "45,000 Seal Cap; Mor Dhona GC Leves"
    },
    {
        "name_en": "Second Serpent Lieutenant",
        "grandCompany": "Order of the Twin Adder",
        "requirement": "Completion of Hunting Log: Order of the Twin Adder Rank 2, Gilding the Bilious (Twin Adder) & 9,000 Serpent Seals",
        "entitlements": "50,000 Seal Cap; Adventurer Squadrons"
    },
    {
        "name_en": "First Serpent Lieutenant",
        "grandCompany": "Order of the Twin Adder",
        "requirement": "Completion of \"Flagged Mission: Crystal Recovery\" via Adventurer Squadrons",
        "entitlements": "80,000 Seal Cap"
    },
    {
        "name_en": "Serpent Captain",
        "grandCompany": "Order of the Twin Adder",
        "requirement": "Completion of 5 Different Command Missions & Completion of \"Flagged Mission: Sapper Strike\" via Adventurer Squadrons",
        "entitlements": "90,000 Seal Cap"
    },
    //------------------------------------------------------------------ Immortal Flames
    {
        "name_en": "Flame Private Third Class",
        "grandCompany": "Immortal Flames",
        "requirement": "Completion of Till Sea Swallows All Quest",
        "entitlements": "10,000 Seal Cap; Deliveries"
    },
    {
        "name_en": "Flame Private Second Class",
        "grandCompany": "Immortal Flames",
        "requirement": "2,000 Flame Seals",
        "entitlements": "15,000 Seal Cap"
    },
    {
        "name_en": "Flame Private First Class",
        "grandCompany": "Immortal Flames",
        "requirement": "3,000 Flame Seals",
        "entitlements": "20,000 Seal Cap"
    },
    {
        "name_en": "Flame Corporal",
        "grandCompany": "Immortal Flames",
        "requirement": "4,000 Flame Seals",
        "entitlements": "25,000 Seal Cap"
    },
    {
        "name_en": "Flame Sergeant Third Class",
        "grandCompany": "Immortal Flames",
        "requirement": "Completion of Hunting Log: Immortal Flames Rank 1 & 5,000 Flame Seals",
        "entitlements": "30,000 Seal Cap; Level 30 GC Leves; Whitebrim GC Leves"
    },
    {
        "name_en": "Flame Sergeant Second Class",
        "grandCompany": "Immortal Flames",
        "requirement": "6,000 Flame Seals",
        "entitlements": "35,000 Seal Cap; Expert Deliveries"
    },
    {
        "name_en": "Flame Sergeant First Class",
        "grandCompany": "Immortal Flames",
        "requirement": "7,000 Flame Seals",
        "entitlements": "40,000 Seal Cap"
    },
    {
        "name_en": "Chief Flame Sergeant",
        "grandCompany": "Immortal Flames",
        "requirement": "Completion of Shadows Uncast (Immortal Flames) Quest & 8,000 Flame Seals",
        "entitlements": "45,000 Seal Cap; Mor Dhona GC Leves"
    },
    {
        "name_en": "Second Flame Lieutenant",
        "grandCompany": "Immortal Flames",
        "requirement": "Completion of Hunting Log: Immortal Flames Rank 2, Gilding the Bilious (Immortal Flames) & 9,000 Serpent Seals",
        "entitlements": "50,000 Seal Cap; Adventurer Squadrons"
    },
    {
        "name_en": "First Flame Lieutenant",
        "grandCompany": "Immortal Flames",
        "requirement": "Completion of \"Flagged Mission: Crystal Recovery\" via Adventurer Squadrons",
        "entitlements": "80,000 Seal Cap"
    },
    {
        "name_en": "Flame Captain",
        "grandCompany": "Immortal Flames",
        "requirement": "Completion of 5 Different Command Missions & Completion of \"Flagged Mission: Sapper Strike\" via Adventurer Squadrons",
        "entitlements": "90,000 Seal Cap"
    },
];