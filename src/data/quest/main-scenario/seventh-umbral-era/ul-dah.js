import { DataGroup } from "../../../DataGroup";
import all from "../../../../../static/quests/main-scenario-past/main-scenario-quests/seventh-umbral-era";

const places = ["Ul'Dah", "Central Thanalan", "Eastern Thanalan", "Northern Thanalan", "Southern Thanalan", "Western Thanalan"];
const tasks = all.filter((quest) => quest.Level < 15 && places.includes(quest.PlaceName));

export const Quests_Main_Scenario_Seventh_Umbral_Era_Ul_Dah = function(parent) {
    return new DataGroup("Ul'Dah", parent).initializeTasks(tasks);
};
