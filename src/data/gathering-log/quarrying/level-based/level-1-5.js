import { GatheringColumnConfig } from "../../columnConfigs";

export const Quarrying_Log_Level_1_5 = function(parentStorageKey) {
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
        name: "Earth Shard",
        zone: "Upper La Noscea",
        location: "Oakwood"
    }, {
        level: "1",
        name: "Fire Shard",
        zone: "Middle La Noscea",
        location: "Three-malm Bend"
    }, {
        level: "1",
        name: "Ice Shard",
        zone: "Western La Noscea",
        location: "Skull Valley"
    }, {
        level: "1",
        name: "Lightning Shard",
        zone: "Central Thanalan",
        location: "Black Brush"
    }, {
        level: "1",
        name: "Water Shard",
        zone: "Western Thanalan",
        location: "Horizon's Edge"
    }, {
        level: "1",
        name: "Wind Shard",
        zone: "East Shroud",
        location: "Nine Ivies"
    },
];
