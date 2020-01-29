import { GatheringColumnConfig } from "../../columnConfigs";

export const Mining_Log_Level_16_20 = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.level-16-20`;

    return {
        name: "Levels 16-20",
        storageKey,
        columns: GatheringColumnConfig,
        tasks
    };
};

const tasks = [
    {
        level: "16",
        name: "Raw Malachite",
        zone: "Eastern Thanalan",
        location: "Drybone"
    }, {
        level: "17",
        name: "Raw Fluorite",
        zone: "Eastern Thanalan",
        location: "Drybone"
    }, {
        level: "17",
        name: "Raw Sphene",
        zone: "North Shroud",
        location: "Peacegarden"
    }, {
        level: "18",
        name: "Raw Danburite",
        zone: "Western La Noscea",
        location: "Skull Valley"
    }, {
        level: "19",
        name: "Alumen",
        zone: "Eastern Thanalan",
        location: "Drybone"
    }, {
        level: "19",
        name: "Sunrise Tellin",
        zone: "Western La Noscea",
        location: "Skull Valley"
    },
];
