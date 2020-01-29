import { GatheringColumnConfig } from "../../columnConfigs";

export const Logging_Log_Level_6_10 = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.level-6-10`;

    return {
        name: "Levels 6-10",
        storageKey,
        columns: GatheringColumnConfig,
        tasks
    };
};

const tasks = [
    {
        level: "6",
        name: "Cock Feather",
        zone: "Central Thanalan",
        location: "Spineless Basin"
    }, {
        level: "6",
        name: "Tinolqa Mistletoe",
        zone: "Central Shroud",
        location: "Greentear"
    }, {
        level: "7",
        name: "La Noscean Orange",
        zone: "Lower La Noscea",
        location: "Cedarwood"
    }, {
        level: "7",
        name: "La Noscean Orange Seeds",
        zone: "Lower La Noscea",
        location: "Cedarwood"
    }, {
        level: "8",
        name: "Ash Log",
        zone: "Central Shroud",
        location: "Greentear"
    }, {
        level: "9",
        name: "Ash Branch",
        zone: "Central Shroud",
        location: "Greentear"
    }, {
        level: "9",
        name: "Kukuru Bean",
        zone: "Lower La Noscea",
        location: "Cedarwood"
    }, {
        level: "10",
        name: "Cloves",
        zone: "Central Thanalan",
        location: "Spineless Basin"
    }, {
        level: "10",
        name: "Crow Feather",
        zone: "Central Shroud",
        location: "Greentear"
    },
];
