import { DataGroup } from "../../DataGroup";

export const Character_Character_Classes_Job = function(parent) {
    const data = new DataGroup("Classes & Jobs", parent);

    data.isNumericCompletion = true;
    data.defaultCompletion = "0";

    data.initializeTasks(tasks, [
        { header: "Job / Class", key: "name", },
        { header: "Role", key: "role", filterable: true },
        { header: "Starting Quest", key: "startingQuest", },
        { header: "Patch", key: "patch", filterable: true },
    ]);

    return data;
};

const tasks = [
    //------------------------------------------------------- Tank
    {
        name: "Paladin / Gladiator",
        role: "Tank",
        startingQuest: "Paladin's Pledge - Lulutsu - Ul'dah - Steps of Thal / Way of the Gladiator - Lulutsu - Ul'dah - Steps of Thal",
        patch: "2.0",
        minValue: 0,
        maxValue: 80
    },
    {
        name: "Warrior / Marauder",
        role: "Tank",
        startingQuest: "Pride and Duty (Will Take You from the Mountain) - Wyrnzoen - Limsa Lominsa Upper Decks / Way of the Marauder - Blauthota - Limsa Lominsa Upper Decks",
        patch: "2.0",
        minValue: 0,
        maxValue: 80
    },
    {
        name: "Dark Knight",
        role: "Tank",
        startingQuest: "Our End - Ishgardian Citizen - The Pillars",
        patch: "3.0",
        minValue: 30,
        maxValue: 80
    },
    {
        name: "Gunbreaker",
        role: "Tank",
        startingQuest: "The Makings of a Gunbreaker - Gods' Quiver Bow - New Gridania",
        patch: "5.0",
        minValue: 60,
        maxValue: 80
    },
    //------------------------------------------------------- Healer
    {
        name: "White Mage / Conjurer",
        role: "Healer",
        startingQuest: "Seer Folly - E-Sumi-Yan - Old Gridania / Way of the Conjurer - Madelle - Old Gridania",
        patch: "2.0",
        minValue: 0,
        maxValue: 80
    },
    {
        name: "Scholar / Arcanist",
        role: "Healer",
        startingQuest: "Forgotten but Not Gone - Murie - Limsa Lominsa Lower Decks",
        patch: "2.0",
        minValue: 0,
        maxValue: 80
    },
    {
        name: "Astrologian",
        role: "Healer",
        startingQuest: "Stairway to the Heavens - Jannequinard - The Pillars",
        patch: "3.0",
        minValue: 30,
        maxValue: 80
    },
    //------------------------------------------------------- Melee DPS
    {
        name: "Monk / Pugilist",
        role: "Melee DPS",
        startingQuest: "Brother from Another Mother - Gagaruna - Ul'dah - Steps of Nald / Way of the Pugilist - Gagaruna - Ul'dah - Steps of Nald",
        patch: "2.0",
        minValue: 0,
        maxValue: 80
    },
    {
        name: "Dragoon / Lancer",
        role: "Melee DPS",
        startingQuest: "Eye of the Dragon - Ywain - Old Gridania / Way of the Lancer - Jillian - Old Gridania",
        patch: "2.0",
        minValue: 0,
        maxValue: 80
    },
    {
        name: "Ninja / Rogue",
        role: "Melee DPS",
        startingQuest: "Peasants by Day, Ninjas by Night - Jacke - Limsa Lominsa Lower Decks / My First Daggers - Lonwoerd - Limsa Lominsa Lower Decks",
        patch: "2.4",
        minValue: 0,
        maxValue: 80
    },
    {
        name: "Samurai",
        role: "Melee DPS",
        startingQuest: "The Way of the Samurai - Ul'dahn Citizen - Ul'dah - Steps of Nald",
        patch: "4.0",
        minValue: 50,
        maxValue: 80
    },
    //------------------------------------------------------- Physical Ranged DPS
    {
        name: "Bard / Archer",
        role: "Physical Ranged DPS",
        startingQuest: "A Song of Bards and Bowmen - Luciane - New Gridania / Way of the Archer - Athelyna - New Gridania",
        patch: "2.0",
        minValue: 0,
        maxValue: 80
    },
    {
        name: "Machinist",
        role: "Physical Ranged DPS",
        startingQuest: "Savior of Skysteel - Stephanivien - Foundation",
        patch: "3.0",
        minValue: 30,
        maxValue: 80
    },
    {
        name: "Dancer",
        role: "Physical Ranged DPS",
        startingQuest: "Shall We Dance - Eager Lominsan - Limsa Lominsa Lower Decks",
        patch: "5.0",
        minValue: 60,
        maxValue: 80
    },
    //------------------------------------------------------- Magical Ranged DPS
    {
        name: "Black Mage / Thaumaturge",
        role: "Magical Ranged DPS",
        startingQuest: "Taking the Black - Yayake - Ul'dah - Steps of Nald / Way of the Thaumaturge - Yayake - Ul'dah - Steps of Nald",
        patch: "2.0",
        minValue: 0,
        maxValue: 80
    },
    {
        name: "Summoner / Arcanist",
        role: "Magical Ranged DPS",
        startingQuest: "Austerities of Flame - Thubyrgeim - Limsa Lominsa Lower Decks / Way of the Arcanist - Murie - Limsa Lominsa Lower Decks",
        patch: "2.0",
        minValue: 0,
        maxValue: 80
    },
    {
        name: "Red Mage",
        role: "Magical Ranged DPS",
        startingQuest: "Taking the Red - Distraught Lass - Ul'dah - Steps of Thal",
        patch: "4.0",
        minValue: 50,
        maxValue: 80
    },
    {
        name: "Blue Mage",
        role: "Magical Ranged DPS",
        startingQuest: "Out of the Blue - Zealous Yellowjacket - Limsa Lominsa Lower Decks",
        patch: "4.5",
        minValue: 0,
        maxValue: 70
    },
    //------------------------------------------------------- Crafter
    {
        name: "Carpenter",
        role: "Crafter",
        startingQuest: "Way of the Carpenter - Corgg - New Gridania",
        patch: "2.0",
        minValue: 0,
        maxValue: 80
    },
    {
        name: "Blacksmith",
        role: "Crafter",
        startingQuest: "Way of the Blacksmith - Randwulf - Limsa Lominsa Upper Decks",
        patch: "2.0",
        minValue: 0,
        maxValue: 80
    },
    {
        name: "Armorer",
        role: "Crafter",
        startingQuest: "Way of the Armorer - G'wahnako - Limsa Lominsa Upper Decks",
        patch: "2.0",
        minValue: 0,
        maxValue: 80
    },
    {
        name: "Goldsmith",
        role: "Crafter",
        startingQuest: "Way of the Goldsmith - Jemime - Ul'dah - Steps of Thal",
        patch: "2.0",
        minValue: 0,
        maxValue: 80
    },
    {
        name: "Leatherworker",
        role: "Crafter",
        startingQuest: "Way of the Leatherworker - Randall - Old Gridania",
        patch: "2.0",
        minValue: 0,
        maxValue: 80
    },
    {
        name: "Weaver",
        role: "Crafter",
        startingQuest: "Way of the Weaver - Maronne - Ul'dah - Steps of Thal",
        patch: "2.0",
        minValue: 0,
        maxValue: 80
    },
    {
        name: "Alchemist",
        role: "Crafter",
        startingQuest: "Way of the Alchemist - Deitrich - Ul'dah - Steps of Thal",
        patch: "2.0",
        minValue: 0,
        maxValue: 80
    },
    {
        name: "Culinarian",
        role: "Crafter",
        startingQuest: "Way of the Culinarian - Charlys - Limsa Lominsa Upper Decks",
        patch: "2.0",
        minValue: 0,
        maxValue: 80
    },
    //------------------------------------------------------- Gatherer
    {
        name: "Miner",
        role: "Gatherer",
        startingQuest: "Way of the Miner - Linette - Ul'dah - Steps of Thal",
        patch: "2.0",
        minValue: 0,
        maxValue: 80
    },
    {
        name: "Botanist",
        role: "Gatherer",
        startingQuest: "Way of the Botanist - Leonceault - Old Gridania",
        patch: "2.0",
        minValue: 0,
        maxValue: 80
    },
    {
        name: "Fisher",
        role: "Gatherer",
        startingQuest: "Way of the Fisher - N'nmulika - Limsa Lominsa Lower Decks",
        patch: "2.0",
        minValue: 0,
        maxValue: 80
    },
];
