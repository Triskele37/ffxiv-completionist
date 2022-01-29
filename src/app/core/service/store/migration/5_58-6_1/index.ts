import { SaveStoreService } from '../../save-store.service';
import { ChangeStore } from '../ChangeStore';

import { migrate_6_1_fate } from './fate';

export function migrate_5_58_to_6_1(svcSaveStore: SaveStoreService): void {
    const store = new ChangeStore(svcSaveStore, '1.0.0');

    // Sections where ids have to be completely re-mapped
    if(process.env.NODE_ENV !== 'development') {
        migrate_6_1_fate(store);
    }

    store.write();
}
