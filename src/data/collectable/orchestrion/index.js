import { DataGroup } from "../../DataGroup";

import { Collectables_Orchestrion_List_Locales_I } from "./locales-i";
import { Collectables_Orchestrion_List_Locales_II } from "./locales-ii";
import { Collectables_Orchestrion_List_Dungeons } from "./dungeons";
import { Collectables_Orchestrion_List_Trials } from "./trials";
import { Collectables_Orchestrion_List_Raids_I } from "./raids-i";
import { Collectables_Orchestrion_List_Raids_II } from "./raids-ii";
import { Collectables_Orchestrion_List_Ambient } from "./ambient";
import { Collectables_Orchestrion_List_Others } from "./other";
import { Collectables_Orchestrion_List_Seasonal } from "./seasonal";
import { Collectables_Orchestrion_List_Mog_Station } from "./mogstation";

export const Collectables_Orchestrion_List = function(parent) {
    const data = new DataGroup("Orchestrion List", parent);
    data.name_fr = "Orchestrion";

    data.columnConfig = [
        {
            header: 'Number',
            key: 'number',
            centered: true,
        },
        { header: 'Orchestrion Roll', key: 'name' },
        { header: 'Method Type', key: 'methodType' },
        { header: 'Method', key: 'method' },
        { header: 'Patch', key: 'patch', filterable: true },
    ];

    data.initializeSubGroups([
        Collectables_Orchestrion_List_Locales_I,
        Collectables_Orchestrion_List_Locales_II,
        Collectables_Orchestrion_List_Dungeons,
        Collectables_Orchestrion_List_Trials,
        Collectables_Orchestrion_List_Raids_I,
        Collectables_Orchestrion_List_Raids_II,
        Collectables_Orchestrion_List_Ambient,
        Collectables_Orchestrion_List_Others,
        Collectables_Orchestrion_List_Seasonal,
        Collectables_Orchestrion_List_Mog_Station,
    ]);

    return data;
};
