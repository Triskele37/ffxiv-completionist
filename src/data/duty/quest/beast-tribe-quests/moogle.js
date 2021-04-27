import { DataGroup } from "../../../DataGroup";

import { combineMainAndDaily } from "./combineMainAndDaily";
import mainQuests from "../../../../../resources/en/duty/quest/beast-tribe-quests-arrheavenswardstormblood/moogle-quests/main-quests";
import dailyQuests from "../../../../../resources/en/duty/quest/beast-tribe-quests-arrheavenswardstormblood/moogle-quests/daily-quests";

const tasks = combineMainAndDaily(mainQuests, dailyQuests);

export const Duty_Quests_Beast_Tribe_Moogle = function(parent) {
    return new DataGroup("Moogle", parent).initializeTasks(tasks);
};
