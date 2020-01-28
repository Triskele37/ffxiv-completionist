import { Quest_Sidequests_Gridanian_Gridania } from "./gridania";
import { Quest_Sidequests_Gridanian_Central_Shroud } from "./central-shroud";
import { Quest_Sidequests_Gridanian_East_Shroud } from "./east-shroud";
import { Quest_Sidequests_Gridanian_South_Shroud } from "./south-shroud";
import { Quest_Sidequests_Gridanian_North_Shroud } from "./north-shroud";

export const Quest_Sidequests_Gridanian = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.gridanian`;

    return {
        name: "Gridanian",
        storageKey,
        groupKeys: [
            "Gridania",
            "Central_Shroud",
            "East_Shroud",
            "South_Shroud",
            "North_Shroud",
        ],
        // Groups
        Gridania: Quest_Sidequests_Gridanian_Gridania(storageKey),
        Central_Shroud: Quest_Sidequests_Gridanian_Central_Shroud(storageKey),
        East_Shroud: Quest_Sidequests_Gridanian_East_Shroud(storageKey),
        South_Shroud: Quest_Sidequests_Gridanian_South_Shroud(storageKey),
        North_Shroud: Quest_Sidequests_Gridanian_North_Shroud(storageKey),
    };
};
