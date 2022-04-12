import { ChangeStore } from '@service/store/migration/ChangeStore';

/** Sorted Aetherytes into groups matching in-game
 * */
export function migrateAetherytes(store: ChangeStore): void {
    const AETHERYTES = 'overall.travel.aetherytes';

    store.moveTasks(AETHERYTES, `${AETHERYTES}.la-noscea`, [
        0, 3, 4, 6, 1, 2, 5, 7, 8, 9,
        10, 11, 12, 13, 14, 15
    ]);

    store.moveTasks(AETHERYTES, `${AETHERYTES}.the-black-shroud`, [
        16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
        26, 27
    ]);

    store.moveTasks(AETHERYTES, `${AETHERYTES}.thanalan`, [
        28, 29, 30, 31, 32, 34, 35, 37, 33, 36,
        38, 39, 40, 41, 42, 43, 44, 45, 46, 47,
        48, 49, 50, 51, 52, 53
    ]);

    store.moveTasks(AETHERYTES, `${AETHERYTES}.ishgard-and-coerthas`, [
        54, 55, 56, 57, 58, 59, 60, 61, 62, 63,
        64, 65, 66, 67, 68, 69, 70, 71, 72, 73
    ]);

    store.moveTasks(AETHERYTES, `${AETHERYTES}.gyr-abania`, [
        74, 75, 76, 77, 78, 79, 80, 81, 82
    ]);

    store.moveTasks(AETHERYTES, `${AETHERYTES}.the-far-east`, [
        83, 84, 85, 86, 87, 88, 89, 90, 91, 92,
        93, 94, 95, 96, 97, 98, 99, 100, 101, 102
    ]);

    store.moveTasks(AETHERYTES, `${AETHERYTES}.norvrandt`, [
        103, 104, 105, 106, 107, 108, 109, 110, 111, 112,
        114, 115, 113, 116, 117, 118, 119, 120, 121, 122,
        123, 124, 125, 126, 127, 128, 129, 130
    ]);

    store.moveTask(AETHERYTES, `${AETHERYTES}.others`, 131);
}
