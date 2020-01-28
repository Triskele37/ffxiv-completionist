import { GatheringColumnConfig } from "../../columnConfigs";

export const Harvesting_Log_Level_21_25 = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.level-21-25`;

    return {
        name: "Levels 21-25",
        storageKey,
        columns: GatheringColumnConfig,
        tasks: [
            {
                level: "21",
                name: "Pixie Plum Seeds",
                zone: "Upper La Noscea",
                location: "Oakwood"
            }, {
                level: "21",
                name: "Pixie Plums",
                zone: "Upper La Noscea",
                location: "Oakwood"
            }, {
                level: "22",
                name: "Button Mushroom",
                zone: "Eastern Thanalan",
                location: "Drybone"
            }, {
                level: "22",
                name: "Noble Grapes",
                zone: "Upper La Noscea",
                location: "Oakwood"
            }, {
                level: "23",
                name: "Ala Mhigan Mustard",
                zone: "Eastern Thanalan",
                location: "Drybone"
            }, {
                level: "23",
                name: "Ala Mhigan Mustard Seeds",
                zone: "Eastern Thanalan",
                location: "Drybone"
            }, {
                level: "24",
                name: "Chamomile",
                zone: "Upper La Noscea",
                location: "Oakwood"
            }, {
                level: "24",
                name: "Chamomile Seeds",
                zone: "Upper La Noscea",
                location: "Oakwood"
            }, {
                level: "24",
                name: "Pearl Ginger",
                zone: "Eastern Thanalan",
                location: "Drybone"
            }, {
                level: "24",
                name: "Pearl Ginger Root",
                zone: "Eastern Thanalan",
                location: "Drybone"
            }, {
                level: "25",
                name: "Millioncorn",
                zone: "Eastern Thanalan",
                location: "Drybone"
            }, {
                level: "25",
                name: "Millioncorn Seeds",
                zone: "Eastern Thanalan",
                location: "Drybone"
            }, {
                level: "25",
                name: "Sticky Rice",
                zone: "Upper La Noscea",
                location: "Oakwood"
            },
        ],
    };
};
