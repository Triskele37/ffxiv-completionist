import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quests/other-quests/seasonal-events/gold-saucer-festivities";

export const Quests_Other_Seasonal_Gold_Saucer_Festivities = function(parent) {
    return new DataGroup("Gold Saucer Festivities", parent).initializeTasks(tasks);
};
