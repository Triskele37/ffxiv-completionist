import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quest/sidequests/lakeland-sidequests/the-crystarium";

export const Quests_Sidequests_Lakeland_The_Crystarium = function(parent) {
    return new DataGroup("The Crystarium", parent).initializeTasks(tasks);
};
