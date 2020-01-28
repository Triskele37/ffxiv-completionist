import { AmhAraengFATEs } from "./amh-araeng";
import { IlMhegFATEs } from "./il-mheg";
import { KholusiaFATEs } from "./kholusia";
import { LakelandFATEs } from "./lakeland";
import { TheRakTikaGreatwoodFATEs } from "./the-rak-tika-greatwood";
import { TheTempestFATEs } from "./the-tempest";

export const NorvrandtFATEs = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.norvrandt`;

    return {
        name: "Norvrandt",
        storageKey,
        groupKeys: [
            "AmhAraeng",
            "IlMheg",
            "Kholusia",
            "Lakeland",
            "TheRakTikaGreatwood",
            "TheTempest",
        ],
        // Groups
        AmhAraeng: AmhAraengFATEs(storageKey),
        IlMheg: IlMhegFATEs(storageKey),
        Kholusia: KholusiaFATEs(storageKey),
        Lakeland: LakelandFATEs(storageKey),
        TheRakTikaGreatwood: TheRakTikaGreatwoodFATEs(storageKey),
        TheTempest: TheTempestFATEs(storageKey),
    };
};
