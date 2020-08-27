import { DataGroup } from "../../DataGroup";

import { combineMainAndDaily } from "./combineMainAndDaily";
import mainQuests from "../../../../static/quest/beast-tribe-quests-arrheavenswardstormblood/sylph-quests/main-quests";
import dailyQuests from "../../../../static/quest/beast-tribe-quests-arrheavenswardstormblood/sylph-quests/daily-quests";

const tasks = combineMainAndDaily(mainQuests, dailyQuests);

export const Quests_Beast_Tribe_Sylph = function(parent) {
    return new DataGroup("Sylph", parent).initializeTasks(tasks);
};
