import { ConfigStoreService } from '@service/store/config-store.service';

import { SaveStoreService } from '../../save-store.service';
import { ChangeStore } from '../ChangeStore';

import { migrateRoleQuests } from './role-quests';
import { migrateStoryRecipes } from './story-recipes';
import { migrateAdventurePlate } from './adventure-plate';

export function migrateTo_1_0_1(svcConfigStore: ConfigStoreService, svcSaveStore: SaveStoreService): void {
    const store = new ChangeStore(svcConfigStore, svcSaveStore, '1.0.1');

    migrateRoleQuests(store);
    migrateStoryRecipes(store);
    migrateAdventurePlate(store);

    store.moveTask(
        'overall.logs.gathering.gathering-log.logging.level.56-60',
        'overall.logs.gathering.gathering-log.logging.level.61-65',
        11
    );

    store.deleteTask('overall.duty.dutyraid-finder.trials.arr', 3);

    store.write();
}
