import { DataGroup } from "../../../DataGroup";
import { loadJson } from "../../../loader";

export const Character_Gold_Saucer_Triple_Triad_Card_List_Last_Page = function(parent) {
    const json = loadJson('./character/gold-saucer/triple-triad-card-list/last-page', parent.lang);
    return new DataGroup(json.groupName, parent).initializeTasks(json.tasks);
};
