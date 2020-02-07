import { DataGroup } from "../../DataGroup";

//https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.Name_en&string=Dravania&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

export const Achievements_Exploration_Dravania = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        description: "Discover every location in the Dravanian forelands.",
        name: "Mapping the Realm: Dravanian Forelands",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location in the Dravanian hinterlands.",
        name: "Mapping the Realm: Dravanian Hinterlands",
        points: 10,
        reward: "-"
    }, {
        description: "Discover every location in the Churning Mists.",
        name: "Mapping the Realm: Churning Mists",
        points: 10,
        reward: "-"
    }
];
