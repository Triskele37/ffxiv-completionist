import { DataGroup } from "../../../DataGroup";
import { loadJson } from "../../../loader";

export const Character_Achievements_Quests_Seasonal_Events = function(parent) {
    const json = loadJson('./character/achievement/quests/seasonal-events', parent.lang);
    const data = new DataGroup(json.groupName, parent);

    data.initializeTasks(json.tasks);

    return data;
};
