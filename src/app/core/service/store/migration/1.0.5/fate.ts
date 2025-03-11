import { ChangeStore } from '@service/store/migration/ChangeStore';

const FATE = 'overall.duty.fate';

/** FATE changes from Generated Resources
 * */
export function migrateFates(store: ChangeStore): void {
    store.moveGroup(`${FATE}.black-shroud`, `${FATE}.the-black-shroud`);
    store.moveGroup(`${FATE}.coerthas.central-highlands`, `${FATE}.coerthas.coerthas-central-highlands`);
    store.moveGroup(`${FATE}.coerthas.western-highlands`, `${FATE}.coerthas.coerthas-western-highlands`);
    store.moveGroup(`${FATE}.norvrandt.the-rak-tika-greatwood`, `${FATE}.norvrandt.the-raktika-greatwood`);
    store.moveGroup(`${FATE}.northern-empty`, `${FATE}.the-northern-empty`);
    store.moveGroup(`${FATE}.sea-of-stars`, `${FATE}.the-sea-of-stars`);
    store.moveGroup(`${FATE}.world-unsundered`, `${FATE}.the-world-unsundered`);
}
