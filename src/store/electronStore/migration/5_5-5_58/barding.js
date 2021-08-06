/** Barding ingested from XIVAPI in this version
 * All IDs need to be updated to their actual ID
 * */
export const migrate_5_58_barding = (overall) => {
    const bardingPath = "character.companion.barding";

    // Remove old IDs that become unused
    overall.deleteTask(bardingPath, 33);

    // Update with new IDs
    overall.changeKey(bardingPath, 0, 48); // Abigail Barding
    overall.changeKey(bardingPath, 1, 54); // Ala Mhigan Barding
    overall.changeKey(bardingPath, 2, 50); // Angelic Barding
    overall.changeKey(bardingPath, 3, 23); // Barding of Light
    overall.changeKey(bardingPath, 4, 17); // Behemoth Barding
    overall.changeKey(bardingPath, 5, 19); // Black Mage Barding
    overall.changeKey(bardingPath, 6, 55); // Blissful Barding
    overall.changeKey(bardingPath, 7, 46); // Butlery Barding
    overall.changeKey(bardingPath, 8, 62); // Byakko Barding
    overall.changeKey(bardingPath, 9, 63); // Chocobo Raincoat
    overall.changeKey(bardingPath, 10, 71); // Dancer Barding
    overall.changeKey(bardingPath, 11, 72); // Deepshadow Barding
    overall.changeKey(bardingPath, 12, 51); // Demonic Barding
    overall.changeKey(bardingPath, 13, 14); // Dragoon Barding
    overall.changeKey(bardingPath, 14, 27); // Eerie Barding
    overall.changeKey(bardingPath, 15, 24); // Egg Barding / Egg Harness
    overall.changeKey(bardingPath, 16, 42); // Egg Hunter Barding
    overall.changeKey(bardingPath, 17, 78); // Emerald Barding
    overall.changeKey(bardingPath, 18, 34); // Expanse Barding
    overall.changeKey(bardingPath, 19, 43); // Far Eastern Barding
    overall.changeKey(bardingPath, 20, 18); // Flyer Shaffron
    overall.changeKey(bardingPath, 21, 29); // Gambler Barding
    overall.changeKey(bardingPath, 22, 7); // Gridanian Barding
    overall.changeKey(bardingPath, 23, 8); // Gridanian Crested Barding
    overall.changeKey(bardingPath, 24, 6); // Gridanian Half Barding
    overall.changeKey(bardingPath, 25, 5); // Gridanian Saddle
    overall.changeKey(bardingPath, 26, 73); // Hades Barding
    overall.changeKey(bardingPath, 27, 38); // Highland Barding
    overall.changeKey(bardingPath, 28, 56); // Hingan Barding
    overall.changeKey(bardingPath, 29, 35); // Hive Barding
    overall.changeKey(bardingPath, 30, 45); // Horde Barding
    overall.changeKey(bardingPath, 31, 28); // Ice Barding
    overall.changeKey(bardingPath, 32, 70); // Innocence Barding
    overall.changeKey(bardingPath, 33, 32); // Ishgardian Barding
    overall.changeKey(bardingPath, 34, 31); // Ishgardian Half Barding
    overall.changeKey(bardingPath, 35, 60); // Ixion Barding
    overall.changeKey(bardingPath, 36, 25); // Levin Barding
    overall.changeKey(bardingPath, 37, 3); // Lominsan Barding
    overall.changeKey(bardingPath, 38, 4); // Lominsan Crested Barding
    overall.changeKey(bardingPath, 39, 2); // Lominsan Half Barding
    overall.changeKey(bardingPath, 40, 1); // Lominsan Saddle
    overall.changeKey(bardingPath, 41, 64); // Lunar Barding
    overall.changeKey(bardingPath, 42, 76); // Machinist Barding
    overall.changeKey(bardingPath, 43, 49); // Mandervillian Barding
    overall.changeKey(bardingPath, 44, 58); // Nezha Barding
    overall.changeKey(bardingPath, 45, 36); // Noble Barding
    overall.changeKey(bardingPath, 46, 57); // Oriental Barding
    overall.changeKey(bardingPath, 47, 37); // Orthodox Barding
    overall.changeKey(bardingPath, 48, 13); // Paladin Barding
    overall.changeKey(bardingPath, 49, 30); // Paramour Barding
    overall.changeKey(bardingPath, 50, 26); // Plumed Barding
    overall.changeKey(bardingPath, 51, 79); // Queen's Guard Barding
    overall.changeKey(bardingPath, 52, 44); // Race Barding
    overall.changeKey(bardingPath, 53, 61); // Red Mage Barding
    overall.changeKey(bardingPath, 54, 53); // Reveler's Barding
    overall.changeKey(bardingPath, 55, 40); // Round Table Barding
    overall.changeKey(bardingPath, 56, 75); // Ruby Barding
    overall.changeKey(bardingPath, 57, 74); // Saintly Barding
    overall.changeKey(bardingPath, 58, 66); // Samurai Barding
    overall.changeKey(bardingPath, 59, 67); // Seiryu Barding
    overall.changeKey(bardingPath, 60, 41); // Sephirotic Barding
    overall.changeKey(bardingPath, 61, 59); // Shinryu Barding
    overall.changeKey(bardingPath, 62, 16); // Sleipnir Barding
    overall.changeKey(bardingPath, 63, 47); // Sophic Barding
    overall.changeKey(bardingPath, 64, 20); // Sovereign Barding
    overall.changeKey(bardingPath, 65, 21); // Starlight Barding
    overall.changeKey(bardingPath, 66, 65); // Suzaku Barding
    overall.changeKey(bardingPath, 67, 22); // Tidal Barding
    overall.changeKey(bardingPath, 68, 69); // Titania Barding
    overall.changeKey(bardingPath, 69, 77); // True Barding of Light
    overall.changeKey(bardingPath, 70, 11); // Ul'dahn Barding
    overall.changeKey(bardingPath, 71, 12); // Ul'dahn Crested Barding
    overall.changeKey(bardingPath, 72, 10); // Ul'dahn Half Barding
    overall.changeKey(bardingPath, 73, 9); // Ul'dahn Saddle
    overall.changeKey(bardingPath, 74, 15); // White Mage Barding
    overall.changeKey(bardingPath, 75, 39); // Wild Rose Barding
    overall.changeKey(bardingPath, 76, 68); // Yojimbo Barding
    overall.changeKey(bardingPath, 77, 52); // Zurvanite Barding
};
