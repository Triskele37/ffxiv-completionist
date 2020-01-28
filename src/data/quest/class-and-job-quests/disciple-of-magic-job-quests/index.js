import { Quest_Class_And_Job_Disciple_Of_Magic_Job_White_Mage } from "./white-mage-quests";
import { Quest_Class_And_Job_Disciple_Of_Magic_Job_Black_Mage } from "./black-mage-quests";
import { Quest_Class_And_Job_Disciple_Of_Magic_Job_Summoner } from "./summoner-quests";
import { Quest_Class_And_Job_Disciple_Of_Magic_Job_Scholar } from "./scholar-quests";
import { Quest_Class_And_Job_Disciple_Of_Magic_Job_Astrologian } from "./astrologian-quests";
import { Quest_Class_And_Job_Disciple_Of_Magic_Job_Red_Mage } from "./red-mage-quests";
import { Quest_Class_And_Job_Disciple_Of_Magic_Job_Blue_Mage } from "./blue-mage-quests";

export const Quest_Class_And_Job_Disciple_Of_Magic_Job = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.disciple-of-magic-job`;

    return {
        name: "Disciple of Magic Job",
        storageKey,
        groupKeys: [
            "White_Mage",
            "Black_Mage",
            "Summoner",
            "Scholar",
            "Astrologian",
            "Red_Mage",
            "Blue_Mage",
        ],
        // Groups
        White_Mage: Quest_Class_And_Job_Disciple_Of_Magic_Job_White_Mage(storageKey),
        Black_Mage: Quest_Class_And_Job_Disciple_Of_Magic_Job_Black_Mage(storageKey),
        Summoner: Quest_Class_And_Job_Disciple_Of_Magic_Job_Summoner(storageKey),
        Scholar: Quest_Class_And_Job_Disciple_Of_Magic_Job_Scholar(storageKey),
        Astrologian: Quest_Class_And_Job_Disciple_Of_Magic_Job_Astrologian(storageKey),
        Red_Mage: Quest_Class_And_Job_Disciple_Of_Magic_Job_Red_Mage(storageKey),
        Blue_Mage: Quest_Class_And_Job_Disciple_Of_Magic_Job_Blue_Mage(storageKey),
    };
};
