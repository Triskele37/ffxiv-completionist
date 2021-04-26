import { DataGroup } from "../../DataGroup";
import { loadJson } from "../../loader";

export const Character_Character_Classes_Job = function(parent) {
    const json = loadJson('./character/character/classes-jobs', parent.lang);
    const data = new DataGroup(json.groupName, parent);

    data.isNumericCompletion = true;
    data.defaultCompletion = "0";

    data.initializeColumnConfig([
        { key: "name", },
        { key: "role", filterable: true },
        { key: "startingQuest", },
        { key: "patch", filterable: true },
    ], json.headers);
    data.initializeTasks(json.tasks);

    return data;
};
