import { DataGroup } from "../../DataGroup";
import { loadJson } from "../../loader";

export const Character_Relic_Gear_Eureka = function(parent) {
    const json = loadJson('./character/relic-gear/eureka', parent.lang);
    return new DataGroup(json.groupName, parent).initializeTasks(json.tasks);
};
