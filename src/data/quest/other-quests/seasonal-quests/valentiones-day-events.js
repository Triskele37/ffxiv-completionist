import { SimpleQuestColumnConfig } from "../../columnConfigs";

export const ValentionesDayEvents = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.valentiones-day`;

    return {
        name: "Valentione's Day",
    	storageKey,
        columns: SimpleQuestColumnConfig,
        tasks: [{
            level: "15",
            name: "Lessons in Love"
        }, {
            level: "15",
            name: "In Fortune with the Times"
        }]
    };
};
