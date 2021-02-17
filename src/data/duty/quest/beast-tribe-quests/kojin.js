import { DataGroup } from "../../../DataGroup";

import { combineMainAndDaily } from "./combineMainAndDaily";
import mainQuests from "../../../../../static/quest/beast-tribe-quests-arrheavenswardstormblood/kojin-quests/main-quests";
import dailyQuests from "../../../../../static/quest/beast-tribe-quests-arrheavenswardstormblood/kojin-quests/daily-quests";

const tasks = combineMainAndDaily(mainQuests, dailyQuests);

export const Duty_Quests_Beast_Tribe_Kojin = function(parent) {
    return new DataGroup("Kojin", parent).initializeTasks(tasks);
};
