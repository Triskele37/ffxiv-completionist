import { Quest_Main_Scenario } from "./main-scenario";
import { Quest_Chronicles_Of_A_New_Era } from "./chronicles-of-a-new-era";
import { Quest_Sidequests } from "./sidequests";
import { Quest_Beast_Tribe } from "./beast-tribe-quests";
import { Quest_Class_And_Job } from "./class-and-job-quests";
import { Quest_Other } from "./other-quests";
import { Quest_Levequests } from "./levequests";

/*

// Highest level sections of journal
https://xivapi.com/JournalSection?columns=ID,Name

// Middle layer?
https://xivapi.com/JournalCategory?columns=ID,Name

// Actual quests
https://xivapi.com/JournalGenre?columns=ID,Name&limit=209

*/

export const Quests = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.quests`;

    return {
        name: "Quest",
        storageKey,
        groupKeys: [
            "Main_Scenario",
            "Chronicles_Of_A_New_Era",
            "Sidequests",
            "Beast_Tribe",
            "Class_And_Job",
            "Other",
            "Levequests",
        ],
        // Groups
        Main_Scenario: Quest_Main_Scenario(storageKey), // JournalGenre 1-9
        Chronicles_Of_A_New_Era: Quest_Chronicles_Of_A_New_Era(storageKey), // JournalGenre 10-20
        Sidequests: Quest_Sidequests(storageKey), // < 45 starts in hildi
        Beast_Tribe: Quest_Beast_Tribe(storageKey), // JournalGenre 21-44
        Class_And_Job: Quest_Class_And_Job(storageKey),
        Other: Quest_Other(storageKey),
        Levequests: Quest_Levequests(storageKey),
    };
};
