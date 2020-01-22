import { Gridania } from "./gridania";
import { CentralShroud } from "./central-shroud";
import { EastShroud } from "./east-shroud";
import { SouthShroud } from "./south-shroud";
import { NorthShroud } from "./north-shroud";

export const Gridanian = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.gridanian`;

    return {
        name: "Gridanian",
        storageKey,
        subGroups: [
            Gridania(storageKey),
            CentralShroud(storageKey),
            EastShroud(storageKey),
            SouthShroud(storageKey),
            NorthShroud(storageKey),
        ]
    };
};
