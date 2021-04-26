import { DataGroup } from "../../../DataGroup";
import { loadJson } from "../../../loader";

export const Character_Achievements_Legacy_Currency = function(parent) {
    const json = loadJson('./character/achievement/legacy/currency', parent.lang);
    const data = new DataGroup(json.groupName, parent);

    data.initializeTasks(json.tasks);

    return data;
};
