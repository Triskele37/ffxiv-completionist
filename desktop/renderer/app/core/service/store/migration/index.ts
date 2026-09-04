import type { ConfigStoreService } from '@service/store/config-store.service';

import type { SaveStoreService } from '../save-store.service';
import { migrateTo_0_5_58 } from './0.5.58';
import { migrateTo_1_0_0 } from './1.0.0';
import { migrateTo_1_0_1 } from './1.0.1';
import { migrateTo_1_0_2 } from './1.0.2';
import { migrateTo_1_0_3 } from './1.0.3';
import { migrateTo_1_0_4 } from './1.0.4';
import { migrateTo_1_0_5 } from './1.0.5';
import { migrateTo_1_0_6 } from './1.0.6';

/**
 * Migrations based on current store version
 * - Must flow through all for multi-version jumps
 * - ChangeStore updates the version each migration step
 * */
export function migrateData(svcConfigStore: ConfigStoreService, svcSaveStore: SaveStoreService): void {
    if(svcSaveStore.get('version') === '0.5.5') migrateTo_0_5_58(svcConfigStore, svcSaveStore);
    if(svcSaveStore.get('version') === '0.5.58') migrateTo_1_0_0(svcConfigStore, svcSaveStore);
    if(svcSaveStore.get('version') === '1.0.0') migrateTo_1_0_1(svcConfigStore, svcSaveStore);
    if(svcSaveStore.get('version') === '1.0.1') migrateTo_1_0_2(svcConfigStore, svcSaveStore);
    if(svcSaveStore.get('version') === '1.0.2') migrateTo_1_0_3(svcConfigStore, svcSaveStore);
    if(svcSaveStore.get('version') === '1.0.3') migrateTo_1_0_4(svcConfigStore, svcSaveStore);
    if(svcSaveStore.get('version') === '1.0.4') migrateTo_1_0_5(svcConfigStore, svcSaveStore);
    if(svcSaveStore.get('version') === '1.0.5') migrateTo_1_0_6(svcConfigStore, svcSaveStore);

    if(!svcSaveStore.get('version')) {
        console.log('No version found, setting to current');
        svcSaveStore.set('version', '1.0.6');
    }
}
