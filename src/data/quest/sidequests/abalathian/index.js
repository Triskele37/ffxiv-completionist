import { Quest_Sidequests_Abalathian_The_Sea_Of_Clouds } from "./the-sea-of-clouds";

export const Quest_Sidequests_Abalathian = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.abalathian`;

    return {
        name: "Abalathian",
        storageKey,
        groupKeys: [
            "The_Sea_Of_Clouds",
        ],
        // Groups
        The_Sea_Of_Clouds: Quest_Sidequests_Abalathian_The_Sea_Of_Clouds(storageKey)
    };
};
