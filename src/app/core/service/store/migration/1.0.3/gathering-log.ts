import { ChangeStore } from '@service/store/migration/ChangeStore';

/** Sidequests added, Ishgard Restoration removed
 * */
export function migrateGatheringLog(store: ChangeStore): void {
    const MINING = 'overall.logs.gathering.gathering-log.mining';
    const QUARRYING = 'overall.logs.gathering.gathering-log.quarrying';
    const LOGGING = 'overall.logs.gathering.gathering-log.logging';
    const HARVESTING = 'overall.logs.gathering.gathering-log.harvesting';

    const oldResto = (group) => `${group}.ishgard-restoration.ishgard-restoration`;
    const oldSkysteel = (group) => `${group}.ishgard-restoration.skysteel-tools`;

    const newResto = (group) => `${group}.sidequests.ishgard-restoration`;
    const newSkysteel = (group) => `${group}.sidequests.skysteel-tools`;

    store.moveGroup(oldResto(MINING), newResto(MINING));
    store.moveGroup(oldSkysteel(MINING), newSkysteel(MINING));
    store.deleteGroup(`${MINING}.ishgard-restoration`);

    store.moveGroup(oldResto(QUARRYING), newResto(QUARRYING));
    store.moveGroup(oldSkysteel(QUARRYING), newSkysteel(QUARRYING));
    store.deleteGroup(`${QUARRYING}.ishgard-restoration`);

    store.moveGroup(oldResto(LOGGING), newResto(LOGGING));
    store.moveGroup(oldSkysteel(LOGGING), newSkysteel(LOGGING));
    store.deleteGroup(`${LOGGING}.ishgard-restoration`);

    store.moveGroup(oldResto(HARVESTING), newResto(HARVESTING));
    store.moveGroup(oldSkysteel(HARVESTING), newSkysteel(HARVESTING));
    store.deleteGroup(`${HARVESTING}.ishgard-restoration`);
}
