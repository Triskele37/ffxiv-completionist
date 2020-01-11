import { ConjurerQuests } from "./conjurer-quests";
import { ThaumaturgeQuests } from "./thaumaturge-quests";
import { ArcanistQuests } from "./arcanist-quests";

export const DiscipleOfMagicQuests = {
    name: "Disciple of Magic",
    subGroups: [
        ConjurerQuests,
        ThaumaturgeQuests,
        ArcanistQuests,
    ]
};
