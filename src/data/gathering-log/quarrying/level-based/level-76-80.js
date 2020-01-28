import { GatheringColumnConfig } from "../../columnConfigs";

export const Quarrying_Log_Level_76_80 = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.level-76-80`;

    return {
        name: "Levels 76-80",
        storageKey,
        columns: GatheringColumnConfig,
        tasks: [
            {
                level: "76",
                name: "Volcanic Tuff",
                zone: "Kholusia",
                location: "Amity"
            }, {
                level: "76",
                name: "Titancopper Sand",
                zone: "Amh Araeng",
                location: "Mount Biran Mines"
            }, {
                level: "79",
                name: "Dimythrite Sand",
                zone: "Amh Araeng",
                location: "Mount Biran Mines"
            }, {
                level: "80",
                name: "Shade Quartz",
                zone: "Kholusia",
                location: "Amity"
            },
        ],
    };
};
