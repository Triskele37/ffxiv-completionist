import { DataGroup } from "../../DataGroup";

import { Collectables_Collection_Yo_Kai_Medallium } from "./yo-kai-medallium";
import { Collectables_Collection_Portable_Archive } from "./portable-archive";

export const Collectables_Collection = function(parent) {
    return new DataGroup("Collection", parent).initializeSubGroups([
        Collectables_Collection_Yo_Kai_Medallium,
        Collectables_Collection_Portable_Archive
    ]);
};
