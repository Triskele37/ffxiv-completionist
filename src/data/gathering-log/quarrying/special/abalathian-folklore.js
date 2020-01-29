import { GatheringColumnConfig } from "../../columnConfigs";

export const Quarrying_Log_Special_Abalathian_Folklore = function(parentStorageKey) {
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
        level: "60★",
        name: "Sun Mica",
        zone: "The Sea of Clouds",
        location: "The Nidifice"
    },
];
