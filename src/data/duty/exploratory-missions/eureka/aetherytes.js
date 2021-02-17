import { DataGroup } from "../../../DataGroup";

export const Duty_Exploratory_Missions_Eureka_Aetherytes = function(parent) {
    const data = new DataGroup("Aetherytes", parent);
    data.columnConfig = [
        { header: "Location", key: "name_en" },
        { header: "Zone", key: "zone", filterable: true },
        { header: "eLvl Required", key: "eLvlReq", centered: true }
    ];
    data.initializeTasks(tasks);

    return data;
};

const tasks = [
    { name_en: "Port Surgate", zone: "Anemos", eLvlReq: "1" },
    { name_en: "Abandoned Laboratory", zone: "Anemos", eLvlReq: "9" },
    { name_en: "Windtorn Cabin", zone: "Anemos", eLvlReq: "9" },

    { name_en: "Icepoint", zone: "Pagos", eLvlReq: "20" },
    { name_en: "Vlondette's Retreat", zone: "Pagos", eLvlReq: "21" },
    { name_en: "Geothermal Studies", zone: "Pagos", eLvlReq: "23" },
    { name_en: "Gravitational Studies", zone: "Pagos", eLvlReq: "25" },

    { name_en: "Northpoint", zone: "Pyros", eLvlReq: "35" },
    { name_en: "The Dragon Star Observatory", zone: "Pyros", eLvlReq: "37" },
    { name_en: "The Firing Chamber", zone: "Pyros", eLvlReq: "39" },
    { name_en: "Carbonatite Quarry", zone: "Pyros", eLvlReq: "41" },

    { name_en: "Central Point", zone: "Hydatos", eLvlReq: "50" },
    { name_en: "Unverified Research", zone: "Hydatos", eLvlReq: "51" },
    { name_en: "Dormitory", zone: "Hydatos", eLvlReq: "55" },
];
