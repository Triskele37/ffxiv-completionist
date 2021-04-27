import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../resources/en/duty/quest/sidequests/side-story-quests/heavensward-beast-tribe-quests";

export const Duty_Quests_Sidequests_Side_Story_Heavensward_Beast_Tribe = function(parent) {
    return new DataGroup("Heavensward Beast Tribe", parent).initializeTasks(tasks);
};
