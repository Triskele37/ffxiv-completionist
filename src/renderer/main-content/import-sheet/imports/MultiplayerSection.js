import { data } from '../../../../data';
import { importCallback } from './utils';

const duty = data.sg('Duty');

export const MultiplayerSection = {
    name: "Multiplayer",
    tabs: [
        {
            title: "Dungeons",
            importCallback: importCallback(3, [
                duty.sg('Dungeons'),
                duty.sg('Guildhests'),
            ], (isMatch, task, columns) => {
                if(isMatch) return true;

                if(task.name === 'Hero on the Half Shell' && columns[3] === 'Hero on the Halfshell') return true;

                return false;
            }),
        },
        {
            title: "Raids",
            importCallback: importCallback(3, [duty.sg('Raids')]),
        },
        {
            title: "Trials",
            importCallback: importCallback(3, [duty.sg('Trials')]),
        },
        {
            title: "The Hunt",
            importCallback: importCallback(2, [duty.sg('The Hunt')]),
        },
    ]
};
