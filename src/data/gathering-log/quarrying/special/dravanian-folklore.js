import { GatheringColumnConfig } from "../../columnConfigs";

export const Quarrying_Log_Special_Dravanian_Folklore = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.dravanian-folklore`;

    return {
        name: "Dravanian Folklore",
        storageKey,
        columns: GatheringColumnConfig,
        tasks
    };
};

const tasks = [
    {
        level: "60★",
        name: "Blue Quartz",
        zone: "The Dravanian Hinterlands",
        location: "The Answering Quarter"
    }, {
        level: "60★★★",
        name: "Zeolite Ore",
        zone: "The Dravanian Hinterlands",
        location: "Quickspill Delta"
    },
];
