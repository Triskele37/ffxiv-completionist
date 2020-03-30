import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quests/other-quests/seasonal-events/starlight-celebration-events";

export const Quests_Other_Seasonal_Starlight_Celebration = function(parent) {
    return new DataGroup("Starlight Celebration", parent).initializeTasks(tasks);
};
