import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievements/legacy/gathering";

export const Achievements_Legacy_Gathering = function(parent) {
    return new DataGroup("Gathering", parent).initializeTasks(tasks);
};
