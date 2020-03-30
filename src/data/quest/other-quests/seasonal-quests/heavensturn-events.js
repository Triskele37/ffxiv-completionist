import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quests/other-quests/seasonal-events/heavensturn-events";

export const Quests_Other_Seasonal_Heavensturn = function(parent) {
    return new DataGroup("Heavensturn", parent).initializeTasks(tasks);
};
