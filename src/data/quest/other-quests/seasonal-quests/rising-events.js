import { SimpleQuestColumnConfig } from "../../columnConfigs";

export const RisingEvents = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.rising`;

    return {
        name: "Rising",
    	storageKey,
        columns: SimpleQuestColumnConfig,
        tasks: [{
            level: "15",
            name: "In Adventurers We Trust"
        }, {
            level: "30",
            name: "Message in a Bottle"
        }, {
            level: "30",
            name: "Messages from Distant Shores"
        }]
    };
};
