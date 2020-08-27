import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quest/sidequests/uldahn-sidequests/central-thanalan";

export const Quests_Sidequests_Ul_Dahn_Central_Thanalan = function(parent) {
    return new DataGroup("Central Thanalan", parent).initializeTasks(tasks);
};
