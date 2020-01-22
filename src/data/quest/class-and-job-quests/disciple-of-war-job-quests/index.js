import { PaladinQuests } from "./paladin-quests";
import { MonkQuests } from "./monk-quests";
import { WarriorQuests } from "./warrior-quests";
import { DragoonQuests } from "./dragoon-quests";
import { BardQuests } from "./bard-quests";
import { NinjaQuests } from "./ninja-quests";
import { DarkKnightQuests } from "./dark-knight-quests";
import { MachinistQuests } from "./machinist-quests";
import { SamuraiQuests } from "./samurai-quests";
import { GunbreakerQuests } from "./gunbreaker-quests";
import { DancerQuests } from "./dancer-quests";

export const DiscipleOfWarJobQuests = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.disciple-of-war-job`;

    return {
        name: "Disciple of War Job",
        storageKey,
        subGroups: [
            PaladinQuests(storageKey),
            MonkQuests(storageKey),
            WarriorQuests(storageKey),
            DragoonQuests(storageKey),
            BardQuests(storageKey),
            NinjaQuests(storageKey),
            DarkKnightQuests(storageKey),
            MachinistQuests(storageKey),
            SamuraiQuests(storageKey),
            GunbreakerQuests(storageKey),
            DancerQuests(storageKey),
        ]
    };
};
