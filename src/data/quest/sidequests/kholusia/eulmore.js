import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quests/sidequests/kholusia-sidequests/eulmore";

export const Quests_Sidequests_Kholusia_Eulmore = function(parent) {
    return new DataGroup("Eulmore", parent).initializeTasks(tasks);
};
