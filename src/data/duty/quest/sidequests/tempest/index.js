import { DataGroup } from "../../../../DataGroup";

import { Duty_Quests_Sidequests_Tempest_The_Tempest } from "./the-tempest";

export const Duty_Quests_Sidequests_Tempest = function(parent) {
    const data = new DataGroup("Tempest", parent);
    data.name_fr = "La Tempête";

    data.initializeSubGroups([
        Duty_Quests_Sidequests_Tempest_The_Tempest,
    ]);

    return data;
};
