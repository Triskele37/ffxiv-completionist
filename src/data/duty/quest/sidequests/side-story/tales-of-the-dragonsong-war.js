import { DataGroup } from "../../../../DataGroup";
import tasks from "../../../../../../resources/en/duty/quest/sidequests/side-story-quests/tales-of-the-dragonsong-war";

export const Duty_Quests_Sidequests_Side_Story_Tales_of_the_Dragonsong_War = function(parent) {
    return new DataGroup("Tales of the Dragonsong War", parent).initializeTasks(tasks);
};
