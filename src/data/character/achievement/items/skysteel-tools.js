import { DataGroup } from "../../../DataGroup";
import { loadJson } from "../../../loader";

export const Character_Achievements_Items_Skysteel_Tools = function(parent) {
    const json = loadJson('./character/achievement/items/skysteel-tools', parent.lang);
    const data = new DataGroup(json.groupName, parent);

    data.initializeTasks(json.tasks);

    return data;
};
