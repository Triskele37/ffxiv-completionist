import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../static/quest/sidequests/tempest-sidequests/the-tempest";

export const Duty_Quests_Sidequests_Tempest_The_Tempest = function(parent) {
    return new DataGroup("The Tempest", parent).initializeTasks(tasks);
};
