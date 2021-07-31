import { DataGroup } from "../../DataGroup";

import { Duty_Quests_Main_Scenario } from "./main-scenario";
import { Duty_Quests_Chronicles_of_a_New_Era } from "./chronicles-of-a-new-era";
import { Duty_Quests_Sidequests } from "./sidequests";
import { Duty_Quests_Beast_Tribe } from "./beast-tribe-quests";
import { Duty_Quests_Class_and_Job } from "./class-and-job-quests";
import { Duty_Quests_Other } from "./other-quests";
import { Duty_Quests_Levequests } from "./levequests";

export const Duty_Quests = function(parent) {
    const group = DataGroup.fromJSON(parent, "./duty/quest/index", {
        level: { centered: true }
    });

    group.subGroups = [
        Duty_Quests_Main_Scenario(group),
        Duty_Quests_Chronicles_of_a_New_Era(group),
        Duty_Quests_Sidequests(group),
        Duty_Quests_Beast_Tribe(group),
        Duty_Quests_Class_and_Job(group),
        Duty_Quests_Other(group),
        Duty_Quests_Levequests(group),
    ];

    return group;
};

/*

// Highest level sections of journal
https://xivapi.com/JournalSection?columns=ID,Name

// Middle layer?
https://xivapi.com/JournalCategory?columns=ID,Name

// Actual quests
https://xivapi.com/JournalGenre?columns=ID,Name&limit=209

*/
