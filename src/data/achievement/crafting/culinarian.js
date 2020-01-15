import { AchievementColumnConfig } from "../columnConfigs";

//https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.Name_en&string=Culinarian&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

export const CulinarianCraftingAchievements = {
    name: 'Culinarian',
    columns: AchievementColumnConfig,
    tasks: [{
        description: "Successfully synthesize 50 times for level 1-10 cooking recipes.",
        name: "Savoring the Realm: Amateur",
        points: 5,
        reward: "-"
    }, {
        description: "Successfully synthesize 300 times for level 11-20 cooking recipes.",
        name: "Savoring the Realm: Initiate",
        points: 5,
        reward: "-"
    }, {
        description: "Successfully synthesize 750 times for level 21-30 cooking recipes.",
        name: "Savoring the Realm: Apprentice",
        points: 5,
        reward: "-"
    }, {
        description: "Successfully synthesize 1,500 times for level 31-40 cooking recipes.",
        name: "Savoring the Realm: Journeyman",
        points: 5,
        reward: "-"
    }, {
        description: "Successfully synthesize 3,000 times for level 41-50 cooking recipes.",
        name: "Savoring the Realm: Artisan",
        points: 10,
        reward: "Title: Of the Golden Ladle"
    }, {
        description: "Obtain the first five \u201cSavoring the Realm\u201d achievements.",
        reward: "Item: Pan of the Luminary",
        name: "A Life of Cooking",
        points: 30,
    }, {
        description: "Craft and record completion of 30 unique culinarian recipes.",
        name: "I Made That: Culinarian I",
        points: 5,
        reward: "-"
    }, {
        description: "Craft and record completion of 60 unique culinarian recipes.",
        name: "I Made That: Culinarian II",
        points: 5,
        reward: "-"
    }, {
        description: "Craft and record completion of 120 unique culinarian recipes.",
        reward: "Item: Master Culinarian's Ring",
        name: "I Made That: Culinarian III",
        points: 10,
    }, {
        description: "Craft 100 high-quality items as a culinarian.",
        name: "An Eye for Detail: Culinarian I",
        points: 5,
        reward: "-"
    }, {
        description: "Craft 500 high-quality items as a culinarian.",
        name: "An Eye for Detail: Culinarian II",
        points: 5,
        reward: "-"
    }, {
        description: "Craft 3,000 high-quality items as a culinarian.",
        name: "An Eye for Detail: Culinarian III",
        points: 10,
        reward: "-"
    }, {
        description: "Craft and record completion of 160 unique culinarian recipes.",
        name: "I Made That: Culinarian IV",
        points: 10,
        reward: "-"
    }, {
        description: "Successfully synthesize 1,000 times for level 51-60 cooking recipes.",
        name: "Savoring the Realm: Adept",
        points: 10,
        reward: "-"
    }, {
        description: "Craft 5,000 high-quality items as a culinarian.",
        name: "An Eye for Detail: Culinarian IV",
        points: 10,
        reward: "-"
    }, {
        description: "Craft 10,000 high-quality items as a culinarian.",
        name: "An Eye for Detail: Culinarian V",
        points: 10,
        reward: "Title: Master Culinarian"
    }, {
        description: "Craft and record completion of 190 unique culinarian recipes.",
        reward: "Item: Blessed Galleykeep's Frypan",
        name: "I Made That: Culinarian V",
        points: 10,
    }, {
        description: "Successfully synthesize 1,000 times for level 61-70 cooking recipes.",
        name: "Savoring the Realm: Veteran",
        points: 10,
        reward: "-"
    }, {
        description: "Craft and record completion of 230 unique culinarian recipes.",
        reward: "Item: Blessed Galleyking's Frypan",
        name: "I Made That: Culinarian VI",
        points: 10,
    }, {
        description: "Successfully synthesize 1,000 times for level 71-80 cooking recipes.",
        name: "Savoring the Realm: Master",
        points: 10,
        reward: "-"
    }]
}
