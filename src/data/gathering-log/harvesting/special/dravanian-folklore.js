import { GatheringColumnConfig } from "../../columnConfigs";

export const Harvesting_Log_Special_Dravanian_Folklore = function(parentStorageKey) {
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
        name: "Snurbleberry",
        zone: "The Dravanian Hinterlands",
        location: "The Daggers"
    }, {
        level: "60★",
        name: "Seventh Heaven",
        zone: "The Churning Mists",
        location: "The Lost Landlord"
    }, {
        level: "60★★★",
        name: "Noble Sage",
        zone: "The Dravanian Forelands",
        location: "Chocobo Forest"
    },
];
