export const BlueMageLogColumnConfig = [
    { header: "Level", key: "level", centered: true },
    { header: "iLvl Req", key: "iLvlReq", filterable: true, centered: true },
    { header: "Name", key: "name" },
];

export const HuntingLogColumnConfig = [
    { header: "#", key: "name", centered: true },
    { header: "Rank", key: "rank", filterable: true, centered: true },
    { header: "Mob", key: "mob" },
    { header: "Zone", key: "zone", filterable: true },
    { header: "Location", key: "location" },
];

export const SightseeingLogColumnConfig = [
    { header: "#", key: "vista", centered: true },
    { header: "Name", key: "name" },
    { header: "Zone", key: "zone", filterable: true },
    { header: "Location", key: "location" },
    { header: "Weather", key: "weather", filterable: true },
    { header: "Time", key: "time", filterable: true },
    { header: "Emote", key: "emote", filterable: true },
];
