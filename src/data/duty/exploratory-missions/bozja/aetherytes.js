import { DataGroup } from "../../../DataGroup";

export const Duty_Exploratory_Missions_Bozja_Aetherytes = function(parent) {
    const data = new DataGroup("Aetherytes", parent);
    data.columnConfig = [
        { header: "Location", key: "name_en" },
        { header: "Rank Required", key: "rankReq", centered: true },
        { header: "Coordinates", key: "coordinates" }
    ];
    data.initializeTasks(tasks);

    return data;
};

const tasks = [
    {
        "name_en": "Utya's Aegis",
        "rankReq": "1",
        "coordinates": "x: 14.9, y: 29.9"
    },
    {
        "name_en": "Olana's Stand",
        "rankReq": "5",
        "coordinates": "x: 28.6, y: 23.6"
    },
    {
        "name_en": "Lunya's Stand",
        "rankReq": "8",
        "coordinates": "x: 13.7, y: 23.6"
    },
    {
        "name_en": "Camp Steva",
        "rankReq": "8",
        "coordinates": "x: 22.3, y: 16.8"
    }
];
