import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quests/sidequests/dravanian-sidequests/the-churning-mists";

export const Quests_Sidequests_Dravanian_The_Churning_Mists = function(parent) {
    return new DataGroup("The Churning Mists", parent).initializeTasks(tasks);
};
