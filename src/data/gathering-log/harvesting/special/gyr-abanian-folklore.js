import { GatheringColumnConfig } from "../../columnConfigs";

export const Harvesting_Log_Special_Gyr_Abanian_Folklore = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.gyr-abanian-folklore`;

    return {
        name: "Gyr Abanian Folklore",
        storageKey,
        columns: GatheringColumnConfig,
        tasks: [
            {
                level: "70★★",
                name: "Hingan Flax",
                zone: "The Peaks",
                location: "Mount Yorn"
            },
        ]
    };
};
