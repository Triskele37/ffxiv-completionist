import { DataGroup } from "../../../DataGroup";

export const Gathering_Logs_Harvesting_Special_Abalathian_Folklore = function(name, parent) {
    return new DataGroup(name, parent).initializeTasks(tasks);
};

const tasks = [
    {
        level: "60★★★",
        name: "Star Cotton Boll",
        zone: "Azys Lla",
        location: "Antithesis"
    },
];
