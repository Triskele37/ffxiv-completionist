import { ChangeStore } from '@service/store/migration/ChangeStore';

const PLATE = 'overall.character.adventure-plate';
const PLATE_CLASSJOB = 'overall.character.adventure-plate.class-job';

/** Adventure Plate changes from Generated Resources
 * */
export function migrateAdventurePlate(store: ChangeStore): void {
    migrateClassJob(store);

    // Delete un-seasoned
    store.deleteTask(PLATE, 94); // Final Conflict
    store.deleteTask(PLATE, 95); // Endless Conflict
    store.deleteTask(PLATE, 96); // Rising Conflict
    store.deleteTask(PLATE, 102); // Crystal Conflict
    store.deleteTask(PLATE, 101); // Diamond Conflict
    store.deleteTask(PLATE, 100); // Platinum Conflict
    store.deleteTask(PLATE, 99); // Gold Conflict
    store.deleteTask(PLATE, 98); // Silver Conflict
    store.deleteTask(PLATE, 97); // Bronze Conflict

    store.changeKey(PLATE, 91, 299); // Grand Company 1
    store.changeKey(PLATE, 107, 346); // Grand Company 2
    store.changeKey(PLATE, 112, 347); // Performer
    store.changeKey(PLATE, 90, 298); // Triple Triad
    store.changeKey(PLATE, 153, 573); // Tataru's Bespoke
    store.changeKey(PLATE, 128, 527); // End of an Era
    store.changeKey(PLATE, 115, 467); // Four Lords
    store.changeKey(PLATE, 129, 572); // Twelvefold Blessings

    store.changeKey(PLATE, 130, 567); // Gundu
    store.changeKey(PLATE, 131, 568); // Vath
    store.changeKey(PLATE, 132, 569); // Mogmenders
    store.changeKey(PLATE, 133, 524); // Divine Circle
    store.changeKey(PLATE, 134, 525); // Velodyna Gatekeepers
    store.changeKey(PLATE, 135, 526); // Seven Hundred Seventy-Seven
    store.changeKey(PLATE, 116, 429); // Dreamspinners
    store.changeKey(PLATE, 117, 430); // Stewards
    store.changeKey(PLATE, 118, 431); // Watts's Anvil
    store.changeKey(PLATE, 119, 432); // Hippo Riders
    store.changeKey(PLATE, 113, 344); // Last Dregs
    store.changeKey(PLATE, 120, 433); // Dreaming Ways

    store.changeKey(PLATE, 121, 468); // Island Vacation
    store.changeKey(PLATE, 122, 469); // Island Memories
    store.changeKey(PLATE, 136, 529); // Adventurous Angling
    store.changeKey(PLATE, 137, 530); // Big Fish
    store.changeKey(PLATE, 138, 531); // Mahjong Mastery

    store.changeKey(PLATE, 123, 465); // Eureka Orthos
    store.changeKey(PLATE, 124, 466); // Enaretos
    store.changeKey(PLATE, 114, 343); // Sil'dihn Subterrane (Variant)
    store.changeKey(PLATE, 139, 528); // Mount Rokkon (Variant)
    store.changeKey(PLATE, 140, 574); // Aloalo Island (Variant)
    store.changeKey(PLATE, 108, 319); // Unending Coil of Bahamut
    store.changeKey(PLATE, 109, 320); // Weapon's Refrain
    store.changeKey(PLATE, 110, 321); // Epic of Alexander
    store.changeKey(PLATE, 111, 322); // Dragonsong's Reprise
    store.changeKey(PLATE, 125, 434); // Omega Protocol

    store.changeKey(PLATE, 141, 570); // Wondrous Whimsy
    store.changeKey(PLATE, 142, 571); // Fantastic Faux
    store.changeKey(PLATE, 143, 575); // Blunderful
    store.changeKey(PLATE, 144, 576); // Blunderous
    store.changeKey(PLATE, 145, 577); // Blunder-villed
    store.changeKey(PLATE, 146, 607); // Yo-kai Watch

    store.changeKey(PLATE, 92, 143); // Team Astra
    store.changeKey(PLATE, 93, 144); // Team Umbra
    store.changeKey(PLATE, 105, 341); // Azure Conflict
    store.changeKey(PLATE, 106, 342); // Crimson Conflict
    store.changeKey(PLATE, 126, 427); // Falcons
    store.changeKey(PLATE, 127, 428); // Ravens
    store.changeKey(PLATE, 147, 520); // Aramitama Waves
    store.changeKey(PLATE, 148, 521); // Nigimitama Waves
    store.changeKey(PLATE, 149, 578); // Palaistra
    store.changeKey(PLATE, 150, 579); // Cloud Nine

    store.changeKey(PLATE, 151, 523); // Ten Year Anniversary
    store.changeKey(PLATE, 103, 154); // Companion 1
    store.changeKey(PLATE, 104, 155); // Companion 2
}

