import { SaveStoreService } from '../../save-store.service';
import { ChangeStore } from '../ChangeStore';

import { migrate_6_1_fate } from './fate';
import { migrate_6_1_emotes } from './emotes';
import { migrate_6_1_paladin } from './paladin';
import { migrate_6_1_housing } from './housing';
import { migrate_6_1_gatheringLog } from './gathering-log';
import { migrate_6_1_aetherCurrent } from './aether-current';

export function migrate_5_58_to_6_1(svcSaveStore: SaveStoreService): void {
    const store = new ChangeStore(svcSaveStore, '1.0.0');

    // Renamed key
    store.moveGroup('character.achievements', 'character.achievement');
    store.moveGroup('duty.quests.beast-tribe.vanu-vanu', 'duty.quests.beast-tribe.vanu');

    // Renamed in api
    const ROLE = 'duty.quests.class--job.role';
    store.moveGroup(`${ROLE}.magical-dps`, `${ROLE}.magical-ranged-dps`);

    // 3 duplicate recipe errors
    store.deleteTask('logs.crafting-log.carpenter.level-based.46-50', 1941);
    store.deleteTask('logs.crafting-log.goldsmith.level-based.46-50', 2139);
    store.deleteTask('logs.crafting-log.weaver.level-based.41-45', 2837);

    // Moved
    store.moveGroup(
        'duty.trust',
        'duty.trust.shb'
    );

    store.moveGroup(
        'travel.shared-fate',
        'travel.shared-fate.shb'
    );

    // Combined Spiders/Webs facepaint
    store.deleteTask('character.character.aesthetician', 27);

    // Large-scale changes by group
    migrate_6_1_fate(store);
    migrate_6_1_emotes(store);
    migrate_6_1_paladin(store);
    migrate_6_1_housing(store);
    migrate_6_1_gatheringLog(store);
    migrate_6_1_aetherCurrent(store);

    diveForClear(store.newStore);

    store.write();
}

// Remove 'N' completion from every task in the store
function diveForClear(data) {
    Object.keys(data).forEach((key) => {
        if(data[key] === 'N') delete data[key];
        else if(typeof data[key] === 'object') {
            diveForClear(data[key]);
        }
    });
}
