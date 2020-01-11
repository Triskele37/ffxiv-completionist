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

export const DiscipleOfWarJobQuests = {
    name: "Disciple of War Job",
    subGroups: [
        PaladinQuests,
        MonkQuests,
        WarriorQuests,
        DragoonQuests,
        BardQuests,
        NinjaQuests,
        DarkKnightQuests,
        MachinistQuests,
        SamuraiQuests,
        GunbreakerQuests,
        DancerQuests,
    ]
};
