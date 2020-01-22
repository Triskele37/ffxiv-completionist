import { SimpleQuestColumnConfig } from "../../columnConfigs";

export const StarlightCelebrationEvents = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.starlight-celebration`;

    return {
        name: "Starlight Celebration",
    	storageKey,
        columns: SimpleQuestColumnConfig,
        tasks: [{
            level: "15",
            name: "All I Want for Starlight"
        }, {
            level: "15",
            name: "A Chocobo Carol"
        }, {
            level: "15",
            name: "A Star Shines On"
        }]
    };
};
