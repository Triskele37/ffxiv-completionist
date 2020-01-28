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
        groupKeys: [
            "AbalathiasSpine",
            "BlackShroud",
            "Coerthas",
            "Diadem",
            "Dravania",
            "Eureka",
            "GyrAbania",
            "LaNoscea",
            "MorDhona",
            "Norvrandt",
            "Othard",
            "Thanalan",
        ],
        // Groups
        AbalathiasSpine: AbalathiasSpineFATEs(storageKey),
        BlackShroud: BlackShroudFATEs(storageKey),
        Coerthas: CoerthasFATEs(storageKey),
        Diadem: DiademFATEs(storageKey),
        Dravania: DravaniaFATEs(storageKey),
        Eureka: EurekaFATEs(storageKey),
        GyrAbania: GyrAbaniaFATEs(storageKey),
        LaNoscea: LaNosceaFATEs(storageKey),
        MorDhona: MorDhonaFATEs(storageKey),
        Norvrandt: NorvrandtFATEs(storageKey),
        Othard: OthardFATEs(storageKey),
        Thanalan: ThanalanFATEs(storageKey),
    };
};
