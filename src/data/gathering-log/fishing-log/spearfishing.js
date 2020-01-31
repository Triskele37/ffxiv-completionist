import { DataGroup } from "../../DataGroup";
import { FishingLogColumnConfig } from "../columnConfigs";

export const Gathering_Logs_Spearfishing_Log = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks, FishingLogColumnConfig);
};

const tasks = [
    //------------------------------------------------------------------ Gyr Abania
    {
        level: "70",
        name: "Loch Seld Northwestern Lakebed",
        zone: "The Lochs",
        location: "Loch Seld (13, 18)",
        type: "Spearfishing",
        req: ""
    }, {
        level: "70",
        name: "Loch Seld Central Lakebed",
        zone: "The Lochs",
        location: "Loch Seld (22, 23)",
        type: "Spearfishing",
        req: ""
    }, {
        level: "70",
        name: "Loch Seld Southeastern Lakebed",
        zone: "The Lochs",
        location: "Loch Seld (26, 28)",
        type: "Spearfishing",
        req: ""
    },
    //------------------------------------------------------------------ Othard
    //-------------------------------------------- The Ruby Sea
    {
        level: "65",
        name: "Ruby Price Depths",
        zone: "The Ruby Sea",
        location: "Rasen Kaikyo (34.7, 29.9)",
        type: "Spearfishing",
        req: "Gulleye V"
    }, {
        level: "65",
        name: "Tamamizu",
        zone: "The Ruby Sea",
        location: "Rasen Kaikyo (28, 13.3)",
        type: "Spearfishing",
        req: "Gulleye V"
    }, {
        level: "65",
        name: "Sui-no-Sato",
        zone: "The Ruby Sea",
        location: "Rasen Kaikyo (17.5, 20.5)",
        type: "Spearfishing",
        req: ""
    }, {
        level: "65",
        name: "The Adventure",
        zone: "The Ruby Sea",
        location: "Rasen Kaikyo (16.3, 24.7)",
        type: "Spearfishing",
        req: "Gulleye V"
    }, {
        level: "65",
        name: "Shisui of the Violet Tides",
        zone: "The Ruby Sea",
        location: "Rasen Kaikyo (4.9, 37)",
        type: "Spearfishing",
        req: "Gulleye V"
    }, {
        level: "70",
        name: "The Kobayashi Maru",
        zone: "The Ruby Sea",
        location: "Rasen Kaikyo (38.8, 6.3)",
        type: "Spearfishing",
        req: "Gulleye VI"
    },
    //-------------------------------------------- Yanxia
    {
        level: "65",
        name: "The One River Southwestern Riverbeds",
        zone: "Yanxia",
        location: "The Glittering Basin (15, 37)",
        type: "Spearfishing",
        req: ""
    }, {
        level: "65",
        name: "The One River Southern Riverbeds",
        zone: "Yanxia",
        location: "The Glittering Basin (21.5, 36.6)",
        type: "Spearfishing",
        req: ""
    }, {
        level: "65",
        name: "Imperial Hypersonic Assault Craft L-XXIII",
        zone: "Yanxia",
        location: "The Glittering Basin (34.7, 36.7)",
        type: "Spearfishing",
        req: "Gulleye V"
    }, {
        level: "70",
        name: "The Sunken Junk",
        zone: "Yanxia",
        location: "The Glittering Basin (10-34)",
        type: "Spearfishing",
        req: ""
    }, {
        level: "70",
        name: "The Dragon's Struggle",
        zone: "Yanxia",
        location: "Doma (12, 10)",
        type: "Spearfishing",
        req: ""
    },
    //TODO: which node is this???
    {
        level: "70",
        name: "??? - Unspoiled Teeming Waters",
        zone: "The Ruby Sea",
        location: "The Ruby Sea (40,2)(42,10)",
        type: "Spearfishing",
        req: "Swimming Shadows"
    },
    //-------------------------------------------- The Azim Steppe
    {
        level: "70",
        name: "Azim Khaat Western Lakebed",
        zone: "The Azim Steppe",
        location: "Azim Khaat (19, 23.7)",
        type: "Spearfishing",
        req: "Gulleye VI"
    }, {
        level: "70",
        name: "Azim Khaat Eastern Lakebed",
        zone: "The Azim Steppe",
        location: "Azim Khaat (23, 23.7)",
        type: "Spearfishing",
        req: "Gulleye VI"
    },
    //------------------------------------------------------------------ Norvrandt
    //-------------------------------------------- Lakeland
    {
        level: "70",
        name: "Northeast Source",
        zone: "Norvrandt",
        location: "Lakeland",
        type: "Spearfishing",
        req: ""
    }, {
        level: "75",
        name: "The Isle of Ken",
        zone: "Norvrandt",
        location: "Lakeland",
        type: "Spearfishing",
        req: ""
    }, {
        level: "75",
        name: "Southeast Source",
        zone: "Norvrandt",
        location: "Lakeland",
        type: "Spearfishing",
        req: ""
    },
    {
        level: "75",
        name: "Southeast Source - Unspoiled Teeming Waters",
        zone: "Norvrandt",
        location: "Lakeland",
        type: "Spearfishing",
        req: "Swimming Shadows"
    },
    //-------------------------------------------- Il Mheg
    {
        level: "75",
        name: "North Lyhe Ghiah",
        zone: "Norvrandt",
        location: "Il Mheg",
        type: "Spearfishing",
        req: ""
    }, {
        level: "75",
        name: "Deepwood Swim",
        zone: "Norvrandt",
        location: "Il Mheg",
        type: "Spearfishing",
        req: ""
    }, {
        level: "80",
        name: "Central Longmirror Lake",
        zone: "Norvrandt",
        location: "Il Mheg",
        type: "Spearfishing",
        req: ""
    }, {
        level: "80",
        name: "Central Longmirror Lake - Unspoiled Teeming Waters",
        zone: "Norvrandt",
        location: "Il Mheg",
        type: "Spearfishing",
        req: "Swimming Shadows"
    }, {
        level: "80",
        name: "Thysm Lran",
        zone: "Norvrandt",
        location: "Il Mheg",
        type: "Spearfishing",
        req: ""
    }, {
        level: "80",
        name: "South Longmirror Lake",
        zone: "Norvrandt",
        location: "Il Mheg",
        type: "Spearfishing",
        req: ""
    },
    //-------------------------------------------- The Rak'tika Greatwood
    {
        level: "80",
        name: "North Lake Tusi Mek'ta",
        zone: "Norvrandt",
        location: "The Rak'tika Greatwood",
        type: "Spearfishing",
        req: ""
    }, {
        level: "80",
        name: "North Lake Tusi Mek'ta - Unspoiled Teeming Waters",
        zone: "Norvrandt",
        location: "The Rak'tika Greatwood",
        type: "Spearfishing",
        req: "Swimming Shadows"
    }, {
        level: "80",
        name: "The Covered Halls of Dwatl",
        zone: "Norvrandt",
        location: "The Rak'tika Greatwood",
        type: "Spearfishing",
        req: ""
    },
];
