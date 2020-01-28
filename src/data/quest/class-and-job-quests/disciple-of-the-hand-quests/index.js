import { Quest_Class_And_Job_Disciple_Of_The_Hand_Carpenter } from "./carpenter-quests";
import { Quest_Class_And_Job_Disciple_Of_The_Hand_Blacksmith } from "./blacksmith-quests";
import { Quest_Class_And_Job_Disciple_Of_The_Hand_Armorer } from "./armorer-quests";
import { Quest_Class_And_Job_Disciple_Of_The_Hand_Goldsmith } from "./goldsmith-quests";
import { Quest_Class_And_Job_Disciple_Of_The_Hand_Leatherworker } from "./leatherworker-quests";
import { Quest_Class_And_Job_Disciple_Of_The_Hand_Weaver } from "./weaver-quests";
import { Quest_Class_And_Job_Disciple_Of_The_Hand_Alchemist } from "./alchemist-quests";
import { Quest_Class_And_Job_Disciple_Of_The_Hand_Culinarian } from "./culinarian-quests";

export const Quest_Class_And_Job_Disciple_Of_The_Hand = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.disciple-of-the-hand`;

    return {
        name: "Disciple of the Hand",
        storageKey,
        groupKeys: [
            "Carpenter",
            "Blacksmith",
            "Armorer",
            "Goldsmith",
            "Leatherworker",
            "Weaver",
            "Alchemist",
            "Culinarian",
        ],
        // Groups
        Carpenter: Quest_Class_And_Job_Disciple_Of_The_Hand_Carpenter(storageKey),
        Blacksmith: Quest_Class_And_Job_Disciple_Of_The_Hand_Blacksmith(storageKey),
        Armorer: Quest_Class_And_Job_Disciple_Of_The_Hand_Armorer(storageKey),
        Goldsmith: Quest_Class_And_Job_Disciple_Of_The_Hand_Goldsmith(storageKey),
        Leatherworker: Quest_Class_And_Job_Disciple_Of_The_Hand_Leatherworker(storageKey),
        Weaver: Quest_Class_And_Job_Disciple_Of_The_Hand_Weaver(storageKey),
        Alchemist: Quest_Class_And_Job_Disciple_Of_The_Hand_Alchemist(storageKey),
        Culinarian: Quest_Class_And_Job_Disciple_Of_The_Hand_Culinarian(storageKey),
    };
};
