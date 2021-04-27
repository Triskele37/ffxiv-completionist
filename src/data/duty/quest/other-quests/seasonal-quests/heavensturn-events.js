import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../resources/en/duty/quest/other-quests/seasonal-events/heavensturn-events";

export const Duty_Quests_Other_Seasonal_Heavensturn = function(parent) {
    return new DataGroup("Heavensturn", parent).initializeTasks(tasks);
};
