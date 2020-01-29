import { SimpleQuestColumnConfig } from "../../columnConfigs";

export const Quest_Other_Seasonal_Starlight_Celebration = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.starlight-celebration`;

    return {
        name: "Starlight Celebration",
    	storageKey,
        columns: SimpleQuestColumnConfig,
        tasks
    };
};

const tasks = [
    {
        level: "15",
        name: "All I Want for Starlight"
    }, {
        level: "15",
        name: "A Chocobo Carol"
    }, {
        level: "15",
        name: "A Star Shines On"
    }
];
