import { DataGroup } from "../../DataGroup";

//https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.Name_en&string=Treasure%20Hunt&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

export const Achievements_Battle_Treasure_Hunt = function(parent) {
    return new DataGroup("Treasure Hunt", parent).initializeTasks(tasks);
};

const tasks = [
    {
        description: "Decipher 3 timeworn leather maps and open the treasure coffers to which they lead.",
        name: "I Can Dig It I",
        points: 5,
        reward: "-"
    }, {
        description: "Decipher 5 timeworn goatskin maps and open the treasure coffers to which they lead.",
        name: "I Can Dig It II",
        points: 5,
        reward: "-"
    }, {
        description: "Decipher 10 timeworn toadskin maps and open the treasure coffers to which they lead.",
        name: "I Can Dig It III",
        points: 5,
        reward: "-"
    }, {
        description: "Decipher 20 timeworn boarskin maps and open the treasure coffers to which they lead.",
        name: "I Can Dig It IV",
        points: 10,
        reward: "-"
    }, {
        description: "Decipher 20 timeworn peisteskin maps and open the treasure coffers to which they lead.",
        name: "No Stone Unturned",
        points: 20,
        reward: "Title: Treasure Hunter"
    }, {
        description: "Decipher unhidden leather maps to locate and loot 20 treasure coffers.",
        name: "Unhide and Seek",
        points: 20,
        reward: "Title: Bearer of the Coffer"
    }, {
        description: "Decipher 20 timeworn archaeoskin maps and open the treasure coffers to which they lead.",
        name: "I Can Dig It V",
        points: 20,
        reward: "-"
    }, {
        description: "Decipher 20 timeworn wyvernskin maps and open the treasure coffers to which they lead.",
        name: "I Can Dig It VI",
        points: 20,
        reward: "-"
    }, {
        description: "Decipher 20 timeworn dragonskin maps and open the treasure coffers to which they lead.",
        name: "I Can Dig It VII",
        points: 20,
        reward: "-"
    }, {
        description: "Raid the Aquapolis.",
        name: "Life Aquatic I",
        points: 5,
        reward: "Title: Polis Raider"
    }, {
        description: "Raid the Aquapolis 5 times.",
        name: "Life Aquatic II",
        points: 10,
        reward: "-"
    }, {
        description: "Raid the Aquapolis 10 times.",
        name: "Life Aquatic III",
        points: 10,
        reward: "-"
    }, {
        description: "Raid the Aquapolis 20 times.",
        name: "Life Aquatic IV",
        points: 20,
        reward: "Title: Polis Dweller"
    }, {
        description: "Raid the deepest room in the Aquapolis.",
        name: "The Slow Regard of Stolen Things I",
        points: 5,
        reward: "-"
    }, {
        description: "Raid the deepest room in the Aquapolis 5 times.",
        name: "The Slow Regard of Stolen Things II",
        points: 10,
        reward: "-"
    }, {
        description: "Raid the deepest room in the Aquapolis 10 times.",
        name: "The Slow Regard of Stolen Things III",
        points: 10,
        reward: "-"
    }, {
        description: "Raid the deepest room in the Aquapolis 20 times.",
        name: "The Slow Regard of Stolen Things IV",
        points: 20,
        reward: "Title: Polis Lord"
    }, {
        description: "Decipher 20 timeworn gaganaskin maps and open the treasure coffers to which they lead.",
        name: "I Can Dig It VIII",
        points: 20,
        reward: "-"
    }, {
        description: "Decipher 20 timeworn gazelleskin maps and open the treasure coffers to which they lead.",
        name: "I Can Dig It IX",
        points: 20,
        reward: "-"
    }, {
        description: "Raid the Lost Canals of Uznair.",
        name: "Raider of the Lost Canals I",
        points: 5,
        reward: "Title: Canal Raider"
    }, {
        description: "Raid the Lost Canals of Uznair 5 times.",
        name: "Raider of the Lost Canals II",
        points: 10,
        reward: "-"
    }, {
        description: "Raid the Lost Canals of Uznair 10 times.",
        name: "Raider of the Lost Canals III",
        points: 10,
        reward: "-"
    }, {
        description: "Raid the Lost Canals of Uznair 20 times.",
        name: "Raider of the Lost Canals IV",
        points: 20,
        reward: "Title: Canal Dweller"
    }, {
        description: "Raid the deepest sluice in the Lost Canals of Uznair.",
        name: "The Deep End I",
        points: 5,
        reward: "-"
    }, {
        description: "Raid the deepest sluice in the Lost Canals of Uznair 5 times.",
        name: "The Deep End II",
        points: 10,
        reward: "-"
    }, {
        description: "Raid the deepest sluice in the Lost Canals of Uznair 10 times.",
        name: "The Deep End III",
        points: 10,
        reward: "-"
    }, {
        description: "Raid the deepest sluice in the Lost Canals of Uznair 20 times.",
        name: "The Deep End IV",
        points: 20,
        reward: "Title: Canal Lord"
    }, {
        description: "Raid the Hidden Canals of Uznair.",
        name: "Raider of the Hidden Canals I",
        points: 5,
        reward: "Title: Deep Canal Raider"
    }, {
        description: "Raid the Hidden Canals of Uznair 5 times.",
        name: "Raider of the Hidden Canals II",
        points: 10,
        reward: "-"
    }, {
        description: "Raid the Hidden Canals of Uznair 10 times.",
        name: "Raider of the Hidden Canals III",
        points: 10,
        reward: "-"
    }, {
        description: "Raid the Hidden Canals of Uznair 20 times.",
        name: "Raider of the Hidden Canals IV",
        points: 20,
        reward: "Title: Deep Canal Dweller"
    }, {
        description: "Raid the deepest sluice in the Hidden Canals of Uznair.",
        name: "The Deeper End I",
        points: 5,
        reward: "-"
    }, {
        description: "Raid the deepest sluice in the Hidden Canals of Uznair 5 times.",
        name: "The Deeper End II",
        points: 10,
        reward: "-"
    }, {
        description: "Raid the deepest sluice in the Hidden Canals of Uznair 10 times.",
        name: "The Deeper End III",
        points: 10,
        reward: "-"
    }, {
        description: "Raid the deepest sluice in the Hidden Canals of Uznair 20 times.",
        name: "The Deeper End IV",
        points: 20,
        reward: "Title: The Luckiest of Lords"
    }, {
        description: "Raid the Shifting Altars of Uznair.",
        name: "Raider of the Shifting Altars I",
        points: 5,
        reward: "Title: Altar Boy"
    }, {
        description: "Raid the Shifting Altars of Uznair 5 times.",
        name: "Raider of the Shifting Altars II",
        points: 10,
        reward: "-"
    }, {
        description: "Raid the Shifting Altars of Uznair 10 times.",
        name: "Raider of the Shifting Altars III",
        points: 10,
        reward: "-"
    }, {
        description: "Raid the Shifting Altars of Uznair 20 times.",
        name: "Raider of the Shifting Altars IV",
        points: 20,
        reward: "Title: The Devout"
    }, {
        description: "Complete the final invocation in the Shifting Altars of Uznair.",
        name: "The Deepest End I",
        points: 5,
        reward: "-"
    }, {
        description: "Complete the final invocation in the Shifting Altars of Uznair 5 times.",
        name: "The Deepest End II",
        points: 10,
        reward: "-"
    }, {
        description: "Complete the final invocation in the Shifting Altars of Uznair 10 times.",
        name: "The Deepest End III",
        points: 10,
        reward: "-"
    }, {
        description: "Complete the final invocation in the Shifting Altars of Uznair 20 times.",
        name: "The Deepest End IV",
        points: 20,
        reward: "Title: Invoker of Gods"
    }, {
        description: "Decipher 20 timeworn gliderskin maps and open the treasure coffers to which they lead.",
        name: "I Can Dig It X",
        points: 20,
        reward: "-"
    }, {
        description: "Decipher 20 timeworn zonureskin maps and open the treasure coffers to which they lead.",
        name: "I Can Dig It XI",
        points: 20,
        reward: "-"
    }, {
        description: "Raid the Dungeons of Lyhe Ghiah.",
        name: "Beauty and Its Beasts I",
        points: 5,
        reward: "Title: Dungeon Raider"
    }, {
        description: "Raid the Dungeons of Lyhe Ghiah 5 times.",
        name: "Beauty and Its Beasts II",
        points: 10,
        reward: "-"
    }, {
        description: "Raid the Dungeons of Lyhe Ghiah 10 times.",
        name: "Beauty and Its Beasts III",
        points: 10,
        reward: "-"
    }, {
        description: "Raid the Dungeons of Lyhe Ghiah 20 times.",
        name: "Beauty and Its Beasts IV",
        points: 20,
        reward: "Title: Dungeon Dweller"
    }, {
        description: "Raid the final chamber in the Dungeons of Lyhe Ghiah.",
        name: "Happily Treasure After I",
        points: 5,
        reward: "-"
    }, {
        description: "Raid the final chamber in the Dungeons of Lyhe Ghiah 5 times.",
        name: "Happily Treasure After II",
        points: 10,
        reward: "-"
    }, {
        description: "Raid the final chamber in the Dungeons of Lyhe Ghiah 10 times.",
        name: "Happily Treasure After III",
        points: 10,
        reward: "-"
    }, {
        description: "Raid the final chamber in the Dungeons of Lyhe Ghiah 20 times.",
        name: "Happily Treasure After IV",
        points: 20,
        reward: "Title: Dungeon Lord"
    }
];

