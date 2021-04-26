import { DataGroup } from "../../DataGroup";

import { Duty_Dungeons } from "./dungeon";
import { Duty_Guildhests } from "./guildhests";
import { Duty_Trials } from "./trials";
import { Duty_Raids } from "./raids";
import { Duty_The_Hunt } from "./the-hunt";

export const Duty_Duty_Raid_Finder = function(parent) {
    const group = DataGroup.fromJSON(parent, "./duty/duty-raid-finder/index");

    group.subGroups = [
        Duty_Dungeons(group),
        Duty_Guildhests(group),
        Duty_Trials(group),
        Duty_Raids(group),
        Duty_The_Hunt(group),
    ];

    return group;
};
