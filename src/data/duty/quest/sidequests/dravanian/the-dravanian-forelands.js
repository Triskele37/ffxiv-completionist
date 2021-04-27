import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../resources/en/duty/quest/sidequests/dravanian-sidequests/the-dravanian-forelands";

export const Duty_Quests_Sidequests_Dravanian_The_Dravanian_Forelands = function(parent) {
    return new DataGroup("The Dravanian Forelands", parent).initializeTasks(tasks);
};
