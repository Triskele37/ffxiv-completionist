import { DataGroup } from "../../../../DataGroup";

import { Duty_Quests_Class_and_Job_Disciple_of_Magic_Job_White_Mage } from "./white-mage-quests";
import { Duty_Quests_Class_and_Job_Disciple_of_Magic_Job_Black_Mage } from "./black-mage-quests";
import { Duty_Quests_Class_and_Job_Disciple_of_Magic_Job_Summoner } from "./summoner-quests";
import { Duty_Quests_Class_and_Job_Disciple_of_Magic_Job_Scholar } from "./scholar-quests";
import { Duty_Quests_Class_and_Job_Disciple_of_Magic_Job_Astrologian } from "./astrologian-quests";
import { Duty_Quests_Class_and_Job_Disciple_of_Magic_Job_Red_Mage } from "./red-mage-quests";
import { Duty_Quests_Class_and_Job_Disciple_of_Magic_Job_Blue_Mage } from "./blue-mage-quests";

export const Duty_Quests_Class_and_Job_Disciple_of_Magic_Job = function(parent) {
    return new DataGroup("Disciple of Magic Job", parent).initializeSubGroups([
        Duty_Quests_Class_and_Job_Disciple_of_Magic_Job_White_Mage,
        Duty_Quests_Class_and_Job_Disciple_of_Magic_Job_Black_Mage,
        Duty_Quests_Class_and_Job_Disciple_of_Magic_Job_Summoner,
        Duty_Quests_Class_and_Job_Disciple_of_Magic_Job_Scholar,
        Duty_Quests_Class_and_Job_Disciple_of_Magic_Job_Astrologian,
        Duty_Quests_Class_and_Job_Disciple_of_Magic_Job_Red_Mage,
        Duty_Quests_Class_and_Job_Disciple_of_Magic_Job_Blue_Mage,
    ]);
};
