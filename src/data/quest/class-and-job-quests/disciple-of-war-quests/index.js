import { Quest_Class_And_Job_Disciple_Of_War_Gladiator } from "./gladiator-quests";
import { Quest_Class_And_Job_Disciple_Of_War_Pugilist } from "./pugilist-quests";
import { Quest_Class_And_Job_Disciple_Of_War_Marauder } from "./marauder-quests";
import { Quest_Class_And_Job_Disciple_Of_War_Lancer } from "./lancer-quests";
import { Quest_Class_And_Job_Disciple_Of_War_Archer } from "./archer-quests";
import { Quest_Class_And_Job_Disciple_Of_War_Rogue } from "./rogue-quests";

export const Quest_Class_And_Job_Disciple_Of_War = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.disciple-of-war`;

    return {
        name: "Disciple of War",
        storageKey,
        groupKeys: [
            "Gladiator",
            "Pugilist",
            "Marauder",
            "Lancer",
            "Archer",
            "Rogue",
        ],
        // Groups
        Gladiator: Quest_Class_And_Job_Disciple_Of_War_Gladiator(storageKey),
        Pugilist: Quest_Class_And_Job_Disciple_Of_War_Pugilist(storageKey),
        Marauder: Quest_Class_And_Job_Disciple_Of_War_Marauder(storageKey),
        Lancer: Quest_Class_And_Job_Disciple_Of_War_Lancer(storageKey),
        Archer: Quest_Class_And_Job_Disciple_Of_War_Archer(storageKey),
        Rogue: Quest_Class_And_Job_Disciple_Of_War_Rogue(storageKey),
    };
};
