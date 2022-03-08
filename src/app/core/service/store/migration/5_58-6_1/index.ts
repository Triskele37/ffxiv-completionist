import { SaveStoreService } from '../../save-store.service';
import { ChangeStore } from '../ChangeStore';

import { migrate_6_1_fate } from './fate';
import { migrate_6_1_housing } from './housing';

const doVolatile = false || process.env.NODE_ENV !== 'development';

export function migrate_5_58_to_6_1(svcSaveStore: SaveStoreService): void {
    const store = new ChangeStore(svcSaveStore, '1.0.0');

    // Renamed key
    store.moveGroup('character.achievements', 'character.achievement');

    // Renamed in api
    const ROLE = 'duty.quests.class--job.role';
    store.moveGroup(`${ROLE}.magical-dps`, `${ROLE}.magical-ranged-dps`);

    store.deleteTask('logs.crafting-log.carpenter.level-based.46-50', 1941);
    store.deleteTask('logs.crafting-log.goldsmith.level-based.46-50', 2139);
    store.deleteTask('logs.crafting-log.weaver.level-based.41-45', 2837);

    // Moved
    store.moveGroup('travel.shared-fate', 'travel.shared-fate.shb');

    // Sections where ids have to be completely re-mapped
    if(doVolatile) {
        migrate_6_1_fate(store);
        migrate_6_1_housing(store);
    }

    store.write();
}
