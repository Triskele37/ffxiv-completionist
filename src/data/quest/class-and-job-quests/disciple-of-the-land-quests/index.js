import { Quest_Class_And_Job_Disciple_Of_The_Land_Miner } from "./miner-quests";
import { Quest_Class_And_Job_Disciple_Of_The_Land_Botanist } from "./botanist-quests";
import { Quest_Class_And_Job_Disciple_Of_The_Land_Fisher } from "./fisher-quests";

export const Quest_Class_And_Job_Disciple_Of_The_Land = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.disciple-of-the-land`;

    return {
        name: "Disciple of the Land",
        storageKey,
        groupKeys: [
            "Miner",
            "Botanist",
            "Fisher",
        ],
        // Groups
        Miner: Quest_Class_And_Job_Disciple_Of_The_Land_Miner(storageKey),
        Botanist: Quest_Class_And_Job_Disciple_Of_The_Land_Botanist(storageKey),
        Fisher: Quest_Class_And_Job_Disciple_Of_The_Land_Fisher(storageKey),
    };
};
