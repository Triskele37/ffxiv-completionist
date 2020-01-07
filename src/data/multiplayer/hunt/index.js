import { ARRHunts } from './ARR';
import { HWHunts } from './HW';
import { SBHunts } from './SB';
import { ShBHunts } from './ShB'

export const Hunts = {
    name: 'Hunt',
    subGroups: [
        ARRHunts,
        HWHunts,
        SBHunts,
        ShBHunts
    ]
};
