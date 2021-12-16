import { StoreService } from '../../store.service';
import { ChangeStore } from '../ChangeStore';

import { migrate_5_58_titles } from './title';
import { migrate_5_58_barding } from './barding';
import { migrate_5_58_emotes } from './emote';
import { migrate_5_58_shared_fate } from './shared-fate';

export function migrate_5_5_to_5_58(): void {
    const store = new ChangeStore('0.5.58');

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
        migrate_5_58_titles(store);
        migrate_5_58_barding(store);
        migrate_5_58_emotes(store);
        migrate_5_58_shared_fate(store);
    }

    //------------------------------------------------------------------ Custom Task Reformat
    const oldCustom = StoreService.pStore.get('custom');

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

        StoreService.pStore.set('custom', customMeta);

        // Update custom flag storage
        const oldFlags: any = StoreService.pStore.get('overall.custom');
        if(oldFlags.undefined) delete oldFlags.undefined;

        const customFlag = {};
        Object.keys(oldFlags).forEach((id) => {
            customFlag[`x${id}`] = oldFlags[id];
        });
        StoreService.pStore.set('overall.custom', customFlag);
    }

    store.write();
}
