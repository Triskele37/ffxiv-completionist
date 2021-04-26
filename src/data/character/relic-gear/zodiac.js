import { DataGroup } from "../../DataGroup";
import { loadJson } from "../../loader";

export const Character_Relic_Gear_Zodiac = function(parent) {
    const json = loadJson('./character/relic-gear/zodiac', parent.lang);
    return new DataGroup(json.groupName, parent).initializeTasks(json.tasks);
};
