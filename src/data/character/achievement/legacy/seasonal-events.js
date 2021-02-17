import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/achievement/legacy/seasonal-events";

export const Character_Achievements_Legacy_Seasonal_Events = function(parent) {
    return new DataGroup("Seasonal Events", parent).initializeTasks(tasks);
};
