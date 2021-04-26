import { DataGroup } from "../../../DataGroup";
import { loadJson } from "../../../loader";

export const Character_Achievements_Exploration_Mor_Dhona = function(parent) {
    const json = loadJson('./character/achievement/exploration/mor-dhona', parent.lang);
    const data = new DataGroup(json.groupName, parent);

    data.initializeTasks(json.tasks);

    return data;
};
