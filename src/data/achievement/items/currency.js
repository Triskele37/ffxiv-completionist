import { DataGroup } from "../../DataGroup";

//https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.Name_en&string=Currency&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

export const Achievements_Items_Currency = function(parent) {
    return new DataGroup("Currency", parent).initializeTasks(tasks);
};

const tasks = [
    {
        description: "Earn a cumulative total of 100 gil from levequests.",
        name: "On the Payroll I",
        points: 5,
        reward: "-"
    }, {
        description: "Earn a cumulative total of 1,000 gil from levequests.",
        name: "On the Payroll II",
        points: 5,
        reward: "-"
    }, {
        description: "Earn a cumulative total of 10,000 gil from levequests.",
        name: "On the Payroll III",
        points: 5,
        reward: "-"
    }, {
        description: "Earn a cumulative total of 100,000 gil from levequests.",
        name: "On the Payroll IV",
        points: 5,
        reward: "-"
    }, {
        description: "Earn a cumulative total of 1,000,000 gil from levequests.",
        name: "On the Payroll V",
        points: 5,
        reward: "-"
    }, {
        description: "Earn a cumulative total of 10,000,000 gil from levequests.",
        name: "Who Wants to Be a Gillionaire?",
        points: 10,
        reward: "Title: Honest Gillionaire"
    }, {
        description: "Earn a cumulative total of 20,000,000 gil from levequests.",
        name: "On the Payroll VI",
        points: 20,
        reward: "-"
    },
];
