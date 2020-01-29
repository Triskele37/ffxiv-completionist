import { DataGroup } from "../../DataGroup";

//https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.Name_en&string=Eureka%20Weapons&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

export const Achievements_Items_Eureka_Weapons = function(name, parent) {
    const data = new DataGroup(name, parent);
    data.initializeTasks(tasks);

    return data;
};

const tasks = [
    {
        description: "Obtain Galatyn Anemos and Evalach Anemos.",
        name: "I've Got It: Galatyn Anemos & Evalach Anemos",
        points: 10,
        reward: "-"
    }, {
        description: "Obtain Farsha Anemos.",
        name: "I've Got It: Farsha Anemos",
        points: 10,
        reward: "-"
    }, {
        description: "Obtain Caladbolg Anemos.",
        name: "I've Got It: Caladbolg Anemos",
        points: 10,
        reward: "-"
    }, {
        description: "Obtain Ryunohige Anemos.",
        name: "I've Got It: Ryunohige Anemos",
        points: 10,
        reward: "-"
    }, {
        description: "Obtain a pair of Sudarshana Chakra Anemos.",
        name: "I've Got It: Sudarshana Chakra Anemos",
        points: 10,
        reward: "-"
    }, {
        description: "Obtain a pair of Nagi Anemos.",
        name: "I've Got It: Nagi Anemos",
        points: 10,
        reward: "-"
    }, {
        description: "Obtain Kiku-ichimonji Anemos.",
        name: "I've Got It: Kiku-ichimonji Anemos",
        points: 10,
        reward: "-"
    }, {
        description: "Obtain Failnaught Anemos.",
        name: "I've Got It: Failnaught Anemos",
        points: 10,
        reward: "-"
    }, {
        description: "Obtain Outsider Anemos.",
        name: "I've Got It: Outsider Anemos",
        points: 10,
        reward: "-"
    }, {
        description: "Obtain Vanargand Anemos.",
        name: "I've Got It: Vanargand Anemos",
        points: 10,
        reward: "-"
    }, {
        description: "Obtain a copy of Lemegeton Anemos.",
        name: "I've Got It: Lemegeton Anemos",
        points: 10,
        reward: "-"
    }, {
        description: "Obtain Murgleis Anemos.",
        name: "I've Got It: Murgleis Anemos",
        points: 10,
        reward: "-"
    }, {
        description: "Obtain Aymur Anemos.",
        name: "I've Got It: Aymur Anemos",
        points: 10,
        reward: "-"
    }, {
        description: "Obtain a copy of Organum Anemos.",
        name: "I've Got It: Organum Anemos",
        points: 10,
        reward: "-"
    }, {
        description: "Obtain Pleiades Anemos.",
        name: "I've Got It: Pleiades Anemos",
        points: 10,
        reward: "-"
    }, {
        description: "Obtain an elemental sword and an elemental shield.",
        name: "I've Got It: Elemental Sword",
        points: 10,
        reward: "-"
    }, {
        description: "Obtain an elemental battleaxe.",
        name: "I've Got It: Elemental Battleaxe",
        points: 10,
        reward: "-"
    }, {
        description: "Obtain an elemental guillotine.",
        name: "I've Got It: Elemental Guillotine",
        points: 10,
        reward: "-"
    }, {
        description: "Obtain an elemental lance.",
        name: "I've Got It: Elemental Lance",
        points: 10,
        reward: "-"
    }, {
        description: "Obtain a pair of elemental knuckles.",
        name: "I've Got It: Elemental Knuckles",
        points: 10,
        reward: "-"
    }, {
        description: "Obtain a pair of elemental knives.",
        name: "I've Got It: Elemental Knives",
        points: 10,
        reward: "-"
    }, {
        description: "Obtain an elemental blade.",
        name: "I've Got It: Elemental Blade",
        points: 10,
        reward: "-"
    }, {
        description: "Obtain an elemental harp bow.",
        name: "I've Got It: Elemental Harp Bow",
        points: 10,
        reward: "-"
    }, {
        description: "Obtain an elemental handgonne.",
        name: "I've Got It: Elemental Handgonne",
        points: 10,
        reward: "-"
    }, {
        description: "Obtain an elemental rod.",
        name: "I've Got It: Elemental Rod",
        points: 10,
        reward: "-"
    }, {
        description: "Obtain an elemental grimoire.",
        name: "I've Got It: Elemental Grimoire",
        points: 10,
        reward: "-"
    }, {
        description: "Obtain an elemental tuck.",
        name: "I've Got It: Elemental Tuck",
        points: 10,
        reward: "-"
    }, {
        description: "Obtain an elemental cane.",
        name: "I've Got It: Elemental Cane",
        points: 10,
        reward: "-"
    }, {
        description: "Obtain an elemental codex.",
        name: "I've Got It: Elemental Codex",
        points: 10,
        reward: "-"
    }, {
        description: "Obtain an elemental astrometer.",
        name: "I've Got It: Elemental Astrometer",
        points: 10,
        reward: "-"
    }, {
        description: "Obtain a Pyros sword and a Pyros shield.",
        name: "I've Got It: Pyros Sword",
        points: 10,
        reward: "-"
    }, {
        description: "Obtain a Pyros battleaxe.",
        name: "I've Got It: Pyros Battleaxe",
        points: 10,
        reward: "-"
    }, {
        description: "Obtain a Pyros guillotine.",
        name: "I've Got It: Pyros Guillotine",
        points: 10,
        reward: "-"
    }, {
        description: "Obtain a Pyros lance.",
        name: "I've Got It: Pyros Lance",
        points: 10,
        reward: "-"
    }, {
        description: "Obtain a pair of Pyros knuckles.",
        name: "I've Got It: Pyros Knuckles",
        points: 10,
        reward: "-"
    }, {
        description: "Obtain a pair of Pyros knives.",
        name: "I've Got It: Pyros Knives",
        points: 10,
        reward: "-"
    }, {
        description: "Obtain a Pyros blade.",
        name: "I've Got It: Pyros Blade",
        points: 10,
        reward: "-"
    }, {
        description: "Obtain a Pyros harp bow.",
        name: "I've Got It: Pyros Harp Bow",
        points: 10,
        reward: "-"
    }, {
        description: "Obtain a Pyros handgonne.",
        name: "I've Got It: Pyros Handgonne",
        points: 10,
        reward: "-"
    }, {
        description: "Obtain a Pyros rod.",
        name: "I've Got It: Pyros Rod",
        points: 10,
        reward: "-"
    }, {
        description: "Obtain a Pyros grimoire.",
        name: "I've Got It: Pyros Grimoire",
        points: 10,
        reward: "-"
    }, {
        description: "Obtain a Pyros tuck.",
        name: "I've Got It: Pyros Tuck",
        points: 10,
        reward: "-"
    }, {
        description: "Obtain a Pyros cane.",
        name: "I've Got It: Pyros Cane",
        points: 10,
        reward: "-"
    }, {
        description: "Obtain a Pyros codex.",
        name: "I've Got It: Pyros Codex",
        points: 10,
        reward: "-"
    }, {
        description: "Obtain a Pyros astrometer.",
        name: "I've Got It: Pyros Astrometer",
        points: 10,
        reward: "-"
    }, {
        description: "Obtain Antea Eureka and Bellerophon Eureka.",
        name: "I've Got It: Antea Eureka & Bellerophon Eureka",
        points: 10,
        reward: "-"
    }, {
        description: "Obtain Shamash Eureka.",
        name: "I've Got It: Shamash Eureka",
        points: 10,
        reward: "-"
    }, {
        description: "Obtain Xiphias Eureka.",
        name: "I've Got It: Xiphias Eureka",
        points: 10,
        reward: "-"
    }, {
        description: "Obtain Daboya Eureka.",
        name: "I've Got It: Daboya Eureka",
        points: 10,
        reward: "-"
    }, {
        description: "Obtain a pair of Dumuzis Eureka.",
        name: "I've Got It: Dumuzis Eureka",
        points: 10,
        reward: "-"
    }, {
        description: "Obtain a pair of Kasasagi Eureka.",
        name: "I've Got It: Kasasagi Eureka",
        points: 10,
        reward: "-"
    }, {
        description: "Obtain Torigashira Eureka.",
        name: "I've Got It: Torigashira Eureka",
        points: 10,
        reward: "-"
    }, {
        description: "Obtain Circinae Eureka.",
        name: "I've Got It: Circinae Eureka",
        points: 10,
        reward: "-"
    }, {
        description: "Obtain Mollfrith Eureka.",
        name: "I've Got It: Mollfrith Eureka",
        points: 10,
        reward: "-"
    }, {
        description: "Obtain Paikea Eureka.",
        name: "I've Got It: Paikea Eureka",
        points: 10,
        reward: "-"
    }, {
        description: "Obtain Tuah Eureka.",
        name: "I've Got It: Tuah Eureka",
        points: 10,
        reward: "-"
    }, {
        description: "Obtain Brunello Eureka.",
        name: "I've Got It: Brunello Eureka",
        points: 10,
        reward: "-"
    }, {
        description: "Obtain Rose Couverte Eureka.",
        name: "I've Got It: Rose Couverte Eureka",
        points: 10,
        reward: "-"
    }, {
        description: "Obtain Jebat Eureka.",
        name: "I've Got It: Jebat Eureka",
        points: 10,
        reward: "-"
    }, {
        description: "Obtain Albireo Eureka.",
        name: "I've Got It: Albireo Eureka",
        points: 10,
        reward: "-"
    }
];
