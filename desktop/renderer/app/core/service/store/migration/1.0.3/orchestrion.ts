import type { ChangeStore } from '@service/store/migration/ChangeStore';

/** Dungeons split into I and II
 * New Quest group added, split from Other
 * */
export function migrateOrchestrion(store: ChangeStore): void {
    //--------------------------------- Dungeons Changes
    const DUNGEONS = 'overall.logs.orchestrion-list.dungeons';
    const DUNGEONS_I = 'overall.logs.orchestrion-list.dungeons-i';
    const DUNGEONS_II = 'overall.logs.orchestrion-list.dungeons-ii';
    const MOVE_TO_DUNGEONS_II = [
        48, 49, 50, 51, 52, 53, 54, 55, 56, 57,
        58, 61, 67, 68, 72, 73, 74, 75, 76, 77,
        78, 79, 80, 84, 85, 86, 93
    ];

    // Moved to 'dungeons-ii' from 'dungeons'
    MOVE_TO_DUNGEONS_II.forEach((id) => store.moveTask(DUNGEONS, DUNGEONS_II, id));

    // Rename 'dungeons' to 'dungeons-i'
    store.moveGroup(DUNGEONS, DUNGEONS_I);

    //--------------------------------- Quests Changes
    const OTHERS = 'overall.logs.orchestrion-list.others';
    const QUESTS = 'overall.logs.orchestrion-list.quests';
    const MOVE_TO_QUESTS = [
        0, 18, 29, 77, 17, 94, 95, 96, 89, 4,
        22, 21, 5, 6, 14, 16, 12, 15, 13, 1,
        3, 11, 20, 78, 30, 55, 59, 31, 25, 27,
        35, 36, 26, 28, 53, 66, 34, 39, 38, 46,
        67, 68, 76, 79, 52, 58, 47, 82, 84, 83,
        90
    ];

    // Moved to 'quests' from 'others'
    MOVE_TO_QUESTS.forEach((id) => store.moveTask(OTHERS, QUESTS, id));
}
