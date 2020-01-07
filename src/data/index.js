import { FATEs } from './fate';
import { GatheringLogs } from './gathering-log';
import { Multiplayer } from './multiplayer';

export const data = [
    require('./achievement'),
    require('./collectable'),
    require('./crafting-log'),
    require('./dow-dom-log'),
    FATEs,
    GatheringLogs,
    require('./leve'),
    Multiplayer,
    require('./quest')
];
