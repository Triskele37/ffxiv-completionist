import { ConjurerQuests } from "./conjurer-quests";
import { ThaumaturgeQuests } from "./thaumaturge-quests";
import { ArcanistQuests } from "./arcanist-quests";

export const DiscipleOfMagicQuests = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.disciple-of-magic`;

    return {
        name: "Disciple of Magic",
        storageKey,
        subGroups: [
            ConjurerQuests(storageKey),
            ThaumaturgeQuests(storageKey),
            ArcanistQuests(storageKey),
        ]
    };
};
