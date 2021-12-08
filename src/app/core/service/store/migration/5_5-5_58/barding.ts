/** Barding ingested from XIVAPI in this version
 * All IDs need to be updated to their actual ID
 * */
export function migrate_5_58_barding(store): void {
    const bardingPath = 'character.companion.barding';

    // Remove old IDs that become unused
    store.deleteTask(bardingPath, 33);

    // Update with new IDs
    store.changeKey(bardingPath, 0, 48); // Abigail Barding
    store.changeKey(bardingPath, 1, 54); // Ala Mhigan Barding
    store.changeKey(bardingPath, 2, 50); // Angelic Barding
    store.changeKey(bardingPath, 3, 23); // Barding of Light
    store.changeKey(bardingPath, 4, 17); // Behemoth Barding
    store.changeKey(bardingPath, 5, 19); // Black Mage Barding
    store.changeKey(bardingPath, 6, 55); // Blissful Barding
    store.changeKey(bardingPath, 7, 46); // Butlery Barding
    store.changeKey(bardingPath, 8, 62); // Byakko Barding
    store.changeKey(bardingPath, 9, 63); // Chocobo Raincoat
    store.changeKey(bardingPath, 10, 71); // Dancer Barding
    store.changeKey(bardingPath, 11, 72); // Deepshadow Barding
    store.changeKey(bardingPath, 12, 51); // Demonic Barding
    store.changeKey(bardingPath, 13, 14); // Dragoon Barding
    store.changeKey(bardingPath, 14, 27); // Eerie Barding
    store.changeKey(bardingPath, 15, 24); // Egg Barding / Egg Harness
    store.changeKey(bardingPath, 16, 42); // Egg Hunter Barding
    store.changeKey(bardingPath, 17, 78); // Emerald Barding
    store.changeKey(bardingPath, 18, 34); // Expanse Barding
    store.changeKey(bardingPath, 19, 43); // Far Eastern Barding
    store.changeKey(bardingPath, 20, 18); // Flyer Shaffron
    store.changeKey(bardingPath, 21, 29); // Gambler Barding
    store.changeKey(bardingPath, 22, 7); // Gridanian Barding
    store.changeKey(bardingPath, 23, 8); // Gridanian Crested Barding
    store.changeKey(bardingPath, 24, 6); // Gridanian Half Barding
    store.changeKey(bardingPath, 25, 5); // Gridanian Saddle
    store.changeKey(bardingPath, 26, 73); // Hades Barding
    store.changeKey(bardingPath, 27, 38); // Highland Barding
    store.changeKey(bardingPath, 28, 56); // Hingan Barding
    store.changeKey(bardingPath, 29, 35); // Hive Barding
    store.changeKey(bardingPath, 30, 45); // Horde Barding
    store.changeKey(bardingPath, 31, 28); // Ice Barding
    store.changeKey(bardingPath, 32, 70); // Innocence Barding
    store.changeKey(bardingPath, 33, 32); // Ishgardian Barding
    store.changeKey(bardingPath, 34, 31); // Ishgardian Half Barding
    store.changeKey(bardingPath, 35, 60); // Ixion Barding
    store.changeKey(bardingPath, 36, 25); // Levin Barding
    store.changeKey(bardingPath, 37, 3); // Lominsan Barding
    store.changeKey(bardingPath, 38, 4); // Lominsan Crested Barding
    store.changeKey(bardingPath, 39, 2); // Lominsan Half Barding
    store.changeKey(bardingPath, 40, 1); // Lominsan Saddle
    store.changeKey(bardingPath, 41, 64); // Lunar Barding
    store.changeKey(bardingPath, 42, 76); // Machinist Barding
    store.changeKey(bardingPath, 43, 49); // Mandervillian Barding
    store.changeKey(bardingPath, 44, 58); // Nezha Barding
    store.changeKey(bardingPath, 45, 36); // Noble Barding
    store.changeKey(bardingPath, 46, 57); // Oriental Barding
    store.changeKey(bardingPath, 47, 37); // Orthodox Barding
    store.changeKey(bardingPath, 48, 13); // Paladin Barding
    store.changeKey(bardingPath, 49, 30); // Paramour Barding
    store.changeKey(bardingPath, 50, 26); // Plumed Barding
    store.changeKey(bardingPath, 51, 79); // Queen's Guard Barding
    store.changeKey(bardingPath, 52, 44); // Race Barding
    store.changeKey(bardingPath, 53, 61); // Red Mage Barding
    store.changeKey(bardingPath, 54, 53); // Reveler's Barding
    store.changeKey(bardingPath, 55, 40); // Round Table Barding
    store.changeKey(bardingPath, 56, 75); // Ruby Barding
    store.changeKey(bardingPath, 57, 74); // Saintly Barding
    store.changeKey(bardingPath, 58, 66); // Samurai Barding
    store.changeKey(bardingPath, 59, 67); // Seiryu Barding
    store.changeKey(bardingPath, 60, 41); // Sephirotic Barding
    store.changeKey(bardingPath, 61, 59); // Shinryu Barding
    store.changeKey(bardingPath, 62, 16); // Sleipnir Barding
    store.changeKey(bardingPath, 63, 47); // Sophic Barding
    store.changeKey(bardingPath, 64, 20); // Sovereign Barding
    store.changeKey(bardingPath, 65, 21); // Starlight Barding
    store.changeKey(bardingPath, 66, 65); // Suzaku Barding
    store.changeKey(bardingPath, 67, 22); // Tidal Barding
    store.changeKey(bardingPath, 68, 69); // Titania Barding
    store.changeKey(bardingPath, 69, 77); // True Barding of Light
    store.changeKey(bardingPath, 70, 11); // Ul'dahn Barding
    store.changeKey(bardingPath, 71, 12); // Ul'dahn Crested Barding
    store.changeKey(bardingPath, 72, 10); // Ul'dahn Half Barding
    store.changeKey(bardingPath, 73, 9); // Ul'dahn Saddle
    store.changeKey(bardingPath, 74, 15); // White Mage Barding
    store.changeKey(bardingPath, 75, 39); // Wild Rose Barding
    store.changeKey(bardingPath, 76, 68); // Yojimbo Barding
    store.changeKey(bardingPath, 77, 52); // Zurvanite Barding
}
