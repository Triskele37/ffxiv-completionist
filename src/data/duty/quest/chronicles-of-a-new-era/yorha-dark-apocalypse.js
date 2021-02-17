import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quest/chronicles-of-a-new-era/yorha-dark-apocalypse/yorha-dark-apocalypse";

export const Duty_Quests_Chronicles_of_a_New_Era_YoRHa_Dark_Apocalypse = function(parent) {
    return new DataGroup("YoRHa: Dark Apocalypse", parent).initializeTasks(tasks);
};
