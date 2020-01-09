import { MainScenario } from "./main-scenario";
import { ChroniclesOfANewEra } from "./chronicles-of-a-new-era";
import { Sidequests } from "./sidequests";
import { BeastTribes } from "./beast-tribe-quests";

//TODO: Weapon/Zodiac/Anima

export const Quests = {
    name: "Quest",
    subGroups: [
        MainScenario,
        ChroniclesOfANewEra,
        Sidequests,
        BeastTribes,
    ]
};
