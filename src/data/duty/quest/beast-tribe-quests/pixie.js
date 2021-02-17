import { DataGroup } from "../../../DataGroup";

import { combineMainAndDaily } from "./combineMainAndDaily";
import mainQuests from "../../../../../static/quest/beast-tribe-quests-shadowbringers/pixie-quests/main-quests";
import dailyQuests from "../../../../../static/quest/beast-tribe-quests-shadowbringers/pixie-quests/daily-quests";

const tasks = combineMainAndDaily(mainQuests, dailyQuests);

export const Duty_Quests_Beast_Tribe_Pixie = function(parent) {
    return new DataGroup("Pixie", parent).initializeTasks(tasks);
};
