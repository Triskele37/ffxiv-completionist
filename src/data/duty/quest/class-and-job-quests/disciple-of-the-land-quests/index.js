import { DataGroup } from "../../../../DataGroup";

import { Duty_Quests_Class_and_Job_Disciple_of_the_Land_Miner } from "./miner-quests";
import { Duty_Quests_Class_and_Job_Disciple_of_the_Land_Botanist } from "./botanist-quests";
import { Duty_Quests_Class_and_Job_Disciple_of_the_Land_Fisher } from "./fisher-quests";

export const Duty_Quests_Class_and_Job_Disciple_of_the_Land = function(parent) {
    return new DataGroup("Disciple of the Land", parent).initializeSubGroups([
        Duty_Quests_Class_and_Job_Disciple_of_the_Land_Miner,
        Duty_Quests_Class_and_Job_Disciple_of_the_Land_Botanist,
        Duty_Quests_Class_and_Job_Disciple_of_the_Land_Fisher,
    ]);
};
