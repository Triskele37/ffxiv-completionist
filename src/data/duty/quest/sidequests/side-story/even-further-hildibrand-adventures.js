import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../static/quest/sidequests/side-story-quests/even-further-hildibrand-adventures";

export const Duty_Quests_Sidequests_Side_Story_Even_Further_Hildibrand_Adventures = function(parent) {
    return new DataGroup("Even Further Hildibrand Adventures", parent).initializeTasks(tasks);
};
