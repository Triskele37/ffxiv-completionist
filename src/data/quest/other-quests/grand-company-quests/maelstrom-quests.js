import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quests/other-quests/grand-company-quests/maelstrom-quests";

export const Quests_Other_Grand_Company_Maelstrom = function(parent) {
    return new DataGroup("Maelstrom", parent).initializeTasks(tasks);
};
