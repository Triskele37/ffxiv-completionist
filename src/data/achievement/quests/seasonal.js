import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievements/quests/seasonal-events";

export const Achievements_Quests_Seasonal_Events = function(parent) {
    const data = new DataGroup("Seasonal Events", parent);
    data.defaultCompletion = "X";
    data.initializeTasks(tasks);
    return data;
};
