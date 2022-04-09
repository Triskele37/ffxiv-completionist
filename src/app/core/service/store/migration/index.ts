import { SaveStoreService } from '../save-store.service';
import { migrateTo_0_5_58 } from './0.5.58';
import { migrateTo_1_0_0 } from './1.0.0';

export function migrateData(svcSaveStore: SaveStoreService): void {
    const version = svcSaveStore.store.get('version');

    // Migrate based on current store version
    // Must flow to each migration for multi-version jumps
    if(version === '0.5.5') migrateTo_0_5_58(svcSaveStore);
    if(version === '0.5.58') migrateTo_1_0_0(svcSaveStore);

    if(!version) {
        console.log('No version found, setting to current');
        svcSaveStore.store.set('version', '1.0.0');
    }
}
