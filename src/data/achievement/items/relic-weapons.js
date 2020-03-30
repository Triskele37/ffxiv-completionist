import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievements/items/relic-weapons";

export const Achievements_Items_Relic_Weapons = function(parent) {
    return new DataGroup("Relic Weapons", parent).initializeTasks(tasks);
};
