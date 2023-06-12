import { ChangeStore } from '@service/store/migration/ChangeStore';

/** 100 fish per page
 * */
const F_GUIDE = 'overall.logs.gathering.fishing-guide.fishing';
const S_GUIDE = 'overall.logs.gathering.fishing-guide.spearfishing';
export function migrateFish(store: ChangeStore): void {
    //#region --------------------------------- Fishing Guide
    // page-1 is already on page-1
    movePage(store, F_GUIDE, 'page-2', 'page-1', 1);
    movePage(store, F_GUIDE, 'page-3', 'page-1', 2);
    movePage(store, F_GUIDE, 'page-4', 'page-1', 3);
    movePage(store, F_GUIDE, 'page-5', 'page-2', 0);
    movePage(store, F_GUIDE, 'page-6', 'page-2', 1);
    movePage(store, F_GUIDE, 'page-7', 'page-2', 2);
    movePage(store, F_GUIDE, 'page-8', 'page-2', 3);
    movePage(store, F_GUIDE, 'page-9', 'page-3', 0);
    movePage(store, F_GUIDE, 'page-10', 'page-3', 1);
    movePage(store, F_GUIDE, 'page-11', 'page-3', 2);
    movePage(store, F_GUIDE, 'page-12', 'page-3', 3);
    movePage(store, F_GUIDE, 'page-13', 'page-4', 0);
    movePage(store, F_GUIDE, 'page-14', 'page-4', 1);
    movePage(store, F_GUIDE, 'page-15', 'page-4', 2);
    movePage(store, F_GUIDE, 'page-16', 'page-4', 3);
    movePage(store, F_GUIDE, 'page-17', 'page-5', 0);
    movePage(store, F_GUIDE, 'page-18', 'page-5', 1);
    movePage(store, F_GUIDE, 'page-19', 'page-5', 2);
    movePage(store, F_GUIDE, 'page-20', 'page-5', 3);
    movePage(store, F_GUIDE, 'page-21', 'page-6', 0);
    movePage(store, F_GUIDE, 'page-22', 'page-6', 1);
    movePage(store, F_GUIDE, 'page-23', 'page-6', 2);
    movePage(store, F_GUIDE, 'page-24', 'page-6', 3);
    movePage(store, F_GUIDE, 'page-25', 'page-7', 0);
    movePage(store, F_GUIDE, 'page-26', 'page-7', 1);
    movePage(store, F_GUIDE, 'page-27', 'page-7', 2);
    movePage(store, F_GUIDE, 'page-28', 'page-7', 3);
    movePage(store, F_GUIDE, 'page-29', 'page-8', 0);
    movePage(store, F_GUIDE, 'page-30', 'page-8', 1);
    movePage(store, F_GUIDE, 'page-31', 'page-8', 2);
    movePage(store, F_GUIDE, 'page-32', 'page-8', 3);
    movePage(store, F_GUIDE, 'page-33', 'page-9', 0);
    movePage(store, F_GUIDE, 'page-34', 'page-9', 1);
    movePage(store, F_GUIDE, 'page-35', 'page-9', 2);
    movePage(store, F_GUIDE, 'page-36', 'page-9', 3);
    movePage(store, F_GUIDE, 'page-37', 'page-10', 0);
    movePage(store, F_GUIDE, 'page-38', 'page-10', 1);
    movePage(store, F_GUIDE, 'page-39', 'page-10', 2);
    movePage(store, F_GUIDE, 'page-40', 'page-10', 3);
    movePage(store, F_GUIDE, 'page-41', 'page-11', 0);
    movePage(store, F_GUIDE, 'page-42', 'page-11', 1);
    movePage(store, F_GUIDE, 'page-43', 'page-11', 2);
    movePage(store, F_GUIDE, 'page-44', 'page-11', 3);
    movePage(store, F_GUIDE, 'page-45', 'page-12', 0);
    movePage(store, F_GUIDE, 'page-46', 'page-12', 1);

    // Move remaining partial page to last new page
    const lastOldFPage = `${F_GUIDE}.page-47`;
    const lastNewFPage = `${F_GUIDE}.page-12`;
    for(let oldId = 0; oldId <= 4; oldId++) {
        const newId = oldId + 50; // 2 pages already on page 12
        store.changeKey(lastOldFPage, oldId, newId);
        store.moveTask(lastOldFPage, lastNewFPage, newId);
    }

    // Cleanup empty pages
    for(let i = 13; i <= 47; i++) {
        store.deleteGroup(`${F_GUIDE}.page-${i}`);
    }

    //#endregion

    //#region --------------------------------- Spearfishing Guide
    // page-1 is already on page-1
    movePage(store, S_GUIDE, 'page-2', 'page-1', 1);
    movePage(store, S_GUIDE, 'page-3', 'page-1', 2);
    movePage(store, S_GUIDE, 'page-4', 'page-1', 3);
    movePage(store, S_GUIDE, 'page-5', 'page-2', 0);
    movePage(store, S_GUIDE, 'page-6', 'page-2', 1);
    movePage(store, S_GUIDE, 'page-7', 'page-2', 2);
    movePage(store, S_GUIDE, 'page-8', 'page-2', 3);
    movePage(store, S_GUIDE, 'page-9', 'page-3', 0);

    // Move remaining partial page to last new page
    const lastOldSPage = `${S_GUIDE}.page-47`;
    const lastNewSPage = `${S_GUIDE}.page-12`;
    for(let oldId = 0; oldId <= 7; oldId++) {
        const newId = oldId + 25; // 1 page already on page 3
        store.changeKey(lastOldSPage, oldId, newId);
        store.moveTask(lastOldSPage, lastNewSPage, newId);
    }

    // Cleanup empty pages
    for(let i = 4; i <= 10; i++) {
        store.deleteGroup(`${S_GUIDE}.page-${i}`);
    }

    //#endregion

    //#region --------------------------------- Reorder?
    // 5 fish out of order and on wrong page, shenanigans ensue
    const PAGE_10 = `${F_GUIDE}.page-10`;
    const PAGE_11 = `${F_GUIDE}.page-11`;

    // Shift ids so data is not overwritten when page-10 fish move in
    store.changeKey(PAGE_11, 4, 194);
    store.changeKey(PAGE_11, 3, 195);
    store.changeKey(PAGE_11, 2, 196);
    store.changeKey(PAGE_11, 1, 197);
    store.changeKey(PAGE_11, 0, 198);

    // Shift ids so data is not overwritten on this page
    store.changeKey(PAGE_10, 98, 100);
    store.changeKey(PAGE_10, 97, 101);
    store.changeKey(PAGE_10, 96, 102);
    store.changeKey(PAGE_10, 95, 103);
    store.changeKey(PAGE_10, 94, 104);

    // Flip fish between pages
    store.moveTasks(PAGE_10, PAGE_11, [100, 101, 102, 103, 104]);
    store.moveTasks(PAGE_11, PAGE_10, [194, 195, 196, 197, 198]);

    // Unshift ids (on their new pages)
    store.changeKey(PAGE_10, 194, 94);
    store.changeKey(PAGE_10, 195, 95);
    store.changeKey(PAGE_10, 196, 96);
    store.changeKey(PAGE_10, 197, 97);
    store.changeKey(PAGE_10, 198, 98);
    store.changeKey(PAGE_11, 100, 0);
    store.changeKey(PAGE_11, 101, 1);
    store.changeKey(PAGE_11, 102, 2);
    store.changeKey(PAGE_11, 103, 3);
    store.changeKey(PAGE_11, 104, 4);

    //#endregion
}

// quarter is zero based slot in new pages page
function movePage(
    store: ChangeStore,
    group: string,
    fromPage: string,   // 'page-x'
    toPage: string,     // 'page-y'
    quarter: number     // 0-3
) {
    const fromPath = `${group}.${fromPage}`;
    const toPath = `${group}.${toPage}`;

    for(let i = 0; i < 25; i++) {
        // Change key first because all pages use the same 0-24 id
        const newId = (25 * quarter) + i;
        store.changeKey(fromPath, i, newId);
        store.moveTask(fromPath, toPath, newId);
    }
}
