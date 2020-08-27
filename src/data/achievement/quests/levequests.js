import { DataGroup } from "../../DataGroup";
import tasks from "../../../../static/achievement/quests/levequests";

export const Achievements_Quests_Levequests = function(parent) {
    const data = new DataGroup("Levequests", parent);
    data.name_de = "Freibriefe";
    data.name_en = "Levequests";
    data.name_fr = "Mandats";
    data.name_ja = "リーヴ";

    data.initializeTasks(tasks);

    return data;
};
