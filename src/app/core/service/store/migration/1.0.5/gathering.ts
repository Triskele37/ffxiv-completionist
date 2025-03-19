import { ChangeStore } from '@service/store/migration/ChangeStore';

const GLOG = 'overall.logs.gathering.gathering-log';

/**
 * Gathering log changes from Generated Resources
 * - Remove level- from keys
 */
export function migrateGathering(store: ChangeStore): void {
    migrateGatherMethod(store, 'mining');
    migrateGatherMethod(store, 'quarrying');
    migrateGatherMethod(store, 'logging');
    migrateGatherMethod(store, 'harvesting');
}

function migrateGatherMethod(store: ChangeStore, method: string): void {
    const COLLECTABLES = `${GLOG}.${method}.collectables`;
    const withoutLevel = (set: string): [string, string] => [
        `${COLLECTABLES}.level-${set}`,
        `${COLLECTABLES}.${set}`
    ];

    store.moveGroup(...withoutLevel('50-70'));
    store.moveGroup(...withoutLevel('71-80'));
    store.moveGroup(...withoutLevel('81-90'));
}
