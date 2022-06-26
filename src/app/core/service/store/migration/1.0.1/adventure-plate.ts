import { ChangeStore } from '@service/store/migration/ChangeStore';
import { Completion } from '@constant';

/** Adventure Plate added, automatically check received ones
 * */
export function migrateAdventurePlate(store: ChangeStore): void {
    const data = [
        [0, 'class--job.disciple-of-war.gladiator', 65801],
        [1, 'class--job.disciple-of-war-job.paladin', 68746],
        [2, 'class--job.disciple-of-war-job.paladin', 66591],
        [4, 'class--job.disciple-of-war.marauder', 65855],
        [5, 'class--job.disciple-of-war-job.warrior', 68748],
        [6, 'class--job.disciple-of-war-job.warrior', 66585],
        [8, 'class--job.disciple-of-war-job.dark-knight', 68757],
        [9, 'class--job.disciple-of-war-job.dark-knight', 67589],
        [11, 'class--job.disciple-of-war-job.gunbreaker', 68761],
        [12, 'class--job.disciple-of-war-job.gunbreaker', 68797],
        [14, 'class--job.disciple-of-magic.conjurer', 65977],
        [15, 'class--job.disciple-of-magic-job.white-mage', 68751],
        [16, 'class--job.disciple-of-magic-job.white-mage', 66615],
        [18, 'class--job.disciple-of-magic.arcanist', 65997],
        [19, 'class--job.disciple-of-magic-job.scholar', 68754],
        [20, 'class--job.disciple-of-magic-job.scholar', 66633],
        [22, 'class--job.disciple-of-magic-job.astrologian', 68758],
        [23, 'class--job.disciple-of-magic-job.astrologian', 67548],
        [25, 'class--job.disciple-of-magic-job.sage', 69608],
        [26, 'class--job.disciple-of-magic-job.sage', 69603],
        [28, 'class--job.disciple-of-war.pugilist', 66103],
        [29, 'class--job.disciple-of-war-job.monk', 68747],
        [30, 'class--job.disciple-of-war-job.monk', 66597],
        [32, 'class--job.disciple-of-war.lancer', 65975],
        [33, 'class--job.disciple-of-war-job.dragoon', 68749],
        [34, 'class--job.disciple-of-war-job.dragoon', 66603],
        [36, 'class--job.disciple-of-war.rogue', 65691],
        [37, 'class--job.disciple-of-war-job.ninja', 68755],
        [38, 'class--job.disciple-of-war-job.ninja', 65748],
        [40, 'class--job.disciple-of-war-job.samurai', 68759],
        [41, 'class--job.disciple-of-war-job.samurai', 68095],
        [43, 'class--job.disciple-of-war-job.reaper', 69614],
        [44, 'class--job.disciple-of-war-job.reaper', 69609],
        [46, 'class--job.disciple-of-war.archer', 65612],
        [47, 'class--job.disciple-of-war-job.bard', 68750],
        [48, 'class--job.disciple-of-war-job.bard', 66621],
        [50, 'class--job.disciple-of-war-job.machinist', 68756],
        [51, 'class--job.disciple-of-war-job.machinist', 67232],
        [53, 'class--job.disciple-of-war-job.dancer', 68762],
        [54, 'class--job.disciple-of-war-job.dancer', 68785],
        [56, 'class--job.disciple-of-magic.thaumaturge', 65889],
        [57, 'class--job.disciple-of-magic-job.black-mage', 68752],
        [58, 'class--job.disciple-of-magic-job.black-mage', 66609],
        [60, 'class--job.disciple-of-magic-job.summoner', 69569],
        [61, 'class--job.disciple-of-magic-job.summoner', 66627],
        [63, 'class--job.disciple-of-magic-job.red-mage', 68760],
        [64, 'class--job.disciple-of-magic-job.red-mage', 68112],
        [66, 'class--job.disciple-of-magic-job.blue-mage', 69530],
        [67, 'class--job.disciple-of-magic-job.blue-mage', 68728],
        [68, 'class--job.disciple-of-the-hand.carpenter', 67981],
        [69, 'class--job.disciple-of-the-hand.carpenter', 65674],
        [70, 'class--job.disciple-of-the-hand.blacksmith', 68155],
        [71, 'class--job.disciple-of-the-hand.blacksmith', 65827],
        [72, 'class--job.disciple-of-the-hand.armorer', 68134],
        [73, 'class--job.disciple-of-the-hand.armorer', 65809],
        [74, 'class--job.disciple-of-the-hand.goldsmith', 68139],
        [75, 'class--job.disciple-of-the-hand.goldsmith', 66144],
        [76, 'class--job.disciple-of-the-hand.leatherworker', 68151],
        [77, 'class--job.disciple-of-the-hand.leatherworker', 65641],
        [78, 'class--job.disciple-of-the-hand.weaver', 67971],
        [79, 'class--job.disciple-of-the-hand.weaver', 66070],
        [80, 'class--job.disciple-of-the-hand.alchemist', 67976],
        [81, 'class--job.disciple-of-the-hand.alchemist', 66111],
        [82, 'class--job.disciple-of-the-hand.culinarian', 68144],
        [83, 'class--job.disciple-of-the-hand.culinarian', 65807],
        [84, 'class--job.disciple-of-the-land.miner', 68094],
        [85, 'class--job.disciple-of-the-land.miner', 66133],
        [86, 'class--job.disciple-of-the-land.botanist', 68160],
        [87, 'class--job.disciple-of-the-land.botanist', 65539],
        [88, 'class--job.disciple-of-the-land.fisher', 68435],
        [89, 'class--job.disciple-of-the-land.fisher', 66643],
        [90, 'sidequests.uldahn.the-gold-saucer', 65971],
        [91, 'main-scenario.seventh-umbral-era', 66196],
    ];

    const PLATE = 'overall.character.adventure-plate';
    data.forEach(([plateId, questPath, questId]) => {
        const path = `overall.duty.quests.${questPath}`;

        if(store.getTask(path, questId) === Completion.Y) {
            store.setTask(PLATE, plateId, Completion.Y);
        }
    });

}
