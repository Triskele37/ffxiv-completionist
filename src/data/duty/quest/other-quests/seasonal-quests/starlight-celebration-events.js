import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../resources/en/duty/quest/other-quests/seasonal-events/starlight-celebration-events";

export const Duty_Quests_Other_Seasonal_Starlight_Celebration = function(parent) {
    return new DataGroup("Starlight Celebration", parent).initializeTasks(tasks);
};
