import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../resources/en/duty/quest/sidequests/dravanian-sidequests/idyllshire";

export const Duty_Quests_Sidequests_Dravanian_Idyllshire = function(parent) {
    return new DataGroup("Idyllshire", parent).initializeTasks(tasks);
};
