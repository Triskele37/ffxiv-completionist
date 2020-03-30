import { DataGroup } from "../../../DataGroup";

export const Gathering_Log_Spearfishing_Log_Norvrandt = function(parent) {
    return new DataGroup("Norvrandt", parent).initializeTasks(tasks);
};

const tasks = [
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
        name: "The Covered Halls of Dwatl",
        zone: "Norvrandt",
        location: "The Rak'tika Greatwood",
        type: "Spearfishing",
        req: ""
    }, {
        level: "70",
        name: "Central Lake Tusi Mek'ta",
        zone: "Norvrandt",
        location: "The Rak'tika Greatwood",
        type: "Spearfishing",
        req: ""
    }, {
        level: "70",
        name: "South Lake Tusi Mek'ta",
        zone: "Norvrandt",
        location: "The Rak'tika Greatwood",
        type: "Spearfishing",
        req: ""
    },
];
