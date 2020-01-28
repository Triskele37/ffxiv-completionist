import { Quest_Sidequests_Lominsan_Limsa_Lominsa } from "./limsa-lominsa";
import { Quest_Sidequests_Lominsan_Wolves_Den_Pier } from "./wolves-den-pier";
import { Quest_Sidequests_Lominsan_Middle_La_Noscea } from "./middle-la-noscea";
import { Quest_Sidequests_Lominsan_Lower_La_Noscea } from "./lower-la-noscea";
import { Quest_Sidequests_Lominsan_Eastern_La_Noscea } from "./eastern-la-noscea";
import { Quest_Sidequests_Lominsan_Western_La_Noscea } from "./western-la-noscea";
import { Quest_Sidequests_Lominsan_Upper_La_Noscea } from "./upper-la-noscea";
import { Quest_Sidequests_Lominsan_Outer_La_Noscea } from "./outer-la-noscea";

export const Quest_Sidequests_Lominsan = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.lominsan`;

    return {
        name: "Lominsan",
        storageKey,
        groupKeys: [
            "Limsa_Lominsa",
            "Wolves_Den_Pier",
            "Middle_La_Noscea",
            "Lower_La_Noscea",
            "Eastern_La_Noscea",
            "Western_La_Noscea",
            "Upper_La_Noscea",
            "Outer_La_Noscea",
        ],
        // Groups
        Limsa_Lominsa: Quest_Sidequests_Lominsan_Limsa_Lominsa(storageKey),
        Wolves_Den_Pier: Quest_Sidequests_Lominsan_Wolves_Den_Pier(storageKey),
        Middle_La_Noscea: Quest_Sidequests_Lominsan_Middle_La_Noscea(storageKey),
        Lower_La_Noscea: Quest_Sidequests_Lominsan_Lower_La_Noscea(storageKey),
        Eastern_La_Noscea: Quest_Sidequests_Lominsan_Eastern_La_Noscea(storageKey),
        Western_La_Noscea: Quest_Sidequests_Lominsan_Western_La_Noscea(storageKey),
        Upper_La_Noscea: Quest_Sidequests_Lominsan_Upper_La_Noscea(storageKey),
        Outer_La_Noscea: Quest_Sidequests_Lominsan_Outer_La_Noscea(storageKey),
    };
};
