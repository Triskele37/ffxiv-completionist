import { GladiatorQuests } from "./gladiator-quests";
import { PugilistQuests } from "./pugilist-quests";
import { MarauderQuests } from "./marauder-quests";
import { LancerQuests } from "./lancer-quests";
import { ArcherQuests } from "./archer-quests";
import { RogueQuests } from "./rogue-quests";

export const DiscipleOfWarQuests = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.disciple-of-war`;

    return {
        name: 'Disciple of War',
        storageKey,
        subGroups: [
            GladiatorQuests(storageKey),
            PugilistQuests(storageKey),
            MarauderQuests(storageKey),
            LancerQuests(storageKey),
            ArcherQuests(storageKey),
            RogueQuests(storageKey),
        ]
    };
};
