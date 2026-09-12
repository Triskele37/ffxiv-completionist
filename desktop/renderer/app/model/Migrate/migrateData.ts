import type { ConfigStoreService } from '@service/store/config-store.service';
import type { ElectronService } from '@service/electron/electron.service';
import type { SaveStoreService } from '@service/store/save-store.service';

import { migrate } from './migrate';

/**
 * Migrations based on current store version
 * - ChangeStore updates the version each migration step
 * */
export function migrateData(
    svcConfigStore: ConfigStoreService,
    svcElectron: ElectronService,
    svcSaveStore: SaveStoreService,
): void {
    const currentVersion = svcElectron.getVersion();
    const getVer = () => svcSaveStore.get('version');

    if(!getVer()) {
        console.log('No version found, setting to current');
        svcSaveStore.set('version', currentVersion);
        return;
    }

    let finishedMigrating = false;
    while(!finishedMigrating) {
        const saveVersion = getVer(); // get each loop
        const migration = svcElectron.getMigration(saveVersion);

        if(migration) {
            migrate(svcConfigStore, svcSaveStore, migration);
        }
        else {
            finishedMigrating = true;
        }
    }

    if(getVer() !== currentVersion) {
        console.error('Unsupported version', getVer());
        svcSaveStore.set('version', currentVersion);
    }
}
