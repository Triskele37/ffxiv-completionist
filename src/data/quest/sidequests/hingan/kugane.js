import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quests/sidequests/hingan-sidequests/kugane";

export const Quests_Sidequests_Hingan_Kugane = function(parent) {
    return new DataGroup("Kugane", parent).initializeTasks(tasks);
};
