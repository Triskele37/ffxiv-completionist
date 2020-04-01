const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const OPTIONS = {
    'Cache Achievements': require("./data/achievements/cache"),
    'Build Achievements': require("./data/achievements/build"),
    'Cache Crafting Items': require("./data/crafting-items/cache"),
    'Cache Quests': require("./data/quest/cache"),
    'Build Quests': require("./data/quest/build"),
    'Cache Items': require("./data/items/cache"),
    'Cache NPCs': require("./data/npcs/cache"),
};

mainScreen();

function mainScreen() {
    console.clear();
    console.log(
        "Welcome\n" +
        Object.keys(OPTIONS).reduce((acc, option, i) => acc + `  ${i}. ${option}\n`, '') +
        `  ${Object.keys(OPTIONS).length}. Exit\n`
    );

    rl.question("What would you like to do? ", (answer) => {
        console.log();

        const option = Object.keys(OPTIONS)[answer];
        if(OPTIONS[option]) OPTIONS[option](done);
        else rl.close();
    });

    function done() {
        console.log();
        rl.question("Completed, press any key to continue", () => mainScreen());
    }
}

//xivapi.com/Recipe/33891 = Stuffed Highland Cabbage

// Mount
// Leve
// Emote
// Recipe
// Item
// InstanceContent
// Fate
// Orchestrion
