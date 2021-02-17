import { DataGroup } from "../../../../DataGroup";

export const Logs_Gathering_Log_Fishing_Log_Norvrandt = function(parent) {
    return new DataGroup("Norvrandt", parent).initializeTasks(tasks);
};

const tasks = [
    //-------------------------------------------- The Crystarium
    {
        "name": "The Trivium",
        "level": "70",
        "zone": "The Crystarium",
        "location": "The Trivium (12.8, 16.3)",
        "type": ""
    },
    {
        "name": "The Quadrivium",
        "level": "70",
        "zone": "The Crystarium",
        "location": "The Quadrivium (10.4, 15.6)",
        "type": ""
    },
    {
        "name": "Crystarium Personal Suites",
        "level": "70",
        "zone": "The Crystarium",
        "location": "The Quadrivium (12.8, 16.3)",
        "type": ""
    },
    //-------------------------------------------- Eulmore
    {
        "name": "The Derelicts",
        "level": "72",
        "zone": "Eulmore",
        "location": "The Derelicts (11.3, 11.3)",
        "type": ""
    },
    //-------------------------------------------- Lakeland
    {
        "name": "The Rift of Sighs",
        "level": "71",
        "zone": "Lakeland",
        "location": "Weathering (31.0, 11.9)",
        "type": ""
    },
    {
        "name": "The Rusted Reservoir",
        "level": "72",
        "zone": "Lakeland",
        "location": "The Forest of the Lost Shepherd (11.9, 21.5)",
        "type": ""
    },
    {
        "name": "The Source",
        "level": "71",
        "zone": "Lakeland",
        "location": "The Source (12.7, 29.6)",
        "type": ""
    },
    {
        "name": "Sullen",
        "level": "72",
        "zone": "Lakeland",
        "location": "Sullen (19.4, 35.8)",
        "type": ""
    },
    {
        "name": "The Isle of Ken",
        "level": "75",
        "zone": "Lakeland",
        "location": "The Source (9.2, 37.6)",
        "type": ""
    },
    //-------------------------------------------- Kholusia
    {
        "name": "Upper Watts River",
        "level": "78",
        "zone": "Kholusia",
        "location": "The Duergar Mountains (27.0, 14.4)",
        "type": ""
    },
    {
        "name": "White Oil Falls",
        "level": "71",
        "zone": "Kholusia",
        "location": "The Bright Cliff (29.4, 21.4)",
        "type": ""
    },
    {
        "name": "Lower Watts River",
        "level": "71",
        "zone": "Kholusia",
        "location": "The Bright Cliff (30.2, 27.0)",
        "type": ""
    },
    {
        "name": "Sharptongue Drip",
        "level": "71",
        "zone": "Kholusia",
        "location": "Shadow Fault (20.6, 24.2)",
        "type": ""
    },
    {
        "name": "The Western Kholusian Coast",
        "level": "72",
        "zone": "Kholusia",
        "location": "Shadow Fault (8.4, 35.2)",
        "type": ""
    },
    {
        "name": "Seagazer Shoals",
        "level": "75",
        "zone": "Kholusia",
        "location": "Shadow Fault (16.8, 35.8)",
        "type": ""
    },
    {
        "name": "The Eastern Kholusian Coast",
        "level": "72",
        "zone": "Kholusia",
        "location": "The Bright Cliff (35.2, 35.8)",
        "type": ""
    },
    //-------------------------------------------- Amh Araeng
    {
        "name": "The River of Sand",
        "level": "71",
        "zone": "Amh Araeng",
        "location": "Qasr Sharl (31.8, 12.7)",
        "type": ""
    },
    {
        "name": "The Nabaath Severance",
        "level": "72",
        "zone": "Amh Araeng",
        "location": "The Fields of Amber (31.0, 31.6)",
        "type": ""
    },
    {
        "name": "The Hills of Amber",
        "level": "77",
        "zone": "Amh Araeng",
        "location": "The Northern Hills of Amber (15.5, 14.8)",
        "type": ""
    },
    //-------------------------------------------- Il Mheg
    {
        "name": "Handmirror Lake",
        "level": "73",
        "zone": "Il Mheg",
        "location": "Timh Gyeus (4.3, 22.3)",
        "type": ""
    },
    {
        "name": "Longmirror Lake",
        "level": "73",
        "zone": "Il Mheg",
        "location": "Longmirror Lake (21.0, 22.8)",
        "type": ""
    },
    {
        "name": "The Haughty One",
        "level": "74",
        "zone": "Il Mheg",
        "location": "Good Jenanna's Grace (22.0, 9.1)",
        "type": ""
    },
    {
        "name": "The Jealous One",
        "level": "74",
        "zone": "Il Mheg",
        "location": "Voeburtenburg (25.8, 9.0)",
        "type": ""
    },
    {
        "name": "The Spoiled One",
        "level": "74",
        "zone": "Il Mheg",
        "location": "Voeburtenburg (28.9, 13.5)",
        "type": ""
    },
    {
        "name": "Saint Fathric's Temple",
        "level": "74",
        "zone": "Il Mheg",
        "location": "Longmirror Lake (34.9, 26.3)",
        "type": ""
    },
    {
        "name": "Father Collard's Failings",
        "level": "75",
        "zone": "Il Mheg",
        "location": "Longmirror Lake (31.9, 22.3)",
        "type": ""
    },
    //-------------------------------------------- The Rak'tika Greatwood
    {
        "name": "Lake Tusi Mek'ta",
        "level": "75",
        "zone": "The Rak'tika Greatwood",
        "location": "Lake Tusi Mek'ta (7.4, 28.7)",
        "type": ""
    },
    {
        "name": "The Red Chalice",
        "level": "76",
        "zone": "The Rak'tika Greatwood",
        "location": "The K'mul Astropolis (9.7, 20.8)",
        "type": ""
    },
    {
        "name": "The Lozatl",
        "level": "77",
        "zone": "The Rak'tika Greatwood",
        "location": "Lake Tusi Mek'ta (16.0, 21.5)",
        "type": ""
    },
    {
        "name": "South Mjrl's Regret",
        "level": "77",
        "zone": "The Rak'tika Greatwood",
        "location": "The Blind Forest of Yx'Maja (24.0, 31.6)",
        "type": ""
    },
    {
        "name": "Woven Oath",
        "level": "80",
        "zone": "The Rak'tika Greatwood",
        "location": "Lake Tusi Mek'ta (7.8, 16.2)",
        "type": ""
    },
    {
        "name": "Mjrl's Tears",
        "level": "70",
        "zone": "The Rak'tika Greatwood",
        "location": "The Blind Forest of Yx'Maja (26.0, 36.7)",
        "type": ""
    },
    //-------------------------------------------- The Tempest
    {
        "name": "The Flounders' Floor",
        "level": "80",
        "zone": "The Tempest",
        "location": "The Norvrandt Slope (11.2, 6.6)",
        "type": ""
    },
    {
        "name": "Where the Dry Return",
        "level": "79",
        "zone": "The Tempest",
        "location": "The Norvrandt Slope (37.7, 7.0)",
        "type": ""
    },
    {
        "name": "Northwest Caliban Gorge",
        "level": "79",
        "zone": "The Tempest",
        "location": "The Caliban Gorge (11.9, 10.9)",
        "type": ""
    },
    {
        "name": "West Caliban Gap",
        "level": "80",
        "zone": "The Tempest",
        "location": "The Caliban Gorge (6.2, 13.5)",
        "type": ""
    },
    {
        "name": "East Caliban Gap",
        "level": "80",
        "zone": "The Tempest",
        "location": "The Caliban Gorge (8.5, 15.6)",
        "type": ""
    },
    {
        "name": "Purpure",
        "level": "79",
        "zone": "The Tempest",
        "location": "The Caliban Gorge (33.6, 30.6)",
        "type": ""
    },
    {
        "name": "The Norvrandt Slope",
        "level": "80",
        "zone": "The Tempest",
        "location": "The Norvrandt Slope (29.0, 14.9)",
        "type": ""
    },
];
