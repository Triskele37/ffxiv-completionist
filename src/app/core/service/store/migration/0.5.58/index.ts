import { ConfigStoreService } from '@service/store/config-store.service';

import { SaveStoreService } from '../../save-store.service';
import { ChangeStore } from '../ChangeStore';

import { migrateTitles } from './title';
import { migrateBarding } from './barding';
import { migrateEmotes } from './emote';
import { migrateSharedFate } from './shared-fate';

export function migrateTo_0_5_58(svcConfigStore: ConfigStoreService, svcSaveStore: SaveStoreService): void {
    const store = new ChangeStore(svcConfigStore, svcSaveStore, '0.5.58');

    // Fixing bug from last build
    store.changeKey('duty.quests.other', 'undefined', 'quasi-quests');

    // Class Starting Quest Fixes
    const classJob = 'duty.quests.class--job';
    store.changeKey(`${classJob}.disciple-of-war.pugilist`, 66069, 66068);
    store.changeKey(`${classJob}.disciple-of-war.marauder`, 65847, 65846);
    store.changeKey(`${classJob}.disciple-of-magic.thaumaturge`, 65881, 65880);
    store.changeKey(`${classJob}.disciple-of-magic.arcanist`, 65989, 65988);

    // Fixing mixup of final quest in starting questline
    const seventhUmbral = 'duty.quests.main-scenario.seventh-umbral-era';
    store.changeKey(`${seventhUmbral}.gridania`, 66209, 66210);
    store.changeKey(`${seventhUmbral}.uldah`, 66210, 66209);

    // Sections where ids have to be completely re-mapped
    if(process.env.NODE_ENV !== 'development') {
        migrateTitles(store);
        migrateBarding(store);
        migrateEmotes(store);
        migrateSharedFate(store);
    }

    //------------------------------------------------------------------ Custom Task Reformat
    const oldCustom = svcSaveStore.get('custom');

    // Perform once
    if(Array.isArray(oldCustom)) {
        // Update custom meta data
        const errorMeta = [];
        let highestId = 0;

        const customMeta = {};
        oldCustom.forEach((meta) => {
            if(meta.id === undefined) errorMeta.push(meta);
            else {
                if(meta.id > highestId) highestId = meta.id;
                customMeta[`x${meta.id}`] = { name: meta.name, notes: meta.notes };
            }
        });

        // Assign a new ID to meta created before 0.5.55b
        highestId++;
        errorMeta.forEach((meta, index) => {
            const newId = highestId + index;
            customMeta[`x${newId}`] = meta;
        });

        svcSaveStore.set('custom', customMeta);

        // Update custom flag storage
        const oldFlags: any = svcSaveStore.get('overall.custom');
        if(oldFlags.undefined) delete oldFlags.undefined;

        const customFlag = {};
        Object.keys(oldFlags).forEach((id) => {
            customFlag[`x${id}`] = oldFlags[id];
        });
        svcSaveStore.set('overall.custom', customFlag);
    }

    store.write();
}
