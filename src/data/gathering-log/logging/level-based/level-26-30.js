import { GatheringColumnConfig } from "../../columnConfigs";

export const Logging_Log_Level_26_30 = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.level-26-30`;

    return {
        name: "Levels 26-30",
        storageKey,
        columns: GatheringColumnConfig,
        tasks
    };
};

const tasks = [
    {
        level: "26",
        name: "Earth Crystal",
        zone: "North Shroud",
        location: "Peacegarden"
    }, {
        level: "26",
        name: "Fire Crystal",
        zone: "Middle La Noscea",
        location: "Three-malm Bend"
    }, {
        level: "26",
        name: "Ice Crystal",
        zone: "South Shroud",
        location: "Upper Paths"
    }, {
        level: "26",
        name: "Lightning Crystal",
        zone: "Central Thanalan",
        location: "Spneless Basin"
    }, {
        level: "26",
        name: "Water Crystal",
        zone: "Eastern La Noscea",
        location: "Bloodshore"
    }, {
        level: "26",
        name: "Wind Crystal",
        zone: "Central Shroud",
        location: "Bentbranch"
    }, {
        level: "28",
        name: "Blue Pigment",
        zone: "Eastern La Noscea",
        location: "Bloodshore"
    }, {
        level: "28",
        name: "Green Pigment",
        zone: "Central Shroud",
        location: "Bentbranch"
    }, {
        level: "28",
        name: "Grey Pigment",
        zone: "South Shroud",
        location: "Upper Paths"
    }, {
        level: "28",
        name: "Purple Pigment",
        zone: "Central Thanalan",
        location: "Spineless Basin"
    }, {
        level: "28",
        name: "Red Pigment",
        zone: "Middle La Noscea",
        location: "Three-malm Bend"
    }, {
        level: "28",
        name: "Brown Pigment",
        zone: "North Shroud",
        location: "Peacegarden"
    }, {
        level: "28",
        name: "Yellow Pigment",
        zone: "North Shroud",
        location: "Peacegarden"
    }, {
        level: "29",
        name: "Chocobo Feather",
        zone: "South Shroud",
        location: "Silent Arbor"
    }, {
        level: "30",
        name: "Alligator Pear",
        zone: "South Shroud",
        location: "Silent Arbor"
    },
];
