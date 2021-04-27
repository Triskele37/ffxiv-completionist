import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../resources/en/duty/quest/sidequests/lominsan-sidequests/wolves-den-pier";

export const Duty_Quests_Sidequests_Lominsan_Wolves_Den_Pier = function(parent) {
    return new DataGroup("Wolves' Den Pier", parent).initializeTasks(tasks);
};
