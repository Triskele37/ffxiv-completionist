import { Logging } from './logging';
import { Harvesting } from './harvesting';
import { Mining } from './mining';
import { Quarrying } from './quarrying';

export const GatheringLogs = {
    name: 'Gathering',
    subGroups: [
        Logging,
        Harvesting,
        Mining,
        Quarrying,
        { name: 'FSH - Catch' },
        { name: 'FSH - Guide' }
    ]
};
