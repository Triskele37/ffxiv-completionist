import type { ChangeStore } from '@service/store/migration/ChangeStore';

const PLATE = 'overall.character.adventure-plate';
const PLATE_CLASSJOB = 'overall.character.adventure-plate.class-job';

/** Adventure Plate changes from Generated Resources
 * */
export function migrateAdventurePlate(store: ChangeStore): void {
    migrateGeneral(store);
    migrateClassJob(store);
    migrateMinion(store);
    migratePvp(store);
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

function migrateGeneral(store: ChangeStore): void {
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

function migrateMinion(store: ChangeStore): void {
    const minionToApMap = {
        3: 349, // Wayward Hatchling
        106: 435, // Heavy Hatchling
        79: 364, // Wind-up Moogle
        1: 350, // Cherry Bomb
        5: 351, // Baby Behemoth
        12: 352, // Morbol Seedling
        13: 650, // Tiny Rat
        14: 651, // Baby Bun
        15: 652, // Chigoe Larva
        19: 361, // Coeurl Kitten
        20: 653, // Black Coeurl
        22: 541, // Gravel Golem
        23: 362, // Wind-up Tonberry
        25: 654, // Baby Raptor
        28: 353, // Dust Bunny
        33: 354, // Cactuar Cutting
        34: 355, // Smallshell
        35: 360, // Wolf Pup
        37: 380, // Fledgling Dodo
        48: 383, // Kidragora
        86: 387, // Onion Prince
        87: 388, // Eggplant Knight
        88: 389, // Garlic Jester
        89: 390, // Tomato King
        90: 391, // Mandragora Queen
        473: 534, // Private Pachypodium
        38: 645, // Coblyn Larva
        40: 381, // Fledgling Apkallu
        41: 356, // Goobbue Sproutling
        44: 357, // Demon Brick
        46: 382, // Tender Lamb
        47: 436, // Slime Puddle
        56: 655, // Minute Mindflayer
        57: 384, // Tight-beaked Parrot
        80: 437, // Baby Opo-opo
        82: 385, // Wind-up Succubus
        111: 438, // Littlefoot
        112: 542, // Mummy's Little Mummy
        136: 394, // Atrophied Atomos
        139: 395, // Gaelikitten
        384: 474, // Weatherproof Gaelicat
        157: 369, // Paissa Brat
        163: 439, // Shalloweye
        166: 370, // Korpokkur Kid
        180: 440, // Morpho
        181: 441, // Poro Roggo
        183: 543, // Fenrir Pup
        216: 399, // Shaggy Shoat
        319: 402, // Yukinko Snowflake
        353: 405, // Bacon Bits
        361: 544, // Little Leannan
        405: 442, // Drippy
        433: 734, // Prince Lunatender
        443: 736, // Royal Lunatender
        438: 482, // Greener Gleaner
        463: 472, // Sponge Silkie
        517: 750, // Tankardtender
        305: 489, // OMG
        344: 487, // Wind-up Omega-M
        345: 488, // Wind-up Omega-F
        451: 538, // Wind-up Azeyma
        474: 539, // Wind-up Halone
        494: 540, // Wind-up Oschon
        95: 475, // Nana Bear
        97: 365, // Nutkin
        110: 366, // Fat Cat
        134: 656, // Unicolt
        141: 396, // Lesser Panda
        146: 657, // Gestahl
        197: 545, // Dwarf Rabbit
        242: 403, // Fox Kit
        246: 443, // Bom Boko
        267: 374, // Mameshiba
        333: 476, // Black Hayate
        271: 477, // Koala Joey
        316: 478, // Capybara Pup
        330: 444, // Hedgehoglet
        506: 643, // Repulu
        337: 375, // Great Serpent of Ronka
        356: 546, // Meerkat
        387: 406, // Sand Fox
        422: 479, // Flag
        428: 731, // Nagxian Cat
        432: 733, // Crabe de la Crabe
        462: 445, // Pterosquirrel
        448: 473, // Chewy
        467: 480, // Corgi
        483: 649, // Chimpanzee
        486: 535, // Shiromaru
        490: 536, // Kuromaru
        509: 745, // Alpaca Cria
        512: 746, // Ilyikty'i
        514: 748, // Squeak the Coyote
        518: 751, // Bluecoat Cat
        115: 547, // Assassin Fry
        241: 371, // Odder Otter
        258: 446, // Ghido
        272: 447, // Salt & Pepper Seal
        273: 448, // Axolotl Eft
        340: 449, // Bitty Duckbill
        375: 377, // Major-General
        396: 407, // Much-coveted Mora
        410: 729, // Dolphin Calf
        16: 379, // Bluebird
        137: 548, // Owlet
        138: 450, // Ugly Duckling
        162: 549, // Hunting Hawk
        164: 397, // Penguin Prince
        247: 400, // Road Sparrow
        349: 404, // Shoebill
        371: 481, // Silver Dasher
        453: 550, // Blue-footed Booby
        478: 648, // Puffin
        491: 644, // Uolosapa
        513: 747, // Quetzal
        53: 359, // Wind-up Qiqirn
        253: 372, // Wind-up Namazu
        342: 376, // Giant Beaver
        439: 484, // Wind-up Grebuloff
        472: 485, // Findingway
        444: 483, // Wind-up Arkasodara
        284: 451, // Byakko Cub
        303: 452, // Scarlet Peacock
        343: 669, // Wind-up Suzaku
        327: 453, // Seitei
        91: 454, // Wind-up Y'shtola
        177: 551, // Dress-up Y'shtola
        331: 670, // Brave New Y'shtola
        98: 455, // Wind-up Minfilia
        99: 456, // Wind-up Thancred
        217: 552, // Dress-up Thancred
        107: 457, // Wind-up Yda
        248: 658, // Wind-up Lyse
        108: 458, // Wind-up Papalymo
        109: 459, // Wind-up Urianger
        429: 671, // Brave New Urianger
        118: 553, // Wind-up Louisoix
        503: 744, // Wind-up Fourchenault
        130: 460, // Wind-up Alphinaud
        131: 461, // Wind-up Alisaie
        218: 554, // Dress-up Alisaie
        132: 462, // Wind-up Tataru
        320: 668, // Dress-up Tataru
        133: 463, // Wind-up Cid
        192: 491, // Wind-up Krile
        525: 753, // Brushed-up Krile
        224: 492, // Wind-up Moenbryda
        21: 493, // Wind-up Gentleman
        476: 555, // Wind-up Godbert
        276: 664, // Dress-up Raubahn
        84: 494, // Wind-up Nanamo
        145: 556, // Wind-up Iceheart
        150: 557, // Wind-up Yugiri
        249: 660, // Dress-up Yugiri
        173: 495, // Wind-up Haurchefant
        174: 498, // Wind-up Nero tol Scaeva
        193: 496, // Wind-up Aymeric
        219: 558, // Wind-up Edda
        228: 497, // Wind-up Estinien
        360: 672, // Dress-up Estinien
        250: 661, // Wind-up Gosetsu
        251: 662, // Wind-up Yotsuyu
        264: 659, // Wind-up Hien
        298: 559, // Wind-up Zhloe
        260: 373, // Wind-up Khloe
        293: 666, // Wind-up Cirina
        282: 665, // Wind-up Magnai
        294: 667, // Wind-up Sadu
        252: 663, // Mock-up Grynewaht
        306: 560, // Wind-up G'raha Tia
        332: 676, // Wind-up Ryne
        376: 675, // Wind-up Dulia-Chai
        381: 678, // Wind-up Mystel
        382: 679, // Wind-up Ardbert
        398: 677, // Wind-up Gaia
        416: 673, // Wind-up Lyna
        417: 674, // Wind-up Runar
        441: 735, // Wind-up Herois
        455: 680, // Clockwork Solus
        477: 739, // Wind-up Aidoneus
        465: 737, // Wind-up Philos
        466: 738, // Wind-up Erichthonios
        487: 740, // Wind-up Athena
        526: 754, // Wind-up Zero
        527: 755, // Wind-up Erenville
        501: 742, // Hydaelyn Idol
        502: 743, // Zodiark Idol
        85: 386, // Wind-up Gilgamesh
        122: 393, // Enkidu
        104: 392, // Wind-up Ultros
        119: 561, // Midgardsormr
        229: 562, // Wind-up Hraesvelgr
        233: 563, // Wind-up Nidhogg
        430: 732, // Wind-up Vrtra
        304: 490, // Wind-up Alpha
        427: 730, // Starbird
        2: 348, // Mammet #001
        4: 378, // Cait Sith Doll
        255: 401, // Wind-up Chimera
        456: 464, // Felicitous Fuzzball
        496: 741, // Vicarious Vacationer
        149: 368, // Accompaniment Node
        425: 486, // Optimus Omicron
        522: 752, // Tin Sentry T1
        51: 358, // Wind-up Cursor
        81: 363, // Magic Broom
        278: 537, // Private Moai
        495: 646, // Kydonia Strolls
        516: 749, // Cornservant
        454: 647, // Wind-up PuPu
        498: 566, // Torgal Pup
        117: 367, // Water Imp
        187: 398, // Piggy
        499: 564, // Pink Bean
        500: 565, // Pegwin
    };

    const MINION = `overall.character.minion-guide`;
    const ACCENT = `overall.character.adventure-plate.minion`;
    Object.entries(minionToApMap).forEach(([minionId, accentId]) => {
        const hasMinion = store.getTask(MINION, minionId) === 'Y';
        if(hasMinion) store.setTask(ACCENT, accentId, 'Y');
    });

    // Wind-up Leader unlocks 3 accents
    if(store.getTask(MINION, 71) === 'Y') {
        store.setTask(ACCENT, 501, 'Y');
        store.setTask(ACCENT, 500, 'Y');
        store.setTask(ACCENT, 499, 'Y');
    }
}

function migratePvp(store: ChangeStore): void {
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
}
