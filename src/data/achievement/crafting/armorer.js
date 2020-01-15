import { AchievementColumnConfig } from "../columnConfigs";

//https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.Name_en&string=Armorer&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

export const ArmorerCraftingAchievements = {
    name: 'Armorer',
    columns: AchievementColumnConfig,
    tasks: [{
        description: "Successfully synthesize 50 times for level 1-10 armorcraft recipes.",

        name: "Pounding Out the Dents: Amateur",
        points: 5,
        reward: "-"
    }, {
        description: "Successfully synthesize 300 times for level 11-20 armorcraft recipes.",

        name: "Pounding Out the Dents: Initiate",
        points: 5,
        reward: "-"
    }, {
        description: "Successfully synthesize 750 times for level 21-30 armorcraft recipes.",

        name: "Pounding Out the Dents: Apprentice",
        points: 5,
        reward: "-"
    }, {
        description: "Successfully synthesize 1,500 times for level 31-40 armorcraft recipes.",

        name: "Pounding Out the Dents: Journeyman",
        points: 5,
        reward: "-"
    }, {
        description: "Successfully synthesize 3,000 times for level 41-50 armorcraft recipes.",

        name: "Pounding Out the Dents: Artisan",
        points: 10,
        reward: "Title: Of the Golden Hammer"
    }, {
        description: "Obtain the first five “Pounding Out the Dents” achievements.",
        reward: "Item: Mallet of the Luminary",
        name: "An Armorer's Life for Me",
        points: 30,
    }, {
        description: "Craft and record completion of 40 unique armorer recipes.",

        name: "I Made That: Armorer I",
        points: 5,
        reward: "-"
    }, {
        description: "Craft and record completion of 80 unique armorer recipes.",

        name: "I Made That: Armorer II",
        points: 5,
        reward: "-"
    }, {
        description: "Craft and record completion of 170 unique armorer recipes.",
        reward: "Item: Master Armorer's Ring",
        name: "I Made That: Armorer III",
        points: 10,
    }, {
        description: "Craft 100 high-quality items as an armorer.",

        name: "An Eye for Detail: Armorer I",
        points: 5,
        reward: "-"
    }, {
        description: "Craft 500 high-quality items as an armorer.",

        name: "An Eye for Detail: Armorer II",
        points: 5,
        reward: "-"
    }, {
        description: "Craft 3,000 high-quality items as an armorer.",

        name: "An Eye for Detail: Armorer III",
        points: 10,
        reward: "-"
    }, {
        description: "Craft and record completion of 230 unique armorer recipes.",

        name: "I Made That: Armorer IV",
        points: 10,
        reward: "-"
    }, {
        description: "Successfully synthesize 1,000 times for level 51-60 armorcraft recipes.",

        name: "Pounding Out the Dents: Adept",
        points: 10,
        reward: "-"
    }, {
        description: "Craft 5,000 high-quality items as an armorer.",

        name: "An Eye for Detail: Armorer IV",
        points: 10,
        reward: "-"
    }, {
        description: "Craft 10,000 high-quality items as an armorer.",

        name: "An Eye for Detail: Armorer V",
        points: 10,
        reward: "Title: Master Armorer"
    }, {
        description: "Craft and record completion of 300 unique armorer recipes.",
        reward: "Item: Blessed Hammerkeep's Beetle",
        name: "I Made That: Armorer V",
        points: 10,
    }, {
        description: "Successfully synthesize 1,000 times for level 61-70 armorcraft recipes.",

        name: "Pounding Out the Dents: Veteran",
        points: 10,
        reward: "-"
    }, {
        description: "Craft and record completion of 370 unique armorer recipes.",
        reward: "Item: Blessed Hammerking's Beetle",
        name: "I Made That: Armorer VI",
        points: 10,
    }, {
        description: "Successfully synthesize 1,000 times for level 71-80 armorcraft recipes.",

        name: "Pounding Out the Dents: Master",
        points: 10,
        reward: "-"
    }]
}
