import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../resources/en/duty/quest/sidequests/raktika-sidequests/the-raktika-greatwood";

export const Duty_Quests_Sidequests_Rak_Tika_The_Rak_Tika_Greatwood = function(parent) {
    return new DataGroup("The Rak'Tika Greatwood", parent).initializeTasks(tasks);
};
