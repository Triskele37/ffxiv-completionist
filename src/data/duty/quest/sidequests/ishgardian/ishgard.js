import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../resources/en/duty/quest/sidequests/ishgardian-sidequests/ishgard";

export const Duty_Quests_Sidequests_Ishgardian_Ishgard = function(parent) {
    return new DataGroup("Ishgard", parent).initializeTasks(tasks);
};
