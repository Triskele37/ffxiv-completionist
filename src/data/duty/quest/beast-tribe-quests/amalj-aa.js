import { DataGroup } from "../../../DataGroup";

import { combineMainAndDaily } from "./combineMainAndDaily";
import mainQuests from "../../../../../resources/en/duty/quest/beast-tribe-quests-arrheavenswardstormblood/amaljaa-quests/main-quests";
import dailyQuests from "../../../../../resources/en/duty/quest/beast-tribe-quests-arrheavenswardstormblood/amaljaa-quests/daily-quests";

const tasks = combineMainAndDaily(mainQuests, dailyQuests);

export const Duty_Quests_Beast_Tribe_Amalj_Aa = function(parent) {
    return new DataGroup("Amalj'aa", parent).initializeTasks(tasks);
};
