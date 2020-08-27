import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quest/other-quests/special-quests/collaboration-quests";

export const Quests_Other_Special_Collaboration = function(parent) {
    return new DataGroup("Collaboration", parent).initializeTasks(tasks);
};
