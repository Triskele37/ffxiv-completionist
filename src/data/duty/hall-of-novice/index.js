import { HallOfNoviceTank } from './tank';
import { HallOfNoviceDPS } from './dps';
import { HallOfNoviceHealer } from './healer';

export const HallOfNovice = function(parentStorageKey) {
    const storageKey = `${parentStorageKey}.hall-of-novice`;

    return {
        name: "Hall of Novice",
        storageKey,
    	subGroups: [
            HallOfNoviceTank(storageKey),
            HallOfNoviceDPS(storageKey),
            HallOfNoviceHealer(storageKey),
        ]
    };
};
