import { GatheringColumnConfig } from "../../columnConfigs";

export const Logging_Log_Special_Gyr_Abanian_Folklore = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.gyr-abanian-folklore`;

    return {
        name: "Gyr Abanian Folklore",
        storageKey,
        columns: GatheringColumnConfig,
        tasks: [
            {
                level: "70★",
                name: "Torreya Log",
                zone: "The Lochs",
                location: "Stacks"
            }, {
                level: "70★★",
                name: "Black Willow Log",
                zone: "The Fringes",
                location: "Pike Falls"
            }, {
                level: "70★★",
                name: "Hardened Veteran Tree Sap",
                zone: "The Fringer",
                location: "Pike Falls"
            }, {
                level: "70★★★",
                name: "Urunday Log",
                zone: "The Peaks",
                location: "Sleeping Stones"
            },
        ]
    };
};
