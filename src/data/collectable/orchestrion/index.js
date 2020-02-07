import { DataGroup } from "../../DataGroup";

import { Collectables_Orchestrion_List_Locales } from "./locales";
import { Collectables_Orchestrion_List_Dungeons } from "./dungeons";
import { Collectables_Orchestrion_List_Trials } from "./trials";
import { Collectables_Orchestrion_List_Raids } from "./raids";
import { Collectables_Orchestrion_List_Others } from "./other";
import { Collectables_Orchestrion_List_Seasonal } from "./seasonal";
import { Collectables_Orchestrion_List_Mog_Station } from "./mogstation";

export const Collectables_Orchestrion_List = function(name, parent) {
    const data = new DataGroup(name, parent);
    data.columnConfig = [
        {
            header: 'Number',
            key: 'number',
            centered: true,
        },
        { header: 'Orchestrion Roll', key: 'name' },
        { header: 'Method Type', key: 'method' },
        { header: 'Unlock', key: 'unlock' }
    ];

    data.initializeSubGroups([
        Collectables_Orchestrion_List_Locales,
        Collectables_Orchestrion_List_Dungeons,
        Collectables_Orchestrion_List_Trials,
        Collectables_Orchestrion_List_Raids,
        Collectables_Orchestrion_List_Others,
        Collectables_Orchestrion_List_Seasonal,
        Collectables_Orchestrion_List_Mog_Station,
    ]);

    return data;
};
