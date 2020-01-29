import { GatheringColumnConfig } from "../../columnConfigs";

export const Mining_Log_Level_1_5 = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.level-1-5`;

    return {
        name: "Levels 1-5",
        storageKey,
        columns: GatheringColumnConfig,
        tasks
    };
};

const tasks = [
    {
        level: "1",
        name: "Copper Ore",
        zone: "Western Thanalan",
        location: "Hammerlea"
    }, {
        level: "1",
        name: "Earth Shard",
        zone: "Lower La Noscea",
        location: "Cedarwood"
    }, {
        level: "1",
        name: "Fire Shard",
        zone: "Western Thanalan",
        location: "Hammerlea"
    }, {
        level: "1",
        name: "Ice Shard",
        zone: "Western La Noscea",
        location: "Skull Valley"
    }, {
        level: "1",
        name: "Lightning Shard",
        zone: "Central Thanalan",
        location: "Spineless Basin"
    }, {
        level: "1",
        name: "Water Shard",
        zone: "Western Thanalan",
        location: "Hammerlea"
    }, {
        level: "1",
        name: "Wind Shard",
        zone: "Central Thanalan",
        location: "Spineless Basin"
    }, {
        level: "3",
        name: "Muddy Water",
        zone: "Western Thanalan",
        location: "Hammerlea"
    }, {
        level: "5",
        name: "Bone Chip",
        zone: "Central Thanalan",
        location: "Spineless Basin"
    },
];
