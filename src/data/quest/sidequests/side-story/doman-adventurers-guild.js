import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quests/sidequests/side-story-quests/doman-adventurers-guild-quests";

export const Quests_Sidequests_Side_Story_Doman_Adventurers_Guild = function(parent) {
    return new DataGroup("Doman Adventurers' Guild", parent).initializeTasks(tasks);
};
