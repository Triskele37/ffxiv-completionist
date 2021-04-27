import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../resources/en/duty/quest/other-quests/seasonal-events/moonfire-faire-events";

export const Duty_Quests_Other_Seasonal_Moonfire_Faire = function(parent) {
    return new DataGroup("Moonfire Faire", parent).initializeTasks(tasks);
};
