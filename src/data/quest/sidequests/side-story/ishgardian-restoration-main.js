import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quests/sidequests/side-story-quests/ishgardian-restoration-main-quests";

export const Quests_Sidequests_Side_Story_Ishgardian_Restoration_Main = function(parent) {
    return new DataGroup("Ishgardian Restoration Main", parent).initializeTasks(tasks);
};
