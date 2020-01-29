import { GatheringColumnConfig } from "../../columnConfigs";

export const Harvesting_Log_Special_Othardian_Folklore = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.othardian-folklore`;

    return {
        name: "Othardian Folklore",
        storageKey,
        columns: GatheringColumnConfig,
        tasks
    };
};

const tasks = [
    {
        level: "70★",
        name: "Rhea",
        zone: "The Azim Steppe",
        location: "Ceol Aen"
    }, {
        level: "70★",
        name: "Azim Cotton Ball",
        zone: "The Azim Steppe",
        location: "Ceol Aen"
    }, {
        level: "70★★★",
        name: "Yanxian Cotton Boll",
        zone: "Yanxia",
        location: "Castrum Flumins"
    },
];
