import { DataGroup } from "../../DataGroup";
import { DutyColumnConfig } from "../columnConfigs";

import { Duty_Trials_ARR } from "./ARR";
import { Duty_Trials_HW } from "./HW";
import { Duty_Trials_SB } from "./SB";
import { Duty_Trials_ShB } from "./ShB";

export const Duty_Trials = function(name, parent) {
    const data = new DataGroup(name, parent);
    data.columnConfig = DutyColumnConfig;

    data.initializeSubGroups([
        Duty_Trials_ARR,
        Duty_Trials_HW,
        Duty_Trials_SB,
        Duty_Trials_ShB,
    ]);

    return data;
};
