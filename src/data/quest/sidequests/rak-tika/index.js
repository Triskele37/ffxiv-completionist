import { Quest_Sidequests_Rak_Tika_The_Rak_Tika_Greatwood } from "./the-rak-tika-greatwood";

export const Quest_Sidequests_Rak_Tika = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.rak-tika`;

    return {
        name: "Rak'Tika",
        storageKey,
        groupKeys: [
            "The_Rak_Tika_Greatwood",
        ],
        // Groups
        The_Rak_Tika_Greatwood: Quest_Sidequests_Rak_Tika_The_Rak_Tika_Greatwood(storageKey),
    };
};
