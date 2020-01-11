import { CarpenterQuests } from "./carpenter-quests";
import { BlacksmithQuests } from "./blacksmith-quests";
import { ArmorerQuests } from "./armorer-quests";
import { GoldsmithQuests } from "./goldsmith-quests";
import { LeatherworkerQuests } from "./leatherworker-quests";
import { WeaverQuests } from "./weaver-quests";
import { AlchemistQuests } from "./alchemist-quests";
import { CulinarianQuests } from "./culinarian-quests";

export const DiscipleOfTheHandQuests = {
    name: "Disciple of the Hand",
    subGroups: [
        CarpenterQuests,
        BlacksmithQuests,
        ArmorerQuests,
        GoldsmithQuests,
        LeatherworkerQuests,
        WeaverQuests,
        AlchemistQuests,
        CulinarianQuests,
    ]
};
