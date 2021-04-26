import { DataGroup } from "../../../DataGroup";
import { loadJson } from "../../../loader";

export const Character_Achievements_Legacy_Seasonal_Events = function(parent) {
    const json = loadJson('./character/achievement/legacy/seasonal-events', parent.lang);
    const data = new DataGroup(json.groupName, parent);

    data.initializeTasks(json.tasks);

    return data;
};
