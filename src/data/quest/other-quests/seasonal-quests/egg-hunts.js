import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quests/other-quests/seasonal-events/egg-hunts";

export const Quests_Other_Seasonal_Egg_Hunts = function(parent) {
    return new DataGroup("Egg Hunts", parent).initializeTasks(tasks);
};
