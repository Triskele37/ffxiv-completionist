import { LowerLaNosceaFATEs } from './lower-la-noscea';
import { MiddleLaNosceaFATEs } from './middle-la-noscea';
import { UpperLaNosceaFATEs } from './upper-la-noscea';
import { WesternLaNosceaFATEs } from './western-la-noscea';
import { EasternLaNosceaFATEs } from './eastern-la-noscea';
import { OuterLaNosceaFATEs } from './outer-la-noscea';

export const LaNosceaFATEs = {
    name: 'La Noscea',
    subGroups: [
        LowerLaNosceaFATEs,
        MiddleLaNosceaFATEs,
        UpperLaNosceaFATEs,
        WesternLaNosceaFATEs,
        EasternLaNosceaFATEs,
        OuterLaNosceaFATEs
    ]
};
