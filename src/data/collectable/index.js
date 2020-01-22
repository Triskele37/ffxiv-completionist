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
        subGroups:[
            Aesthetician(storageKey),
            Barding(storageKey),
            Emotes(storageKey),
            Minions(storageKey),
            Mounts(storageKey),
            Orchestrion(storageKey),
            TripleTriadCards(storageKey),
            TripleTriadOpponents(storageKey),
        ]
    };
};
