import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quest/sidequests/side-story-quests/stormblood-beast-tribe-quests";

export const Quests_Sidequests_Side_Story_Stormblood_Beast_Tribe = function(parent) {
    return new DataGroup("Stormblood Beast Tribe", parent).initializeTasks(tasks);
};
