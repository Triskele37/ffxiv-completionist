import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievement/grand-company/immortal-flames";

export const Achievements_Grand_Company_Immortal_Flames = function(parent) {
    return new DataGroup("Immortal Flames", parent).initializeTasks(tasks);
};
