import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quests/sidequests/side-story-quests/further-hildibrand-adventures";

export const Quests_Sidequests_Side_Story_Further_Hildibrand_Adventures = function(parent) {
    return new DataGroup("Further Hildibrand Adventures", parent).initializeTasks(tasks);
};
