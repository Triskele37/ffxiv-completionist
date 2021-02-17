import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../static/quest/sidequests/uldahn-sidequests/the-gold-saucer";

export const Duty_Quests_Sidequests_Ul_Dahn_The_Gold_Saucer = function(parent) {
    return new DataGroup("The Gold Saucer", parent).initializeTasks(tasks);
};
