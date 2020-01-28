import { Quest_COANE_Primals } from "./primals";
import { Quest_COANE_Bahamut } from "./bahamut";
import { Quest_COANE_The_Crystal_Tower } from "./the-crystal-tower";
import { Quest_COANE_Alexander } from "./alexander";
import { Quest_COANE_The_Warring_Triad } from "./the-warring-triad";
import { Quest_COANE_The_Shadow_Of_Mhach } from "./the-shadow-of-mhach";
import { Quest_COANE_Omega } from "./omega";
import { Quest_COANE_Return_To_Ivalice } from "./return-to-ivalice";
import { Quest_COANE_The_Four_Lords } from "./the-four-lords";
import { Quest_COANE_Eden } from "./eden";
import { Quest_COANE_YoRHa_Dark_Apocalypse } from "./yorha-dark-apocalypse"

export const Quest_Chronicles_Of_A_New_Era = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.chronicles-of-a-new-era`;

    return {
        name: "Chronicles of a New Era",
        storageKey,
        groupKeys: [
            "Primals",
            "Bahamut",
            "The_Crystal_Tower",
            "Alexander",
            "The_Warring_Triad",
            "The_Shadow_Of_Mhach",
            "Omega",
            "Return_To_Ivalice",
            "The_Four_Lords",
            "Eden",
            "YoRHa_Dark_Apocalypse",
        ],
        // Groups
        Primals: Quest_COANE_Primals(storageKey),
        Bahamut: Quest_COANE_Bahamut(storageKey),
        The_Crystal_Tower: Quest_COANE_The_Crystal_Tower(storageKey),
        Alexander: Quest_COANE_Alexander(storageKey),
        The_Warring_Triad: Quest_COANE_The_Warring_Triad(storageKey),
        The_Shadow_Of_Mhach: Quest_COANE_The_Shadow_Of_Mhach(storageKey),
        Omega: Quest_COANE_Omega(storageKey),
        Return_To_Ivalice: Quest_COANE_Return_To_Ivalice(storageKey),
        The_Four_Lords: Quest_COANE_The_Four_Lords(storageKey),
        Eden: Quest_COANE_Eden(storageKey),
        YoRHa_Dark_Apocalypse: Quest_COANE_YoRHa_Dark_Apocalypse(storageKey),
    };
};
