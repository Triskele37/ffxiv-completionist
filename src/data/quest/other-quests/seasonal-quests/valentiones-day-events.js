import { SimpleQuestColumnConfig } from "../../columnConfigs";

export const Quest_Other_Seasonal_Valentiones_Day = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.valentiones-day`;

    return {
        name: "Valentione's Day",
    	storageKey,
        columns: SimpleQuestColumnConfig,
        tasks
    };
};

const tasks = [
    {
        level: "15",
        name: "Lessons in Love"
    }, {
        level: "15",
        name: "In Fortune with the Times"
    }
];
