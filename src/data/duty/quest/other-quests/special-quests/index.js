import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../resources/en/duty/quest/other-quests/special-quests/special-quests";

import { Duty_Quests_Other_Special_Collaboration } from "./collaboration-quests";

export const Duty_Quests_Other_Special = function(parent) {
    const data = new DataGroup("Special", parent);
    data.defaultCompletion = "X";

    data.initializeSubGroups([Duty_Quests_Other_Special_Collaboration]);
    data.initializeTasks(tasks);

    return data;
};
