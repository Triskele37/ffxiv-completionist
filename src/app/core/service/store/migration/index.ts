import { SaveStoreService } from '../save-store.service';
import { migrateTo_0_5_58 } from './0.5.58';
import { migrateTo_1_0_0 } from './1.0.0';
import { migrateTo_1_0_1 } from './1.0.1';
import { migrateTo_1_0_2 } from './1.0.2';
import { migrateTo_1_0_3 } from './1.0.3';
import { migrateTo_1_0_4 } from './1.0.4';

export function migrateData(svcSaveStore: SaveStoreService): void {
    // Migrate based on current store version
    // Must flow to each migration for multi-version jumps
    if(svcSaveStore.get('version') === '0.5.5') migrateTo_0_5_58(svcSaveStore);
    if(svcSaveStore.get('version') === '0.5.58') migrateTo_1_0_0(svcSaveStore);
    if(svcSaveStore.get('version') === '1.0.0') migrateTo_1_0_1(svcSaveStore);
    if(svcSaveStore.get('version') === '1.0.1') migrateTo_1_0_2(svcSaveStore);
    if(svcSaveStore.get('version') === '1.0.2') migrateTo_1_0_3(svcSaveStore);
    if(svcSaveStore.get('version') === '1.0.3') migrateTo_1_0_4(svcSaveStore);

    if(!svcSaveStore.get('version')) {
        console.log('No version found, setting to current');
        svcSaveStore.set('version', '1.0.4');
    }
}
