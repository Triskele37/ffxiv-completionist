import { DataGroup } from "../DataGroup";

import { Duty_Collection } from "./collection";
import { Duty_Quests } from "./quest";
import { Duty_Duty_Raid_Finder } from "./duty-raid-finder"
import { Duty_Hall_of_the_Novice } from "./hall-of-the-novice";
import { Duty_FATEs } from "./fate";
import { Duty_Exploratory_Missions } from "./exploratory-missions";

export const Duty = function(parent) {
    const group = DataGroup.fromJSON(parent, "./duty/index");

    group.subGroups = [
        Duty_Collection(group),
        Duty_Quests(group),
        Duty_Duty_Raid_Finder(group),
        Duty_Hall_of_the_Novice(group),
        Duty_FATEs(group),
        Duty_Exploratory_Missions(group),
    ];

    return group;
};
