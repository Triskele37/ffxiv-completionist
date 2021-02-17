import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/achievement/legacy/grand-company";

export const Character_Achievements_Legacy_Grand_Company = function(parent) {
    return new DataGroup("Grand Company", parent).initializeTasks(tasks);
};
