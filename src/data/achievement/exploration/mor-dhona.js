import { DataGroup } from "../../DataGroup";

//https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.Name_en&string=Mor%20Dhona&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

export const Achievements_Exploration_Mor_Dhona = function(parent) {
    return new DataGroup("Mor Dhona", parent).initializeTasks(tasks);
};

const tasks = [
    {
        description: "Visit Mor Dhona and unlock the area map.",
        name: "Mapping the Realm: Mor Dhona",
        points: 10,
        reward: "-"
    }
];
