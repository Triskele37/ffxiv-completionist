import { DataGroup } from "../../../DataGroup";

import { Collectables_Collection_Portable_Archive_The_Copied_Factory } from "./the-copied-factory";
import { Collectables_Collection_Portable_Archive_The_Puppets_Bunker } from "./the-puppets-bunker";

export const Collectables_Collection_Portable_Archive = function(parent) {
    return new DataGroup("Portable Archive", parent).initializeSubGroups([
        Collectables_Collection_Portable_Archive_The_Copied_Factory,
        Collectables_Collection_Portable_Archive_The_Puppets_Bunker
    ]);
};
