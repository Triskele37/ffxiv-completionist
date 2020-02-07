import { DataGroup } from "../DataGroup";

import { Quests_Main_Scenario } from "./main-scenario";
import { Quests_Chronicles_of_a_New_Era } from "./chronicles-of-a-new-era";
import { Quests_Sidequests } from "./sidequests";
import { Quests_Beast_Tribe } from "./beast-tribe-quests";
import { Quests_Class_and_Job } from "./class-and-job-quests";
import { Quests_Other } from "./other-quests";
import { Quests_Levequests } from "./levequests";

export const Quests = function(name, parent) {
    const data = new DataGroup(name, parent);

    data.initializeSubGroups([
        Quests_Main_Scenario,
        Quests_Chronicles_of_a_New_Era,
        Quests_Sidequests,
        Quests_Beast_Tribe,
        Quests_Class_and_Job,
        Quests_Other,
        Quests_Levequests,
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
