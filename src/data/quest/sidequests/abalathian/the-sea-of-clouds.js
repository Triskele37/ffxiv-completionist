import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quests/sidequests/abalathian-sidequests/the-sea-of-clouds";

export const Quests_Sidequests_Abalathian_The_Sea_of_Clouds = function(parent) {
    return new DataGroup("The Sea of Clouds", parent).initializeTasks(tasks);
};
