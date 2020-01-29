import { DataGroup } from "../../DataGroup";

//https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.Name_en&string=Desynthesis&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

export const Achievements_Items_Desynthesis = function(name, parent) {
    const data = new DataGroup(name, parent);
    data.initializeTasks(tasks);

    return data;
};

const tasks = [
    {
        description: "Successfully desynthesize 50 items.",
        name: "Break It Down I",
        points: 5,
        reward: "-"
    }, {
        description: "Successfully desynthesize 200 items.",
        name: "Break It Down II",
        points: 5,
        reward: "-"
    }, {
        description: "Successfully desynthesize 500 items.",
        name: "Break It Down III",
        points: 5,
        reward: "-"
    }, {
        description: "Successfully desynthesize 1,000 items.",
        name: "Break It Down IV",
        points: 5,
        reward: "-"
    }, {
        description: "Successfully desynthesize 2,000 items.",
        name: "Break It Down V",
        points: 10,
        reward: "-"
    }, {
        description: "Successfully desynthesize 5,000 items.",
        name: "You're Tearing Me Apart",
        points: 10,
        reward: "Title: The Disassembler"
    }, {
        description: "Successfully desynthesize 10,000 items.",
        name: "You're Tearing Me Apart II",
        points: 10,
        reward: "-"
    }
];
