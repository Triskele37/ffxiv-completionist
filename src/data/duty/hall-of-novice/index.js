import { DataGroup } from "../../DataGroup";
import { HallOfNoviceColumnConfig } from "../columnConfigs";

import { Duty_Hall_of_the_Novice_Tank } from './tank';
import { Duty_Hall_of_the_Novice_DPS } from './dps';
import { Duty_Hall_of_the_Novice_Healer } from './healer';

export const Duty_Hall_of_the_Novice = function(parent) {
    const data = new DataGroup("Hall of the Novice", parent);
    data.columnConfig = HallOfNoviceColumnConfig;

    data.initializeSubGroups([
        Duty_Hall_of_the_Novice_Tank,
        Duty_Hall_of_the_Novice_DPS,
        Duty_Hall_of_the_Novice_Healer,
    ]);

    return data;
};
