import { DataGroup } from "../../DataGroup";

import { Travel_Aether_Currents_HW } from "./hw";
import { Travel_Aether_Currents_SB } from "./sb";
import { Travel_Aether_Currents_ShB } from "./shb";

export const Travel_Aether_Currents = function(parent) {
    const group = DataGroup.fromJSON(parent, "./travel/aether-currents/index");

    group.subGroups = [
        Travel_Aether_Currents_HW(group),
        Travel_Aether_Currents_SB(group),
        Travel_Aether_Currents_ShB(group),
    ];

    return group;
};
