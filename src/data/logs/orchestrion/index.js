import { DataGroup } from "../../DataGroup";

import { Logs_Orchestrion_List_Locales_I } from "./locales-i";
import { Logs_Orchestrion_List_Locales_II } from "./locales-ii";
import { Logs_Orchestrion_List_Dungeons } from "./dungeons";
import { Logs_Orchestrion_List_Trials } from "./trials";
import { Logs_Orchestrion_List_Raids_I } from "./raids-i";
import { Logs_Orchestrion_List_Raids_II } from "./raids-ii";
import { Logs_Orchestrion_List_Ambient } from "./ambient";
import { Logs_Orchestrion_List_Others } from "./other";
import { Logs_Orchestrion_List_Seasonal } from "./seasonal";
import { Logs_Orchestrion_List_Mog_Station } from "./mogstation";

export const Logs_Orchestrion_List = function(parent) {
    const data = new DataGroup("Orchestrion List", parent);
    data.name_fr = "Orchestrion";

    data.columnConfig = [
        {
            header: 'Number',
            key: 'number',
            centered: true,
        },
        { header: 'Orchestrion Roll', key: 'name' },
        { header: 'Source', key: 'source' },
        { header: 'Additional Information', key: 'additional' },
        { header: 'Patch', key: 'patch', filterable: true },
    ];

    data.initializeSubGroups([
        Logs_Orchestrion_List_Locales_I,
        Logs_Orchestrion_List_Locales_II,
        Logs_Orchestrion_List_Dungeons,
        Logs_Orchestrion_List_Trials,
        Logs_Orchestrion_List_Raids_I,
        Logs_Orchestrion_List_Raids_II,
        Logs_Orchestrion_List_Ambient,
        Logs_Orchestrion_List_Others,
        Logs_Orchestrion_List_Seasonal,
        Logs_Orchestrion_List_Mog_Station,
    ]);

    return data;
};
