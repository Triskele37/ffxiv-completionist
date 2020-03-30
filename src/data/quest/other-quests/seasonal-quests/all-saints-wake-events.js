import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quests/other-quests/seasonal-events/all-saints-wake-events";

export const Quests_Other_Seasonal_All_Saints_Wake = function(parent) {
    return new DataGroup("All Saints' Wake", parent).initializeTasks(tasks);
};
