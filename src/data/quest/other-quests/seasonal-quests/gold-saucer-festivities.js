import { SimpleQuestColumnConfig } from "../../columnConfigs";

export const Quest_Other_Seasonal_Gold_Saucer_Festivities = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.gold-saucer-festivities`;

    return {
        name: "Gold Saucer Festivities",
    	storageKey,
        columns: SimpleQuestColumnConfig,
        tasks: [{
            level: "15",
            name: "Trouble in Paradise"
        }, {
            level: "15",
            name: "The Sabotender Shimmy"
        }]
    };
};
