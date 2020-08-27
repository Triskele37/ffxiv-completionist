import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quest/sidequests/kholusia-sidequests/kholusia";

import { Quests_Sidequests_Kholusia_Eulmore } from "./eulmore";

export const Quests_Sidequests_Kholusia = function(parent) {
    return new DataGroup("Kholusia", parent).initializeSubGroups([
        Quests_Sidequests_Kholusia_Eulmore,
    ]).initializeTasks(tasks);
};
