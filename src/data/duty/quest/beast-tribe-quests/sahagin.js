import { DataGroup } from "../../../DataGroup";

import { combineMainAndDaily } from "./combineMainAndDaily";
import mainQuests from "../../../../../static/quest/beast-tribe-quests-arrheavenswardstormblood/sahagin-quests/main-quests";
import dailyQuests from "../../../../../static/quest/beast-tribe-quests-arrheavenswardstormblood/sahagin-quests/daily-quests";

const tasks = combineMainAndDaily(mainQuests, dailyQuests);

export const Duty_Quests_Beast_Tribe_Sahagin = function(parent) {
    return new DataGroup("Sahagin", parent).initializeTasks(tasks);
};
