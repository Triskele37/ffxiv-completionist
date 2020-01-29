import { GatheringColumnConfig } from "../../columnConfigs";

export const Logging_Log_Special_Abalathian_Folklore = function(parentStorageKey) {
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
        name: "Honeydew Almonds",
        zone: "The Sea of Clouds",
        location: "The Gauntlet"
    }, {
        level: "60★",
        name: "Wattle Bark",
        zone: "Azys Lla",
        location: "Alpha Quadrant"
    },
];
