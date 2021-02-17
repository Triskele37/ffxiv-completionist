import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../static/quest/other-quests/seasonal-events/all-saints-wake-events";

export const Duty_Quests_Other_Seasonal_All_Saints_Wake = function(parent) {
    return new DataGroup("All Saints' Wake", parent).initializeTasks(tasks);
};
