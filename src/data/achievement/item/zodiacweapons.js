import { DataGroup } from "../../DataGroup";

//https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.Name_en&string=Zodiac%20Weapons&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

export const Achievements_Items_Zodiac_Weapons = function(name, parent) {
    const data = new DataGroup(name, parent);
    data.initializeTasks(tasks);

    return data;
};

const tasks = [
    {
        description: "Obtain a Zodiac Weapon.",
        name: "Lethal Weapon",
        points: 10,
        reward: "-"
    }, {
        description: "Obtain a Zodiac Weapon Zeta.",
        name: "The Letter Z",
        points: 20,
        reward: "Title: Z"
    }
];
