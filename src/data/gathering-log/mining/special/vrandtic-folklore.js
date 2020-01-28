import { GatheringColumnConfig } from "../../columnConfigs";

export const Mining_Log_Special_Vrandtic_Folklore = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.vrandtic-folklore`;

    return {
        name: "Vrandtic Folklore",
        storageKey,
        columns: GatheringColumnConfig,
        tasks: [
            {
                level: "80★",
                name: "Tungsten Ore",
                zone: "The Tempest",
                location: "Where the Dry Return"
            }, {
                level: "80★",
                name: "Prismstone",
                zone: "Il Mheg",
                location: "Saint Fathric's Temple"
            }, {
                level: "80★",
                name: "Beryllium Ore",
                zone: "Il Mheg",
                location: "Saint Fathric's Temple"
            },
        ]
    };
};
