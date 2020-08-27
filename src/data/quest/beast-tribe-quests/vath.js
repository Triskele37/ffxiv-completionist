import { DataGroup } from "../../DataGroup";

import { combineMainAndDaily } from "./combineMainAndDaily";
import mainQuests from "../../../../static/quest/beast-tribe-quests-arrheavenswardstormblood/vath-quests/main-quests";
import dailyQuests from "../../../../static/quest/beast-tribe-quests-arrheavenswardstormblood/vath-quests/daily-quests";

const tasks = combineMainAndDaily(mainQuests, dailyQuests);

export const Quests_Beast_Tribe_Vath = function(parent) {
    return new DataGroup("Vath", parent).initializeTasks(tasks);
};
