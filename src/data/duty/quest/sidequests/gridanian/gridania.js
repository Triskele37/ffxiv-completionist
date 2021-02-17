import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../static/quest/sidequests/gridanian-sidequests/gridania";

export const Duty_Quests_Sidequests_Gridanian_Gridania = function(parent) {
    return new DataGroup("Gridania", parent).initializeTasks(tasks);
};
