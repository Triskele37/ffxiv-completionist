import { data } from '../../../../data';
import { importCallback } from './utils';

export const CollectableSection = {
    name: "Collectables",
    tabs: [
        {
            title: "Aesthetician",
            importCallback: importCallback(1, [data.Collectable.Aesthetician]),
        },
        {
            title: "Emotes",
            importCallback: importCallback(1, [data.Collectable.Emotes]),
        },
        {
            title: "Minions",
            importCallback: importCallback(1, [data.Collectable.Minions]),
        },
        {
            title: "Mounts & Barding",
            importCallback: importCallback(1, [
                data.Collectable.Mounts,
                data.Collectable.Barding
            ]),
        },
        {
            title: "Orchestrion",
            importCallback: importCallback(2, [data.Collectable.Orchestrion]),
        },
        {
            title: "Triple Triad Cards",
            importCallback: importCallback(1, [data.Collectable.TripleTriadCards]),
        },
        {
            title: "Triple Triad Opponents",
            importCallback: importCallback(2, [data.Collectable.TripleTriadOpponents]),
        },
    ]
};
