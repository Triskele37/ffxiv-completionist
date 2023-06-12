import { SaveStoreService } from '../../save-store.service';
import { ChangeStore } from '../ChangeStore';

import { migrateOrchestrion } from './orchestrion';
import { migrateFish } from './fish';

export function migrateTo_1_0_3(svcSaveStore: SaveStoreService): void {
    const store = new ChangeStore(svcSaveStore, '1.0.3');

    migrateOrchestrion(store);
    migrateFish(store);

    //TODO gotta replace moved group bookmarks?

    store.write();
}

function removeOldBeastTribeBookmarks() {
    //TODO:
}
