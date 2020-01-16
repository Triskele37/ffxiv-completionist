export const BlueMageLogColumnConfig = [
    {
        header: "Level",
        key: "level",
        styles: {
            centered: true
        }
    },
    {
        header: "iLvl Req",
        key: "iLvlReq",
        filterable: true,
        styles: {
            centered: true
        }
    },
    { header: "Name", key: "name" },
];

export const HuntingLogColumnConfig = [
    {
        header: "#",
        key: "name",
        styles: {
            centered: true
        }
    },
    {
        header: "Rank",
        key: "rank",
        filterable: true,
        styles: {
            centered: true
        }
    },
    { header: "Mob", key: "mob" },
    { header: "Zone", key: "zone", filterable: true },
    { header: "Location", key: "location" },
];

export const SightseeingLogColumnConfig = [
    {
        header: "#",
        key: "vista",
        styles: {
            centered: true
        }
    },
    { header: "Name", key: "name" },
    { header: "Zone", key: "zone", filterable: true },
    { header: "Location", key: "location" },
    { header: "Weather", key: "weather", filterable: true },
    { header: "Time", key: "time", filterable: true },
    { header: "Emote", key: "emote", filterable: true },
];
