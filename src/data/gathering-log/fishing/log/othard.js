import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Fishing_Log_Othard = function(parent) {
    return new DataGroup("Othard", parent).initializeTasks(tasks);
};

const tasks = [
    //-------------------------------------------- The Ruby Sea
    {
        level: "62",
        name: "The Ruby Price",
        zone: "The Ruby Sea",
        location: "Rasen Kaikyo (38.4, 38.5)",
        type: "Saltwater",
        req: "Gulleye V"
    }, {
        level: "62",
        name: "Hell's Lid",
        zone: "The Ruby Sea",
        location: "Rasen Kaikyo (25.9, 33.3)",
        type: "Saltwater",
        req: "Gulleye V"
    }, {
        level: "65",
        name: "The Isle of Bekko",
        zone: "The Ruby Sea",
        location: "Rasen Kaikyo (34.6, 19.7)",
        type: "Saltwater",
        req: "Gulleye VI"
    }, {
        level: "63",
        name: "Shoal Rock",
        zone: "The Ruby Sea",
        location: "Rasen Kaikyo (32.5, 8.3)",
        type: "Saltwater",
        req: "Gulleye V"
    }, {
        level: "64",
        name: "Onokoro",
        zone: "The Ruby Sea",
        location: "Rasen Kaikyo (22.1, 11)",
        type: "Saltwater",
        req: "Gulleye V"
    }, {
        level: "64",
        name: "Isari",
        zone: "The Ruby Sea",
        location: "East Othard Coastline (8.5, 12)",
        type: "Saltwater",
        req: "Gulleye V"
    }, {
        level: "70",
        name: "The Isle of Zekki",
        zone: "The Ruby Sea",
        location: "The Ruby Sea (8.3, 26.6)",
        type: "Saltwater",
        req: "Gulleye V"
    },
    //-------------------------------------------- Yanxia
    {
        level: "64",
        name: "The Heron's Nest",
        zone: "Yanxia",
        location: "The Gensui Chain (34.7, 14)",
        type: "Freshwater",
        req: "Gulleye V"
    }, {
        level: "64",
        name: "The Heron's Way",
        zone: "Yanxia",
        location: "The Gensui Chain (35.6, 17)",
        type: "Freshwater",
        req: "Gulleye V"
    }, {
        level: "64",
        name: "Namai",
        zone: "Yanxia",
        location: "The Gensui Chain (29.5, 15.5)",
        type: "Freshwater",
        req: "Gulleye V"
    }, {
        level: "65",
        name: "The One River (East)",
        zone: "Yanxia",
        location: "The Glittering Basin (20, 24)",
        type: "Freshwater",
        req: ""
    }, {
        level: "70",
        name: "The One River (West)",
        zone: "Yanxia",
        location: "The Glittering Basin (11, 33)",
        type: "Freshwater",
        req: ""
    }, {
        level: "70",
        name: "Plum Spring",
        zone: "Yanxia",
        location: "The Gensui Chain (37, 24)",
        type: "Freshwater",
        req: "Gulleye V"
    }, {
        level: "67",
        name: "Prism Canyon",
        zone: "Yanxia",
        location: "Valley of the Fallen Rainbow (32, 7)",
        type: "Freshwater",
        req: ""
    }, {
        level: "67",
        name: "Prism Lake",
        zone: "Yanxia",
        location: "Valley of the Fallen Rainbow (29, 6)",
        type: "Freshwater",
        req: ""
    }, {
        level: "67",
        name: "Mercantile Docks",
        zone: "Yanxia",
        location: "Doma (11, 13)",
        type: "Freshwater",
        req: ""
    }, {
        level: "67",
        name: "Doma Castle",
        zone: "Yanxia",
        location: "Doma (14, 7)",
        type: "Freshwater",
        req: "Gulleye VI"
    },
    //-------------------------------------------- The Azim Steppe
    {
        level: "60",
        name: "Nem Khaal",
        zone: "The Azim Steppe",
        location: "The Sea of Blades (31, 26)",
        type: "Freshwater",
        req: ""
    }, {
        level: "66",
        name: "Hak Khaal",
        zone: "The Azim Steppe",
        location: "Onsal Hakair (29, 20)",
        type: "Freshwater",
        req: ""
    }, {
        level: "67",
        name: "Upper Yat Khaal",
        zone: "The Azim Steppe",
        location: "Nhaama's Retreat (17,18)",
        type: "Freshwater",
        req: ""
    }, {
        level: "70",
        name: "Azim Khaat",
        zone: "The Azim Steppe",
        location: "The Azim Khaat (23,23)",
        type: "Freshwater",
        req: ""
    }, {
        level: "67",
        name: "Tao Khaal",
        zone: "The Azim Steppe",
        location: "Onsal Hakair (16, 14)",
        type: "Freshwater",
        req: ""
    }, {
        level: "67",
        name: "Lower Yat Khaal",
        zone: "The Azim Steppe",
        location: "The Sea of Blades (22, 28)",
        type: "Freshwater",
        req: ""
    }, {
        level: "67",
        name: "Dortharl Khaa",
        zone: "The Azim Steppe",
        location: "Nhaama's Retreat (12.4, 33.1)",
        type: "Freshwater",
        req: ""
    },
];
