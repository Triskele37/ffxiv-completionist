import { DataGroup } from "../../DataGroup";

import { Duty_Quests_Main_Scenario } from "./main-scenario";
import { Duty_Quests_Chronicles_of_a_New_Era } from "./chronicles-of-a-new-era";
import { Duty_Quests_Sidequests } from "./sidequests";
import { Duty_Quests_Beast_Tribe } from "./beast-tribe-quests";
import { Duty_Quests_Class_and_Job } from "./class-and-job-quests";
import { Duty_Quests_Other } from "./other-quests";
import { Duty_Quests_Levequests } from "./levequests";

export const Duty_Quests = function(parent) {
    const data = new DataGroup("Quests", parent);

    data.initializeSubGroups([
        Duty_Quests_Main_Scenario,
        Duty_Quests_Chronicles_of_a_New_Era,
        Duty_Quests_Sidequests,
        Duty_Quests_Beast_Tribe,
        Duty_Quests_Class_and_Job,
        Duty_Quests_Other,
        Duty_Quests_Levequests,
    ]);

    return data;
};

/*

// Highest level sections of journal
https://xivapi.com/JournalSection?columns=ID,Name

// Middle layer?
https://xivapi.com/JournalCategory?columns=ID,Name

// Actual quests
https://xivapi.com/JournalGenre?columns=ID,Name&limit=209

*/
