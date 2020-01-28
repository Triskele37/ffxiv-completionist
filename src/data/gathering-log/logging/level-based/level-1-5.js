import { GatheringColumnConfig } from "../../columnConfigs";

export const Logging_Log_Level_1_5 = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.level-1-5`;

    return {
        name: "Levels 1-5",
        storageKey,
        columns: GatheringColumnConfig,
        tasks: [
            {
                level: "1",
                name: "Earth Shard",
                zone: "North Shroud",
                location: "Treespeak"
            }, {
                level: "1",
                name: "Fire Shard",
                zone: "Middle La Noscea",
                location: "Three-malm Bend"
            }, {
                level: "1",
                name: "Ice Shard",
                zone: "Central Shroud",
                location: "Jadeite Thick"
            }, {
                level: "1",
                name: "Latex",
                zone: "Central Shroud",
                location: "Jadeite Thick"
            }, {
                level: "1",
                name: "Lightning Shard",
                zone: "Central Thanalan",
                location: "Spineless Basin"
            }, {
                level: "1",
                name: "Water Shard",
                zone: "Eastern La Noscea",
                location: "Bloodshore"
            }, {
                level: "1",
                name: "Wind Shard",
                zone: "Central Shroud",
                location: "Jadeite Thick"
            }, {
                level: "2",
                name: "Allagan Snail",
                zone: "Central Shroud",
                location: "Jadeite Thick"
            }, {
                level: "2",
                name: "Maple Sap",
                zone: "North Shroud",
                location: "Treespeak"
            }, {
                level: "3",
                name: "Maple Log",
                zone: "Central Shroud",
                location: "Jadeite Thick"
            }, {
                level: "4",
                name: "Cinnamon",
                zone: "North Shroud",
                location: "Treespeak"
            }, {
                level: "5",
                name: "Beehive Chip",
                zone: "North Shroud",
                location: "Treespeak"
            }, {
                level: "5",
                name: "Maple Branch",
                zone: "Central Shroud",
                location: "Jadeite Thick"
            },
        ],
    };
};
