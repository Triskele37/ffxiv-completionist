import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../static/quest/other-quests/special-quests/collaboration-quests";

export const Duty_Quests_Other_Special_Collaboration = function(parent) {
    const data = new DataGroup("Collaboration", parent);

    data.columnConfig = [
        { header: "Level", key: "Level", centered: true },
        { header: "Name", key: "Name" },
        { header: "Collaboration", key: "Collaboration", filterable: true },
        { header: "Year", key: "Year", centered: true }
    ];

    data.initializeTasks(tasks);

    return data;
};
