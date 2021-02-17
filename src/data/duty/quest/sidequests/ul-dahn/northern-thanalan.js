import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../static/quest/sidequests/uldahn-sidequests/northern-thanalan";

export const Duty_Quests_Sidequests_Ul_Dahn_Northern_Thanalan = function(parent) {
    return new DataGroup("Northern Thanalan", parent).initializeTasks(tasks);
};
