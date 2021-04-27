import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../resources/en/duty/quest/other-quests/grand-company-quests/immortal-flames-quests";

export const Duty_Quests_Other_Grand_Company_Immortal_Flames = function(parent) {
    return new DataGroup("Immortal Flames", parent).initializeTasks(tasks);
};
