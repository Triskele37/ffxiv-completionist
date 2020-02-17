import { DataGroup } from "../../DataGroup";

//https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.Name_en&string=Abalathia%27s%20Spine&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

export const Achievements_Exploration_Abalathias_Spine = function(parent) {
    return new DataGroup("Abalathia's Spine", parent).initializeTasks(tasks);
};

const tasks = [
    {
        description: "Discover every location in the Sea of Clouds.",
        name: "Mapping the Realm: Sea of Clouds",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location on Azys Lla.",
        name: "Mapping the Realm: Azys Lla",
        points: 10,
        reward: "-"
    }
];
