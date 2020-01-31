import { DataGroup } from "../../DataGroup";

import { FATEs_Coerthas_Central_Highlands } from "./central-coerthas";
import { FATEs_Coerthas_Western_Highlands } from "./western-coerthas";

export const FATEs_Coerthas = function(name, parent) {
    return new DataGroup(name, parent).initializeSubGroups([
        FATEs_Coerthas_Central_Highlands,
        FATEs_Coerthas_Western_Highlands,
	]);
};
