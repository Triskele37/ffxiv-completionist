import { DataGroup } from "../../../DataGroup";
import all from "../../../../../static/quests/main-scenario-past/main-scenario-quests/seventh-umbral-era";

const places = ["Limsa Lominsa", "Eastern La Noscea", "Lower La Noscea", "Middle La Noscea", "Outer La Noscea", "Upper La Noscea", "Western La Noscea"];
const tasks = all.filter((quest) => quest.Level < 15 && places.includes(quest.PlaceName));

export const Quests_Main_Scenario_Seventh_Umbral_Era_Limsa_Lominsa = function(parent) {
    return new DataGroup("Limsa Lominsa", parent).initializeTasks(tasks);
};
