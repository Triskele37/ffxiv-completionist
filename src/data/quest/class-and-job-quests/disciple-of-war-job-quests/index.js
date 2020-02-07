import { DataGroup } from "../../../DataGroup";

import { Quests_Class_and_Job_Disciple_of_War_Job_Paladin } from "./paladin-quests";
import { Quests_Class_and_Job_Disciple_of_War_Job_Monk } from "./monk-quests";
import { Quests_Class_and_Job_Disciple_of_War_Job_Warrior } from "./warrior-quests";
import { Quests_Class_and_Job_Disciple_of_War_Job_Dragoon } from "./dragoon-quests";
import { Quests_Class_and_Job_Disciple_of_War_Job_Bard } from "./bard-quests";
import { Quests_Class_and_Job_Disciple_of_War_Job_Ninja } from "./ninja-quests";
import { Quests_Class_and_Job_Disciple_of_War_Job_Dark_Knight } from "./dark-knight-quests";
import { Quests_Class_and_Job_Disciple_of_War_Job_Machinist } from "./machinist-quests";
import { Quests_Class_and_Job_Disciple_of_War_Job_Samurai } from "./samurai-quests";
import { Quests_Class_and_Job_Disciple_of_War_Job_Gunbreaker } from "./gunbreaker-quests";
import { Quests_Class_and_Job_Disciple_of_War_Job_Dancer } from "./dancer-quests";

export const Quests_Class_and_Job_Disciple_of_War_Job = function(name, parent) {
    return new DataGroup(name, parent).initializeSubGroups([
        Quests_Class_and_Job_Disciple_of_War_Job_Paladin,
        Quests_Class_and_Job_Disciple_of_War_Job_Monk,
        Quests_Class_and_Job_Disciple_of_War_Job_Warrior,
        Quests_Class_and_Job_Disciple_of_War_Job_Dragoon,
        Quests_Class_and_Job_Disciple_of_War_Job_Bard,
        Quests_Class_and_Job_Disciple_of_War_Job_Ninja,
        Quests_Class_and_Job_Disciple_of_War_Job_Dark_Knight,
        Quests_Class_and_Job_Disciple_of_War_Job_Machinist,
        Quests_Class_and_Job_Disciple_of_War_Job_Samurai,
        Quests_Class_and_Job_Disciple_of_War_Job_Gunbreaker,
        Quests_Class_and_Job_Disciple_of_War_Job_Dancer,
    ]);
};
