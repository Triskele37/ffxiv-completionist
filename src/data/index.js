import { FATEs } from './fate';
import { GatheringLogs } from './gathering-log';
import { Duty } from './duty';
import { Quests } from './quest';

export const data = [
    require('./achievement'),
    require('./collectable'),
    require('./crafting-log'),
    require('./dow-dom-log'),
    FATEs,
    GatheringLogs,
    require('./leve'),
    Duty,
    Quests
];
