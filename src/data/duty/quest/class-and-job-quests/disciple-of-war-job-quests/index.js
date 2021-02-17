import { DataGroup } from "../../../../DataGroup";

import { Duty_Quests_Class_and_Job_Disciple_of_War_Job_Paladin } from "./paladin-quests";
import { Duty_Quests_Class_and_Job_Disciple_of_War_Job_Monk } from "./monk-quests";
import { Duty_Quests_Class_and_Job_Disciple_of_War_Job_Warrior } from "./warrior-quests";
import { Duty_Quests_Class_and_Job_Disciple_of_War_Job_Dragoon } from "./dragoon-quests";
import { Duty_Quests_Class_and_Job_Disciple_of_War_Job_Bard } from "./bard-quests";
import { Duty_Quests_Class_and_Job_Disciple_of_War_Job_Ninja } from "./ninja-quests";
import { Duty_Quests_Class_and_Job_Disciple_of_War_Job_Dark_Knight } from "./dark-knight-quests";
import { Duty_Quests_Class_and_Job_Disciple_of_War_Job_Machinist } from "./machinist-quests";
import { Duty_Quests_Class_and_Job_Disciple_of_War_Job_Samurai } from "./samurai-quests";
import { Duty_Quests_Class_and_Job_Disciple_of_War_Job_Gunbreaker } from "./gunbreaker-quests";
import { Duty_Quests_Class_and_Job_Disciple_of_War_Job_Dancer } from "./dancer-quests";

export const Duty_Quests_Class_and_Job_Disciple_of_War_Job = function(parent) {
    return new DataGroup("Disciple of War Job", parent).initializeSubGroups([
        Duty_Quests_Class_and_Job_Disciple_of_War_Job_Paladin,
        Duty_Quests_Class_and_Job_Disciple_of_War_Job_Monk,
        Duty_Quests_Class_and_Job_Disciple_of_War_Job_Warrior,
        Duty_Quests_Class_and_Job_Disciple_of_War_Job_Dragoon,
        Duty_Quests_Class_and_Job_Disciple_of_War_Job_Bard,
        Duty_Quests_Class_and_Job_Disciple_of_War_Job_Ninja,
        Duty_Quests_Class_and_Job_Disciple_of_War_Job_Dark_Knight,
        Duty_Quests_Class_and_Job_Disciple_of_War_Job_Machinist,
        Duty_Quests_Class_and_Job_Disciple_of_War_Job_Samurai,
        Duty_Quests_Class_and_Job_Disciple_of_War_Job_Gunbreaker,
        Duty_Quests_Class_and_Job_Disciple_of_War_Job_Dancer,
    ]);
};
