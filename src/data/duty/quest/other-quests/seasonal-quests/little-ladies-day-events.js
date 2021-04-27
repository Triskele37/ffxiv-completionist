import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../resources/en/duty/quest/other-quests/seasonal-events/little-ladies-day-events";

export const Duty_Quests_Other_Seasonal_Little_Ladies_Day = function(parent) {
    return new DataGroup("Little Ladies' Day", parent).initializeTasks(tasks);
};
