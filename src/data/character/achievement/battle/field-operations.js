import { DataGroup } from "../../../DataGroup";
import tasks from "../../../../../static/achievement/battle/field-operations";

export const Character_Achievements_Battle_Field_Operations = function(parent) {
    const data = new DataGroup("Field Operations", parent);
    data.name_de = "";
    data.name_en = "Field Operations";
    data.name_fr = "";
    data.name_ja = "";

    data.initializeTasks(tasks);

    return data;
};
