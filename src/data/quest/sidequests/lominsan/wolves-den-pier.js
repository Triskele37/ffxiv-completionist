import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quests/sidequests/lominsan-sidequests/wolves-den-pier";

export const Quests_Sidequests_Lominsan_Wolves_Den_Pier = function(parent) {
    return new DataGroup("Wolves' Den Pier", parent).initializeTasks(tasks);
};
