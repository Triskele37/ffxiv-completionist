import { DataGroup } from "../../DataGroup";
import { loadJson } from "../../loader";

export const Character_Relic_Gear_Anima = function(parent) {
    const json = loadJson('./character/relic-gear/anima', parent.lang);
    return new DataGroup(json.groupName, parent).initializeTasks(json.tasks);
};
