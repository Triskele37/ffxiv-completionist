import { DiscipleOfWarQuests } from "./disciple-of-war-quests";
import { DiscipleOfMagicQuests } from "./disciple-of-magic-quests";
import { DiscipleOfTheHandQuests } from "./disciple-of-the-hand-quests";
import { DiscipleOfTheLandQuests } from "./disciple-of-the-land-quests";
import { CrystallineMeanQuests } from "./crystalline-mean-quests";
import { DiscipleOfWarJobQuests } from "./disciple-of-war-job-quests";
import { DiscipleOfMagicJobQuests } from "./disciple-of-magic-job-quests";
import { RoleQuests } from "./role-quests";

export const ClassAndJob = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.class-and-job`;

    return {
        name: "Class & Job",
        storageKey,
        subGroups: [
            DiscipleOfWarQuests(storageKey),
            DiscipleOfMagicQuests(storageKey),
            DiscipleOfTheHandQuests(storageKey),
            DiscipleOfTheLandQuests(storageKey),
            CrystallineMeanQuests(storageKey),
            DiscipleOfWarJobQuests(storageKey),
            DiscipleOfMagicJobQuests(storageKey),
            RoleQuests(storageKey),
        ]
    };
};
