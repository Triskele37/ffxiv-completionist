import type { ConfigStoreService } from '@service/store/config-store.service';

import type { SaveStoreService } from '../../save-store.service';
import { ChangeStore } from '../ChangeStore';

import { migrateVCDungeons } from './vc-dungeon';

export function migrateTo_1_0_4(svcConfigStore: ConfigStoreService, svcSaveStore: SaveStoreService): void {
    const store = new ChangeStore(svcConfigStore, svcSaveStore, '1.0.4');

    migrateVCDungeons(store);

    store.write();
}
