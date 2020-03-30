import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quests/other-quests/seasonal-events/moonfire-faire-events";

export const Quests_Other_Seasonal_Moonfire_Faire = function(parent) {
    return new DataGroup("Moonfire Faire", parent).initializeTasks(tasks);
};
