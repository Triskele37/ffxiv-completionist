import type { ChangeStore } from '@service/store/migration/ChangeStore';

/** Sorted Porters into groups matching in-game
 * */
export function migratePorters(store: ChangeStore): void {
    const PORTERS = 'overall.travel.porters';

    store.moveTasks(PORTERS, `${PORTERS}.la-noscea`, [
        0, 1, 2, 3, 4, 5, 6, 7, 8
    ]);

    store.moveTasks(PORTERS, `${PORTERS}.the-black-shroud`, [
        9, 10, 11, 12, 13, 14, 15, 16
    ]);

    store.moveTasks(PORTERS, `${PORTERS}.thanalan`, [
        17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27
    ]);

    store.moveTasks(PORTERS, `${PORTERS}.ishgard-and-coerthas`, [
        28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41
    ]);

    store.moveTasks(PORTERS, `${PORTERS}.gyr-abania`, [
        42, 43, 44, 45, 46, 47, 48
    ]);

    store.moveTasks(PORTERS, `${PORTERS}.the-far-east`, [
        49, 50, 51, 52, 53, 54, 55, 56
    ]);

    store.moveTasks(PORTERS, `${PORTERS}.norvrandt`, [
        57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71
    ]);

    store.moveTasks(PORTERS, `${PORTERS}.others`, [
        72, 73
    ]);
}
