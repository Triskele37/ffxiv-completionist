import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../resources/en/duty/quest/other-quests/seasonal-events/valentiones-day-events";

export const Duty_Quests_Other_Seasonal_Valentiones_Day = function(parent) {
    return new DataGroup("Valentione's Day", parent).initializeTasks(tasks);
};
