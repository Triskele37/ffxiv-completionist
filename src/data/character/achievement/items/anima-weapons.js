import { DataGroup } from "../../../DataGroup";
import { loadJson } from "../../../loader";

export const Character_Achievements_Items_Anima_Weapons = function(parent) {
    const json = loadJson('./character/achievement/items/anima-weapons', parent.lang);
    const data = new DataGroup(json.groupName, parent);

    data.initializeTasks(json.tasks);

    return data;
};
