import { ArcanistHunting } from "./arcanist";
import { ArcherHunting } from "./archer";
import { ConjurerHunting } from "./conjurer";
import { GladiatorHunting } from "./gladiator";
import { LancerHunting } from "./lancer";
import { MarauderHunting } from "./marauder";
import { PugilistHunting } from "./pugilist";
import { RogueHunting } from "./rogue";
import { ThaumaturgeHunting } from "./thaumaturge";
import { ImmortalFlamesHunting } from "./immortal-flames";
import { MaelstromHunting } from "./maelstrom";
import { TwinAdderHunting } from "./twin-adder";

export const HuntingLogs = {
    name: "Hunting",
    subGroups: [
        ArcanistHunting,
        ArcherHunting,
        ConjurerHunting,
        GladiatorHunting,
        LancerHunting,
        MarauderHunting,
        PugilistHunting,
        RogueHunting,
        ThaumaturgeHunting,
        ImmortalFlamesHunting,
        MaelstromHunting,
        TwinAdderHunting
    ]
};
