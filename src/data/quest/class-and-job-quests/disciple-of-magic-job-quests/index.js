import { DataGroup } from "../../../DataGroup";

import { Quests_Class_and_Job_Disciple_of_Magic_Job_White_Mage } from "./white-mage-quests";
import { Quests_Class_and_Job_Disciple_of_Magic_Job_Black_Mage } from "./black-mage-quests";
import { Quests_Class_and_Job_Disciple_of_Magic_Job_Summoner } from "./summoner-quests";
import { Quests_Class_and_Job_Disciple_of_Magic_Job_Scholar } from "./scholar-quests";
import { Quests_Class_and_Job_Disciple_of_Magic_Job_Astrologian } from "./astrologian-quests";
import { Quests_Class_and_Job_Disciple_of_Magic_Job_Red_Mage } from "./red-mage-quests";
import { Quests_Class_and_Job_Disciple_of_Magic_Job_Blue_Mage } from "./blue-mage-quests";

export const Quests_Class_and_Job_Disciple_of_Magic_Job = function(name, parent) {
    return new DataGroup(name, parent).initializeSubGroups([
        Quests_Class_and_Job_Disciple_of_Magic_Job_White_Mage,
        Quests_Class_and_Job_Disciple_of_Magic_Job_Black_Mage,
        Quests_Class_and_Job_Disciple_of_Magic_Job_Summoner,
        Quests_Class_and_Job_Disciple_of_Magic_Job_Scholar,
        Quests_Class_and_Job_Disciple_of_Magic_Job_Astrologian,
        Quests_Class_and_Job_Disciple_of_Magic_Job_Red_Mage,
        Quests_Class_and_Job_Disciple_of_Magic_Job_Blue_Mage,
    ]);
};
