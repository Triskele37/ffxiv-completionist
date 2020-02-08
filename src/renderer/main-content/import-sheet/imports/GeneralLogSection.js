import { data } from '../../../../data';
import { importCallback } from './utils';

const generalLogs = data.sg('General Logs');
const blueMage = generalLogs.sg('Blue Mage');

export const GeneralLogSection = {
    name: "General Logs",
    tabs: [
        {
            title: "Blue Magic Spellbook",
            importCallback: importCallback(2, [blueMage.sg('Spellbook')]),
        },
        {
            title: "Blue Mage Log",
            importCallback: importCallback(3, [blueMage.sg('Log')]),
        },
        {
            title: "The Masked Carnivale",
            importCallback: importCallback(2, [blueMage.sg('The Masked Carnivale')]),
        },
        {
            title: "Hunting Logs",
            importCallback: importCallback(1, [generalLogs.sg('Hunting Log')]),
        },
        {
            title: "Sightseeing Logs",
            importCallback: importCallback(2, [generalLogs.sg('Sightseeing Log')]),
        },
    ]
};
