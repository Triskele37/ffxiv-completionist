import { DataGroup } from "../../../DataGroup";
import { loadJson } from "../../../loader";

export const Character_Achievements_Grand_Company_Immortal_Flames = function(parent) {
    const json = loadJson('./character/achievement/grand-company/immortal-flames', parent.lang);
    const data = new DataGroup(json.groupName, parent);

    data.initializeTasks(json.tasks);

    return data;
};
