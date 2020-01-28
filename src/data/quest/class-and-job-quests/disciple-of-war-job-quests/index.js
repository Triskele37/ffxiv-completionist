import { Quest_Class_And_Job_Disciple_Of_War_Job_Paladin } from "./paladin-quests";
import { Quest_Class_And_Job_Disciple_Of_War_Job_Monk } from "./monk-quests";
import { Quest_Class_And_Job_Disciple_Of_War_Job_Warrior } from "./warrior-quests";
import { Quest_Class_And_Job_Disciple_Of_War_Job_Dragoon } from "./dragoon-quests";
import { Quest_Class_And_Job_Disciple_Of_War_Job_Bard } from "./bard-quests";
import { Quest_Class_And_Job_Disciple_Of_War_Job_Ninja } from "./ninja-quests";
import { Quest_Class_And_Job_Disciple_Of_War_Job_Dark_Knight } from "./dark-knight-quests";
import { Quest_Class_And_Job_Disciple_Of_War_Job_Machinist } from "./machinist-quests";
import { Quest_Class_And_Job_Disciple_Of_War_Job_Samurai } from "./samurai-quests";
import { Quest_Class_And_Job_Disciple_Of_War_Job_Gunbreaker } from "./gunbreaker-quests";
import { Quest_Class_And_Job_Disciple_Of_War_Job_Dancer } from "./dancer-quests";

export const Quest_Class_And_Job_Disciple_Of_War_Job = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.disciple-of-war-job`;

    return {
        name: "Disciple of War Job",
        storageKey,
        groupKeys: [
            "Paladin",
            "Monk",
            "Warrior",
            "Dragoon",
            "Bard",
            "Ninja",
            "Dark_Knight",
            "Machinist",
            "Samurai",
            "Gunbreaker",
            "Dancer",
        ],
        // Groups
        Paladin: Quest_Class_And_Job_Disciple_Of_War_Job_Paladin(storageKey),
        Monk: Quest_Class_And_Job_Disciple_Of_War_Job_Monk(storageKey),
        Warrior: Quest_Class_And_Job_Disciple_Of_War_Job_Warrior(storageKey),
        Dragoon: Quest_Class_And_Job_Disciple_Of_War_Job_Dragoon(storageKey),
        Bard: Quest_Class_And_Job_Disciple_Of_War_Job_Bard(storageKey),
        Ninja: Quest_Class_And_Job_Disciple_Of_War_Job_Ninja(storageKey),
        Dark_Knight: Quest_Class_And_Job_Disciple_Of_War_Job_Dark_Knight(storageKey),
        Machinist: Quest_Class_And_Job_Disciple_Of_War_Job_Machinist(storageKey),
        Samurai: Quest_Class_And_Job_Disciple_Of_War_Job_Samurai(storageKey),
        Gunbreaker: Quest_Class_And_Job_Disciple_Of_War_Job_Gunbreaker(storageKey),
        Dancer: Quest_Class_And_Job_Disciple_Of_War_Job_Dancer(storageKey),
    };
};
