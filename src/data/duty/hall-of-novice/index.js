import { HallOfNoviceTank } from './tank';
import { HallOfNoviceDPS } from './dps';
import { HallOfNoviceHealer } from './healer';

export const HallOfNovice = {
    name: "Hall of Novice",
	subGroups: [
        HallOfNoviceTank,
        HallOfNoviceDPS,
        HallOfNoviceHealer,
    ]
};
