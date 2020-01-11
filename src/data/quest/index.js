import { MainScenarioQuests } from "./main-scenario";
import { ChroniclesOfANewEra } from "./chronicles-of-a-new-era";
import { Sidequests } from "./sidequests";
import { BeastTribeQuests } from "./beast-tribe-quests";
import { ClassAndJob } from "./class-and-job-quests";
import { OtherQuests } from "./other-quests";
import { Levequests } from "./levequests";

export const Quests = {
    name: "Quest",
    subGroups: [
        MainScenarioQuests,
        ChroniclesOfANewEra,
        Sidequests,
        BeastTribeQuests,
        ClassAndJob,
        OtherQuests,
        Levequests,
    ]
};
