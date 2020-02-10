import { data } from '../../../../data';
import { importCallback } from './utils';

const levequests = data.sg('Quests').sg('Levequests');

export const LeveSection = {
    name: "Leves",
    tabs: [
        {
            title: "BattlecraftGC Leves",
            importCallback: importCallback(1, [levequests.sg('Battlecraft')], (isMatch, task, columns) => {
                if(isMatch) return true;

                if(task.name === columns[1] + ' (L)') return true;
                if(task.name === columns[1].replace('Wihither', 'Whither')) return true;

                return false;
            }),
        },
        {
            title: "Fieldcraft Leves",
            importCallback: importCallback(2, [
                levequests.sg('Botany'),
                levequests.sg('Fishing'),
                levequests.sg('Mining'),
            ], (isMatch, task, columns) => {
                return isMatch || (task.name === columns[2] + ' (L)');
            }),
        },
        {
            title: "Tradecraft Leves",
            importCallback: importCallback(1, [
                levequests.sg('Alchemy'),
                levequests.sg('Armoring'),
                levequests.sg('Blacksmithing'),
                levequests.sg('Carpentry'),
                levequests.sg('Cooking'),
                levequests.sg('Goldsmithing'),
                levequests.sg('Leatherworking'),
                levequests.sg('Clothcrafting'),
            ], (isMatch, task, columns) => {
                return (task.level === columns[2]) && (isMatch || (task.name === columns[1] + ' (L)'));
            }),
        },
    ]
};
