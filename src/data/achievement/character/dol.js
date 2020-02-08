import { DataGroup } from "../../DataGroup";

// https://xivapi.com/search?indexes=Achievement&string_column=AchievementCategory.Name_en&string=Disciples%20of%20the%20Land&columns=Name,Description,Points,Item.Name,Title.Name&page=1&limit=380

export const Achievements_Character_Disciple_of_the_Land = function(parent) {
    return new DataGroup("Disciple of the Land", parent).initializeTasks(tasks);
};

const tasks = [
    {
        description: "Achieve miner level 10.",
        name: "Breaking Rocks in the Hot Sun I",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve miner level 20.",
        name: "Breaking Rocks in the Hot Sun II",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve miner level 30.",
        name: "Breaking Rocks in the Hot Sun III",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve miner level 40.",
        name: "Breaking Rocks in the Hot Sun IV",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve miner level 50.",
        name: "Breaking Rocks in the Hot Sun V",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve botanist level 10.",
        name: "Fear the Reaper I",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve botanist level 20.",
        name: "Fear the Reaper II",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve botanist level 30.",
        name: "Fear the Reaper III",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve botanist level 40.",
        name: "Fear the Reaper IV",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve botanist level 50.",
        name: "Fear the Reaper V",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve fisher level 10.",
        name: "Gone Fishin' I",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve fisher level 20.",
        name: "Gone Fishin' II",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve fisher level 30.",
        name: "Gone Fishin' III",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve fisher level 40.",
        name: "Gone Fishin' IV",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve fisher level 50.",
        name: "Gone Fishin' V",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve miner level 60.",
        name: "Breaking Rocks in the Hot Sun VI",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve botanist level 60.",
        name: "Fear the Reaper VI",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve fisher level 60.",
        name: "Gone Fishin' VI",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve botanist level 70.",
        name: "Fear the Reaper VII",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve miner level 70.",
        name: "Breaking Rocks in the Hot Sun VII",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve fisher level 70.",
        name: "Gone Fishin' VII",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve botanist level 80.",
        name: "Fear the Reaper VIII",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve miner level 80.",
        name: "Breaking Rocks in the Hot Sun VIII",
        points: 5,
        reward: "-"
    }, {
        description: "Achieve fisher level 80.",
        name: "Gone Fishin' VIII",
        points: 5,
        reward: "-"
    }
];
