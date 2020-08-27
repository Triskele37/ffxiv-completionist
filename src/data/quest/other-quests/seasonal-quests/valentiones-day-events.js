import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quest/other-quests/seasonal-events/valentiones-day-events";

export const Quests_Other_Seasonal_Valentiones_Day = function(parent) {
    return new DataGroup("Valentione's Day", parent).initializeTasks(tasks);
};
