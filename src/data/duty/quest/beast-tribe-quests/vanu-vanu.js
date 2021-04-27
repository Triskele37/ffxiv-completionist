import { DataGroup } from "../../../DataGroup";

import { combineMainAndDaily } from "./combineMainAndDaily";
import mainQuests from "../../../../../resources/en/duty/quest/beast-tribe-quests-arrheavenswardstormblood/vanu-vanu-quests/main-quests";
import dailyQuests from "../../../../../resources/en/duty/quest/beast-tribe-quests-arrheavenswardstormblood/vanu-vanu-quests/daily-quests";

const tasks = combineMainAndDaily(mainQuests, dailyQuests);

export const Duty_Quests_Beast_Tribe_Vanu_Vanu = function(parent) {
    return new DataGroup("Vanu Vanu", parent).initializeTasks(tasks);
};
