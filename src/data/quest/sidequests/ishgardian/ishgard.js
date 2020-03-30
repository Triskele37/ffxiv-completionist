import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quests/sidequests/ishgardian-sidequests/ishgard";

export const Quests_Sidequests_Ishgardian_Ishgard = function(parent) {
    return new DataGroup("Ishgard", parent).initializeTasks(tasks);
};
