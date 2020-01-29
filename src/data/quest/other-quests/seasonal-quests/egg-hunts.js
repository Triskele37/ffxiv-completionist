import { SimpleQuestColumnConfig } from "../../columnConfigs";

export const Quest_Other_Seasonal_Egg_Hunts = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.egg-hunt`;

    return {
        name: "Egg Hunts",
    	storageKey,
        columns: SimpleQuestColumnConfig,
        tasks
    };
};

const tasks = [
    {
        level: "15",
        name: "Uneggseptable Losses"
    }, {
        level: "15",
        name: "Eggstreme Eggstrapolation"
    }, {
        level: "15",
        name: "A Shelltered Eggsistence"
    }, {
        level: "15",
        name: "Deus Eggs Machina"
    }
];
