import type { ChangeStore } from '@service/store/migration/ChangeStore';

/** Mount changes from Generated Resources
 * */
export function migrateMounts(store: ChangeStore): void {
    store.safeChangeKeys(`overall.character.mount-guide`, [
        [340, 340], // Island Adenium
        [339, 339], // Island Peerifool
        [338, 338], // Quaqua
        [336, 336], // Peatie
        [335, 335], // Garlond GL-IIT
        [334, 334], // Spectral Statice
        [333, 333], // Sabotender De La Luna
        [332, 332], // Lynx of Abyssal Grief
        [330, 330], // Rhiyes
        [329, 329], // Crescent Moon
        [328, 328], // Apocryphal Bahamut
        [326, 326], // Torgal
        [325, 325], // Lynx of Fallen Shadow
        [324, 324], // Magicked Children's Bed
        [323, 323], // Shadow Wolf
        [322, 322], // Shishioji
        [321, 321], // Burabura Chochin
        [320, 320], // Rising Phoenix
        [319, 319], // Megaloambystoma
        [318, 318], // Garlond GL-IS
        [306, 306], // Lynx of Imperious Wind
        [305, 305], // Sunforged
        [302, 302], // Starlight Steed
        [299, 299], // Wondrous Lanner
        [297, 297], // Traveling Supporter
        [290, 290], // UFO
        [282, 282], // Island Buffalo
        [280, 280], // Fylgja
        [279, 279], // Mechanical Lotus
        [277, 277], // Garlond GL-II
        [260, 260], // Island Mandragora Queen
        [259, 259], // Island Tomato King
        [258, 258], // Island Garlic Jester
        [257, 257], // Island Eggplant Knight
        [256, 256], // Island Onion Prince
        [255, 255], // Island Mandragora
        [237, 310], // Set of Ceruleum Balloons
        [236, 313], // Phaethon
        [235, 314], // Pinky
        [234, 292], // Orthos Craklaw
        [233, 285], // Moon-hopper
        [232, 316], // Magitek Avenger G1
        [231, 300], // Magicked Umbrella
        [230, 301], // Magicked Parasol
        [229, 315], // Lynx of Righteous Fire
        [228, 167], // Logistics Node
        [227, 286], // Island Alligator
        [226, 317], // Chrysomallos
        [225, 312], // Blackjack
        [224, 311], // Anden III
        [223, 308], // Aeturna
        [222, 304], // Silkie
        [221, 303], // Sil'dihn Throne
        [220, 298], // Miw Miisv
        [219, 294], // Megashiba
        [218, 293], // Bluefeather Lynx
        [217, 291], // Vinegaroon
        [216, 288], // Troll
        [215, 287], // Hippo Cart
        [214, 284], // Pod 602
        [213, 281], // Alkonost
        [212, 273], // Wivre
        [211, 267], // Victor
        [210, 274], // Porxie King
        [209, 269], // Papa Paissa
        [208, 261], // Lynx of Eternal Darkness
        [207, 262], // Lynx of Divine Light
        [206, 268], // Level Checker
        [205, 264], // Dreadnaught
        [204, 265], // Demi-Phoinix
        [203, 266], // Calydontis
        [202, 237], // Arion
        [201, 263], // Argos
        [200, 254], // Magicked Card
        [199, 246], // Al-iklil
        [198, 212], // Deinonychus
        [197, 253], // Resplendent Vessel of Ronka
        [196, 252], // Gilded Mikoshi
        [195, 250], // Polar Bear
        [194, 249], // Diamond Gwiber
        [193, 247], // Cruise Chaser
        [192, 243], // Antelope Stag
        [191, 242], // Antelope Doe
        [190, 245], // Landerwaffe
        [189, 233], // Lunar Whale
        [188, 73], // Zu
        [187, 125], // Yol
        [186, 29], // Xanthos
        [185, 70], // Wyvern
        [184, 62], // Witch's Broom
        [183, 75], // White Lanner
        [182, 68], // White Devil
        [181, 87], // Whisper-go
        [180, 94], // Whisper A-go-go
        [179, 78], // Warring Lanner
        [178, 32], // Warlion
        [177, 33], // Warbear
        [176, 183], // War Tiger
        [175, 56], // War Panther
        [174, 15], // Unicorn
        [173, 211], // Ufiti
        [172, 150], // Tyrannosaur
        [171, 154], // Typhon
        [170, 59], // Twintania
        [169, 148], // True Griffin
        [168, 190], // Triceratops
        [167, 111], // Syldra
        [166, 195], // Sunspun Cumulus
        [165, 136], // Striped Ray
        [164, 36], // Storm Warsteed
        [163, 99], // Starlight Bear
        [162, 206], // Spriggan Stonecarrier
        [161, 98], // Sophic Lanner
        [160, 232], // Snowman
        [159, 42], // Sleipnir
        [158, 188], // Skyslipper
        [157, 205], // Shadow Gwiber
        [156, 37], // Serpent Warsteed
        [155, 71], // SDS Fenrir
        [154, 53], // Sanuwa
        [153, 168], // Safeguard System
        [152, 180], // Sabotender Emperador
        [151, 217], // Ruby Gwiber
        [150, 220], // Rubellite Carbuncle
        [149, 77], // Round Lanner
        [148, 76], // Rose Lanner
        [147, 223], // Rolling Tankard
        [146, 116], // Reveling Kamuy
        [145, 151], // Regalia Type-G
        [144, 143], // Red Hare
        [143, 69], // Red Baron
        [142, 161], // Rathalos
        [141, 219], // Ramuh
        [140, 102], // Raigo
        [139, 216], // Pteranodon
        [138, 239], // Prototype Roader
        [137, 163], // Prototype Conveyor
        [136, 201], // Portly Porxie
        [135, 67], // Pegasus
        [134, 44], // Parade Chocobo
        [133, 109], // Pack Hellhound
        [132, 114], // Pack Faehound
        [131, 82], // Original Fat Chocobo
        [130, 22], // Nightmare
        [129, 135], // Nezha Chariot
        [128, 97], // Mystic Panda
        [127, 200], // Morbol
        [126, 173], // Model O
        [125, 164], // Mikoshi
        [124, 50], // Midgardsormr
        [123, 203], // Menoetius
        [122, 225], // Megalotragus
        [121, 179], // Maxima Roader
        [120, 40], // Markab
        [119, 146], // Marid
        [118, 93], // Managarm
        [117, 55], // Manacutter
        [116, 176], // Magna Roader
        [115, 174], // Magitek Sky Armor
        [114, 121], // Magitek Predator
        [113, 229], // Magitek Hyperconveyor
        [112, 145], // Magitek Death Claw
        [111, 162], // Magitek Conveyor
        [110, 185], // Magitek Avenger A1
        [109, 141], // Magitek Avenger
        [108, 6], // Magitek Armor
        [107, 175], // Magicked Carpet
        [106, 193], // Magicked Bed
        [105, 158], // Lunar Kamuy
        [104, 108], // Lone Hellhound
        [103, 113], // Lone Faehound
        [102, 48], // Logistics System
        [101, 133], // Legendary Kamuy
        [100, 5], // Legacy Chocobo
        [99, 20], // Laurel Goobbue
        [98, 142], // Korpokkur Kolossus
        [97, 72], // Kongamato
        [96, 47], // Kirin
        [95, 214], // Kingly Peacock
        [94, 181], // Kamuy of the Nine Tails
        [93, 166], // Juedi
        [92, 228], // Jibanyan Couch
        [91, 130], // Ixion
        [90, 191], // Ironfrog Mover
        [89, 192], // Innocent Gwiber
        [88, 160], // Indigo Whale
        [87, 231], // Incitatus
        [86, 218], // Hybodus
        [85, 182], // Hallowed Kamuy
        [84, 226], // Gwiber of Light
        [83, 30], // Gullfaxi
        [82, 54], // Griffin
        [81, 215], // Great Vessel of Ronka
        [80, 170], // Grani
        [79, 95], // Goten
        [78, 4], // Goobbue
        [77, 58], // Gobwalker
        [76, 80], // Gloria-class Airship
        [75, 96], // Ginga
        [74, 21], // Gilded Magitek Armor
        [73, 241], // Gabriel Mark III
        [72, 224], // Gabriel α
        [71, 207], // Forgiven Reticence
        [70, 81], // Flying Cumulus
        [69, 140], // Flying Chair
        [68, 38], // Flame Warsteed
        [67, 105], // Firebird
        [66, 49], // Fenrir
        [65, 171], // Fatter Cat
        [64, 84], // Fat Moogle
        [63, 25], // Fat Chocobo
        [62, 177], // Fat Black Chocobo
        [61, 112], // Falcon
        [60, 189], // Fae Gwiber
        [59, 184], // Eurekan Petrel
        [58, 172], // Euphonious Kamuy
        [57, 202], // Epimetheus
        [56, 31], // Enbarr
        [55, 238], // Emerald Gwiber
        [54, 178], // Eldthurs
        [53, 230], // Ehll Tou
        [52, 106], // Eggshilaration System
        [51, 234], // Eden
        [50, 34], // Draught Chocobo
        [49, 159], // Dodo
        [48, 92], // Disembodied Head
        [47, 35], // Direwolf
        [46, 208], // Dhalmel
        [45, 104], // Demonic Lanner
        [44, 186], // Demi-Ozma
        [43, 90], // Dark Lanner
        [42, 204], // Construct VII
        [41, 248], // Construct VI-S
        [40, 213], // Construct 14
        [39, 1], // Company Chocobo
        [38, 8], // Coeurl
        [37, 86], // Cloud Mallow
        [36, 139], // Citrine Carbuncle
        [35, 194], // Circus Ahriman
        [34, 240], // Chocorpokkur
        [33, 222], // Chocobo Carriage
        [32, 41], // Ceremony Chocobo
        [31, 235], // Cerberus
        [30, 127], // Centurio Tiger
        [29, 26], // Cavalry Elbst
        [28, 19], // Cavalry Drake
        [27, 152], // Broken Heart (right)
        [26, 153], // Broken Heart (left)
        [25, 43], // Boreas
        [24, 27], // Bomb Palanquin
        [23, 115], // Blissful Kamuy
        [22, 100], // Black Pegasus
        [21, 45], // Black Chocobo
        [20, 236], // Big Shell
        [19, 74], // Bennu
        [18, 18], // Behemoth
        [17, 197], // Battle Tiger
        [16, 124], // Battle Panther
        [15, 122], // Battle Lion
        [14, 123], // Battle Bear
        [13, 144], // Auspicious Kamuy
        [12, 83], // Astrope
        [11, 101], // Arrhidaeus
        [10, 110], // Archon Throne
        [9, 138], // Aquamarine Carbuncle
        [8, 52], // Amber Draught Chocobo
        [7, 187], // Amaro
        [6, 126], // Alte Roite
        [5, 209], // Albino Karakul
        [4, 28], // Aithon
        [3, 156], // Air Force
        [2, 9], // Ahriman
        [1, 91], // Aerodynamics System
        [0, 46], // Adamantoise
    ]);
}
