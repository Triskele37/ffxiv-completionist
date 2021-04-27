import { DataGroup } from "../../../DataGroup";

export const Duty_Quests_Levequests_Battlecraft = function(parent) {
    const data = new DataGroup("Battlecraft", parent).initializeTasks(tasks);
    data.name_fr = "Mercenariat";

    data.columnConfig = parent.columnConfig.concat(
        { header: "Company", key: "company" }
    );

    return data;
};
