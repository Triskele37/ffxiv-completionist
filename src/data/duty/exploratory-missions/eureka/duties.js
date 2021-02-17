import { DataGroup } from "../../../DataGroup";

export const Duty_Exploratory_Missions_Eureka_Duties = function(parent) {
    const data = new DataGroup("Duties", parent);
    data.columnConfig = [
        { header: "Duty", key: "name_en" },
        { header: "eLvl Required", key: "eLvlReq" },
    ];
    data.initializeTasks(tasks);

    return data;
};

const tasks = [
    {
        name_en: "Baldesion Arsenal",
        eLvlReq: "60"
    }
];
