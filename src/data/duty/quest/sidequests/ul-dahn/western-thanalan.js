import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../resources/en/duty/quest/sidequests/uldahn-sidequests/western-thanalan";

export const Duty_Quests_Sidequests_Ul_Dahn_Western_Thanalan = function(parent) {
    return new DataGroup("Western Thanalan", parent).initializeTasks(tasks);
};
