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
        subGroups: [
            AmhAraengFATEs(storageKey),
            IlMhegFATEs(storageKey),
            KholusiaFATEs(storageKey),
            LakelandFATEs(storageKey),
            TheRakTikaGreatwoodFATEs(storageKey),
            TheTempestFATEs(storageKey),
        ]
    };
};
