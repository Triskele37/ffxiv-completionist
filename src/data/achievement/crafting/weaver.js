import { AchievementColumnConfig } from "../columnConfigs";

//https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.Name_en&string=Weaver&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

export const WeaverCraftingAchievements = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.weaver`;

    return {
        name: "Weaver",
    	storageKey,
        columns: AchievementColumnConfig,
        tasks: [{
            description: "Successfully synthesize 50 times for level 1-10 clothcraft recipes.",
            name: "Threading the Needle: Amateur",
            points: 5,
            reward: "-"
        }, {
            description: "Successfully synthesize 300 times for level 11-20 clothcraft recipes.",
            name: "Threading the Needle: Initiate",
            points: 5,
            reward: "-"
        }, {
            description: "Successfully synthesize 750 times for level 21-30 clothcraft recipes.",
            name: "Threading the Needle: Apprentice",
            points: 5,
            reward: "-"
        }, {
            description: "Successfully synthesize 1,500 times for level 31-40 clothcraft recipes.",
            name: "Threading the Needle: Journeyman",
            points: 5,
            reward: "-"
        }, {
            description: "Successfully synthesize 3,000 times for level 41-50 clothcraft recipes.",
            name: "Threading the Needle: Artisan",
            points: 10,
            reward: "Title: Of the Golden Needle"
        }, {
            description: "Obtain the first five \u201cThreading the Needle\u201d achievements.",
            reward: "Item: Needle of the Luminary",
            name: "A Weaver's Life for Me",
            points: 30,
        }, {
            description: "Craft and record completion of 60 unique weaver recipes.",
            name: "I Made That: Weaver I",
            points: 5,
            reward: "-"
        }, {
            description: "Craft and record completion of 120 unique weaver recipes.",
            name: "I Made That: Weaver II",
            points: 5,
            reward: "-"
        }, {
            description: "Craft and record completion of 250 unique weaver recipes.",
            reward: "Item: Master Weaver's Ring",
            name: "I Made That: Weaver III",
            points: 10,
        }, {
            description: "Craft 100 high-quality items as a weaver.",
            name: "An Eye for Detail: Weaver I",
            points: 5,
            reward: "-"
        }, {
            description: "Craft 500 high-quality items as a weaver.",
            name: "An Eye for Detail: Weaver II",
            points: 5,
            reward: "-"
        }, {
            description: "Craft 3,000 high-quality items as a weaver.",
            name: "An Eye for Detail: Weaver III",
            points: 10,
            reward: "-"
        }, {
            description: "Craft and record completion of 350 unique weaver recipes.",
            name: "I Made That: Weaver IV",
            points: 10,
            reward: "-"
        }, {
            description: "Successfully synthesize 1,000 times for level 51-60 clothcraft recipes.",
            name: "Threading the Needle: Adept",
            points: 10,
            reward: "-"
        }, {
            description: "Craft 5,000 high-quality items as a weaver.",
            name: "An Eye for Detail: Weaver IV",
            points: 10,
            reward: "-"
        }, {
            description: "Craft 10,000 high-quality items as a weaver.",
            name: "An Eye for Detail: Weaver V",
            points: 10,
            reward: "Title: Master Weaver"
        }, {
            description: "Craft and record completion of 470 unique weaver recipes.",
            reward: "Item: Blessed Boltkeep's Needle",
            name: "I Made That: Weaver V",
            points: 10,
        }, {
            description: "Successfully synthesize 1,000 times for level 61-70 clothcraft recipes.",
            name: "Threading the Needle: Veteran",
            points: 10,
            reward: "-"
        }, {
            description: "Craft and record completion of 590 unique weaver recipes.",
            reward: "Item: Blessed Boltking's Needle",
            name: "I Made That: Weaver VI",
            points: 10,
        }, {
            description: "Successfully synthesize 1,000 times for level 71-80 clothcraft recipes.",
            name: "Threading the Needle: Master",
            points: 10,
            reward: "-"
        }]
    };
};
