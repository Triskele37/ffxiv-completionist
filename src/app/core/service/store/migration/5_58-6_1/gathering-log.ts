import { ChangeStore } from '@service/store/migration/ChangeStore';

/** Reorganize Gathering Special Sections
 * */
export function migrate_6_1_gatheringLog(store: ChangeStore): void {
    migrateGatherer(store, 'mining');
    migrateGatherer(store, 'quarrying');
    migrateGatherer(store, 'logging');
    migrateGatherer(store, 'harvesting');
}

function migrateGatherer(store: ChangeStore, key: string): void {
    const GATHERER = `logs.gathering-log.${key}`;
    const SPECIAL = `${GATHERER}.special`;

    //#region Collectables
    store.moveGroup(
        `${SPECIAL}.collectables-1`,
        `${GATHERER}.collectables.level-50-70`
    );

    store.moveGroup(
        `${SPECIAL}.collectables-2`,
        `${GATHERER}.collectables.level-71-80`
    );

    //#endregion

    //#region Folklore
    store.moveGroup(
        `${SPECIAL}.coerthan-folklore`,
        `${GATHERER}.regional-folklore.coerthas`
    );

    store.moveGroup(
        `${SPECIAL}.dravanian-folklore`,
        `${GATHERER}.regional-folklore.dravania`
    );

    store.moveGroup(
        `${SPECIAL}.abalathian-folklore`,
        `${GATHERER}.regional-folklore.abalathia`
    );

    store.moveGroup(
        `${SPECIAL}.gyr-abanian-folklore`,
        `${GATHERER}.regional-folklore.gyr-abania`
    );

    store.moveGroup(
        `${SPECIAL}.othardian-folklore`,
        `${GATHERER}.regional-folklore.othard`
    );

    store.moveGroup(
        `${SPECIAL}.vrandtic-folklore`,
        `${GATHERER}.regional-folklore.norvrandt`
    );

    //#endregion

    //#region Ishgard Resto
    store.moveGroup(
        `${SPECIAL}.ishgard-restoration`,
        `${GATHERER}.ishgard-restoration.ishgard-restoration`
    );

    store.moveGroup(
        `${SPECIAL}.skysteel-tools`,
        `${GATHERER}.ishgard-restoration.skysteel-tools`
    );

    //#endregion

    store.deleteGroup(SPECIAL);
}
