import { WhiteMageQuests } from "./white-mage-quests";
import { BlackMageQuests } from "./black-mage-quests";
import { SummonerQuests } from "./summoner-quests";
import { ScholarQuests } from "./scholar-quests";
import { AstrologianQuests } from "./astrologian-quests";
import { RedMageQuests } from "./red-mage-quests";
import { BlueMageQuests } from "./blue-mage-quests";

export const DiscipleOfMagicJobQuests = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.disciple-of-magic-job`;

    return {
        name: "Disciple of Magic Job",
        storageKey,
        subGroups: [
            WhiteMageQuests(storageKey),
            BlackMageQuests(storageKey),
            SummonerQuests(storageKey),
            ScholarQuests(storageKey),
            AstrologianQuests(storageKey),
            RedMageQuests(storageKey),
            BlueMageQuests(storageKey),
        ]
    };
};
