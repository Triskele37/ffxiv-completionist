import { DataGroup } from "../../DataGroup";
import { HuntColumnConfig } from "../columnConfigs";

import { Duty_The_Hunt_ARR } from "./ARR";
import { Duty_The_Hunt_HW } from "./HW";
import { Duty_The_Hunt_SB } from "./SB";
import { Duty_The_Hunt_ShB } from "./ShB";

export const Duty_The_Hunt = function(parent) {
    const data = new DataGroup("The Hunt", parent);
    data.columnConfig = HuntColumnConfig;

    data.initializeSubGroups([
        Duty_The_Hunt_ARR,
        Duty_The_Hunt_HW,
        Duty_The_Hunt_SB,
        Duty_The_Hunt_ShB,
    ]);

    return data;
};
