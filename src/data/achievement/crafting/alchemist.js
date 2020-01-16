import { AchievementColumnConfig } from "../columnConfigs";

//https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.Name_en&string=Alchemist&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

export const AlchemistCraftingAchievements = {
    name: 'Alchemist',
	storageKey: "achievement.crafting.alchemist",
    columns: AchievementColumnConfig,
    tasks: [{
        description: "Successfully synthesize 50 times for level 1-10 alchemy recipes.",

        name: "Mixing It Up: Amateur",
        points: 5,
        reward: "-"
    }, {
        description: "Successfully synthesize 300 times for level 11-20 alchemy recipes.",

        name: "Mixing It Up: Initiate",
        points: 5,
        reward: "-"
    }, {
        description: "Successfully synthesize 750 times for level 21-30 alchemy recipes.",

        name: "Mixing It Up: Apprentice",
        points: 5,
        reward: "-"
    }, {
        description: "Successfully synthesize 1,500 times for level 31-40 alchemy recipes.",

        name: "Mixing It Up: Journeyman",
        points: 5,
        reward: "-"
    }, {
        description: "Successfully synthesize 3,000 times for level 41-50 alchemy recipes.",

        name: "Mixing It Up: Artisan",
        points: 10,
        reward: "Title: Of the Golden Lead"
    }, {
        description: "Obtain the first five “Mixing it Up” achievements.",
        reward: "Item: Alembic of the Luminary",
        name: "An Alchemist's Life for Me",
        points: 30,
    }, {
        description: "Craft and record completion of 30 unique alchemist recipes.",

        name: "I Made That: Alchemist I",
        points: 5,
        reward: "-"
    }, {
        description: "Craft and record completion of 60 unique alchemist recipes.",

        name: "I Made That: Alchemist II",
        points: 5,
        reward: "-"
    }, {
        description: "Craft and record completion of 110 unique alchemist recipes.",
        reward: "Item: Master Alchemist's Ring",
        name: "I Made That: Alchemist III",
        points: 10,
    }, {
        description: "Craft 100 high-quality items as an alchemist.",

        name: "An Eye for Detail: Alchemist I",
        points: 5,
        reward: "-"
    }, {
        description: "Craft 500 high-quality items as an alchemist.",

        name: "An Eye for Detail: Alchemist II",
        points: 5,
        reward: "-"
    }, {
        description: "Craft 3,000 high-quality items as an alchemist.",

        name: "An Eye for Detail: Alchemist III",
        points: 10,
        reward: "-"
    }, {
        description: "Craft and record completion of 170 unique alchemist recipes.",

        name: "I Made That: Alchemist IV",
        points: 10,
        reward: "-"
    }, {
        description: "Successfully synthesize 1,000 times for level 51-60 alchemy recipes.",

        name: "Mixing It Up: Adept",
        points: 10,
        reward: "-"
    }, {
        description: "Craft 5,000 high-quality items as an alchemist.",

        name: "An Eye for Detail: Alchemist IV",
        points: 10,
        reward: "-"
    }, {
        description: "Craft 10,000 high-quality items as an alchemist.",

        name: "An Eye for Detail: Alchemist V",
        points: 10,
        reward: "Title: Master Alchemist"
    }, {
        description: "Craft and record completion of 270 unique alchemist recipes.",
        reward: "Item: Blessed Cauldronkeep's Alembic",
        name: "I Made That: Alchemist V",
        points: 10,
    }, {
        description: "Successfully synthesize 1,000 times for level 61-70 alchemy recipes.",

        name: "Mixing It Up: Veteran",
        points: 10,
        reward: "-"
    }, {
        description: "Craft and record completion of 370 unique alchemist recipes.",
        reward: "Item: Blessed Cauldronking's Alembic",
        name: "I Made That: Alchemist VI",
        points: 10,
    }, {
        description: "Successfully synthesize 1,000 times for level 71-80 alchemy recipes.",

        name: "Mixing It Up: Master",
        points: 10,
        reward: "-"
    }]
};
