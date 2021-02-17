import { DataGroup } from "../../../DataGroup";

export const Duty_Exploratory_Missions_Bozja_Duties = function(parent) {
    const data = new DataGroup("Duties", parent);
    data.columnConfig = [
        { header: "Duty", key: "name_en" },
        { header: "Rank Required", key: "rankReq", centered: true }
    ];
    data.initializeTasks(tasks);

    return data;
};

const tasks = [
    { name_en: "Castrum Lacus Litore", rankReq: "10" },
    { name_en: "Delubrum Reginae", rankReq: "10" },
    { name_en: "Delubrum Reginae (Savage)", rankReq: "15" },
];
