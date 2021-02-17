import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../static/quest/sidequests/side-story-quests/the-forbidden-land-eureka";

export const Duty_Quests_Sidequests_Side_Story_The_Forbidden_Land_Eureka = function(parent) {
    return new DataGroup("The Forbidden Land, Eureka", parent).initializeTasks(tasks);
};
