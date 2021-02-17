import { DataGroup } from "../../../DataGroup";

import { Duty_Collection_Portable_Archive_The_Copied_Factory } from "./the-copied-factory";
import { Duty_Collection_Portable_Archive_The_Puppets_Bunker } from "./the-puppets-bunker";

export const Duty_Collection_Portable_Archive = function(parent) {
    return new DataGroup("Portable Archive", parent).initializeSubGroups([
        Duty_Collection_Portable_Archive_The_Copied_Factory,
        Duty_Collection_Portable_Archive_The_Puppets_Bunker
    ]);
};
