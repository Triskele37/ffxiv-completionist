import { ARRDungeons } from './ARR';
import { HWDungeons } from './HW';
import { SBDungeons } from './SB';
import { ShBDungeons } from './ShB';

export const Dungeons = {
    name: 'Dungeon',
    subGroups: [
        ARRDungeons,
        HWDungeons,
        SBDungeons,
        ShBDungeons
    ]
};
