import { CentralThanalanFATEs } from "./central-thanalan";
import { EasternThanalanFATEs } from "./eastern-thanalan";
import { NorthernThanalanFATEs } from "./northern-thanalan";
import { SouthernThanalanFATEs } from "./southern-thanalan";
import { WesternThanalanFATEs } from "./western-thanalan";

export const ThanalanFATEs = {
    name: "Thanalan",
    subGroups: [
        CentralThanalanFATEs,
        EasternThanalanFATEs,
        NorthernThanalanFATEs,
        SouthernThanalanFATEs,
        WesternThanalanFATEs
    ]
};
