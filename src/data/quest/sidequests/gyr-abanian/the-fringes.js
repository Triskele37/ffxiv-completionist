import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quests/sidequests/gyr-abanian-sidequests/the-fringes";

export const Quests_Sidequests_Gyr_Abanian_The_Fringes = function(parent) {
    return new DataGroup("The Fringes", parent).initializeTasks(tasks);
};
