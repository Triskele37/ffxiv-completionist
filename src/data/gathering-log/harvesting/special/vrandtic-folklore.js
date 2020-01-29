import { GatheringColumnConfig } from "../../columnConfigs";

export const Harvesting_Log_Special_Vrandtic_Folklore = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.vrandtic-folklore`;

    return {
        name: "Vrandtic Folklore",
        storageKey,
        columns: GatheringColumnConfig,
        tasks
    };
};

const tasks = [
    {
        level: "80★",
        name: "Ethereal Cocoon",
        zone: "Lakeland",
        location: "Inviolate Witness"
    },
];
