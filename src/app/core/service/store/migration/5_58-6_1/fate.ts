/** FATE ingested from XIVAPI in this version
 * All IDs need to be updated to their actual ID
 * */
export function migrate_6_1_fate(store): void {
    const FATE_BASE = 'duty.fate';

    // Remove old IDs that become unused
    store.deleteTask(FATE_BASE, 33);

    // Update with new IDs
    const AZYS_LLA = `${FATE_BASE}.abalathias-spine.azys-lla`;
    store.changeKey(AZYS_LLA, 0, 890);
    store.changeKey(AZYS_LLA, 1, 888);
    store.changeKey(AZYS_LLA, 2, 889);
    //TODO store.changeKey(AZYS_LLA, 3, ???);
    store.changeKey(AZYS_LLA, 4, 882);
    store.changeKey(AZYS_LLA, 5, 881);
    //TODO store.changeKey(AZYS_LLA, 6, ???);
    store.changeKey(AZYS_LLA, 7, 886);
    store.changeKey(AZYS_LLA, 8, 887);
}
