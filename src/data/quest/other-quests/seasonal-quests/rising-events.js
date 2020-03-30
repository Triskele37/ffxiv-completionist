import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quests/other-quests/seasonal-events/rising-events";

export const Quests_Other_Seasonal_Rising = function(parent) {
    return new DataGroup("Rising", parent).initializeTasks(tasks);
};
