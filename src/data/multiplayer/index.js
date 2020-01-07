import { Dungeons } from './dungeon';
import { Raids } from './raid';
import { Trials } from './trial';
import { Hunts } from './hunt';

export const Multiplayer = {
    name: 'Multiplayer',
    subGroups: [
        Dungeons,
        Raids,
        Trials,
        Hunts
    ]
};
