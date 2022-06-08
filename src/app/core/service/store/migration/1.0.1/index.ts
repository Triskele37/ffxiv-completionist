import { SaveStoreService } from '../../save-store.service';
import { ChangeStore } from '../ChangeStore';

import { migrateRoleQuests } from './role-quests';
import { migrateStoryRecipes } from './story-recipes';

export function migrateTo_1_0_1(svcSaveStore: SaveStoreService): void {
    const store = new ChangeStore(svcSaveStore, '1.0.1');

    migrateRoleQuests(store);
    migrateStoryRecipes(store);

    store.moveTask(
        'logs.gathering.gathering-log.logging.level.56-60',
        'logs.gathering.gathering-log.logging.level.61-65',
        11
    );

    store.deleteTask('duty.dutyraider-finder.trials.arr', 3);

    store.write();
}
