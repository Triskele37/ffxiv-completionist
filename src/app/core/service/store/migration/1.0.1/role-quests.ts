import { ChangeStore } from '@service/store/migration/ChangeStore';

/** Split role quests into expansion groups
 * */
export function migrateRoleQuests(store: ChangeStore): void {
    const ROLE = 'overall.duty.quests.class--job.role';

    store.moveTasks(`${ROLE}.tank`, `${ROLE}.shb`, [
        68779, 68780, 68781, 68782, 68783, 68784
    ]);

    store.moveTasks(`${ROLE}.tank`, `${ROLE}.ew`, [
        69638, 69639, 69640, 69641, 69642, 69643
    ]);

    store.moveTasks(`${ROLE}.healer`, `${ROLE}.shb`, [
        68803, 68804, 68805, 68806, 68807, 68808
    ]);

    store.moveTasks(`${ROLE}.healer`, `${ROLE}.ew`, [
        69644, 69645, 69646, 69647, 69648, 69649
    ]);

    store.moveTasks(`${ROLE}.physical-dps`, `${ROLE}.shb`, [
        68809, 68810, 68811, 68812, 68813, 68814
    ]);

    store.moveTasks(`${ROLE}.melee-dps`, `${ROLE}.ew`, [
        69650, 69651, 69652, 69653, 69654, 69655
    ]);

    store.moveTasks(`${ROLE}.physical-ranged-dps`, `${ROLE}.ew`, [
        69656, 69657, 69658, 69659, 69660, 69661
    ]);

    store.moveTasks(`${ROLE}.magical-ranged-dps`, `${ROLE}.shb`, [
        69159, 69160, 69161, 69162, 69163, 69164
    ]);

    store.moveTasks(`${ROLE}.magical-ranged-dps`, `${ROLE}.ew`, [
        69662, 69663, 69664, 69665, 69666, 69667
    ]);

    store.moveTasks(ROLE, `${ROLE}.shb`, [
        69165, 69521
    ]);

    store.deleteGroup(`${ROLE}.tank`);
    store.deleteGroup(`${ROLE}.healer`);
    store.deleteGroup(`${ROLE}.physical-dps`);
    store.deleteGroup(`${ROLE}.melee-dps`);
    store.deleteGroup(`${ROLE}.physical-ranged-dps`);
    store.deleteGroup(`${ROLE}.magical-ranged-dps`);
}
