import { SaveStoreService } from '../../save-store.service';
import { ChangeStore } from '../ChangeStore';

import { migrateFates } from './fate';
import { migrateEmotes } from './emotes';
import { migratePaladinArms } from './paladin';
import { migrateHousing } from './housing';
import { migratePorters } from './porters';
import { migrateAetherytes } from './aetherytes';
import { migrateGatheringLogs } from './gathering-log';
import { migrateAetherCurrents } from './aether-current';

export function migrateTo_1_0_0(svcSaveStore: SaveStoreService): void {
    const store = new ChangeStore(svcSaveStore, '1.0.0');

    // Renamed key
    store.moveGroup('character.achievements', 'character.achievement');
    store.moveGroup('duty.quests.beast-tribe.vanu-vanu', 'duty.quests.beast-tribe.vanu');

    // Renamed in api
    const ROLE = 'duty.quests.class--job.role';
    store.moveGroup(`${ROLE}.magical-dps`, `${ROLE}.magical-ranged-dps`);

    // 3 duplicate recipes, clear in-case of unintended markings
    store.deleteTask('logs.crafting-log.carpenter.level-based.46-50', 1941);
    store.deleteTask('logs.crafting-log.goldsmith.level-based.46-50', 2139);
    store.deleteTask('logs.crafting-log.weaver.level-based.41-45', 2837);

    // Expanded with expansion
    store.moveGroup('duty.trust', 'duty.trust.shb');
    store.moveGroup('travel.shared-fate', 'travel.shared-fate.shb');

    // Combined Spiders/Webs facepaint
    store.deleteTask('character.character.aesthetician', 27);

    // Removed FATE bosses from hunt
    store.deleteTask('duty.dutyraid-finder.the-hunt.shb', 31);
    store.deleteTask('duty.dutyraid-finder.the-hunt.shb', 32);

    // Large-scale changes by group
    migrateFates(store);
    migrateEmotes(store);
    migratePaladinArms(store);
    migrateHousing(store);
    migratePorters(store);
    migrateAetherytes(store);
    migrateGatheringLogs(store);
    migrateAetherCurrents(store);

    // Fix "defaultCompletion": "X" being ignored
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
