import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../static/quest/other-quests/grand-company-quests/maelstrom-quests";

export const Duty_Quests_Other_Grand_Company_Maelstrom = function(parent) {
    return new DataGroup("Maelstrom", parent).initializeTasks(tasks);
};
