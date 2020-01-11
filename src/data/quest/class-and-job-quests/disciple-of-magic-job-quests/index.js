import { WhiteMageQuests } from "./white-mage-quests";
import { BlackMageQuests } from "./black-mage-quests";
import { SummonerQuests } from "./summoner-quests";
import { ScholarQuests } from "./scholar-quests";
import { AstrologianQuests } from "./astrologian-quests";
import { RedMageQuests } from "./red-mage-quests";
import { BlueMageQuests } from "./blue-mage-quests";

export const DiscipleOfMagicJobQuests = {
    name: "Disciple of Magic Job",
    subGroups: [
        WhiteMageQuests,
        BlackMageQuests,
        SummonerQuests,
        ScholarQuests,
        AstrologianQuests,
        RedMageQuests,
        BlueMageQuests,
    ]
};
