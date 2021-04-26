import { DataGroup } from "../../../DataGroup";
import { loadJson } from "../../../loader";

export const Character_Achievements_Grand_Company_Maelstrom = function(parent) {
    const json = loadJson('./character/achievement/grand-company/maelstrom', parent.lang);
    const data = new DataGroup(json.groupName, parent);

    data.initializeTasks(json.tasks);

    return data;
};
