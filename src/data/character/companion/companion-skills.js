import { DataGroup } from "../../DataGroup";

export const Character_Companion_Skills = function(parent) {
    const data = new DataGroup("Companion Skills", parent);

    data.columnConfig = [
        { header: "Skill", key: "name" },
        { header: "Tree", key: "tree", filterable: true },
        { header: "SP Cost", key: "spCost", centered: true },
        { header: "Type", key: "type", filterable: true },
        { header: "Description", key: "description" }
    ];

    data.initializeTasks(tasks);

    return data;
};

const tasks = [
    {
        "name_en": "Choco Drop",
        "tree": "Defender",
        "spCost": "1",
        "type": "Weaponskill",
        "description": "Orders chocobo to deliver an attack with a potency of 150.  Additional Effect: Increased Enmity"
    },
    {
        "name_en": "Enhanced Strength (1)",
        "tree": "Defender",
        "spCost": "2",
        "type": "Trait",
        "description": "Increases companion strength by 5%"
    },
    {
        "name_en": "Increased HP (1)",
        "tree": "Defender",
        "spCost": "3",
        "type": "Trait",
        "description": "Increases companion HP by 10%"
    },
    {
        "name_en": "Choco Kick",
        "tree": "Defender",
        "spCost": "4",
        "type": "Weaponskill",
        "description": "Orders chocobo to deliver an attack with a potency of 130.  Additional Effect: Slow +20% for 12s"
    },
    {
        "name_en": "Enhanced Accuracy (1)",
        "tree": "Defender",
        "spCost": "5",
        "type": "Trait",
        "description": "Increases companion accuracy by 5%"
    },
    {
        "name_en": "Enhanced Critical Hit Rate (1)",
        "tree": "Defender",
        "spCost": "6",
        "type": "Trait",
        "description": "Increases companion Critical Hit Rate by 15%"
    },
    {
        "name_en": "Choco Guard",
        "tree": "Defender",
        "spCost": "7",
        "type": "Weaponskill",
        "description": "Reduces damage taken by chocobo by 15% for 15s"
    },
    {
        "name_en": "Enhanced Strength (2)",
        "tree": "Defender",
        "spCost": "8",
        "type": "Trait",
        "description": "Increases companion strength by 5%"
    },
    {
        "name_en": "Increased HP (2)",
        "tree": "Defender",
        "spCost": "9",
        "type": "Trait",
        "description": "Increases companion HP by 10%"
    },
    {
        "name_en": "Choco Strike",
        "tree": "Defender",
        "spCost": "10",
        "type": "Weaponskill",
        "description": "Orders chocobo to deliver an attack with a potency of 150 to all enemies in a cone.  Additional Effect: Increased Enmity"
    },
    {
        "name_en": "Choco Slash",
        "tree": "Attacker",
        "spCost": "1",
        "type": "Weaponskill",
        "description": "Orders chocobo to deliver an attack with a potency of 150"
    },
    {
        "name_en": "Enhanced Strength (3)",
        "tree": "Attacker",
        "spCost": "2",
        "type": "Trait",
        "description": "Increases companion strength by 5%"
    },
    {
        "name_en": "Increased HP (3)",
        "tree": "Attacker",
        "spCost": "3",
        "type": "Trait",
        "description": "Increases companion HP by 10%"
    },
    {
        "name_en": "Choco Beak",
        "tree": "Attacker",
        "spCost": "4",
        "type": "Weaponskill",
        "description": "Orders chocobo to deliver an attack with a potency of 130.  Additional Effect: Damage over time with potency of 20 for 18s"
    },
    {
        "name_en": "Enhanced Accuracy (2)",
        "tree": "Attacker",
        "spCost": "5",
        "type": "Trait",
        "description": "Increases companion accuracy by 5%"
    },
    {
        "name_en": "Enhanced Critical Hit Rate (2)",
        "tree": "Attacker",
        "spCost": "6",
        "type": "Trait",
        "description": "Increases companion Critical Hit Rate by 15%"
    },
    {
        "name_en": "Choco Rush",
        "tree": "Attacker",
        "spCost": "7",
        "type": "Weaponskill",
        "description": "Orders chocobo to deliver an attack with a potency of 130.  Additional Effect: Stun for 5s"
    },
    {
        "name_en": "Enhanced Strength (4)",
        "tree": "Attacker",
        "spCost": "8",
        "type": "Trait",
        "description": "Increases companion strength by 10%"
    },
    {
        "name_en": "Increased Attack Speed",
        "tree": "Attacker",
        "spCost": "9",
        "type": "Trait",
        "description": "Increases companion Attack Speed by 10%"
    },
    {
        "name_en": "Choco Blast",
        "tree": "Attacker",
        "spCost": "10",
        "type": "Weaponskill",
        "description": "Orders chocobo to deliver an attack with a potency of 170 to all enemies in a cone"
    },
    {
        "name_en": "Choco Regen",
        "tree": "Healer",
        "spCost": "1",
        "type": "Weaponskill",
        "description": "Orders chocobo to grant healing over time to a target.  Cure Potency: 25  Duration: 18s"
    },
    {
        "name_en": "Enhanced Mind (1)",
        "tree": "Healer",
        "spCost": "2",
        "type": "Trait",
        "description": "Increases companion mind by 10%"
    },
    {
        "name_en": "Increased HP (4)",
        "tree": "Healer",
        "spCost": "3",
        "type": "Trait",
        "description": "Increases companion HP by 5%"
    },
    {
        "name_en": "Choco Cure",
        "tree": "Healer",
        "spCost": "4",
        "type": "Weaponskill",
        "description": "Orders a chocobo to restore target's HP. Cure Potency: 300"
    },
    {
        "name_en": "Enhanced Accuracy (3)",
        "tree": "Healer",
        "spCost": "5",
        "type": "Trait",
        "description": "Increases companion accuracy by 5%"
    },
    {
        "name_en": "Enhanced Critical Hit Rate (3)",
        "tree": "Healer",
        "spCost": "6",
        "type": "Trait",
        "description": "Increases companion Critical Hit Rate by 15%"
    },
    {
        "name_en": "Choco Surge",
        "tree": "Healer",
        "spCost": "7",
        "type": "Weaponskill",
        "description": "Increases chocobo's healing magic potency by 30% for 30s"
    },
    {
        "name_en": "Enhanced Mind (2)",
        "tree": "Healer",
        "spCost": "8",
        "type": "Trait",
        "description": "Increases companion mind by 15%"
    },
    {
        "name_en": "Increased HP (5)",
        "tree": "Healer",
        "spCost": "9",
        "type": "Trait",
        "description": "Increases companion HP by 5%"
    },
    {
        "name_en": "Choco Medica",
        "tree": "Healer",
        "spCost": "10",
        "type": "Weaponskill",
        "description": "Orders a chocobo to restore its own HP and the HP of all nearby party members.  Cure Potency: 150"
    }
];
