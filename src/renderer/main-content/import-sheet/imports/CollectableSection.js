import { data } from '../../../../data';
import { importCallback } from './utils';

export const CollectablesSection = {
    name: "Collectables",
    tabs: [
        {
            title: "Aesthetician",
            importCallback: importCallback(1, [data.Collectables.Aesthetician]),
        },
        {
            title: "Emotes",
            importCallback: importCallback(1, [data.Collectables.Emotes]),
        },
        {
            title: "Minions",
            importCallback: importCallback(1, [data.Collectables.Minions]),
        },
        {
            title: "Mounts & Barding",
            importCallback: importCallback(1, [
                data.Collectables.Mounts,
                data.Collectables.Barding
            ]),
        },
        {
            title: "Orchestrion",
            importCallback: importCallback(2, [data.Collectables.Orchestrion]),
        },
        {
            title: "Triple Triad Cards",
            importCallback: importCallback(1, [data.Collectables.Triple_Triad_Cards]),
        },
        {
            title: "Triple Triad Opponents",
            importCallback: importCallback(2, [data.Collectables.Triple_Triad_Opponents]),
        },
    ]
};
