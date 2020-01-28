import { GatheringColumnConfig } from "../../columnConfigs";

export const Quarrying_Log_Level_21_25 = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.level-21-25`;

    return {
        name: "Levels 21-25",
        storageKey,
        columns: GatheringColumnConfig,
        tasks: [
            {
                level: "21",
                name: "Earth Rock",
                zone: "South Shroud",
                location: "Upper Paths"
            }, {
                level: "22",
                name: "Silver Sand",
                zone: "South Shroud",
                location: "Upper Paths"
            }, {
                level: "23",
                name: "Fire Rock",
                zone: "Upper La Noscea",
                location: "Oakwood"
            }, {
                level: "23",
                name: "Ice Rock",
                zone: "South Shroud",
                location: "Upper Paths"
            }, {
                level: "24",
                name: "Lightning Rock",
                zone: "Upper La Noscea",
                location: "Oakwood"
            }, {
                level: "24",
                name: "Wind Rock",
                zone: "South Shroud",
                location: "Upper Paths"
            }, {
                level: "25",
                name: "Water Rock",
                zone: "Upper La Noscea",
                location: "Oakwood"
            },
        ],
    };
};
