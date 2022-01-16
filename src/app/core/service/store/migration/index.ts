import { SaveStoreService } from '../save-store.service';
import { migrate_5_5_to_5_58 } from './5_5-5_58';

export function migrateData(svcSaveStore: SaveStoreService): void {
    const version = svcSaveStore.store.get('version');

    // Migrate based on current store version
    // Must flow to each migration for multi-version jumps
    if(version === '0.5.5') migrate_5_5_to_5_58(svcSaveStore);

    if(!version) {
        console.log('No version found, setting to current');
        svcSaveStore.store.set('version', '0.5.58');
    }
}
