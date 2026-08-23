import type { ChangeStore } from '@service/store/migration/ChangeStore';

/** V&C Dungeon Regrouping
 * */
export function migrateVCDungeons(store: ChangeStore): void {
    const OLD = 'overall.duty.dutyraid-finder.v-and-c-dungeon';
    const NEW_SUBTERRANE = `${OLD}.sildihn-subterrane`;

    store.moveTask(OLD, NEW_SUBTERRANE, 0);
    store.moveTask(OLD, NEW_SUBTERRANE, 1);
    store.moveTask(OLD, NEW_SUBTERRANE, 2);
}
