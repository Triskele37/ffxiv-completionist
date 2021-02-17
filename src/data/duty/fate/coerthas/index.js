import { DataGroup } from "../../../DataGroup";

import { Duty_FATEs_Coerthas_Central_Highlands } from "./central-coerthas";
import { Duty_FATEs_Coerthas_Western_Highlands } from "./western-coerthas";

export const Duty_FATEs_Coerthas = function(parent) {
    const data = new DataGroup("Coerthas", parent);
    data.name_en = "Coerthas";
    data.name_fr = "Coerthas";

    data.initializeSubGroups([
        Duty_FATEs_Coerthas_Central_Highlands,
        Duty_FATEs_Coerthas_Western_Highlands,
	]);

    return data;
};
