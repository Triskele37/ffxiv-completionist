import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../resources/en/duty/quest/sidequests/il-mheg-sidequests/il-mheg";

export const Duty_Quests_Sidequests_Il_Mheg_Il_Mheg = function(parent) {
    return new DataGroup("Il Mheg", parent).initializeTasks(tasks);
};
