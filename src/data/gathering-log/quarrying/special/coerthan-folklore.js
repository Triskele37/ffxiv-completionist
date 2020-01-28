import { GatheringColumnConfig } from "../../columnConfigs";

export const Quarrying_Log_Special_Coerthan_Folklore = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.coerthan-folklore`;

    return {
        name: "Coerthan Folklore",
        storageKey,
        columns: GatheringColumnConfig,
        tasks: [
            {
                level: "60★",
                name: "Violet Quartz",
                zone: "Coerthas Western Highlands",
                location: "The Convictory"
            }, {
                level: "60★",
                name: "Astral Moraine",
                zone: "Coerthas Western Highlands",
                location: "Hemlock"
            },
        ]
    };
};
