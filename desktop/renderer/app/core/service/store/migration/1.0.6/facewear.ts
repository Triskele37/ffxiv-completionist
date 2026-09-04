import type { ChangeStore } from '@service/store/migration/ChangeStore';

/**
 * Facewear key changes from Generated Resources
 */
export function migrateFacewear(store: ChangeStore): void {
    store.safeChangeKeys('overall.character.facewear', [
        [14, 0], // Oval Spectacles
        [1, 1], // Shaded Spectacles
        [2, 2], // Classic Spectacles
        [3, 3], // Rose-colored Spectacles
        [4, 4], // Simple Spectacles
        [5, 5], // Monocle
        [6, 6], // Contemporary Pince-nez
        [7, 7], // Rimless Glasses
        [8, 8], // Thick-rimmed Glasses
        [9, 9], // Minstrel's Spectacles
        [10, 10], // Prince-nez
        [11, 11], // Magnifiers
        [12, 12], // Brass Goggles
        [13, 13], // Under-rim Glasses
        [0, 14], // Oval Reading Glasses
        [15, 15], // Elegant Rimless Glasses
        [16, 16], // Cat Eye Glasses
        [17, 17], // Slim Frame Glasses
    ]);
}
