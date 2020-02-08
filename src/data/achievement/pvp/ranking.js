import { DataGroup } from "../../DataGroup";

// https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.Name_en&string=Ranking&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

export const Achievements_PvP_Ranking = function(parent) {
    return new DataGroup("Ranking", parent).initializeTasks(tasks);
};

const tasks = [
    {
        description: "Complete a Feast season ranked #1 (solo).",
        name: "Head of the Table",
        points: 20,
        reward: "Title: Leader of the Pack"
    }, {
        description: "Complete a Feast season ranked #2-#10 (solo).",
        name: "Dinner for Two (to Ten)",
        points: 10,
        reward: "Title: Beta Wolf"
    }, {
        description: "Complete a Feast season ranked #11-#100 (solo).",
        name: "Dinner for Eleven (to One Hundred)",
        points: 10,
        reward: "Title: Hunter Wolf"
    }, {
        description: "Complete a Feast season in the Bronze tier (solo).",
        name: "Dining Solo: Bronze",
        points: 10,
        reward: "Title: Bronze Wolf"
    }, {
        description: "Complete a Feast season in the Silver tier (solo).",
        name: "Dining Solo: Silver",
        points: 10,
        reward: "Title: Silver Wolf"
    }, {
        description: "Complete a Feast season in the Gold tier (solo).",
        name: "Dining Solo: Gold",
        points: 10,
        reward: "Title: Gold Wolf"
    }, {
        description: "Complete a Feast season in the Platinum tier (solo).",
        name: "Dining Solo: Platinum",
        points: 10,
        reward: "Title: Platinum Wolf"
    }, {
        description: "Complete a Feast season in the Diamond tier (solo).",
        name: "Dining Solo: Diamond",
        points: 20,
        reward: "Title: Diamond Wolf"
    }, {
        description: "Complete a Feast season ranked #1 (party).",
        name: "It's My Party",
        points: 20,
        reward: "Title: Of the First Pack"
    }, {
        description: "Complete a Feast season ranked #2-#10 (party).",
        name: "Party of Two (to Ten)",
        points: 20,
        reward: "Title: Of the Second Pack"
    }, {
        description: "Complete a Feast season ranked #11-#30 (party).",
        name: "Party of Eleven (to Thirty)",
        points: 20,
        reward: "Title: Of the Hungry Pack"
    }, {
        description: "Complete a Feast season in the Bronze tier (party).",
        name: "Diners' Club: Bronze",
        points: 20,
        reward: "Title: Of the Bronze Pack"
    }, {
        description: "Complete a Feast season in the Silver tier (party).",
        name: "Diners' Club: Silver",
        points: 20,
        reward: "Title: Of the Silver Pack"
    }, {
        description: "Complete a Feast season in the Gold tier (party).",
        name: "Diners' Club: Gold",
        points: 20,
        reward: "Title: Of the Gold Pack"
    }, {
        description: "Complete a Feast season in the Platinum tier (party).",
        name: "Diners' Club: Platinum",
        points: 20,
        reward: "Title: Of the Platinum Pack"
    }, {
        description: "Complete a Feast season in the Diamond tier (party).",
        name: "Diners' Club: Diamond",
        points: 20,
        reward: "Title: Of the Diamond Pack"
    }
];
