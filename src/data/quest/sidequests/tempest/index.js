import { DataGroup } from "../../../DataGroup";

import { Quests_Sidequests_Tempest_The_Tempest } from "./the-tempest";

export const Quests_Sidequests_Tempest = function(name, parent) {
    return new DataGroup(name, parent).initializeSubGroups([
        Quests_Sidequests_Tempest_The_Tempest,
    ]);
};
