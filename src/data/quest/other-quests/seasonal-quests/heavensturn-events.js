import { SimpleQuestColumnConfig } from "../../columnConfigs";

export const Quest_Other_Seasonal_Heavensturn = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.heavensturn`;

    return {
        name: "Heavensturn",
    	storageKey,
        columns: SimpleQuestColumnConfig,
        tasks: [{
            level: "15",
            name: "More Bark and Mochi Bite"
        }, {
            level: "15",
            name: "Mochi to Be Desired"
        }]
    };
};
