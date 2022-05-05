import { ChangeStore } from '@service/store/migration/ChangeStore';

/** Reorganize Gathering Special Sections
 * */
export function migrateGatheringLogs(store: ChangeStore): void {
    const GATHERING = 'overall.logs.gathering';
    store.moveGroup('overall.logs.gathering-log', GATHERING);

    store.moveTask(
        `${GATHERING}.logging.level.66-70`,
        `${GATHERING}.logging.level.71-75`,
        11
    );

    //#region Gathering Reorg
    store.moveGroup(
        `${GATHERING}.harvesting`,
        `${GATHERING}.gathering-log.harvesting`
    );

    store.moveGroup(
        `${GATHERING}.logging`,
        `${GATHERING}.gathering-log.logging`
    );

    store.moveGroup(
        `${GATHERING}.mining`,
        `${GATHERING}.gathering-log.mining`
    );

    store.moveGroup(
        `${GATHERING}.quarrying`,
        `${GATHERING}.gathering-log.quarrying`
    );

    store.deleteGroup(`${GATHERING}.harvesting`);
    store.deleteGroup(`${GATHERING}.logging`);
    store.deleteGroup(`${GATHERING}.mining`);
    store.deleteGroup(`${GATHERING}.quarrying`);

    //#endregion

    //#region Fishing Reorg
    store.moveGroup(
        `${GATHERING}.fishing.log`,
        `${GATHERING}.fishing-log.fishing`
    );

    store.moveGroup(
        `${GATHERING}.spearfishing.log`,
        `${GATHERING}.fishing-log.spearfishing`
    );

    store.moveGroup(
        `${GATHERING}.fishing.guide`,
        `${GATHERING}.fishing-guide.fishing`
    );

    store.moveGroup(
        `${GATHERING}.spearfishing.guide`,
        `${GATHERING}.fishing-guide.spearfishing`
    );

    store.deleteGroup(`${GATHERING}.fishing`);
    store.deleteGroup(`${GATHERING}.spearfishing`);

    //#endregion

    migrateGatherer(store, 'mining');
    migrateGatherer(store, 'quarrying');
    migrateGatherer(store, 'logging');
    migrateGatherer(store, 'harvesting');
}

function migrateGatherer(store: ChangeStore, key: string): void {
    const GATHERER = `overall.logs.gathering.gathering-log.${key}`;
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
