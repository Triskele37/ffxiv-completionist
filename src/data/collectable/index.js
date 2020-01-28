import { Aesthetician } from "./aesthetician";
import { Barding } from "./barding";
import { Emotes } from "./emote";
import { Minions } from "./minion";
import { Mounts } from "./mount";
import { Orchestrion } from "./orchestrion";
import { TripleTriadCards } from "./tripletriad-card";
import { TripleTriadOpponents } from "./tripletriad-opponent";

export const Collectable = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.collectable`;

    return {
        name: "Collectable",
        storageKey,
        groupKeys: [
            "Aesthetician",
            "Barding",
            "Emotes",
            "Minions",
            "Mounts",
            "Orchestrion",
            "TripleTriadCards",
            "TripleTriadOpponents",
        ],
        // Groups
        Aesthetician: Aesthetician(storageKey),
        Barding: Barding(storageKey),
        Emotes: Emotes(storageKey),
        Minions: Minions(storageKey),
        Mounts: Mounts(storageKey),
        Orchestrion: Orchestrion(storageKey),
        TripleTriadCards: TripleTriadCards(storageKey),
        TripleTriadOpponents: TripleTriadOpponents(storageKey),
    };
};
