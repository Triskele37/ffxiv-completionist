import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quest/sidequests/kholusia-sidequests/eulmore";

export const Quests_Sidequests_Kholusia_Eulmore = function(parent) {
    return new DataGroup("Eulmore", parent).initializeTasks(tasks);
};
