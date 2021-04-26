import { DataGroup } from "../../../DataGroup";
import { loadJson } from "../../../loader";

export const Character_Blue_Mage_Log_Dungeons = function(parent) {
    const json = loadJson('./character/blue-mage/log/dungeon', parent.lang);
    const data = new DataGroup(json.groupName, parent);

    data.initializeTasks(json.tasks);

    return data;
};
