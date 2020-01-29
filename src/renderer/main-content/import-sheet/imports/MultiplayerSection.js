import { data } from '../../../../data';
import { importCallback } from './utils';

export const MultiplayerSection = {
    name: "Multiplayer",
    tabs: [
        {
            title: "Dungeons",
            importCallback: importCallback(3, [data.Duty.Dungeons]),
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
            importCallback: importCallback(2, [data.Duty.Hunts]),
        },
    ]
};
