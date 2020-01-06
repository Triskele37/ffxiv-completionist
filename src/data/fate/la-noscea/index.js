import { EasternLaNosceaFATEs } from './eastern-la-noscea';
import { LowerLaNosceaFATEs } from './lower-la-noscea';
import { MiddleLaNosceaFATEs } from './middle-la-noscea';
import { OuterLaNosceaFATEs } from './outer-la-noscea';
import { UpperLaNosceaFATEs } from './upper-la-noscea';
import { WesternLaNosceaFATEs } from './western-la-noscea';

export const LaNosceaFATEs = {
    name: 'La Noscea',
    subGroups: [
        EasternLaNosceaFATEs,
        LowerLaNosceaFATEs,
        MiddleLaNosceaFATEs,
        OuterLaNosceaFATEs,
        UpperLaNosceaFATEs,
        WesternLaNosceaFATEs
    ]
};
