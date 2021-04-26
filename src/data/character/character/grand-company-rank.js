import { DataGroup } from "../../DataGroup";
import { loadJson } from "../../loader";

export const Character_Character_Grand_Company_Rank = function(parent) {
    const json = loadJson('./character/character/grand-company-rank', parent.lang);
    const data = new DataGroup(json.groupName, parent);

    data.initializeColumnConfig([
        { key: "name", },
        { key: "grandCompany", filterable: true },
        { key: "requirement" },
        { key: "entitlements" }
    ], json.headers);
    data.initializeTasks(json.tasks);

    return data;
};
