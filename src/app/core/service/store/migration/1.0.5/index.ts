import { ConfigStoreService } from '@service/store/config-store.service';

import { SaveStoreService } from '../../save-store.service';
import { ChangeStore } from '../ChangeStore';

import { migrateAchievements } from './achievement';
import { migrateAdventurePlate } from './adventure-plate';
import { migrateAesthetician } from './aesthetician';
import { migrateCrafting } from './crafting';
import { migrateDuties } from './duty';
import { migrateFashionAccessories } from './fashion-accessories';
import { migrateFates } from './fate';
import { migrateQuests } from './quest';
import { migrateLevequests } from './levequest';
import { migrateMinions } from './minion';
import { migrateMounts } from './mount';
import { migrateOrchestrions } from './orchestrion';
import { migrateSightseeing } from './sightseeing';
import { migrateTripleTriadCards } from './triple-triad';

export function migrateTo_1_0_5(svcConfigStore: ConfigStoreService, svcSaveStore: SaveStoreService): void {
    const store = new ChangeStore(svcConfigStore, svcSaveStore, '1.0.5');

    migrateStartingClass(store);

    store.moveGroup(
        'overall.character.character.tribal-relations',
        'overall.character.character.societal-relations'
    );

    migrateAchievements(store);
    migrateAdventurePlate(store);
    migrateAesthetician(store);
    migrateCrafting(store);
    migrateDuties(store);
    migrateFashionAccessories(store);
    migrateFates(store);
    migrateQuests(store);
    migrateLevequests(store);
    migrateMinions(store);
    migrateMounts(store);
    migrateOrchestrions(store);
    migrateSightseeing(store);
    migrateTripleTriadCards(store);

    store.write();
}

/**
 * Move starting class from config to save
 */
function migrateStartingClass(store: ChangeStore): void {
    const startingClass = store.svcConfigStore.get('starting-class');
    if(startingClass) store.svcSaveStore.set('starting-class', startingClass);
    store.svcConfigStore.delete('starting-class');
}
