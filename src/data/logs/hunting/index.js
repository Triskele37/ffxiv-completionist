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
        groupKeys: [
            "Arcanist",
            "Archer",
            "Conjurer",
            "Gladiator",
            "Lancer",
            "Marauder",
            "Pugilist",
            "Rogue",
            "Thaumaturge",
            "ImmortalFlames",
            "Maelstrom",
            "TwinAdder",
        ],
        // Groups
        Arcanist: ArcanistHunting(storageKey),
        Archer: ArcherHunting(storageKey),
        Conjurer: ConjurerHunting(storageKey),
        Gladiator: GladiatorHunting(storageKey),
        Lancer: LancerHunting(storageKey),
        Marauder: MarauderHunting(storageKey),
        Pugilist: PugilistHunting(storageKey),
        Rogue: RogueHunting(storageKey),
        Thaumaturge: ThaumaturgeHunting(storageKey),
        ImmortalFlames: ImmortalFlamesHunting(storageKey),
        Maelstrom: MaelstromHunting(storageKey),
        TwinAdder: TwinAdderHunting(storageKey),
    };
};
