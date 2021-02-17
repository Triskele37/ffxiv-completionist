import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../static/quest/sidequests/uldahn-sidequests/the-waking-sands";

export const Duty_Quests_Sidequests_Ul_Dahn_The_Waking_Sands = function(parent) {
    return new DataGroup("The Waking Sands", parent).initializeTasks(tasks);
};
