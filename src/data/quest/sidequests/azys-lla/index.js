import { Quest_Sidequests_Azys_Lla_Azys_Lla } from "./azys-lla";

export const Quest_Sidequests_Azys_Lla = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.azys-lla`;

    return {
        name: "Azys Lla",
        storageKey,
        groupKeys: [
            "Azys_Lla",
        ],
        // Groups
        Azys_Lla: Quest_Sidequests_Azys_Lla_Azys_Lla(storageKey)
    };
};
