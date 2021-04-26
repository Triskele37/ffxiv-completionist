import { DataGroup } from "../../../DataGroup";
import { loadJson } from "../../../loader";

export const Character_Achievements_PvP_Rival_Wings = function(parent) {
    const json = loadJson('./character/achievement/pvp/rival-wings', parent.lang);
    const data = new DataGroup(json.groupName, parent);

    data.initializeTasks(json.tasks);

    return data;
};
