import { TheSeaOfCloudsFATEs } from "./the-sea-of-clouds";
import { AzysLlaFATEs } from "./azys-lla";

export const AbalathiasSpineFATEs = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.abalathias-spine`;

    return {
        name: "Abalathia's Spine",
        storageKey,
        groupKeys: [
            "AzysLla",
            "TheSeaOfClouds",
        ],
        // Groups
        AzysLla: AzysLlaFATEs(storageKey),
        TheSeaOfClouds: TheSeaOfCloudsFATEs(storageKey),
    };
};
