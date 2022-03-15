import { ChangeStore } from '@service/store/migration/ChangeStore';

/** 6 Aether Currents removed from each zone in previous expansions
 * Delete removed current ids
 * */
export function migrate_6_1_aetherCurrent(store: ChangeStore): void {
    // Delete removed currents

    const CWH = 'travel.aether-currents.hw.coerthas-western-highlands'; //#region
    store.deleteTask(CWH, 0);
    store.deleteTask(CWH, 1);
    store.deleteTask(CWH, 5);
    store.deleteTask(CWH, 6);
    store.deleteTask(CWH, 8);
    store.deleteTask(CWH, 9); //#endregion

    const TDF = 'travel.aether-currents.hw.the-dravanian-forelands'; //#region
    store.deleteTask(TDF, 1);
    store.deleteTask(TDF, 2);
    store.deleteTask(TDF, 4);
    store.deleteTask(TDF, 5);
    store.deleteTask(TDF, 6);
    store.deleteTask(TDF, 8); //#endregion

    const TSOC = 'travel.aether-currents.hw.the-sea-of-clouds'; //#region
    store.deleteTask(TSOC, 1);
    store.deleteTask(TSOC, 2);
    store.deleteTask(TSOC, 4);
    store.deleteTask(TSOC, 7);
    store.deleteTask(TSOC, 8);
    store.deleteTask(TSOC, 9); //#endregion

    const TCM = 'travel.aether-currents.hw.the-churning-mists'; //#region
    store.deleteTask(TCM, 1);
    store.deleteTask(TCM, 2);
    store.deleteTask(TCM, 3);
    store.deleteTask(TCM, 4);
    store.deleteTask(TCM, 5);
    store.deleteTask(TCM, 8); //#endregion

    const TDH = 'travel.aether-currents.hw.the-dravanian-hinterlands'; //#region
    store.deleteTask(TDH, 1);
    store.deleteTask(TDH, 2);
    store.deleteTask(TDH, 3);
    store.deleteTask(TDH, 5);
    store.deleteTask(TDH, 7);
    store.deleteTask(TDH, 8); //#endregion

    const TP = 'travel.aether-currents.sb.the-peaks'; //#region
    store.deleteTask(TP, 1);
    store.deleteTask(TP, 2);
    store.deleteTask(TP, 4);
    store.deleteTask(TP, 5);
    store.deleteTask(TP, 7);
    store.deleteTask(TP, 9); //#endregion

    const TF = 'travel.aether-currents.sb.the-fringes'; //#region
    store.deleteTask(TF, 0);
    store.deleteTask(TF, 1);
    store.deleteTask(TF, 4);
    store.deleteTask(TF, 5);
    store.deleteTask(TF, 6);
    store.deleteTask(TF, 8); //#endregion

    const TL = 'travel.aether-currents.sb.the-lochs'; //#region
    store.deleteTask(TL, 3);
    store.deleteTask(TL, 4);
    store.deleteTask(TL, 5);
    store.deleteTask(TL, 6);
    store.deleteTask(TL, 8);
    store.deleteTask(TL, 9); //#endregion

    const TRS = 'travel.aether-currents.sb.the-ruby-sea'; //#region
    store.deleteTask(TRS, 1);
    store.deleteTask(TRS, 3);
    store.deleteTask(TRS, 4);
    store.deleteTask(TRS, 6);
    store.deleteTask(TRS, 7);
    store.deleteTask(TRS, 8); //#endregion

    const TAS = 'travel.aether-currents.sb.the-azim-steppe'; //#region
    store.deleteTask(TAS, 0);
    store.deleteTask(TAS, 1);
    store.deleteTask(TAS, 3);
    store.deleteTask(TAS, 4);
    store.deleteTask(TAS, 6);
    store.deleteTask(TAS, 8); //#endregion

    const YANXIA = 'travel.aether-currents.sb.yanxia'; //#region
    store.deleteTask(YANXIA, 0);
    store.deleteTask(YANXIA, 2);
    store.deleteTask(YANXIA, 4);
    store.deleteTask(YANXIA, 5);
    store.deleteTask(YANXIA, 8);
    store.deleteTask(YANXIA, 9); //#endregion

    const LAKELAND = 'travel.aether-currents.shb.lakeland'; //#region
    store.deleteTask(LAKELAND, 0);
    store.deleteTask(LAKELAND, 3);
    store.deleteTask(LAKELAND, 4);
    store.deleteTask(LAKELAND, 6);
    store.deleteTask(LAKELAND, 7);
    store.deleteTask(LAKELAND, 8); //#endregion

    const AMH_ARAENG = 'travel.aether-currents.shb.amh-araeng'; //#region
    store.deleteTask(AMH_ARAENG, 0);
    store.deleteTask(AMH_ARAENG, 2);
    store.deleteTask(AMH_ARAENG, 4);
    store.deleteTask(AMH_ARAENG, 5);
    store.deleteTask(AMH_ARAENG, 7);
    store.deleteTask(AMH_ARAENG, 8); //#endregion

    const IL_MHEG = 'travel.aether-currents.shb.il-mheg'; //#region
    store.deleteTask(IL_MHEG, 2);
    store.deleteTask(IL_MHEG, 3);
    store.deleteTask(IL_MHEG, 5);
    store.deleteTask(IL_MHEG, 6);
    store.deleteTask(IL_MHEG, 8);
    store.deleteTask(IL_MHEG, 9); //#endregion

    const KHOLUSIA = 'travel.aether-currents.shb.kholusia'; //#region
    store.deleteTask(KHOLUSIA, 0);
    store.deleteTask(KHOLUSIA, 3);
    store.deleteTask(KHOLUSIA, 4);
    store.deleteTask(KHOLUSIA, 6);
    store.deleteTask(KHOLUSIA, 7);
    store.deleteTask(KHOLUSIA, 8); //#endregion

    const TRG = 'travel.aether-currents.shb.the-raktika-greatwood'; //#region
    store.deleteTask(TRG, 1);
    store.deleteTask(TRG, 2);
    store.deleteTask(TRG, 3);
    store.deleteTask(TRG, 5);
    store.deleteTask(TRG, 6);
    store.deleteTask(TRG, 8); //#endregion

    const TT = 'travel.aether-currents.shb.the-tempest'; //#region
    store.deleteTask(TT, 1);
    store.deleteTask(TT, 2);
    store.deleteTask(TT, 3);
    store.deleteTask(TT, 5);
    store.deleteTask(TT, 6);
    store.deleteTask(TT, 8); //#endregion

}
