import { SaveStoreService } from '../../save-store.service';
import { ChangeStore } from '../ChangeStore';

import { migrateAchievements } from './achievement';
import { migrateDuties } from './duty';
import { migrateQuests } from './quest';
import { migrateLevequests } from './levequest';
import { migrateMinions } from './minion';
import { migrateMounts } from './mount';
import { migrateOrchestrions } from './orchestrion';

export function migrateTo_1_0_5(svcSaveStore: SaveStoreService): void {
    const store = new ChangeStore(svcSaveStore, '1.0.5');

    migrateAchievements(store);
    migrateDuties(store);
    migrateQuests(store);
    migrateLevequests(store);
    migrateMinions(store);
    migrateMounts(store);
    migrateOrchestrions(store);

    store.write();
}
