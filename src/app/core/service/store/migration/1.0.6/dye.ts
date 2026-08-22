import { ChangeStore } from '@service/store/migration/ChangeStore';

export function migrateDye(store: ChangeStore): void {
    // Crafted Color Dye
    const SHARED = 'overall.logs.crafting-log.shared.dyes';
    store.deleteTasks(SHARED, [
        30001,
        30002,
        30003,
        30004,
        30005,
        30006,
        30007,
        30008,
        30009,
        30010,
        30011,
        30012,
        30013,
        30105,
        30106,
        30107,
        30108,
        30109,
        30110,
        30354,
        30355,
        30356,
        30357,
        30358,
        30359,
    ]);

    // Logging Pigments
    const LOGGING = 'overall.logs.gathering.gathering-log.logging.level.26-30';
    store.deleteTasks(LOGGING, [
        29, 30, 31, 32, 33, 34, 35
    ]);

    // Quarrying Pigments
    const QUARRYING = 'overall.logs.gathering.gathering-log.quarrying.level.26-30';
    store.deleteTasks(QUARRYING, [
        29, 30, 31, 32, 33, 34, 35
    ]);
}
