import { DataGroup } from "../../DataGroup";

export const Achievements_Crafting_and_Gathering_All_Disciplines = function(parent) {
    return new DataGroup("All Disciplines", parent).initializeTasks(tasks);
};

const tasks = [
    {
        description: "Earn 50,000 points toward your skyward score as a Disciple of the Hand.",
        name: "Crafting in the Air",
        points: 5,
        reward: "Minion: Laladile"
    }, {
        description: "Earn 500,000 points toward your skyward score as every Disciple of the Hand.",
        name: "Handking of the World",
        points: 10,
        reward: "Title: The Hand of Creation"
    }, {
        description: "Earn 50,000 points toward your skyward score as a Disciple of the Land.",
        name: "Gathering in the Air",
        points: 5,
        reward: "Minion: Malone"
    }, {
        description: "Earn 500,000 points toward your skyward score as every Disciple of the Land.",
        name: "Landking of the World",
        points: 10,
        reward: "Title: Divine Provider"
    }, {
        description: "Earn 500,000 points toward your skyward score as every Disciple of the Hand and Land.",
        name: "Castle in the Sky",
        points: 20,
        reward: "Mount: Pteranodon"
    }, {
        description: "Fire your aetheromatic auger 50 times.",
        name: "Force of Nature I",
        points: 5,
        reward: "-"
    }, {
        description: "Fire your aetheromatic auger 500 times.",
        name: "Force of Nature II",
        points: 5,
        reward: "-"
    }, {
        description: "Fire your aetheromatic auger 1000 times.",
        name: "Force of Nature III",
        points: 10,
        reward: "-"
    }, {
        description: "Claim first prize 5 times in Kupo of Fortune.",
        name: "Let Luck Be a Moogle I",
        points: 5,
        reward: "Kupo Crown"
    }, {
        description: "Claim first prize 10 times in Kupo of Fortune.",
        name: "Let Luck Be a Moogle II",
        points: 5,
        reward: "-"
    }, {
        description: "Claim first prize 30 times in Kupo of Fortune.",
        name: "Let Luck Be a Moogle III",
        points: 10,
        reward: "Title: Fortune's Favored Kupo"
    }, {
        description: "Place between 1st and 12th in the skybuilder rankings.",
        name: "Divine Ascension",
        points: 10,
        reward: "Title: Saint of the Firmament"
    }, {
        description: "Place between 1st and 100th in the skybuilder rankings.",
        name: "Minor Miracle",
        points: 10,
        reward: "Title: Beatus of the Firmament"
    },
];