function moveAndChange(
    store: ChangeStore,
    from: string,
    to: string,
    idPairs: [number, number][]
) {
    idPairs.forEach(([oldId, newId]) => {
        store.moveTask(from, to, oldId);
        store.changeKey(to, oldId, newId, true);
    });
}

function migrateClassJob(store: ChangeStore): void {
    moveAndChange(store, PLATE, PLATE_CLASSJOB, [
        [0, 156], // Gladiator
        [4, 157], // Marauder
        [14, 158], // Conjurer
        [18, 164], // Arcanist
        [28, 159], // Pugilist
        [32, 160], // Lancer
        [36, 161], // Rogue
        [46, 162], // Archer
        [56, 163], // Thaumaturge

        [68, 268], // Carpenter
        [70, 269], // Blacksmith
        [72, 270], // Armorer
        [74, 271], // Goldsmith
        [76, 272], // Leatherworker
        [78, 273], // Weaver
        [80, 274], // Alchemist
        [82, 275], // Culinarian
        [84, 285], // Miner
        [86, 286], // Botanist
        [88, 287], // Fisher

        [1, 300], // Paladin
        [5, 301], // Warrior
        [8, 302], // Dark Knight
        [11, 303], // Gunbreaker
        [15, 304], // White Mage
        [19, 305], // Scholar
        [22, 306], // Astrologian
        [25, 307], // Sage
        [29, 308], // Monk
        [33, 309], // Dragoon
        [37, 310], // Ninja
        [40, 311], // Samurai
        [43, 312], // Reaper
        [47, 313], // Bard
        [50, 314], // Machinist
        [53, 315], // Dancer
        [57, 316], // Black Mage
        [60, 317], // Summoner
        [63, 318], // Red Mage
        [66, 232], // Blue Mage

        [2, 165], // Paladin (Simple)
        [6, 166], // Warrior (Simple)
        [9, 167], // Dark Knight (Simple)
        [12, 168], // Gunbreaker (Simple)
        [16, 169], // White Mage (Simple)
        [20, 170], // Scholar (Simple)
        [23, 171], // Astrologian (Simple)
        [26, 172], // Sage (Simple)
        [30, 173], // Monk (Simple)
        [34, 174], // Dragoon (Simple)
        [38, 175], // Ninja (Simple)
        [41, 176], // Samurai (Simple)
        [44, 177], // Reaper (Simple)
        [48, 178], // Bard (Simple)
        [51, 179], // Machinist (Simple)
        [54, 180], // Dancer (Simple)
        [58, 181], // Black Mage (Simple)
        [61, 182], // Summoner (Simple)
        [64, 183], // Red Mage (Simple)
        [67, 184], // Blue Mage (Simple)

        [69, 244], // Carpenter (Simple)
        [71, 245], // Blacksmith (Simple)
        [73, 246], // Armorer (Simple)
        [75, 247], // Goldsmith (Simple)
        [77, 248], // Leatherworker (Simple)
        [79, 249], // Weaver (Simple)
        [81, 250], // Alchemist (Simple)
        [83, 251], // Culinarian (Simple)
        [85, 276], // Miner (Simple)
        [87, 277], // Botanist (Simple)
        [89, 278], // Fisher (Simple)

        [3, 124], // Paladin (Ornate)
        [7, 125], // Warrior (Ornate)
        [10, 126], // Dark Knight (Ornate)
        [13, 127], // Gunbreaker (Ornate)
        [17, 128], // White Mage (Ornate)
        [21, 129], // Scholar (Ornate)
        [24, 130], // Astrologian (Ornate)
        [27, 131], // Sage (Ornate)
        [31, 132], // Monk (Ornate)
        [35, 133], // Dragoon (Ornate)
        [39, 134], // Ninja (Ornate)
        [42, 135], // Samurai (Ornate)
        [45, 136], // Reaper (Ornate)
        [49, 137], // Bard (Ornate)
        [52, 138], // Machinist (Ornate)
        [55, 139], // Dancer (Ornate)
        [59, 140], // Black Mage (Ornate)
        [62, 141], // Summoner (Ornate)
        [65, 142], // Red Mage (Ornate)
        [152, 522], // Blue Mage (Ornate)
    ]);
}
