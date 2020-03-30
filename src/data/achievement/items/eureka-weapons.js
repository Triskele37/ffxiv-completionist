import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievements/items/eureka-weapons";

export const Achievements_Items_Eureka_Weapons = function(parent) {
    return new DataGroup("Eureka Weapons", parent).initializeTasks(tasks);
};
