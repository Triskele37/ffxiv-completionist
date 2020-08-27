import { DataGroup } from "../../DataGroup";

import { combineMainAndDaily } from "./combineMainAndDaily";
import mainQuests from "../../../../static/quest/beast-tribe-quests-shadowbringers/dwarf-quests/main-quests";
import dailyQuests from "../../../../static/quest/beast-tribe-quests-shadowbringers/dwarf-quests/daily-quests";

const tasks = combineMainAndDaily(mainQuests, dailyQuests);

export const Quests_Beast_Tribe_Dwarf = function(parent) {
    return new DataGroup("Dwarf", parent).initializeTasks(tasks);
};
