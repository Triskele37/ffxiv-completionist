import { SaveStoreService } from '../../save-store.service';
import { ChangeStore } from '../ChangeStore';

import { migrateAchievements } from './achievement';
import { migrateAesthetician } from './aesthetician';
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

export function migrateTo_1_0_5(svcSaveStore: SaveStoreService): void {
    const store = new ChangeStore(svcSaveStore, '1.0.5');

    store.moveGroup(
        'overall.character.character.tribal-relations',
        'overall.character.character.allied-society-relations'
    );

    // Glasses removed from fashion acc
    store.deleteTask('overall.character.fashion-accessories', 25);
    store.deleteTask('overall.character.fashion-accessories', 26);
    store.deleteTask('overall.character.fashion-accessories', 22);
    store.deleteTask('overall.character.fashion-accessories', 32);

    migrateAchievements(store);
    migrateAesthetician(store);
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
