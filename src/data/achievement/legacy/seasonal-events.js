import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievements/legacy/seasonal-events";

export const Achievements_Legacy_Seasonal_Events = function(parent) {
    return new DataGroup("Seasonal Events", parent).initializeTasks(tasks);
};
