import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../resources/en/duty/quest/sidequests/side-story-quests/resistance-weapons";

export const Duty_Quests_Sidequests_Side_Story_Resistance_Weapons = function(parent) {
    return new DataGroup("Resistance Weapons", parent).initializeTasks(tasks);
};
