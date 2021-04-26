import { DataGroup } from "../../../DataGroup";
import { loadJson } from "../../../loader";

export const Character_Achievements_Character_Disciple_of_Magic = function(parent) {
    const json = loadJson('./character/achievement/character/disciples-of-magic', parent.lang);
    const data = new DataGroup(json.groupName, parent);

    data.initializeTasks(json.tasks);

    return data;
};
