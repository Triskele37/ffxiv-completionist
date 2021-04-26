import { DataGroup } from "../../DataGroup";
import { loadJson } from "../../loader";

export const Character_Relic_Gear_Skysteel_Tools = function(parent) {
    const json = loadJson('./character/relic-gear/skysteel-tools', parent.lang);
    return new DataGroup(json.groupName, parent).initializeTasks(json.tasks);
};
