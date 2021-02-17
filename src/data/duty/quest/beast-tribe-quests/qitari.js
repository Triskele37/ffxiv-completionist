import { DataGroup } from "../../../DataGroup";

import { combineMainAndDaily } from "./combineMainAndDaily";
import mainQuests from "../../../../../static/quest/beast-tribe-quests-shadowbringers/qitari-quests/main-quests";
import dailyQuests from "../../../../../static/quest/beast-tribe-quests-shadowbringers/qitari-quests/daily-quests";

const tasks = combineMainAndDaily(mainQuests, dailyQuests);

export const Duty_Quests_Beast_Tribe_Qitari = function(parent) {
    return new DataGroup("Qitari", parent).initializeTasks(tasks);
};
