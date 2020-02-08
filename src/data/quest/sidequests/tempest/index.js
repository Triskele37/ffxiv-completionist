import { DataGroup } from "../../../DataGroup";

import { Quests_Sidequests_Tempest_The_Tempest } from "./the-tempest";

export const Quests_Sidequests_Tempest = function(parent) {
    return new DataGroup("Tempest", parent).initializeSubGroups([
        Quests_Sidequests_Tempest_The_Tempest,
    ]);
};
