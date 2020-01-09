import { MainScenario } from "./main-scenario";
import { ChroniclesOfANewEra } from "./chronicles-of-a-new-era";
import { Sidequests } from "./sidequests";
import { BeastTribes } from "./beast-tribe-quests";
import { ClassAndJob } from "./class-and-job-quests";

export const Quests = {
    name: "Quest",
    subGroups: [
        MainScenario,
        ChroniclesOfANewEra,
        Sidequests,
        BeastTribes,
        ClassAndJob,
    ]
};
