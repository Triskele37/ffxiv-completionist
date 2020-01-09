import { GladiatorQuests } from "./gladiator-quests";
import { PugilistQuests } from "./pugilist-quests";
import { MarauderQuests } from "./marauder-quests";
import { LancerQuests } from "./lancer-quests";
import { ArcherQuests } from "./archer-quests";
import { RogueQuests } from "./rogue-quests";

export const DiscipleOfWarQuests = {
    name: 'Disciple of War',
    subGroups: [
        GladiatorQuests,
        PugilistQuests,
        MarauderQuests,
        LancerQuests,
        ArcherQuests,
        RogueQuests,
    ]
};
