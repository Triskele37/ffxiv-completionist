import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../static/quest/sidequests/dravanian-sidequests/the-dravanian-hinterlands";

export const Duty_Quests_Sidequests_Dravanian_The_Dravanian_Hinterlands = function(parent) {
    return new DataGroup("The Dravanian Hinterlands", parent).initializeTasks(tasks);
};
