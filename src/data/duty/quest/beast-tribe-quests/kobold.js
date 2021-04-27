import { DataGroup } from "../../../DataGroup";

import { combineMainAndDaily } from "./combineMainAndDaily";
import mainQuests from "../../../../../resources/en/duty/quest/beast-tribe-quests-arrheavenswardstormblood/kobold-quests/main-quests";
import dailyQuests from "../../../../../resources/en/duty/quest/beast-tribe-quests-arrheavenswardstormblood/kobold-quests/daily-quests";

const tasks = combineMainAndDaily(mainQuests, dailyQuests);

export const Duty_Quests_Beast_Tribe_Kobold = function(parent) {
    return new DataGroup("Kobold", parent).initializeTasks(tasks);
};
