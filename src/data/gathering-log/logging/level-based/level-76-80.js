import { GatheringColumnConfig } from "../../columnConfigs";

export const Logging_Log_Level_76_80 = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.level-76-80`;

    return {
        name: "Levels 76-80",
        storageKey,
        columns: GatheringColumnConfig,
        tasks: [
            {
                level: "76",
                name: "Amber Cloves",
                zone: "Amh Araeng",
                location: "Ladle"
            }, {
                level: "76",
                name: "Sandteak Log",
                zone: "Amh Araeng",
                location: "Ladle"
            }, {
                level: "78",
                name: "Harcot",
                zone: "Lakeland",
                location: "Hare Among Giants"
            }, {
                level: "80",
                name: "Lemonette",
                zone: "Kholusia",
                location: "Sharptongue Drip"
            }, {
                level: "80",
                name: "Lignum Vitae Log",
                zone: "Lakeland",
                location: "Hare Among Giants"
            }
        ],
    };
};
