import { MNaagoQuests } from "./m-naago";
import { MeffridQuests } from "./meffrid";
import { StormbloodMainQuests } from "./main";

// https://xivapi.com/search?indexes=Quest&filters=JournalGenreTargetID=6&columns=ID,Name&limit=122
export const StormbloodQuests = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.stormblood`;

    return {
        name: "Stormblood",
        storageKey,
        subGroups: [
            MNaagoQuests(storageKey),
            MeffridQuests(storageKey),
            StormbloodMainQuests(storageKey),
        ],
    };
};
