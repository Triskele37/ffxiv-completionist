import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../resources/en/duty/quest/sidequests/mor-dhonan-sidequests/mor-dhona";

export const Duty_Quests_Sidequests_Mor_Dhonan_Mor_Dhona = function(parent) {
    return new DataGroup("Mor Dhona", parent).initializeTasks(tasks);
};
