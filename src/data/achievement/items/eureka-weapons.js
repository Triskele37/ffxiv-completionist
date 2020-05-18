import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievement/items/eureka-weapons";

export const Achievements_Items_Eureka_Weapons = function(parent) {
    return new DataGroup("Eureka Weapons", parent).initializeTasks(tasks);
};
