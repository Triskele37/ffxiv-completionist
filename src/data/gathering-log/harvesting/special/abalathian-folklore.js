import { GatheringColumnConfig } from "../../columnConfigs";

export const Harvesting_Log_Special_Abalathian_Folklore = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.abalathian-folklore`;

    return {
        name: "Abalathian Folklore",
        storageKey,
        columns: GatheringColumnConfig,
        tasks
    };
};

const tasks = [
    {
        level: "60★★★",
        name: "Star Cotton Boll",
        zone: "Azys Lla",
        location: "Antithesis"
    },
];
