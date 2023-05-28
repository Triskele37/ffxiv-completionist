import { SaveStoreService } from '../../save-store.service';
import { ChangeStore } from '../ChangeStore';

export function migrateTo_1_0_3(svcSaveStore: SaveStoreService): void {
    const store = new ChangeStore(svcSaveStore, '1.0.3');

    store.write();
}
