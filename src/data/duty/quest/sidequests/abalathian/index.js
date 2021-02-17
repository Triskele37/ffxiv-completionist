import { DataGroup } from "../../../../DataGroup";

import { Duty_Quests_Sidequests_Abalathian_The_Sea_of_Clouds } from "./the-sea-of-clouds";

export const Duty_Quests_Sidequests_Abalathian = function(parent) {
    const data = new DataGroup("Abalathian", parent);
    data.name_fr = "Abalathia";

    data.initializeSubGroups([
        Duty_Quests_Sidequests_Abalathian_The_Sea_of_Clouds
    ]);

    return data;
};
