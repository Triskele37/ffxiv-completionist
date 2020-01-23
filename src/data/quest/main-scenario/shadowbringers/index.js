import { AlphinaudQuests } from "./alphinaud";
import { AlisaieQuests } from "./alisaie";
import { ShadowbringersMainQuests } from "./main";

// https://xivapi.com/search?indexes=Quest&filters=JournalGenreTargetID=8&columns=ID,Name&limit=106
export const ShadowbringersQuests = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.shadowbringers`;

    return {
        name: "Shadowbringers",
        storageKey,
        subGroups: [
            AlphinaudQuests(storageKey),
            AlisaieQuests(storageKey),
            ShadowbringersMainQuests(storageKey),
        ],
    };
};
