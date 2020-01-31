import { DataGroup } from "../../DataGroup";

import { FATEs_Thanalan_Central } from "./central-thanalan";
import { FATEs_Thanalan_Eastern } from "./eastern-thanalan";
import { FATEs_Thanalan_Northern } from "./northern-thanalan";
import { FATEs_Thanalan_Southern } from "./southern-thanalan";
import { FATEs_Thanalan_Western } from "./western-thanalan";

export const FATEs_Thanalan = function(name, parent) {
    return new DataGroup(name, parent).initializeSubGroups([
        FATEs_Thanalan_Central,
        FATEs_Thanalan_Eastern,
        FATEs_Thanalan_Northern,
        FATEs_Thanalan_Southern,
        FATEs_Thanalan_Western,
	]);
};
