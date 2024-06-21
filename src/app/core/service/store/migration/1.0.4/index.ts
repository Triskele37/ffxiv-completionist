import { SaveStoreService } from '../../save-store.service';
import { ChangeStore } from '../ChangeStore';

import { migrateVCDungeons } from './vc-dungeon';

export function migrateTo_1_0_4(svcSaveStore: SaveStoreService): void {
    const store = new ChangeStore(svcSaveStore, '1.0.4');

    migrateVCDungeons(store);

    store.write();
}
