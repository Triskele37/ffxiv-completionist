import { DataGroup } from "../../DataGroup";

import { Travel_Aether_Currents_HW } from "./hw";
import { Travel_Aether_Currents_SB } from "./sb";
import { Travel_Aether_Currents_ShB } from "./shb";

export const Travel_Aether_Currents = function(parent) {
    const data = new DataGroup("Aether Currents", parent);

    data.columnConfig = [
        { header: "#", key: "name" },
        { header: "Quest Giver - Location", key: "location" },
        { header: "Coordinates", key: "coordinates" },
        { header: "Quest", key: "quest" },
        { header: "Notes", key: "notes" },
    ];

    data.initializeSubGroups([
        Travel_Aether_Currents_HW,
        Travel_Aether_Currents_SB,
        Travel_Aether_Currents_ShB,
    ]);

    return data;
};
