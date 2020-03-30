import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quests/sidequests/othardian-sidequests/the-azim-steppe";

export const Quests_Sidequests_Othardian_The_Azim_Steppe = function(parent) {
    return new DataGroup("The Azim Steppe", parent).initializeTasks(tasks);
};
