import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/achievement/quests/seasonal-events";

export const Character_Achievements_Quests_Seasonal_Events = function(parent) {
    const data = new DataGroup("Seasonal Events", parent);
    data.defaultCompletion = "X";

    data.name_de = "Saisonale Ereignisse";
    data.name_en = "Seasonal Events";
    data.name_fr = "Événements saisonniers";
    data.name_ja = "シーズナルイベント";

    data.initializeTasks(tasks);

    return data;
};
