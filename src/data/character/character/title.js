import { DataGroup } from "../../DataGroup";
import { loadJson } from "../../loader";

export const Character_Character_Title = function(parent) {
    const json = loadJson('./character/character/title', parent.lang);
    const data = new DataGroup(json.groupName, parent);

    json.tasks.forEach((task) => {
        if(task.category === 'Legacy') task.defaultCompletion = "X";
    });

    data.initializeColumnConfig([
        { key: "name", },
        { key: "category", filterable: true },
        { key: "achievement" },
        { key: "patch", filterable: true }
    ], json.headers);
    data.initializeTasks(json.tasks);

    return data;
};
