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

export const Quests = {
    name: "Quest",
    subGroups: [
        MainScenarioQuests, // JournalGenre 1-9
        ChroniclesOfANewEra, // JournalGenre 10-20
        Sidequests, // < 45 starts in hildi
        BeastTribeQuests, // JournalGenre 21-44
        ClassAndJob,
        OtherQuests,
        Levequests,
    ]
};
