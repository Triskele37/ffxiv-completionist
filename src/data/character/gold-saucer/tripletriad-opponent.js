import { DataGroup } from "../../DataGroup";
import { loadJson } from "../../loader";

export const Character_Gold_Saucer_Triple_Triad_Opponents = function(parent) {
    const json = loadJson('./character/gold-saucer/triple-triad-opponents', parent.lang);
    const data = new DataGroup(json.groupName, parent);

    data.initializeColumnConfig([
        { key: "difficulty", filterable: true, centered: true, },
        { key: "name" },
        { key: "zone", filterable: true },
        { key: "location" },
        { key: "rules", filterable: true },
        { key: "drops" },
        { key: "preRequisite" },
        { key: "fee", filterable: true, filterType: "number", centered: true, },
        { key: "patch", filterable: true },
    ], json.headers);

    data.initializeTasks(json.tasks);

    return data;
};
