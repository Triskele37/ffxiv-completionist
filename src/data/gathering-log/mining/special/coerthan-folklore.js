import { GatheringColumnConfig } from "../../columnConfigs";

export const Mining_Log_Special_Coerthan_Folklore = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.coerthan-folklore`;

    return {
        name: "Coerthan Folklore",
        storageKey,
        columns: GatheringColumnConfig,
        tasks
    };
};

const tasks = [
    {
        level: "60★★★",
        name: "Tungstite",
        zone: "Coerthas Western Highlands",
        location: "Dragonspit"
    },
];
