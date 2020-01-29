import { DataGroup } from "../../DataGroup";
import { DutyColumnConfig } from "../columnConfigs";

import { Duty_Dungeons_ARR } from "./ARR";
import { Duty_Dungeons_HW } from "./HW";
import { Duty_Dungeons_SB } from "./SB";
import { Duty_Dungeons_ShB } from "./ShB";

export const Duty_Dungeons = function(name, parent) {
    const data = new DataGroup(name, parent);
    data.columnConfig = DutyColumnConfig;

    data.initializeSubGroups([
        Duty_Dungeons_ARR,
        Duty_Dungeons_HW,
        Duty_Dungeons_SB,
        Duty_Dungeons_ShB,
    ]);

    return data;
};
