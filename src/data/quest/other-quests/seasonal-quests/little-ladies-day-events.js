import { SimpleQuestColumnConfig } from "../../columnConfigs";

export const Quest_Other_Seasonal_Little_Ladies_Day = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.little-ladies-day`;

    return {
        name: "Little Ladies' Day",
    	storageKey,
        columns: SimpleQuestColumnConfig,
        tasks
    };
};

const tasks = [
    {
        level: "15",
        name: "A Colorful Affair"
    }, {
        level: "15",
        name: "Untended Dreams"
    }
];
