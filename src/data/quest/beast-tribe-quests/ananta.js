import { DataGroup } from "../../DataGroup";

import { combineMainAndDaily } from "./combineMainAndDaily";
import mainQuests from "../../../../static/quest/beast-tribe-quests-arrheavenswardstormblood/ananta-quests/main-quests";
import dailyQuests from "../../../../static/quest/beast-tribe-quests-arrheavenswardstormblood/ananta-quests/daily-quests";

const tasks = combineMainAndDaily(mainQuests, dailyQuests);

export const Quests_Beast_Tribe_Ananta = function(parent) {
    return new DataGroup("Ananta", parent).initializeTasks(tasks);
};
