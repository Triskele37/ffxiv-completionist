import { DataGroup } from "../../DataGroup";

import { Collectables_Orchestrion_Locales } from "./locales";
import { Collectables_Orchestrion_Dungeon } from "./dungeons";
import { Collectables_Orchestrion_Mog_Station } from "./mogstation";
import { Collectables_Orchestrion_Other } from "./other";
import { Collectables_Orchestrion_Raid } from "./raids";
import { Collectables_Orchestrion_Seasonal } from "./seasonal";
import { Collectables_Orchestrion_Trial } from "./trials";

export const Collectables_Orchestrion = function(name, parent) {
    const data = new DataGroup(name, parent);
    data.columnConfig = [
        {
            header: 'Number',
            key: 'number',
            styles: {
                centered: true
            }
        },
        { header: 'Orchestrion Roll', key: 'name' },
        { header: 'Method Type', key: 'method' },
        { header: 'Unlock', key: 'unlock' }
    ];

    data.initializeSubGroups([
        Collectables_Orchestrion_Locales,
        Collectables_Orchestrion_Dungeon,
        Collectables_Orchestrion_Mog_Station,
        Collectables_Orchestrion_Other,
        Collectables_Orchestrion_Raid,
        Collectables_Orchestrion_Seasonal,
        Collectables_Orchestrion_Trial,
    ]);

    return data;
};
