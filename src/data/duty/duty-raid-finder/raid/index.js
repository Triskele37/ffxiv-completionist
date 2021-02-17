import { DataGroup } from "../../../DataGroup";
import { DutyColumnConfig } from "../../columnConfigs";

import { Duty_Raids_ARR } from "./ARR";
import { Duty_Raids_HW } from "./HW";
import { Duty_Raids_SB } from "./SB";
import { Duty_Raids_ShB } from "./ShB";

export const Duty_Raids = function(parent) {
    const data = new DataGroup("Raids", parent);
    data.name_en = "Raids";
    data.name_fr = "Raids";

    data.columnConfig = DutyColumnConfig;

    data.initializeSubGroups([
        Duty_Raids_ARR,
        Duty_Raids_HW,
        Duty_Raids_SB,
        Duty_Raids_ShB,
    ]);

    return data;
};
