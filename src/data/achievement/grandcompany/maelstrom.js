import { DataGroup } from "../../DataGroup";

//https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.Name_en&string=Maelstrom&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

export const Achievements_Grand_Company_Maelstrom = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        description: "Officially enlist in the Maelstrom.",
        name: "All Watched Over by a Maelstrom of Loving Grace",
        points: 5,
        reward: "-"
    }, {
        description: "Earn 10,000 Storm Seals.",
        name: "A Storm of Seals I",
        points: 5,
        reward: "-"
    }, {
        description: "Earn 50,000 Storm Seals.",
        name: "A Storm of Seals II",
        points: 5,
        reward: "-"
    }, {
        description: "Earn 100,000 Storm Seals.",
        name: "A Storm of Seals III",
        points: 10,
        reward: "Title: Stormlord"
    }, {
        description: "Earn 500,000 Storm Seals.",
        reward: "Item: Maelstrom Escutcheon",
        name: "The Ruby Anchor",
        points: 20,
    }, {
        description: "Complete 10 company levequests for the Maelstrom.",
        name: "In Good Company: Maelstrom I",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 100 company levequests for the Maelstrom.",
        name: "In Good Company: Maelstrom II",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 200 company levequests for the Maelstrom.",
        name: "In Good Company: Maelstrom III",
        points: 10,
        reward: "Title: The Stormsworn"
    }, {
        description: "Complete 500 company levequests for the Maelstrom.",
        reward: "Item: Crimson Standard Bracelet",
        name: "The Turquoise Cannon",
        points: 20,
    }, {
        description: "Complete 10 supply missions for the Maelstrom.",
        name: "Fueling the Storm I",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 50 supply missions for the Maelstrom.",
        name: "Fueling the Storm II",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 200 supply missions for the Maelstrom.",
        name: "Fueling the Storm III",
        points: 10,
        reward: "Title: Stormcarrier"
    }, {
        description: "Complete 500 supply missions for the Maelstrom.",
        reward: "Item: Crimson Standard Earrings",
        name: "The Onyx Oars",
        points: 20,
    }, {
        description: "Complete 10 provisioning missions for the Maelstrom.",
        name: "To Each According to His Need: Maelstrom I",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 30 provisioning missions for the Maelstrom.",
        name: "To Each According to His Need: Maelstrom II",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 100 provisioning missions for the Maelstrom.",
        name: "To Each According to His Need: Maelstrom III",
        points: 10,
        reward: "Title: Stormbringer"
    }, {
        description: "Complete 200 provisioning missions for the Maelstrom.",
        reward: "Item: Crimson Standard Ring",
        name: "The Jade Mast",
        points: 20,
    }, {
        description: "Complete 5 unique Maelstrom levequests.",
        name: "In the Red I",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 10 unique Maelstrom levequests.",
        name: "In the Red II",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 15 unique Maelstrom levequests.",
        name: "In the Red III",
        points: 10,
        reward: "-"
    }, {
        description: "Complete all Maelstrom entries in the hunting log.",
        reward: "Item: Mammet #003L",
        name: "Bump on a Log: Maelstrom",
        points: 20,
    }
];
