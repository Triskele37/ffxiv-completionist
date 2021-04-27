import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../resources/en/duty/quest/sidequests/othardian-sidequests/the-azim-steppe";

export const Duty_Quests_Sidequests_Othardian_The_Azim_Steppe = function(parent) {
    return new DataGroup("The Azim Steppe", parent).initializeTasks(tasks);
};
