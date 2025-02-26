import { SaveStoreService } from '../../save-store.service';
import { ChangeStore } from '../ChangeStore';

import { migrateDuties } from './duty';
import { migrateQuests } from './quest';
import { migrateLevequests } from './levequest';

export function migrateTo_1_0_5(svcSaveStore: SaveStoreService): void {
    const store = new ChangeStore(svcSaveStore, '1.0.5');

    migrateDuties(store);
    migrateQuests(store);
    migrateLevequests(store);

    store.write();
}
