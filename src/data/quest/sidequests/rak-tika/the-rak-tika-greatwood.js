import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/quests/sidequests/raktika-sidequests/the-raktika-greatwood";

export const Quests_Sidequests_Rak_Tika_The_Rak_Tika_Greatwood = function(parent) {
    return new DataGroup("The Rak'Tika Greatwood", parent).initializeTasks(tasks);
};
