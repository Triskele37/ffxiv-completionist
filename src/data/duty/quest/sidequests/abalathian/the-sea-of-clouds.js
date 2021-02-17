import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../static/quest/sidequests/abalathian-sidequests/the-sea-of-clouds";

export const Duty_Quests_Sidequests_Abalathian_The_Sea_of_Clouds = function(parent) {
    return new DataGroup("The Sea of Clouds", parent).initializeTasks(tasks);
};
