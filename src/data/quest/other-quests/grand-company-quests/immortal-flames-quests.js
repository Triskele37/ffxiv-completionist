import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quest/other-quests/grand-company-quests/immortal-flames-quests";

export const Quests_Other_Grand_Company_Immortal_Flames = function(parent) {
    return new DataGroup("Immortal Flames", parent).initializeTasks(tasks);
};
