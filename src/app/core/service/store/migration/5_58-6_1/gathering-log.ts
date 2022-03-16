import { ChangeStore } from '@service/store/migration/ChangeStore';

/** Reorganize Gathering Special Sections
 * */
export function migrate_6_1_gatheringLog(store: ChangeStore): void {
    store.moveGroup('logs.gathering-log', 'logs.gathering');

    store.moveTask(
        'logs.gathering.logging.level.66-70',
        'logs.gathering.logging.level.71-75',
        11
    );

    //#region Gathering Reorg
    store.moveGroup(
        'logs.gathering.harvesting',
        'logs.gathering.gathering-log.harvesting'
    );

    store.moveGroup(
        'logs.gathering.logging',
        'logs.gathering.gathering-log.logging'
    );

    store.moveGroup(
        'logs.gathering.mining',
        'logs.gathering.gathering-log.mining'
    );

    store.moveGroup(
        'logs.gathering.quarrying',
        'logs.gathering.gathering-log.quarrying'
    );

    store.deleteGroup('logs.gathering.harvesting');
    store.deleteGroup('logs.gathering.logging');
    store.deleteGroup('logs.gathering.mining');
    store.deleteGroup('logs.gathering.quarrying');

    //#endregion

    //#region Fishing Reorg
    store.moveGroup(
        'logs.gathering.fishing.log',
        'logs.gathering.fishing-log.fishing'
    );

    store.moveGroup(
        'logs.gathering.spearfishing.log',
        'logs.gathering.fishing-log.spearfishing'
    );

    store.moveGroup(
        'logs.gathering.fishing.guide',
        'logs.gathering.fishing-guide.fishing'
    );

    store.moveGroup(
        'logs.gathering.spearfishing.guide',
        'logs.gathering.fishing-guide.spearfishing'
    );

    store.deleteGroup('logs.gathering.fishing');
    store.deleteGroup('logs.gathering.spearfishing');

    //#endregion

    migrateGatherer(store, 'mining');
    migrateGatherer(store, 'quarrying');
    migrateGatherer(store, 'logging');
    migrateGatherer(store, 'harvesting');
}

function migrateGatherer(store: ChangeStore, key: string): void {
    const GATHERER = `logs.gathering.gathering-log.${key}`;
    const SPECIAL = `${GATHERER}.special`;

    //#region Collectables
    store.moveGroup(
        `${SPECIAL}.collectables-1`,
        `${GATHERER}.collectables.level-50-70`,
        true
    );

    store.moveGroup(
        `${SPECIAL}.collectables-2`,
        `${GATHERER}.collectables.level-71-80`,
        true
    );

    //#endregion

    //#region Folklore
    store.moveGroup(
        `${SPECIAL}.coerthan-folklore`,
        `${GATHERER}.regional-folklore.coerthas`,
        true
    );

    store.moveGroup(
        `${SPECIAL}.dravanian-folklore`,
        `${GATHERER}.regional-folklore.dravania`,
        true
    );

    store.moveGroup(
        `${SPECIAL}.abalathian-folklore`,
        `${GATHERER}.regional-folklore.abalathia`,
        true
    );

    store.moveGroup(
        `${SPECIAL}.gyr-abanian-folklore`,
        `${GATHERER}.regional-folklore.gyr-abania`,
        true
    );

    store.moveGroup(
        `${SPECIAL}.othardian-folklore`,
        `${GATHERER}.regional-folklore.othard`,
        true
    );

    store.moveGroup(
        `${SPECIAL}.vrandtic-folklore`,
        `${GATHERER}.regional-folklore.norvrandt`,
        true
    );

    //#endregion

    //#region Ishgard Resto
    store.moveGroup(
        `${SPECIAL}.ishgard-restoration`,
        `${GATHERER}.ishgard-restoration.ishgard-restoration`,
        true
    );

    store.moveGroup(
        `${SPECIAL}.skysteel-tools`,
        `${GATHERER}.ishgard-restoration.skysteel-tools`,
        true
    );

    //#endregion

    store.deleteGroup(SPECIAL);
}
