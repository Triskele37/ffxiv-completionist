import { data } from '../../../../data';
import { importCallback } from './utils';

const collectables = data.sg('Collectables');

export const CollectablesSection = {
    name: "Collectables",
    tabs: [
        {
            title: "Aesthetician",
            importCallback: importCallback(1, [collectables.sg('Aesthetician')]),
        },
        {
            title: "Emotes",
            importCallback: importCallback(1, [collectables.sg('Emotes')]),
        },
        {
            title: "Minions",
            importCallback: importCallback(1, [collectables.sg('Minion Guide')]),
        },
        {
            title: "Mounts & Barding",
            importCallback: importCallback(1, [
                collectables.sg('Mount Guide'),
                collectables.sg('Barding'),
            ]),
        },
        {
            title: "Orchestrion",
            importCallback: importCallback(2, [collectables.sg('Orchestrion List')]),
        },
        {
            title: "Triple Triad Cards",
            importCallback: importCallback(1, [collectables.sg('Triple Triad Card List')], (isMatch, task, columns) => {
                if(isMatch) return true;
                if(task.name === columns[1].replace(' Card', '')) return true;
                return false;
            }),
        },
        {
            title: "Triple Triad Opponents",
            importCallback: importCallback(2, [collectables.sg('Triple Triad Opponents')]),
        },
    ]
};
