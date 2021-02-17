import { DataGroup } from "../../DataGroup";

export const Travel_Mount_Speed_Others = function(parent) {
    return new DataGroup("Others", parent).initializeTasks(tasks);
};

const tasks = [
    { name: "Mor Dhona - 1", method: "Every Little Thing She Does Is Magitek" },
    { name: "Mor Dhona - 2", method: "250 Allied Seals (Hunt Billmaster - Grand Company HQ)" },
];
