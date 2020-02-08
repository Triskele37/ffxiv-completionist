import { DataGroup } from "../../../DataGroup";

import { Quests_Sidequests_Abalathian_The_Sea_of_Clouds } from "./the-sea-of-clouds";

export const Quests_Sidequests_Abalathian = function(parent) {
    return new DataGroup("Abalathian", parent).initializeSubGroups([
        Quests_Sidequests_Abalathian_The_Sea_of_Clouds
    ]);
};
