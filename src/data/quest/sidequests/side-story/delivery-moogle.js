import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quest/sidequests/side-story-quests/delivery-moogle-quests";

export const Quests_Sidequests_Side_Story_Delivery_Moogle = function(parent) {
    return new DataGroup("Delivery Moogle", parent).initializeTasks(tasks);
};
