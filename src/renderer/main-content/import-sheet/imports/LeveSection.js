import { data } from '../../../../data';
import { importCallback } from './utils';

export const LeveSection = {
    name: "Leves",
    tabs: [
        {
            title: "BattlecraftGC Leves",
            importCallback: importCallback(1, [data.Quests.Levequests.Battlecraft], (isMatch, task, columns) => {
                return isMatch || (task.name === columns[1] + ' (L)');
            }),
        },
        {
            title: "Fieldcraft Leves",
            importCallback: importCallback(2, [
                data.Quests.Levequests.Botany,
                data.Quests.Levequests.Fishing,
                data.Quests.Levequests.Mining,
            ], (isMatch, task, columns) => {
                return isMatch || (task.name === columns[2] + ' (L)');
            }),
        },
        {
            title: "Tradecraft Leves",
            importCallback: importCallback(1, [
                data.Quests.Levequests.Alchemy,
                data.Quests.Levequests.Armoring,
                data.Quests.Levequests.Blacksmithing,
                data.Quests.Levequests.Carpentry,
                data.Quests.Levequests.Cooking,
                data.Quests.Levequests.Goldsmithing,
                data.Quests.Levequests.Leatherworking,
                data.Quests.Levequests.Clothcrafting,
            ], (isMatch, task, columns) => {
                return (task.level === columns[2]) && (isMatch || (task.name === columns[1] + ' (L)'));
            }),
        },
    ]
};
