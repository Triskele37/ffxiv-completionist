const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const cacheAchievements = require("./data/achievements/cache");
const buildAchievements = require("./data/achievements/build");
const cacheQuests = require("./data/quest/cache");
const buildQuests = require("./data/quest/build");
const cacheNPCs = require("./data/npcs/cache");

mainScreen();

function mainScreen() {
    console.clear();
    console.log("Welcome\n" +
        "  1. Cache Achievements\n" +
        "  2. Build Achievements\n" +
        "  3. Cache Quests\n" +
        "  4. Build Quests\n" +
        "  5. Cache NPCs\n" +
        "  6. Exit\n"
    );

    rl.question("What would you like to do? ", (answer) => {
        console.log();

        switch(answer) {
            case "1": cacheAchievements(done); break;
            case "2": buildAchievements(done); break;
            case "3": cacheQuests(done); break;
            case "4": buildQuests(done); break;
            case "5": cacheNPCs(done); break;
            default: rl.close();
        }
    });

    function done() {
        console.log();
        rl.question("Completed, press any key to continue", () => mainScreen());
    }
}

// Mount
// Leve
// Emote
// Recipe
// Item
// InstanceContent
// Fate
// Orchestrion
