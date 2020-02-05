import { data } from '../../../../data';
import { importCallback } from './utils';

export const MultiplayerSection = {
    name: "Multiplayer",
    tabs: [
        {
            title: "Dungeons",
            importCallback: importCallback(3, [
                data.Duty.Dungeons,
                data.Duty.Guildhests
            ], (isMatch, task, columns) => {
                if(isMatch) return true;

                if(task.name === 'Hero on the Half Shell' && columns[3] === 'Hero on the Halfshell') return true;

                return false;
            }),
        },
        {
            title: "Raids",
            importCallback: importCallback(3, [data.Duty.Raids]),
        },
        {
            title: "Trials",
            importCallback: importCallback(3, [data.Duty.Trials]),
        },
        {
            title: "The Hunt",
            importCallback: importCallback(2, [data.Duty.The_Hunt]),
        },
    ]
};
