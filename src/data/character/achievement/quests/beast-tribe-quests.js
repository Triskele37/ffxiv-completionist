import { DataGroup } from "../../../DataGroup";
import { loadJson } from "../../../loader";

export const Character_Achievements_Quests_Beast_Tribe_Quests = function(parent) {
    const json = loadJson('./character/achievement/quests/beast-tribe-quests', parent.lang);
    const data = new DataGroup(json.groupName, parent);

    data.initializeTasks(json.tasks);

    return data;
};
