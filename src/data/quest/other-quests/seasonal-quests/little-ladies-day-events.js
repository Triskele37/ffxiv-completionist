import { SimpleQuestColumnConfig } from "../../columnConfigs";

export const LittleLadiesDayEvents = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.little-ladies-day`;

    return {
        name: "Little Ladies' Day",
    	storageKey,
        columns: SimpleQuestColumnConfig,
        tasks: [{
            level: "15",
            name: "A Colorful Affair"
        }, {
            level: "15",
            name: "Untended Dreams"
        }]
    };
};
