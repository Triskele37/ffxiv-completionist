import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../resources/en/duty/quest/sidequests/side-story-quests/further-hildibrand-adventures";

export const Duty_Quests_Sidequests_Side_Story_Further_Hildibrand_Adventures = function(parent) {
    return new DataGroup("Further Hildibrand Adventures", parent).initializeTasks(tasks);
};
