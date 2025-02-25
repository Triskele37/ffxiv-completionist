import { SaveStoreService } from '../../save-store.service';
import { ChangeStore } from '../ChangeStore';

import { migrateQuests } from './quest';

export function migrateTo_1_0_5(svcSaveStore: SaveStoreService): void {
    const store = new ChangeStore(svcSaveStore, '1.0.5');

    migrateQuests(store);

    store.write();
}
