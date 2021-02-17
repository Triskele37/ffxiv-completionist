import { DataGroup } from "../../../DataGroup";

import { combineMainAndDaily } from "./combineMainAndDaily";
import mainQuests from "../../../../../static/quest/beast-tribe-quests-arrheavenswardstormblood/namazu-quests/main-quests";
import dailyQuests from "../../../../../static/quest/beast-tribe-quests-arrheavenswardstormblood/namazu-quests/daily-quests";

const tasks = combineMainAndDaily(mainQuests, dailyQuests);

export const Duty_Quests_Beast_Tribe_Namazu = function(parent) {
    return new DataGroup("Namazu", parent).initializeTasks(tasks);
};
