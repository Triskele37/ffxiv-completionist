import { DataGroup } from "../../../DataGroup";
import { loadJson } from "../../../loader";

export const Character_Achievements_Exploration_The_Black_Shroud = function(parent) {
    const json = loadJson('./character/achievement/exploration/the-black-shroud', parent.lang);
    const data = new DataGroup(json.groupName, parent);

    data.initializeTasks(json.tasks);

    return data;
};
