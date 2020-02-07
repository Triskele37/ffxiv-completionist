import { DataGroup } from "../../DataGroup";

//https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.Name_en&string=La%20Noscea&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

export const Achievements_Exploration_La_Noscea = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        description: "Visit middle La Noscea and unlock the area map.",
        name: "Mapping the Realm: Middle La Noscea",
        points: 10,
        reward: "-"
    }, {
        description: "Visit lower La Noscea and unlock the area map.",
        name: "Mapping the Realm: Lower La Noscea",
        points: 10,
        reward: "-"
    }, {
        description: "Visit eastern La Noscea and unlock the area map.",
        name: "Mapping the Realm: Eastern La Noscea",
        points: 10,
        reward: "-"
    }, {
        description: "Visit western La Noscea and unlock the area map.",
        name: "Mapping the Realm: Western La Noscea",
        points: 10,
        reward: "-"
    }, {
        description: "Visit upper La Noscea and unlock the area map.",
        name: "Mapping the Realm: Upper La Noscea",
        points: 10,
        reward: "-"
    }, {
        description: "Visit outer La Noscea and unlock the area map.",
        name: "Mapping the Realm: Outer La Noscea",
        points: 10,
        reward: "-"
    }
];
