import { DataGroup } from "../DataGroup";

import { Duty_Dungeons } from "./dungeon";
import { Duty_Guildhests } from "./guildhests"
import { Duty_Trials } from "./trial";
import { Duty_Raids } from "./raid";
import { Duty_The_Hunt } from "./hunt";
import { Duty_Hall_of_the_Novice } from "./hall-of-novice";

export const Duty = function(parent) {
    const data = new DataGroup("Duty", parent);

    data.initializeSubGroups([
        Duty_Dungeons,
        Duty_Guildhests,
        Duty_Trials,
        Duty_Raids,
        Duty_The_Hunt,
        Duty_Hall_of_the_Novice,
    ]);

    return data;
};
