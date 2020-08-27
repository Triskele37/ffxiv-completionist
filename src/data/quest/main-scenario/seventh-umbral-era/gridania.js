import { DataGroup } from "../../../DataGroup";
import all from "../../../../../static/quest/main-scenario-past/seventh-umbral-era-main-scenario-quests/seventh-umbral-era";

const places = ["Gridania", "Central Shroud", "East Shroud", "South Shroud", "North Shroud"];
const tasks = all.filter((quest) => quest.Level < 15 && places.includes(quest.PlaceName));

export const Quests_Main_Scenario_Seventh_Umbral_Era_Gridania = function(parent) {
    return new DataGroup("Gridania", parent).initializeTasks(tasks);
};
