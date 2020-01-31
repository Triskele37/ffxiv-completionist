import { data } from '../../../../data';
import { importCallback } from './utils';

export const GeneralLogSection = {
    name: "General Logs",
    tabs: [
        {
            title: "Blue Mage Spellbook",
            importCallback: importCallback(2, [data.General_Logs.Blue_Mage.Spellbook]),
        },
        {
            title: "Blue Mage Log",
            importCallback: importCallback(3, [data.General_Logs.Blue_Mage.Log]),
        },
        {
            title: "The Masked Carnivale",
            importCallback: importCallback(2, [data.General_Logs.Blue_Mage.The_Masked_Carnivale]),
        },
        {
            title: "Hunting Logs",
            importCallback: importCallback(1, [data.General_Logs.Hunting_Log]),
        },
        {
            title: "Sightseeing Logs",
            importCallback: importCallback(2, [data.General_Logs.Sightseeing_Log]),
        },
    ]
};
