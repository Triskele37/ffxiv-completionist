import { FATEColumnConfig } from "./columnConfigs";

import { AbalathiasSpineFATEs } from "./abalathias-spine";
import { BlackShroudFATEs } from "./black-shroud";
import { CoerthasFATEs } from "./coerthas";
import { DiademFATEs } from "./diadem";
import { DravaniaFATEs } from "./dravania";
import { EurekaFATEs } from "./eureka";
import { GyrAbaniaFATEs } from "./gyr-abania";
import { LaNosceaFATEs } from "./la-noscea";
import { MorDhonaFATEs } from "./mor-dhona";
import { NorvrandtFATEs } from "./norvrandt";
import { OthardFATEs } from "./othard";
import { ThanalanFATEs } from "./thanalan";

/* https://xivapi.com/Fate */

export const FATEs = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.fate`;

    return {
        name: "FATE",
        storageKey,
        columns: FATEColumnConfig,
        subGroups: [
            AbalathiasSpineFATEs(storageKey),
            BlackShroudFATEs(storageKey),
            CoerthasFATEs(storageKey),
            DiademFATEs(storageKey),
            DravaniaFATEs(storageKey),
            EurekaFATEs(storageKey),
            GyrAbaniaFATEs(storageKey),
            LaNosceaFATEs(storageKey),
            MorDhonaFATEs(storageKey),
            NorvrandtFATEs(storageKey),
            OthardFATEs(storageKey),
            ThanalanFATEs(storageKey),
        ]
    };
};
