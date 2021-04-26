import { DataGroup } from "../../DataGroup";
import { loadJson } from "../../loader";

export const Character_Relic_Gear_Resistance = function(parent) {
    const json = loadJson('./character/relic-gear/resistance', parent.lang);
    return new DataGroup(json.groupName, parent).initializeTasks(json.tasks);
};
