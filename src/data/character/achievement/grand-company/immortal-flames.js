import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/achievement/grand-company/immortal-flames";

export const Character_Achievements_Grand_Company_Immortal_Flames = function(parent) {
    const data = new DataGroup("Immortal Flames", parent);
    data.name_de = "Legion";
    data.name_en = "Immortal Flames";
    data.name_fr = "Immortels";
    data.name_ja = "不滅隊";

    data.initializeTasks(tasks);

    return data;
};
