import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quest/sidequests/othardian-sidequests/the-ruby-sea";

export const Quests_Sidequests_Othardian_The_Ruby_Sea = function(parent) {
    return new DataGroup("The Ruby Sea", parent).initializeTasks(tasks);
};
