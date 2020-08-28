export const GatheringColumnConfig = [
    {
        header: "Level",
        key: "level",
        filterable: true,
        filterType: 'number',
        centered: true,
    },
    { header: "Name", key: "name" },
    { header: "Zone", key: "zone", filterable: true },
    { header: "Closest Aetheryte", key: "closestAetheryte" },
    { header: "Coordinates", key: "coordinates" },
    { header: "Node Timer", key: "nodeTimer" },
];

export const FishingLogColumnConfig = [
    {
        header: "Level",
        key: "level",
        filterable: true,
        filterType: 'number',
        centered: true,
    },
    { header: "Log", key: "name" },
    { header: "Zone", key: "zone", filterable: true },
    { header: "Location", key: "location" },
    { header: "Type", key: "type", filterable: true },
    { header: "Req.", key: "req", filterable: true },
];

export const FishingGuideColumnConfig = [
    {
        header: "iLVL",
        key: "iLvl",
        filterable: true,
        filterType: 'number',
        centered: true,
    },
    { header: "Name", key: "name" },
    { header: "Prime Location", key: "primeLocation", filterable: true },
    { header: "Fishing Holes", key: "fishingHoles" },
    { header: "Type", key: "type", filterable: true },
    { header: "Bait", key: "bait", filterable: true },
    { header: "Usages", key: "usage" },
    { header: "Special", key: "special" },
];
