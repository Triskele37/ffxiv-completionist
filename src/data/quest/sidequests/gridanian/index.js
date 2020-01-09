import { Gridania } from "./gridania";
import { CentralShroud } from "./central-shroud";
import { EastShroud } from "./east-shroud";
import { SouthShroud } from "./south-shroud";
import { NorthShroud } from "./north-shroud";

export const Gridanian = {
    name: "Gridanian",
    subGroups: [
        Gridania,
        CentralShroud,
        EastShroud,
        SouthShroud,
        NorthShroud,
    ]
};
