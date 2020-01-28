import { Quest_Sidequests_Othardian_The_Ruby_Sea } from "./the-ruby-sea";
import { Quest_Sidequests_Othardian_Yanxia } from "./yanxia";
import { Quest_Sidequests_Othardian_The_Azim_Steppe } from "./the-azim-steppe";

export const Quest_Sidequests_Othardian = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.othardian`;

    return {
        name: "Othardian",
        storageKey,
        groupKeys: [
            "The_Ruby_Sea",
            "Yanxia",
            "The_Azim_Steppe",
        ],
        // Groups
        The_Ruby_Sea: Quest_Sidequests_Othardian_The_Ruby_Sea(storageKey),
        Yanxia: Quest_Sidequests_Othardian_Yanxia(storageKey),
        The_Azim_Steppe: Quest_Sidequests_Othardian_The_Azim_Steppe(storageKey),
    };
};
