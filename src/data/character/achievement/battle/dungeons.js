import { DataGroup } from "../../../DataGroup";
import { loadJson } from "../../../loader";

export const Character_Achievements_Battle_Dungeons = function(parent) {
    const json = loadJson('./character/achievement/battle/dungeons', parent.lang);
    const data = new DataGroup(json.groupName, parent);
    data.name_fr = "Dunjons";

    data.initializeTasks(json.tasks);

    return data;
};
