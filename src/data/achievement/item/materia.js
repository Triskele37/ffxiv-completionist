import { AchievementColumnConfig } from "../columnConfigs";

//https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.Name_en&string=Materia&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

export const MateriaItemAchievements = {
    name: 'Materia',
    columns: AchievementColumnConfig,
    tasks: [{
        description: "Successfully affix 10 materia.",
        name: "Getting Too Attached I",
        points: 5,
        reward: "-"
    }, {
        description: "Successfully affix 50 materia.",
        name: "Getting Too Attached II",
        points: 5,
        reward: "-"
    }, {
        description: "Successfully affix 100 materia.",
        name: "Getting Too Attached III",
        points: 5,
        reward: "-"
    }, {
        description: "Successfully affix 500 materia.",
        name: "Getting Too Attached IV",
        points: 5,
        reward: "-"
    }, {
        description: "Successfully affix 1,000 materia.",
        name: "Materia Hysteria",
        points: 10,
        reward: "Title: Carrier of the Cauldron"
    }, {
        description: "Successfully affix two materia to the same piece of gear.",
        name: "Beginner's Luck",
        points: 10,
        reward: "-"
    }, {
        description: "Successfully affix three materia to the same piece of gear.",
        name: "I Make My Own Luck",
        points: 20,
        reward: "-"
    }, {
        description: "Successfully affix four materia to the same piece of gear.",
        name: "Luck's Got Nothing to Do with It",
        points: 30,
        reward: "-"
    }, {
        description: "Successfully affix five materia to the same piece of gear.",
        reward: "Item: Gambler's Crown",
        name: "I Got This!",
        points: 40,
    }, {
        description: "Successfully convert 10 spiritbound items into materia.",
        name: "Prepare to Be Assimilated I",
        points: 5,
        reward: "-"
    }, {
        description: "Successfully convert 50 spiritbound items into materia.",
        name: "Prepare to Be Assimilated II",
        points: 5,
        reward: "-"
    }, {
        description: "Successfully convert 100 spiritbound items into materia.",
        name: "Prepare to Be Assimilated III",
        points: 5,
        reward: "-"
    }, {
        description: "Successfully convert 500 spiritbound items into materia.",
        name: "Prepare to Be Assimilated IV",
        points: 5,
        reward: "-"
    }, {
        description: "Successfully convert 1,000 spiritbound items into materia.",
        name: "Living in a Materia World",
        points: 10,
        reward: "Title: The Assimilator"
    }, {
        description: "Obtain materia of a higher grade through transmutation.",
        name: "I Got a Good Materia",
        points: 10,
        reward: "-"
    }, {
        description: "Successfully affix 2,500 materia.",
        name: "Getting Too Attached V",
        points: 10,
        reward: "-"
    }, {
        description: "Successfully affix 5,000 materia.",
        name: "Getting Too Attached VI",
        points: 10,
        reward: "-"
    }, {
        description: "Successfully convert 5,000 spiritbound items into materia.",
        name: "Prepare to Be Assimilated V",
        points: 10,
        reward: "-"
    }, {
        description: "Successfully affix 10,000 materia.",
        name: "Getting Too Attached VII",
        points: 10,
        reward: "-"
    }]
}
