import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../resources/en/duty/quest/other-quests/seasonal-events/egg-hunts";

export const Duty_Quests_Other_Seasonal_Egg_Hunts = function(parent) {
    return new DataGroup("Egg Hunts", parent).initializeTasks(tasks);
};
