import { AchievementColumnConfig } from "../columnConfigs";

//https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.Name_en&string=Order%20of%20the%20Twin%20Adder&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

export const TwinAdderGrandCompanyAchievements = {
    name: 'Order of the Twin Adder',
    columns: AchievementColumnConfig,
    tasks: [{
        description: "Officially enlist in the Order of the Twin Adder.",
        name: "Snakebitten",
        points: 5,
        reward: "-"
    }, {
        description: "Earn 10,000 Serpent Seals.",
        name: "A Snake in the Brass I",
        points: 5,
        reward: "-"
    }, {
        description: "Earn 50,000 Serpent Seals.",
        name: "A Snake in the Brass II",
        points: 5,
        reward: "-"
    }, {
        description: "Earn 100,000 Serpent Seals.",
        name: "A Snake in the Brass III",
        points: 10,
        reward: "Title: Serpentlord"
    }, {
        description: "Earn 500,000 Serpent Seals.",
        reward: "Item: Twin Adder Escutcheon",
        name: "The Mahogany Leaf",
        points: 20,
    }, {
        description: "Complete 10 company levequests for the Order of the Twin Adder.",
        name: "In Good Company: Twin Adder I",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 100 company levequests for the Order of the Twin Adder.",
        name: "In Good Company: Twin Adder II",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 200 company levequests for the Order of the Twin Adder.",
        name: "In Good Company: Twin Adder III",
        points: 10,
        reward: "Title: The Serpentsworn"
    }, {
        description: "Complete 500 company levequests for the Order of the Twin Adder.",
        reward: "Item: Lily and Serpent Bracelet ",
        name: "The Ironwood Leaf",
        points: 20,
    }, {
        description: "Complete 10 supply missions for the Order of the Twin Adder.",
        name: "Feeding the Serpent I",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 50 supply missions for the Order of the Twin Adder.",
        name: "Feeding the Serpent II",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 200 supply missions for the Order of the Twin Adder.",
        name: "Feeding the Serpent III",
        points: 10,
        reward: "Title: Serpentcarrier"
    }, {
        description: "Complete 500 supply missions for the Order of the Twin Adder.",
        reward: "Item: Lily and Serpent Earrings",
        name: "The Sycamore Leaf",
        points: 20,
    }, {
        description: "Complete 10 provisioning missions for the Order of the Twin Adder.",
        name: "To Each According to His Need: Twin Adder I",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 30 provisioning missions for the Order of the Twin Adder.",
        name: "To Each According to His Need: Twin Adder II",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 100 provisioning missions for the Order of the Twin Adder.",
        name: "To Each According to His Need: Twin Adder III",
        points: 10,
        reward: "Title: Serpentbringer"
    }, {
        description: "Complete 200 provisioning missions for the Order of the Twin Adder.",
        reward: "Item: Lily and Serpent Ring",
        name: "The Willow Leaf",
        points: 20,
    }, {
        description: "Complete 5 unique Order of the Twin Adder levequests.",
        name: "In the Yellow I",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 10 unique Order of the Twin Adder levequests.",
        name: "In the Yellow II",
        points: 5,
        reward: "-"
    }, {
        description: "Complete 15 unique Order of the Twin Adder levequests.",
        name: "In the Yellow III",
        points: 10,
        reward: "-"
    }, {
        description: "Complete all Order of the Twin Adder entries in the hunting log.",
        reward: "Item: Mammet #003G",
        name: "Bump on a Log: Order of the Twin Adder",
        points: 20,
    }]
}
