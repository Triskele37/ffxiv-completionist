import { DataGroup } from "../../DataGroup";

import { Collectables_Collection_Yo_Kai_Medallium } from "./yo-kai-medallium";
import { Collectables_Collection_Portable_Archive } from "./portable-archive";

export const Collectables_Collection = function(parent) {
    const data = new DataGroup("Collection", parent);
    data.name_fr = "Objet précieux";

    data.initializeSubGroups([
        Collectables_Collection_Yo_Kai_Medallium,
        Collectables_Collection_Portable_Archive
    ]);

    return data;
};
