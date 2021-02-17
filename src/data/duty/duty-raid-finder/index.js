import { DataGroup } from "../../DataGroup";

import { Duty_Dungeons } from "./dungeon";
import { Duty_Guildhests } from "./guildhests";
import { Duty_Trials } from "./trial";
import { Duty_Raids } from "./raid";
import { Duty_The_Hunt } from "./hunt";

export const Duty_Duty_Raid_Finder = function(parent) {
    const data = new DataGroup("Duty/Raid Finder", parent);

    data.initializeSubGroups([
        Duty_Dungeons,
        Duty_Guildhests,
        Duty_Trials,
        Duty_Raids,
        Duty_The_Hunt,
    ]);

    return data;
};
