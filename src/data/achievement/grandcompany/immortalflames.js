import { DataGroup } from "../../DataGroup";

//https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.Name_en&string=Immortal%20Flames&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

export const Achievements_Grand_Company_Immortal_Flames = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        description: "Officially enlist in the Immortal Flames.",
        name: "Light My Fire",
        points: 5,
        reward: "-"
    }, {
        description: "Earn 10,000 Flame Seals.",
        name: "Burning a Hole in My Pocket I",
        points: 5,
        reward: "-"
    }, {
        description: "Earn 50,000 Flame Seals.",
        name: "Burning a Hole in My Pocket II",
        points: 5,
        reward: "-"
    }, {
        description: "Earn 100,000 Flame Seals.",
        name: "Burning a Hole in My Pocket III",
        points: 10,
        reward: "Title: Flamelord"
    }, {
        description: "Earn 500,000 Flame Seals.",
        reward: "Item: Immortal Flames Escutcheon",
        name: "The Mythril Scales",
        points: 20,
    }, {
        description: "Complete 10 company levequests for the Immortal Flames.",
        name: "In Good Company: Immortal Flames I",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 100 company levequests for the Immortal Flames.",
        name: "In Good Company: Immortal Flames II",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 200 company levequests for the Immortal Flames.",
        name: "In Good Company: Immortal Flames III",
        points: 10,
        reward: "Title: The Flamesworn"
    }, {
        description: "Complete 500 company levequests for the Immortal Flames.",
        reward: "Item: Tipping Scales Bracelet",
        name: "The Silver Scales",
        points: 20,
    }, {
        description: "Complete 10 supply missions for the Immortal Flames.",
        name: "Fanning the Flames I",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 50 supply missions for the Immortal Flames.",
        name: "Fanning the Flames II",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 200 supply missions for the Immortal Flames.",
        name: "Fanning the Flames III",
        points: 10,
        reward: "Title: Flamecarrier"
    }, {
        description: "Complete 500 supply missions for the Immortal Flames.",
        reward: "Item: Tipping Scales Earrings",
        name: "The Brass Scales",
        points: 20,
    }, {
        description: "Complete 10 provisioning missions for the Immortal Flames.",
        name: "To Each According to His Need: Immortal Flames I",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 30 provisioning missions for the Immortal Flames.",
        name: "To Each According to His Need: Immortal Flames II",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 100 provisioning missions for the Immortal Flames.",
        name: "To Each According to His Need: Immortal Flames III",
        points: 10,
        reward: "Title: Flamebringer"
    }, {
        description: "Complete 200 provisioning missions for the Immortal Flames.",
        reward: "Item: Tipping Scales Ring",
        name: "The Bronze Scales",
        points: 20,
    }, {
        description: "Complete 5 unique Immortal Flames levequests.",
        name: "In the Black I",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 10 unique Immortal Flames levequests.",
        name: "In the Black II",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 15 unique Immortal Flames levequests.",
        name: "In the Black III",
        points: 10,
        reward: "-"
    }, {
        description: "Complete all Immortal Flames entries in the hunting log.",
        reward: "Item: Mammet #003U",
        name: "Bump on a Log: Immortal Flames",
        points: 20,
    }
];
