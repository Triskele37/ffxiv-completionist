import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../resources/en/duty/quest/sidequests/uldahn-sidequests/southern-thanalan";

export const Duty_Quests_Sidequests_Ul_Dahn_Southern_Thanalan = function(parent) {
    return new DataGroup("Southern Thanalan", parent).initializeTasks(tasks);
};
