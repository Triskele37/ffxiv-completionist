import { GatheringColumnConfig } from "../../columnConfigs";

export const Logging_Log_Special_Vrandtic_Folklore = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.vrandtic-folklore`;

    return {
        name: "Vrandtic Folklore",
        storageKey,
        columns: GatheringColumnConfig,
        tasks: [
            {
                level: "80★",
                name: "Sandalwood Log",
                zone: "The Rak'tika Greatwood",
                location: "Mjrl's Regret"
            }, {
                level: "80★",
                name: "Sandalwood Sap",
                zone: "The Rak'tika Greatwood",
                location: "Mjrl's Regret"
            },
        ]
    };
};
