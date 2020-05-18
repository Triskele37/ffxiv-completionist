import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievement/quests/beast-tribe-quests";

export const Achievements_Quests_Beast_Tribe_Quests = function(parent) {
    return new DataGroup("Beast Tribe Quests", parent).initializeTasks(tasks);
};
