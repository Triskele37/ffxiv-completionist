import { data } from '../../../../data';
import { importCallback } from './utils';

export const GeneralLogSection = {
    name: "General Logs",
    tabs: [
        {
            title: "Blue Mage Spellbook",
            importCallback: importCallback(2, [data.Logs.BlueMage.Spellbook]),
        },
        {
            title: "Blue Mage Log",
            importCallback: importCallback(3, [data.Logs.BlueMage.Log]),
        },
        {
            title: "The Masked Carnivale",
            importCallback: importCallback(2, [data.Logs.BlueMage.TheMaskedCarnivale]),
        },
        {
            title: "Hunting Logs",
            importCallback: importCallback(1, [data.Logs.Hunting]),
        },
        {
            title: "Sightseeing Logs",
            importCallback: importCallback(2, [data.Logs.Sightseeing]),
        },
    ]
};
