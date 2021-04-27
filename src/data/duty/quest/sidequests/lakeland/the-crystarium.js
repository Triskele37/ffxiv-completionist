import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../resources/en/duty/quest/sidequests/lakeland-sidequests/the-crystarium";

export const Duty_Quests_Sidequests_Lakeland_The_Crystarium = function(parent) {
    return new DataGroup("The Crystarium", parent).initializeTasks(tasks);
};
