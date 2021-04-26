import { DataGroup } from "../../DataGroup";
import { loadJson } from "../../loader";

export const Character_Character_Desynthesis = function(parent) {
    const json = loadJson('./character/character/desynthesis', parent.lang);
    const data = new DataGroup(json.groupName, parent);

    data.isNumericCompletion = true;
    data.defaultCompletion = "0";
    data.numericDecimal = 2;

    data.initializeColumnConfig([
        { key: "name", },
        { key: "startingQuest", },
        { key: "patch", filterable: true },
    ], json.headers);
    data.initializeTasks(json.tasks);

    return data;
};
