import { GatheringColumnConfig } from "../../columnConfigs";

export const Mining_Log_Special_Dravanian_Folklore = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.dravanian-folklore`;

    return {
        name: "Dravanian Folklore",
        storageKey,
        columns: GatheringColumnConfig,
        tasks: [
            {
                level: "60★",
                name: "Aurum Regis Ore",
                zone: "The Churning Mists",
                location: "Mother of the Sheave"
            }, {
                level: "60★",
                name: "Lumythrite Ore",
                zone: "The Churning Mists",
                location: "Sothton Walls"
            },
        ]
    };
};
