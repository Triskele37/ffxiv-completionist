import { MainScenarioQuests } from "./main-scenario";
import { ChroniclesOfANewEra } from "./chronicles-of-a-new-era";
import { Sidequests } from "./sidequests";
import { BeastTribeQuests } from "./beast-tribe-quests";
import { ClassAndJob } from "./class-and-job-quests";
import { OtherQuests } from "./other-quests";
import { Levequests } from "./levequests";

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
        subGroups: [
            MainScenarioQuests(storageKey), // JournalGenre 1-9
            ChroniclesOfANewEra(storageKey), // JournalGenre 10-20
            Sidequests(storageKey), // < 45 starts in hildi
            BeastTribeQuests(storageKey), // JournalGenre 21-44
            ClassAndJob(storageKey),
            OtherQuests(storageKey),
            Levequests(storageKey),
        ]
    };
};
