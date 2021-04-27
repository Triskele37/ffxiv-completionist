import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../resources/en/duty/quest/sidequests/hingan-sidequests/kugane";

export const Duty_Quests_Sidequests_Hingan_Kugane = function(parent) {
    return new DataGroup("Kugane", parent).initializeTasks(tasks);
};
