import { DataGroup } from "../../../DataGroup";

import { Travel_Aether_Currents_ShB_Lakeland } from "./lakeland";
import { Travel_Aether_Currents_ShB_Amh_Araeng } from "./amh-araeng";
import { Travel_Aether_Currents_ShB_Il_Mheg } from "./il-mheg";
import { Travel_Aether_Currents_ShB_Kholusia } from "./kholusia";
import { Travel_Aether_Currents_ShB_The_Rak_Tika_Greatwood } from "./the-rak-tika-greatwood";
import { Travel_Aether_Currents_ShB_The_Tempest } from "./the-tempest";

export const Travel_Aether_Currents_ShB = function(name, parent) {
    return new DataGroup(name, parent).initializeSubGroups([
        Travel_Aether_Currents_ShB_Lakeland,
        Travel_Aether_Currents_ShB_Amh_Araeng,
        Travel_Aether_Currents_ShB_Il_Mheg,
        Travel_Aether_Currents_ShB_Kholusia,
        Travel_Aether_Currents_ShB_The_Rak_Tika_Greatwood,
        Travel_Aether_Currents_ShB_The_Tempest,
    ]);
};
