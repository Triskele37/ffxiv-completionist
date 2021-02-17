import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../static/quest/other-quests/seasonal-events/rising-events";

export const Duty_Quests_Other_Seasonal_Rising = function(parent) {
    return new DataGroup("Rising", parent).initializeTasks(tasks);
};
