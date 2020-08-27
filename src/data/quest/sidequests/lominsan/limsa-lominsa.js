import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quest/sidequests/lominsan-sidequests/limsa-lominsa";

export const Quests_Sidequests_Lominsan_Limsa_Lominsa = function(parent) {
    return new DataGroup("Limsa Lominsa", parent).initializeTasks(tasks);
};
