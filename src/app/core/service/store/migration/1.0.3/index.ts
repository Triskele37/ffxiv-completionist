import { SaveStoreService } from '../../save-store.service';
import { ChangeStore } from '../ChangeStore';

import { migrateAchievements } from './achievement';
import { migrateQuests } from './quests';
import { migrateCraftingLog } from './crafting-log';
import { migrateGatheringLog } from './gathering-log';
import { migrateFish } from './fish';
import { migrateOrchestrion } from './orchestrion';

export function migrateTo_1_0_3(svcSaveStore: SaveStoreService): void {
    const store = new ChangeStore(svcSaveStore, '1.0.3');

    migrateAchievements(store);
    migrateQuests(store);
    migrateCraftingLog(store);
    migrateGatheringLog(store);
    migrateFish(store);
    migrateOrchestrion(store);

    store.write();
}

//TODO: update store to automatically fix bookmarks with group/task actions

function removeOldBeastTribeBookmarks() {
    //TODO: fix for old tribes not going through bookmark migration
}
