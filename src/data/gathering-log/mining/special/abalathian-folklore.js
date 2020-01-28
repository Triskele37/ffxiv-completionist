import { GatheringColumnConfig } from "../../columnConfigs";

export const Mining_Log_Special_Abalathian_Folklore = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.abalathian-folklore`;

    return {
        name: "Abalathian Folklore",
        storageKey,
        columns: GatheringColumnConfig,
        tasks: [
            {
                level: "60★",
                name: "Red Alumen",
                zone: "Azys Lla",
                location: "Habisphere Control"
            }, {
                level: "60★",
                name: "Smithsonite Ore",
                zone: "The Sea of Clouds",
                location: "Hengr's Crucible"
            }, {
                level: "60★",
                name: "Meteorite",
                zone: "The Sea of Clouds",
                location: "Hengr's Crucible"
            }, {
                level: "60★★★",
                name: "Luminium Ore",
                zone: "Azys Lla",
                location: "Hyperstellar Downconverter"
            },
        ]
    };
};
