import { DataGroup } from "../DataGroup";

import { Duty_Collection } from "./collection";
import { Duty_Quests } from "./quest";
import { Duty_Duty_Raid_Finder } from "./duty-raid-finder"
import { Duty_Hall_of_the_Novice } from "./hall-of-novice";
import { Duty_FATEs } from "./fate";
import { Duty_Exploratory_Missions } from "./exploratory-missions";

export const Duty = function(parent) {
    const data = new DataGroup("Duty", parent);

    data.initializeSubGroups([
        Duty_Collection,
        Duty_Quests,
        Duty_Duty_Raid_Finder,
        Duty_Hall_of_the_Novice,
        Duty_FATEs,
        Duty_Exploratory_Missions,
    ]);

    return data;
};
