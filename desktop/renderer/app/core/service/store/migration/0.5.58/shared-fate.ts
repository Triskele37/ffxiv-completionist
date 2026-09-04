import type { ChangeStore, ID } from '@service/store/migration/ChangeStore';

/** IDs made unique within all shared fates
 * */
export function migrateSharedFate(store: ChangeStore): void {
    const sharedFate = 'travel.shared-fate';

    const changeAndMove = (zone: string, oldId: ID, newId: ID) => {
        store.changeKey(zone, oldId, newId);
        store.moveTask(zone, sharedFate, newId, true);
    };

    // Update with new IDs & remove subGroups
    const lakeland = `${sharedFate}.lakeland`;
    // store.changeKey(lakeland, 0, 0);
    // store.changeKey(lakeland, 1, 1);
    // store.changeKey(lakeland, 2, 2);
    store.moveTask(lakeland, sharedFate, 0);
    store.moveTask(lakeland, sharedFate, 1);
    store.moveTask(lakeland, sharedFate, 2);
    store.deleteGroup(lakeland);

    const kholusia = `${sharedFate}.kholusia`;
    changeAndMove(kholusia, 0, 3);
    changeAndMove(kholusia, 1, 4);
    changeAndMove(kholusia, 2, 5);
    store.deleteGroup(kholusia);

    const amhAraeng = `${sharedFate}.amh-araeng`;
    changeAndMove(amhAraeng, 0, 6);
    changeAndMove(amhAraeng, 1, 7);
    changeAndMove(amhAraeng, 2, 8);
    store.deleteGroup(amhAraeng);

    const ilMheg = `${sharedFate}.il-mheg`;
    changeAndMove(ilMheg, 0, 9);
    changeAndMove(ilMheg, 1, 10);
    changeAndMove(ilMheg, 2, 11);
    store.deleteGroup(ilMheg);

    const rakTika = `${sharedFate}.the-raktika-greatwood`;
    changeAndMove(rakTika, 0, 12);
    changeAndMove(rakTika, 1, 13);
    changeAndMove(rakTika, 2, 14);
    store.deleteGroup(rakTika);

    const tempest = `${sharedFate}.the-tempest`;
    changeAndMove(tempest, 0, 15);
    changeAndMove(tempest, 1, 16);
    changeAndMove(tempest, 2, 17);
    store.deleteGroup(tempest);
}
