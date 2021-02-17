import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../static/quest/sidequests/azys-lla-sidequests/azys-lla";

export const Duty_Quests_Sidequests_Azys_Lla_Azys_Lla = function(parent) {
    return new DataGroup("Azys Lla", parent).initializeTasks(tasks);
};
