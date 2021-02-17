import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../static/quest/sidequests/dravanian-sidequests/matoyas-cave";

export const Duty_Quests_Sidequests_Dravanian_Matoyas_Cave = function(parent) {
    return new DataGroup("Matoya's Cave", parent).initializeTasks(tasks);
};
