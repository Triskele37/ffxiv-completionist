import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievements/legacy/grand-company";

export const Achievements_Legacy_Grand_Company = function(parent) {
    return new DataGroup("Grand Company", parent).initializeTasks(tasks);
};
