import { DataGroup } from "../../DataGroup";

import { FATEs_Coerthas_Central_Highlands } from "./central-coerthas";
import { FATEs_Coerthas_Western_Highlands } from "./western-coerthas";

export const FATEs_Coerthas = function(parent) {
    const data = new DataGroup("Coerthas", parent);
    data.name_en = "Coerthas";
    data.name_fr = "Coerthas";

    data.initializeSubGroups([
        FATEs_Coerthas_Central_Highlands,
        FATEs_Coerthas_Western_Highlands,
	]);

    return data;
};
