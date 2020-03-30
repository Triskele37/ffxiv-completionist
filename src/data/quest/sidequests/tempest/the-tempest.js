import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quests/sidequests/tempest-sidequests/the-tempest";

export const Quests_Sidequests_Tempest_The_Tempest = function(parent) {
    return new DataGroup("The Tempest", parent).initializeTasks(tasks);
};
