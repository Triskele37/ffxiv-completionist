import { SaveStoreService } from '../../save-store.service';
import { ChangeStore } from '../ChangeStore';

import { migrateRoleQuests } from './role-quests';

export function migrateTo_1_0_1(svcSaveStore: SaveStoreService): void {
    const store = new ChangeStore(svcSaveStore, '1.0.1');

    migrateRoleQuests(store);

    store.write();
}
