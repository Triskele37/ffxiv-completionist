import { SaveStoreService } from '../../save-store.service';
import { ChangeStore } from '../ChangeStore';

import { migrateAchievements } from './achievement';
import { migrateDuties } from './duty';
import { migrateQuests } from './quest';
import { migrateLevequests } from './levequest';
import { migrateMounts } from './mount';

export function migrateTo_1_0_5(svcSaveStore: SaveStoreService): void {
    const store = new ChangeStore(svcSaveStore, '1.0.5');

    migrateAchievements(store);
    migrateDuties(store);
    migrateQuests(store);
    migrateLevequests(store);
    migrateMounts(store);

    store.write();
}
