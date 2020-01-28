import { Quest_Class_And_Job_Disciple_Of_Magic_Conjurer } from "./conjurer-quests";
import { Quest_Class_And_Job_Disciple_Of_Magic_Thaumaturge } from "./thaumaturge-quests";
import { Quest_Class_And_Job_Disciple_Of_Magic_Arcanist } from "./arcanist-quests";

export const Quest_Class_And_Job_Disciple_Of_Magic = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.disciple-of-magic`;

    return {
        name: "Disciple of Magic",
        storageKey,
        groupKeys: [
            "Conjurer",
            "Thaumaturge",
            "Arcanist",
        ],
        // Groups
        Conjurer: Quest_Class_And_Job_Disciple_Of_Magic_Conjurer(storageKey),
        Thaumaturge: Quest_Class_And_Job_Disciple_Of_Magic_Thaumaturge(storageKey),
        Arcanist: Quest_Class_And_Job_Disciple_Of_Magic_Arcanist(storageKey),
    };
};
