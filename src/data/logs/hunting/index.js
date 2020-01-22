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

export const HuntingLogs = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.hunting`;

    return {
        name: "Hunting",
        storageKey,
        subGroups: [
            ArcanistHunting(storageKey),
            ArcherHunting(storageKey),
            ConjurerHunting(storageKey),
            GladiatorHunting(storageKey),
            LancerHunting(storageKey),
            MarauderHunting(storageKey),
            PugilistHunting(storageKey),
            RogueHunting(storageKey),
            ThaumaturgeHunting(storageKey),
            ImmortalFlamesHunting(storageKey),
            MaelstromHunting(storageKey),
            TwinAdderHunting(storageKey),
        ]
    };
};
