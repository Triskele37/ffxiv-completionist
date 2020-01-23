import { GridaniaStartingQuests } from "./gridania";
import { LimsaLominsaStartingQuests } from "./limsa-lominsa";
import { UlDahStartingQuests } from "./ul-dah";
import { SeventhUmbralEraMainQuests } from "./main";

/*
https://xivapi.com/search?indexes=Quest&filters=JournalGenreTargetID=1&columns=ID,Name&limit=247

???: api contains 2 "Call of the Sea"s, app has 3
???: api contains 8 "Close to Home"s, app has 3
spelling:
	api > All upon the Watchtowers, app > All Upon the Watchtowers, api matches game
	api > All by Ourselves, app > All By Ourselves, api matches game
*/

export const SeventhUmbralEraQuests = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.seventh-umbral-era`;

    return {
        name: "Seventh Umbral Era",
    	storageKey,
        subGroups: [
            GridaniaStartingQuests(storageKey),
            LimsaLominsaStartingQuests(storageKey),
            UlDahStartingQuests(storageKey),
            SeventhUmbralEraMainQuests(storageKey),
        ],
    };
};
