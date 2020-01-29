import { DataGroup } from "../../DataGroup";

//https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.Name_en&string=Deep%20Dungeon&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

export const Achievements_Items_Deep_Dungeon_Weapons = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        description: "Obtain a Padjali blade and a Padjali shield.",
        name: "Aetherpool Party: Sword and Shield",
        points: 10,
        reward: "-"
    }, {
        description: "Obtain a pair of Padjali knuckles.",
        name: "Aetherpool Party: Knuckles",
        points: 10,
        reward: "-"
    }, {
        description: "Obtain a Padjali axe.",
        name: "Aetherpool Party: Axe",
        points: 10,
        reward: "-"
    }, {
        description: "Obtain a Padjali spear.",
        name: "Aetherpool Party: Spear",
        points: 10,
        reward: "-"
    }, {
        description: "Obtain a Padjali longbow.",
        name: "Aetherpool Party: Bow",
        points: 10,
        reward: "-"
    }, {
        description: "Obtain a Padjali rod.",
        name: "Aetherpool Party: Rod",
        points: 10,
        reward: "-"
    }, {
        description: "Obtain a Padjali cane.",
        name: "Aetherpool Party: Cane",
        points: 10,
        reward: "-"
    }, {
        description: "Obtain a pair of Padjali daggers.",
        name: "Aetherpool Party: Daggers",
        points: 10,
        reward: "-"
    }, {
        description: "Obtain a Padjali grimoire.",
        name: "Aetherpool Party: Grimoire",
        points: 10,
        reward: "-"
    }, {
        description: "Obtain a Padjali codex.",
        name: "Aetherpool Party: Codex",
        points: 10,
        reward: "-"
    }, {
        description: "Obtain a Padjali greatsword.",
        name: "Aetherpool Party: Greatsword",
        points: 10,
        reward: "-"
    }, {
        description: "Obtain a Padjali revolver.",
        name: "Aetherpool Party: Revolver",
        points: 10,
        reward: "-"
    }, {
        description: "Obtain a Padjali astrometer.",
        name: "Aetherpool Party: Astrometer",
        points: 10,
        reward: "-"
    }, {
        description: "Obtain a piece of kinna gear.",
        name: "Some Kinna Wonderful",
        points: 10,
        reward: "Title: Lightbringer"
    }, {
        description: "Obtain a Padjali katana.",
        name: "Aetherpool Party: Katana",
        points: 10,
        reward: "-"
    }, {
        description: "Obtain a Padjali rapier.",
        name: "Aetherpool Party: Rapier",
        points: 10,
        reward: "-"
    }, {
        description: "Obtain an empyrean aetherpool weapon.",
        name: "Empyrean Dreams",
        points: 10,
        reward: "-"
    }, {
        description: "Obtain a Padjali gunblade.",
        name: "Aetherpool Party: Gunblade",
        points: 10,
        reward: "-"
    }, {
        description: "Obtain a pair of Padjali war quoits.",
        name: "Aetherpool Party: War Quoits",
        points: 10,
        reward: "-"
    }
];
