import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Spearfishing_Log_Othard = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
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
];
