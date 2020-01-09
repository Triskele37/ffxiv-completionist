import { MinerQuests } from "./miner-quests";
import { BotanistQuests } from "./botanist-quests";
import { FisherQuests } from "./fisher-quests";

export const DiscipleOfTheLandQuests = {
    name: "Disciple of the Land",
    subGroups: [
        MinerQuests,
        BotanistQuests,
        FisherQuests,
    ]
};
