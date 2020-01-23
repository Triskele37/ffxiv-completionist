import { MinerQuests } from "./miner-quests";
import { BotanistQuests } from "./botanist-quests";
import { FisherQuests } from "./fisher-quests";

export const DiscipleOfTheLandQuests = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.disciple-of-the-land`;

    return {
        name: "Disciple of the Land",
        storageKey,
        subGroups: [
            MinerQuests(storageKey),
            BotanistQuests(storageKey),
            FisherQuests(storageKey),
        ]
    };
};
