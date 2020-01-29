import { DataGroup } from "../../DataGroup";

// https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.Name_en&string=Rival%20Wings&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

export const Achievements_PVP_Rival_Wings = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        description: "Participate in a Rival Wings campaign.",
        name: "Roll the Dice I",
        points: 5,
        reward: "-"
    }, {
        description: "Participate in a Rival Wings campaign 50 times.",
        name: "Roll the Dice II",
        points: 5,
        reward: "-"
    }, {
        description: "Participate in a Rival Wings campaign 100 times.",
        name: "Roll the Dice III",
        points: 5,
        reward: "-"
    }, {
        description: "Participate in a Rival Wings campaign 500 times.",
        name: "Roll the Dice IV",
        points: 10,
        reward: "-"
    }, {
        description: "Participate in a Rival Wings campaign 1,000 times.",
        name: "Roll the Dice V",
        points: 20,
        reward: "Title: Wings of Steel"
    }, {
        description: "Emerge victorious in a Rival Wings campaign.",
        name: "Die Another Day I",
        points: 5,
        reward: "-"
    }, {
        description: "Emerge victorious in a Rival Wings campaign 50 times.",
        name: "Die Another Day II",
        points: 5,
        reward: "-"
    }, {
        description: "Emerge victorious in a Rival Wings campaign 100 times.",
        reward: "Item: Magitek Avenger Identification Key",
        name: "Die Another Day III",
        points: 5,
    }, {
        description: "Emerge victorious in a Rival Wings campaign 500 times.",
        name: "Die Another Day IV",
        points: 10,
        reward: "-"
    }, {
        description: "Emerge victorious in a Rival Wings campaign 1,000 times.",
        name: "Die Another Day V",
        points: 20,
        reward: "Title: Wings of Fire"
    }, {
        description: "Emerge victorious in a Hidden Gorge campaign 100 times.",
        reward: "Item: Magitek Avenger A-1 Identification Key",
        name: "Out of Hiding",
        points: 5,
    }
];
