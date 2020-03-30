import { DataGroup } from "../../DataGroup";
import mainQuests from "../../../../static/quests/beast-tribe-quests-arrheavenswardstormblood/amaljaa-quests/main-quests";
import dailyQuests from "../../../../static/quests/beast-tribe-quests-arrheavenswardstormblood/amaljaa-quests/daily-quests";

export const Quests_Beast_Tribe_Amalj_Aa = function(parent) {
    return new DataGroup("Amalj'aa", parent).initializeTasks([
        ...mainQuests.map((quest) => { quest.type = 'Main'; return quest; }),
        ...dailyQuests.map((quest) => { quest.type = 'Daily'; return quest; }),
    ]);
};
