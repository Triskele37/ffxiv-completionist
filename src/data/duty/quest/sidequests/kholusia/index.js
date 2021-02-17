import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../static/quest/sidequests/kholusia-sidequests/kholusia";

import { Duty_Quests_Sidequests_Kholusia_Eulmore } from "./eulmore";

export const Duty_Quests_Sidequests_Kholusia = function(parent) {
    const data = new DataGroup("Kholusia", parent);
    data.name_fr = "Kholusia";

    data.initializeSubGroups([
        Duty_Quests_Sidequests_Kholusia_Eulmore,
    ]);

    data.initializeTasks(tasks);

    return data;
};
