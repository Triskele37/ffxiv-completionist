import { CarpenterQuests } from "./carpenter-quests";
import { BlacksmithQuests } from "./blacksmith-quests";
import { ArmorerQuests } from "./armorer-quests";
import { GoldsmithQuests } from "./goldsmith-quests";
import { LeatherworkerQuests } from "./leatherworker-quests";
import { WeaverQuests } from "./weaver-quests";
import { AlchemistQuests } from "./alchemist-quests";
import { CulinarianQuests } from "./culinarian-quests";

export const DiscipleOfTheHandQuests = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.disciple-of-the-hand`;

    return {
        name: "Disciple of the Hand",
        storageKey,
        subGroups: [
            CarpenterQuests(storageKey),
            BlacksmithQuests(storageKey),
            ArmorerQuests(storageKey),
            GoldsmithQuests(storageKey),
            LeatherworkerQuests(storageKey),
            WeaverQuests(storageKey),
            AlchemistQuests(storageKey),
            CulinarianQuests(storageKey),
        ]
    };
};
