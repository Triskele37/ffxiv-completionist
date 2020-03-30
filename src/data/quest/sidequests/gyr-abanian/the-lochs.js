import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quests/sidequests/gyr-abanian-sidequests/the-lochs";

export const Quests_Sidequests_Gyr_Abanian_The_Lochs = function(parent) {
    return new DataGroup("The Lochs", parent).initializeTasks(tasks);
};
