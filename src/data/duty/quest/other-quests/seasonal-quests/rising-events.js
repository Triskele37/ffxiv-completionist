import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../resources/en/duty/quest/other-quests/seasonal-events/rising-events";

export const Duty_Quests_Other_Seasonal_Rising = function(parent) {
    return new DataGroup("Rising", parent).initializeTasks(tasks);
};
