import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievements/grand-company/maelstrom";

export const Achievements_Grand_Company_Maelstrom = function(parent) {
    return new DataGroup("Maelstrom", parent).initializeTasks(tasks);
};
