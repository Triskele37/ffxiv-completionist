import { Quest_Sidequests_Gyr_Abanian_Rhalgrs_Reach } from "./rhalgrs-reach";
import { Quest_Sidequests_Gyr_Abanian_The_Fringes } from "./the-fringes";
import { Quest_Sidequests_Gyr_Abanian_The_Peaks } from "./the-peaks";
import { Quest_Sidequests_Gyr_Abanian_The_Lochs } from "./the-lochs";

export const Quest_Sidequests_Gyr_Abanian = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.gyr-abanian`;

    return {
        name: "Gyr Abanian",
        storageKey,
        groupKeys: [
            "Rhalgrs_Reach",
            "The_Fringes",
            "The_Peaks",
            "The_Lochs",
        ],
        // Groups
        Rhalgrs_Reach: Quest_Sidequests_Gyr_Abanian_Rhalgrs_Reach(storageKey),
        The_Fringes: Quest_Sidequests_Gyr_Abanian_The_Fringes(storageKey),
        The_Peaks: Quest_Sidequests_Gyr_Abanian_The_Peaks(storageKey),
        The_Lochs: Quest_Sidequests_Gyr_Abanian_The_Lochs(storageKey),
    };
};
