import { DataGroup } from "../../DataGroup";

import { combineMainAndDaily } from "./combineMainAndDaily";
import mainQuests from "../../../../static/quest/beast-tribe-quests-arrheavenswardstormblood/kobold-quests/main-quests";
import dailyQuests from "../../../../static/quest/beast-tribe-quests-arrheavenswardstormblood/kobold-quests/daily-quests";

const tasks = combineMainAndDaily(mainQuests, dailyQuests);

export const Quests_Beast_Tribe_Kobold = function(parent) {
    return new DataGroup("Kobold", parent).initializeTasks(tasks);
};
