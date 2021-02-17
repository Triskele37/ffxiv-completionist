import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/achievement/quests/beast-tribe-quests";

export const Character_Achievements_Quests_Beast_Tribe_Quests = function(parent) {
    const data = new DataGroup("Beast Tribe Quests", parent);
    data.name_de = "Wilde Stämme";
    data.name_en = "Beast Tribe Quests";
    data.name_fr = "Quêtes tribales";
    data.name_ja = "蛮族クエスト";

    data.initializeTasks(tasks);

    return data;
};
