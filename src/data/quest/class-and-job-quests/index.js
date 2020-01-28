import { Quest_Class_And_Job_Disciple_Of_War } from "./disciple-of-war-quests";
import { Quest_Class_And_Job_Disciple_Of_Magic } from "./disciple-of-magic-quests";
import { Quest_Class_And_Job_Disciple_Of_The_Hand } from "./disciple-of-the-hand-quests";
import { Quest_Class_And_Job_Disciple_Of_The_Land } from "./disciple-of-the-land-quests";
import { Quest_Class_And_Job_Crystalline_Mean } from "./crystalline-mean-quests";
import { Quest_Class_And_Job_Disciple_Of_War_Job } from "./disciple-of-war-job-quests";
import { Quest_Class_And_Job_Disciple_Of_Magic_Job } from "./disciple-of-magic-job-quests";
import { Quest_Class_And_Job_Role } from "./role-quests";

export const Quest_Class_And_Job = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.class-and-job`;

    return {
        name: "Class & Job",
        storageKey,
        groupKeys: [
            "Disciple_Of_War",
            "Disciple_Of_Magic",
            "Disciple_Of_The_Hand",
            "Disciple_Of_The_Land",
            "Crystalline_Mean",
            "Disciple_Of_War_Job",
            "Disciple_Of_Magic_Job",
            "Role",
        ],
        // Groups
        Disciple_Of_War: Quest_Class_And_Job_Disciple_Of_War(storageKey),
        Disciple_Of_Magic: Quest_Class_And_Job_Disciple_Of_Magic(storageKey),
        Disciple_Of_The_Hand: Quest_Class_And_Job_Disciple_Of_The_Hand(storageKey),
        Disciple_Of_The_Land: Quest_Class_And_Job_Disciple_Of_The_Land(storageKey),
        Crystalline_Mean: Quest_Class_And_Job_Crystalline_Mean(storageKey),
        Disciple_Of_War_Job: Quest_Class_And_Job_Disciple_Of_War_Job(storageKey),
        Disciple_Of_Magic_Job: Quest_Class_And_Job_Disciple_Of_Magic_Job(storageKey),
        Role: Quest_Class_And_Job_Role(storageKey),
    };
};
