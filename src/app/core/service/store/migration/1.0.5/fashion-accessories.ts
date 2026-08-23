import type { ChangeStore } from '@service/store/migration/ChangeStore';

/** Fashion Accessory changes from Generated Resources
 * */
export function migrateFashionAccessories(store: ChangeStore): void {
    // Glasses removed from fashion acc
    store.deleteTask('overall.character.fashion-accessories', 19);
    store.deleteTask('overall.character.fashion-accessories', 23);
    store.deleteTask('overall.character.fashion-accessories', 24);
    store.deleteTask('overall.character.fashion-accessories', 32);

    store.safeChangeKeys('overall.character.fashion-accessories', [
        [6, 1], // Parasol
        [11, 2], // Sky Blue Parasol
        [12, 3], // Vermilion Paper Parasol
        [9, 4], // Plum Paper Parasol
        [4, 5], // Gold Paper Parasol
        [1, 6], // Calming Checkered Parasol
        [2, 7], // Cheerful Checkered Parasol
        [3, 8], // Classy Checkered Parasol
        [5, 10], // Gold Parasaucer
        [8, 11], // Pleasant Dot Parasol
        [10, 12], // Prim Dot Parasol
        [7, 13], // Pastoral Dot Parasol
        [14, 14], // Fat Cat Parasol
        [13, 15], // Great Paraserpent
        [15, 16], // Red Moon Parasol
        [21, 23], // White Lace Parasol
        [22, 24], // Blue Blossom Parasol
        [26, 27], // Sabotender Parasol
        [27, 30], // Felicitous Furball Umbrella
        [28, 31], // Raindrop Defense System
        [33, 33], // Tsukumogami Parasol
        [34, 34], // Tactful Taskmaster Umbrella
        [37, 37], // Giant Leaf Parasol
        [38, 38], // Colorful Carrotsol
        [0, 9], // Angel Wings
        [18, 17], // Fallen Angel Wings
        [16, 18], // Archangel Wings
        [17, 19], // Diabolos Wings
        [20, 20], // Pixie Wings
        [25, 28], // Bluepowder Pixie Wings
        [36, 36], // Statice's Wings
        [35, 35], // Knapsack
    ]);
}

