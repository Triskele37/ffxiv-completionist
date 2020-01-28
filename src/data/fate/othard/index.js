import { TheAzimSteppeFATEs } from "./the-azim-steppe";
import { TheRubySeaFATEs } from "./the-ruby-sea";
import { YanxiaFATEs } from "./yanxia";

export const OthardFATEs = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.othard`;

    return {
        name: "Othard",
        storageKey,
        groupKeys: [
            "TheAzimSteppe",
            "TheRubySea",
            "Yanxia",
        ],
        // Groups
        TheAzimSteppe: TheAzimSteppeFATEs(storageKey),
        TheRubySea: TheRubySeaFATEs(storageKey),
        Yanxia: YanxiaFATEs(storageKey),
    };
};
