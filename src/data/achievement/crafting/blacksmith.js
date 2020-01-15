import { AchievementColumnConfig } from "../columnConfigs";

//https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.Name_en&string=Blacksmith&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

export const BlacksmithCraftingAchievements = {
    name: 'Blacksmith',
    columns: AchievementColumnConfig,
    tasks: [{
        description: "Successfully synthesize 50 times for level 1-10 smithing recipes.",

        name: "Working the Bellows: Amateur",
        points: 5,
        reward: "-"
    }, {
        description: "Successfully synthesize 300 times for level 11-20 smithing recipes.",

        name: "Working the Bellows: Initiate",
        points: 5,
        reward: "-"
    }, {
        description: "Successfully synthesize 750 times for level 21-30 smithing recipes.",

        name: "Working the Bellows: Apprentice",
        points: 5,
        reward: "-"
    }, {
        description: "Successfully synthesize 1,500 times for level 31-40 smithing recipes.",

        name: "Working the Bellows: Journeyman",
        points: 5,
        reward: "-"
    }, {
        description: "Successfully synthesize 3,000 times for level 41-50 smithing recipes.",

        name: "Working the Bellows: Artisan",
        points: 10,
        reward: "Title: Of the Golden Anvil"
    }, {
        description: "Obtain the first five “Working the Bellows” achievements.",
        reward: "Item: Hammer of the Luminary",
        name: "A Blacksmith's Life for Me",
        points: 30,
    }, {
        description: "Craft and record completion of 40 unique blacksmith recipes.",

        name: "I Made That: Blacksmith I",
        points: 5,
        reward: "-"
    }, {
        description: "Craft and record completion of 90 unique blacksmith recipes.",

        name: "I Made That: Blacksmith II",
        points: 5,
        reward: "-"
    }, {
        description: "Craft and record completion of 190 unique blacksmith recipes.",
        reward: "Item: Master Blacksmith's Ring",
        name: "I Made That: Blacksmith III",
        points: 10,
    }, {
        description: "Craft 100 high-quality items as a blacksmith.",

        name: "An Eye for Detail: Blacksmith I",
        points: 5,
        reward: "-"
    }, {
        description: "Craft 500 high-quality items as a blacksmith.",

        name: "An Eye for Detail: Blacksmith II",
        points: 5,
        reward: "-"
    }, {
        description: "Craft 3,000 high-quality items as a blacksmith.",

        name: "An Eye for Detail: Blacksmith III",
        points: 10,
        reward: "-"
    }, {
        description: "Craft and record completion of 270 unique blacksmith recipes.",

        name: "I Made That: Blacksmith IV",
        points: 10,
        reward: "-"
    }, {
        description: "Successfully synthesize 1,000 times for level 51-60 smithing recipes.",

        name: "Working the Bellows: Adept",
        points: 10,
        reward: "-"
    }, {
        description: "Craft 5,000 high-quality items as a blacksmith.",

        name: "An Eye for Detail: Blacksmith IV",
        points: 10,
        reward: "-"
    }, {
        description: "Craft 10,000 high-quality items as a blacksmith.",

        name: "An Eye for Detail: Blacksmith V",
        points: 10,
        reward: "Title: Master Blacksmith"
    }, {
        description: "Craft and record completion of 380 unique blacksmith recipes.",
        reward: "Item: Blessed Forgekeep's Hammer",
        name: "I Made That: Blacksmith V",
        points: 10,
    }, {
        description: "Successfully synthesize 1,000 times for level 61-70 smithing recipes.",

        name: "Working the Bellows: Veteran",
        points: 10,
        reward: "-"
    }, {
        description: "Craft and record completion of 480 unique blacksmith recipes.",
        reward: "Item: Blessed Forgeking's Hammer",
        name: "I Made That: Blacksmith VI",
        points: 10,
    }, {
        description: "Successfully synthesize 1,000 times for level 71-80 smithing recipes.",

        name: "Working the Bellows: Master",
        points: 10,
        reward: "-"
    }]
}
