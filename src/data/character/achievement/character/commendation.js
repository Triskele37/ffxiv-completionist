import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/achievement/character/commendation";

export const Character_Achievements_Character_Commendation = function(parent) {
    const data = new DataGroup("Commendation", parent);
    data.name_de = "Ehrungen";
    data.name_en = "Commendation";
    data.name_fr = "Honneurs";
    // data.name_ja = "MIP"; //TODO: ???

    data.initializeTasks(tasks);

    return data;
};
