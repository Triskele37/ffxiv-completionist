import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quest/sidequests/kholusia-sidequests/kholusia";

import { Quests_Sidequests_Kholusia_Eulmore } from "./eulmore";

export const Quests_Sidequests_Kholusia = function(parent) {
    const data = new DataGroup("Kholusia", parent);
    data.name_fr = "Kholusia";

    data.initializeSubGroups([
        Quests_Sidequests_Kholusia_Eulmore,
    ]);

    data.initializeTasks(tasks);

    return data;
};
