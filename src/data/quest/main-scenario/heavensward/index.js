import { HeavenswardMainQuests } from "./main";
import { HeavenswardArtoirelQuests } from "./artoirel";
import { HeavenswardEmmanellainQuests } from "./emmanellain";

// https://xivapi.com/search?indexes=Quest&filters=JournalGenreTargetID=3&columns=ID,Name&limit=94

export const HeavenswardQuests = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.heavensward`;

    return {
        name: "Heavensward",
    	storageKey,
        subGroups: [
            HeavenswardMainQuests(storageKey),
            HeavenswardArtoirelQuests(storageKey),
            HeavenswardEmmanellainQuests(storageKey),
        ],
    };
};
