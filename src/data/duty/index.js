import { DataGroup } from "../DataGroup";

import { Duty_Dungeons } from "./dungeon";
import { Duty_Trials } from "./trial";
import { Duty_Raids } from "./raid";
import { Duty_The_Hunt } from "./hunt";
import { Duty_Hall_of_the_Novice } from "./hall-of-novice";

export const Duty = function(name, parent) {
    return new DataGroup(name, parent).initializeSubGroups([
        Duty_Dungeons,
        Duty_Trials,
        Duty_Raids,
        Duty_The_Hunt,
        Duty_Hall_of_the_Novice,
    ]);
};
