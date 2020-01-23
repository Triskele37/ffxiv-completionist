import { TheSeaOfClouds } from "./the-sea-of-clouds";

export const Abalathian = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.abalathian`;

    return {
        name: "Abalathian",
        storageKey,
        subGroups: [
            TheSeaOfClouds(storageKey)
        ]
    };
};
