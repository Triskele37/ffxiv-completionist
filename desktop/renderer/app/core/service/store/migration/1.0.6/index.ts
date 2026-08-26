import type { ConfigStoreService } from '@service/store/config-store.service';

import type { SaveStoreService } from '../../save-store.service';
import { ChangeStore } from '../ChangeStore';
import { migrateGathering } from './gathering';
import { migrateFacewear } from './facewear';
import { migrateFishingGuide } from './fish';
import { migrateFishingHoles } from './fishingHoles';
import { migrateDye } from './dye';
import { migrateRelics } from './relics';

export function migrateTo_1_0_6(svcConfigStore: ConfigStoreService, svcSaveStore: SaveStoreService): void {
    const store = new ChangeStore(svcConfigStore, svcSaveStore, '1.0.6');

    const CURRENT = 'overall.travel.aether-currents';
    store.moveGroup(`${CURRENT}.shb.the-raktika-greatwood`, `${CURRENT}.shb.the-rak-tika-greatwood`);

    const BLRF = 'logs.gathering.gathering-log.logging.regional-folklore';
    store.moveGroup(`${BLRF}.Coerthas`, `${BLRF}.coerthas`);

    store.moveGroup('duty.exploratory-missions', 'duty.field-operations');
    
    migrateGathering(store);
    migrateFacewear(store);
    migrateFishingGuide(store);
    migrateFishingHoles(store);
    migrateMahjongVoices(store);
    migrateDye(store);
    migrateRelics(store);

    // 'Training with Lieh' changed to 'School of Hard Nocks'
    const ARCHER = 'overall.duty.quest.class-and-job-quests.disciple-of-war-quests.archer-quests';
    store.safeChangeKeys(ARCHER, [[65670, 65603]])

    store.write();
}

function migrateMahjongVoices(store: ChangeStore): void {
    const MAHJONG_VOICES = 'overall.character.gold-saucer.mahjong-voices';

    store.safeChangeKeys(MAHJONG_VOICES, [
        [12, 1], // Alphinaud
        [16, 2], // Alisaie
        [2, 3],  // Thancred
        [6, 4],  // Urianger
        [15, 5], // Y'shtola
        [11, 6], // Estinien
        [9, 7],  // G'raha Tia
        [5, 8],  // Krile
    ]);
}
