import type { ChangeStore } from '@service/store/migration/ChangeStore';

/** Minion changes from Generated Resources
 * */
export function migrateMinions(store: ChangeStore): void {
    store.safeChangeKeys(`overall.character.minion-guide`, [
        [249, 3], // Wayward Hatchling
        [218, 9], // Storm Hatchling
        [206, 10], // Serpent Hatchling
        [88, 11], // Flame Hatchling
        [51, 128], // Chocobo Chick Courier
        [27, 54], // Black Chocobo Chick
        [194, 75], // Princely Hatchling
        [106, 106], // Heavy Hatchling
        [46, 237], // Castaway Chocobo Chick
        [461, 461], // Ryunosuke
        [329, 79], // Wind-up Moogle
        [276, 114], // Wind-up Delivery Moogle
        [207, 155], // Set of Primogs
        [221, 199], // Taoist Moogle
        [35, 313], // Bridesmoogle
        [49, 1], // Cherry Bomb
        [24, 148], // Behemoth Heir
        [16, 5], // Baby Behemoth
        [162, 12], // Morbol Seedling
        [234, 13], // Tiny Rat
        [18, 14], // Baby Bun
        [50, 15], // Chigoe Larva
        [253, 17], // Wide-eyed Fawn
        [114, 18], // Infant Imp
        [57, 19], // Coeurl Kitten
        [28, 20], // Black Coeurl
        [104, 22], // Gravel Golem
        [372, 23], // Wind-up Tonberry
        [237, 24], // Tiny Tortoise
        [21, 25], // Baby Raptor
        [15, 26], // Baby Bat
        [232, 27], // Tiny Bulb
        [78, 28], // Dust Bunny
        [280, 29], // Wind-up Dullahan
        [99, 30], // Gigantpole
        [196, 31], // Pudgy Puk
        [37, 32], // Buffalo Calf
        [41, 33], // Cactuar Cutting
        [215, 34], // Smallshell
        [60, 225], // Continental Eye
        [387, 35], // Wolf Pup
        [23, 36], // Beady Eye
        [198, 159], // Pumpkin Butler
        [90, 37], // Fledgling Dodo
        [39480, 473], // Private Pachypodium
        [119, 48], // Kidragora
        [176, 86], // Onion Prince
        [81, 87], // Eggplant Knight
        [95, 88], // Garlic Jester
        [238, 89], // Tomato King
        [146, 90], // Mandragora Queen
        [56, 38], // Coblyn Larva
        [256, 39], // Wind-up Aldgoat
        [89, 40], // Fledgling Apkallu
        [103, 41], // Goobbue Sproutling
        [25, 42], // Bite-sized Pudding
        [66, 44], // Demon Brick
        [151, 45], // Mini Mole
        [222, 46], // Tender Lamb
        [214, 47], // Slime Puddle
        [156, 56], // Minute Mindflayer
        [230, 57], // Tight-beaked Parrot
        [20, 80], // Baby Opo-opo
        [362, 82], // Wind-up Succubus
        [391, 83], // Zu Hatchling
        [241, 93], // Treasure Box
        [171, 102], // Naughty Nanka
        [133, 111], // Littlefoot
        [431, 420], // Wind-up Rudy
        [167, 112], // Mummy's Little Mummy
        [11, 136], // Atrophied Atomos
        [94, 139], // Gaelikitten
        [250, 384], // Weatherproof Gaelicat
        [178, 142], // Page 63
        [115, 143], // Iron Dwarf
        [105, 144], // Griffin Hatchling
        [179, 157], // Paissa Brat
        [180, 372], // Paissa Patissier
        [181, 373], // Paissa Threadpuller
        [209, 163], // Shalloweye
        [124, 166], // Korpokkur Kid
        [44, 178], // Calca
        [36, 179], // Brina
        [163, 180], // Morpho
        [193, 181], // Poro Roggo
        [87, 183], // Fenrir Pup
        [43, 189], // Calamari
        [17, 190], // Baby Brachiosaur
        [184, 194], // Pegasus Colt
        [356, 196], // Wind-up Sasquatch
        [107, 198], // Hecteye
        [208, 216], // Shaggy Shoat
        [38, 226], // Bullpup
        [110, 234], // Hellpup
        [84, 240], // Faepup
        [236, 244], // Tiny Tatsunoko
        [33, 245], // Bombfish
        [117, 254], // Ivon Coeurlfist Doll
        [324, 269], // Wind-up Matanga
        [309, 274], // Wind-up Ixion
        [287, 285], // Wind-up Fafnir
        [229, 287], // The Prince of Anemos
        [61, 295], // Copycat Bulb
        [67, 315], // Dhalmel Calf
        [58, 318], // Conditional Virtue
        [161, 290], // Monkey King
        [166, 312], // Mudpie
        [19, 317], // Baby Gremlin
        [388, 319], // Yukinko Snowflake
        [9, 336], // Armadillo Bowler
        [149, 338], // Micro Gigantender
        [52, 339], // Clionid Larva
        [233, 347], // Tiny Echevore
        [91, 352], // Forgiven Hate
        [22, 353], // Bacon Bits
        [168, 355], // Mystic Weapon
        [153, 357], // Miniature White Knight
        [130, 361], // Little Leannan
        [219, 366], // Sungold Talos
        [140, 367], // Malone
        [83, 385], // Ephemeral Necromancer
        [187, 388], // Petit Pteranodon
        [77, 405], // Drippy
        [242, 406], // Trike
        [5, 377], // Amaro Hatchling
        [424, 423], // Wee Ea
        [419, 433], // Prince Lunatender
        [420, 443], // Royal Lunatender
        [423, 434], // Tiny Troll
        [414, 438], // Greener Gleaner
        [426, 442], // Wind-up Daivadipa
        [429, 424], // Wind-up Magus Sisters
        [425, 426], // Wind-up Anima
        [433, 450], // Hatching Bunny
        [457, 457], // Lumini
        [463, 463], // Sponge Silkie
        [39475, 468], // Sky Blue Back
        [484, 484], // Exciting Dynamite
        [485, 485], // Mikra Lyssa
        [480, 480], // Okuri Chochin
        [55, 165], // Clockwork Twintania
        [264, 78], // Wind-up Bahamut
        [86, 176], // Faustlet
        [217, 147], // Steam-powered Gobwalker G-VII
        [62, 358], // Cute Justice
        [240, 215], // Toy Alexander
        [286, 259], // Wind-up Exdeath
        [311, 281], // Wind-up Kefka
        [175, 305], // OMG
        [340, 344], // Wind-up Omega-M
        [339, 345], // Wind-up Omega-F
        [80, 341], // Eden Minor
        [417, 440], // Nosferatu
        [197, 101], // Puff of Darkness
        [281, 160], // Wind-up Echidna
        [268, 195], // Wind-up Calofisteri
        [357, 232], // Wind-up Scathach
        [59, 299], // Construct 8
        [47, 363], // Cerberpup
        [203, 404], // Save the Princess
        [440, 451], // Wind-up Azeyma
        [39481, 474], // Wind-up Halone
        [494, 494], // Wind-up Oschon
        [235, 94], // Tiny Tapir
        [170, 95], // Nana Bear
        [421, 421], // Squirrel Emperor
        [173, 97], // Nutkin
        [183, 103], // Panda Cub
        [85, 110], // Fat Cat
        [244, 134], // Unicolt
        [128, 141], // Lesser Panda
        [96, 146], // Gestahl
        [79, 197], // Dwarf Rabbit
        [92, 242], // Fox Kit
        [239, 243], // Tora-jiro
        [32, 246], // Bom Boko
        [141, 267], // Mameshiba
        [29, 333], // Black Hayate
        [120, 271], // Koala Joey
        [252, 279], // White Whittret
        [121, 288], // Komainu
        [93, 292], // Frilled Dragon
        [45, 316], // Capybara Pup
        [108, 330], // Hedgehoglet
        [48, 334], // Chameleon
        [506, 506], // Repulu
        [227, 337], // The Great Serpent of Ronka
        [225, 369], // The Behelmeted Serpent of Ronka
        [224, 370], // The Behatted Serpent of Ronka
        [39, 350], // Butterfly Effect
        [148, 356], // Meerkat
        [202, 387], // Sand Fox
        [393, 409], // Anteater
        [412, 422], // Flag
        [416, 428], // Nagxian Cat
        [415, 431], // Hippo Calf
        [411, 432], // Crabe de la Crabe
        [410, 435], // Caduceus
        [434, 445], // Wind-up Kangaroo
        [462, 462], // Pterosquirrel
        [435, 448], // Chewy
        [464, 464], // Sewer Skink
        [39474, 467], // Corgi
        [483, 483], // Chimpanzee
        [486, 486], // Shiromaru
        [490, 490], // Kuromaru
        [10, 115], // Assassin Fry
        [174, 241], // Odder Otter
        [2, 329], // Abroader Otter
        [481, 481], // Posher Otter
        [97, 258], // Ghido
        [201, 272], // Salt & Pepper Seal
        [14, 273], // Axolotl Eft
        [13, 283], // Aurelia Polyp
        [26, 340], // Bitty Duckbill
        [68, 359], // Domakin
        [228, 375], // The Major-General
        [126, 378], // Laladile
        [165, 396], // Much-coveted Mora
        [395, 410], // Dolphin Calf
        [39476, 469], // Suzusaurus
        [479, 479], // Mossasaurus
        [31, 16], // Bluebird
        [69, 121], // Doman Magpie
        [177, 137], // Owlet
        [243, 138], // Ugly Duckling
        [113, 162], // Hunting Hawk
        [185, 164], // Penguin Prince
        [199, 247], // Road Sparrow
        [211, 349], // Shoebill
        [213, 371], // Silver Dasher
        [396, 408], // Gull
        [436, 453], // Blue-footed Booby
        [478, 478], // Puffin
        [491, 491], // Uolosapa
        [345, 53], // Wind-up Qiqirn
        [325, 256], // Wind-up Meateater
        [332, 253], // Wind-up Namazu
        [226, 289], // The Gold Whisker
        [12, 302], // Attendee #777
        [291, 335], // Wind-up Fuath
        [98, 342], // Giant Beaver
        [101, 407], // Golden Beaver
        [427, 439], // Wind-up Grebuloff
        [39479, 472], // Findingway
        [307, 158], // Wind-up Illuminatus
        [303, 362], // Wind-up Hobgoblin
        [298, 49], // Wind-up Goblin
        [377, 123], // Wind-up Violet
        [366, 50], // Wind-up Sylph
        [289, 124], // Wind-up Founder
        [260, 58], // Wind-up Amalj'aa
        [277, 125], // Wind-up Dezul Qualan
        [308, 59], // Wind-up Ixal
        [314, 126], // Wind-up Kobolder
        [313, 60], // Wind-up Kobold
        [358, 127], // Wind-up Sea Devil
        [355, 61], // Wind-up Sahagin
        [376, 175], // Wind-up Vath
        [297, 156], // Wind-up Gnath
        [300, 135], // Wind-up Gundu Warrior
        [386, 172], // Wind-up Zundu Warrior
        [278, 184], // Wind-up Dragonet
        [338, 235], // Wind-up Ohl Deeh
        [315, 266], // Wind-up Kojin
        [350, 323], // Wind-up Redback
        [261, 277], // Wind-up Ananta
        [344, 322], // Wind-up Qalyana
        [336, 326], // Wind-up Nu Mou
        [343, 354], // Wind-up Pixie
        [444, 444], // Wind-up Arkasodara
        [306, 168], // Wind-up Ifrit
        [294, 169], // Wind-up Garuda
        [371, 170], // Wind-up Titan
        [319, 171], // Wind-up Leviathan
        [346, 185], // Wind-up Ramuh
        [361, 186], // Wind-up Shiva
        [337, 76], // Wind-up Odin
        [266, 263], // Wind-up Bismarck
        [348, 265], // Wind-up Ravana
        [364, 261], // Wind-up Susano
        [317, 262], // Wind-up Lakshmi
        [360, 275], // Wind-up Shinryu
        [373, 297], // Wind-up Tsukuyomi
        [40, 284], // Byakko Cub
        [204, 303], // Scarlet Peacock
        [365, 343], // Wind-up Suzaku
        [205, 327], // Seitei
        [482, 482], // Rubellite Weapon
        [493, 493], // Tourmaline Weapon
        [460, 460], // Wind-up Scarmiglione
        [39478, 471], // Wind-up Cagnazzo
        [488, 488], // Wind-up Barbariccia
        [497, 497], // Wind-up Golbez
        [75, 177], // Dress-up Y'shtola
        [34, 331], // Brave New Y'shtola
        [380, 91], // Wind-up Y'shtola
        [326, 98], // Wind-up Minfilia
        [74, 217], // Dress-up Thancred
        [369, 99], // Wind-up Thancred
        [381, 107], // Wind-up Yda
        [322, 248], // Wind-up Lyse
        [342, 108], // Wind-up Papalymo
        [375, 109], // Wind-up Urianger
        [409, 429], // Brave New Urianger
        [320, 118], // Wind-up Louisoix
        [503, 503], // Wind-up Fourchenault
        [259, 130], // Wind-up Alphinaud
        [257, 131], // Wind-up Alisaie
        [70, 218], // Dress-up Alisaie
        [368, 132], // Wind-up Tataru
        [73, 320], // Dress-up Tataru
        [271, 133], // Wind-up Cid
        [316, 192], // Wind-up Krile
        [328, 224], // Wind-up Moenbryda
        [295, 21], // Wind-up Gentleman
        [39483, 476], // Wind-up Godbert
        [318, 71], // Wind-up Leader
        [72, 276], // Dress-up Raubahn
        [333, 84], // Wind-up Nanamo
        [305, 145], // Wind-up Iceheart
        [383, 150], // Wind-up Yugiri
        [76, 249], // Dress-up Yugiri
        [301, 173], // Wind-up Haurchefant
        [334, 174], // Wind-up Nero tol Scaeva
        [263, 193], // Wind-up Aymeric
        [282, 219], // Wind-up Edda
        [285, 228], // Wind-up Estinien
        [71, 360], // Dress-up Estinien
        [299, 250], // Wind-up Gosetsu
        [382, 251], // Wind-up Yotsuyu
        [302, 264], // Wind-up Hien
        [385, 298], // Wind-up Zhloe
        [312, 260], // Wind-up Khloe
        [272, 293], // Wind-up Cirina
        [323, 282], // Wind-up Magnai
        [354, 294], // Wind-up Sadu
        [157, 252], // Mock-up Grynewaht
        [290, 325], // Wind-up Fran
        [293, 306], // Wind-up G'raha Tia
            [353, 332], // Wind-up Ryne
        [279, 376], // Wind-up Dulia-Chai
        [331, 381], // Wind-up Mystel
        [262, 382], // Wind-up Ardbert
        [292, 398], // Wind-up Gaia
        [398, 412], // Senorita Sabotender
        [402, 416], // Wind-up Lyna
        [405, 417], // Wind-up Runar
        [407, 418], // Wind-up Gunnhildr
        [428, 441], // Wind-up Herois
        [455, 455], // Clockwork Solus
        [39484, 477], // Wind-up Aidoneus
        [38453, 465], // Wind-up Philos
        [466, 466], // Wind-up Erichthonios
        [487, 487], // Wind-up Athena
        [501, 501], // Hydaelyn Idol
        [502, 502], // Zodiark Idol
        [296, 85], // Wind-up Gilgamesh
        [82, 122], // Enkidu
        [374, 104], // Wind-up Ultros
        [150, 119], // Midgardsormr
        [304, 229], // Wind-up Hraesvelgr
        [335, 233], // Wind-up Nidhogg
        [432, 430], // Wind-up Vrtra
        [258, 304], // Wind-up Alpha
        [422, 427], // Starbird
        [142, 2], // Mammet #001
        [144, 6], // Mammet #003L
        [143, 7], // Mammet #003G
        [145, 8], // Mammet #003U
        [100, 230], // Gigi
        [42, 4], // Cait Sith Doll
        [283, 64], // Wind-up Edvya
        [186, 151], // Peridot Carbuncle
        [109, 152], // Heliodor Carbuncle
        [269, 191], // Wind-up Cheerleader
        [7, 227], // Angel of Mercy
        [8, 231], // Anima
        [270, 255], // Wind-up Chimera
        [223, 268], // Tengu Doll
        [164, 280], // Motley Egg
        [327, 286], // Wind-up Mithra
        [367, 296], // Wind-up Tarutaru
        [284, 314], // Wind-up Elvaan
        [132, 307], // Little Yin
        [131, 308], // Little Yang
        [129, 368], // Little Leafman
        [6, 374], // Ancient One
        [245, 379], // Unlucky Rabbit
        [456, 456], // Felicitous Fuzzball
        [496, 496], // Vicarious Vacationer
        [255, 52], // Wind-up Airship
        [158, 113], // Model Enterprise
        [160, 43], // Model Vanguard
        [275, 55], // Wind-up Dalamud
        [159, 100], // Model Magitek Bit
        [3, 149], // Accompaniment Node
        [138, 257], // Magitek Avenger F1
        [379, 321], // Wind-up Weapon
        [155, 324], // Minitek Conveyor
        [210, 348], // Sharksucker-class Insubmersible
        [220, 397], // Syldrion-class Insubmersible
        [116, 351], // Ironfrog Ambler
        [139, 383], // Magitek Helldiver F1
        [63, 389], // Dáinsleif F1
        [397, 411], // Magitek Predator F1
        [418, 425], // Optimus Omicron
        [413, 437], // Golden Dhyata
        [439, 446], // Protonaught
        [458, 458], // Clockwork Crimson Chaser
        [459, 459], // Clockwork Cerulean Chaser
        [437, 447], // Teacup Kapikulu
        [39482, 475], // Bantam Train
        [438, 449], // Clockwork Novus D
        [441, 452], // Wind-up Ragnarok
        [274, 51], // Wind-up Cursor
        [330, 236], // Wind-up Moon
        [363, 65], // Wind-up Sun
        [390, 328], // Zephyrous Zabuton
        [189, 66], // Plush Cushion
        [136, 81], // Magic Broom
        [102, 154], // Gold Rush Minecart
        [152, 96], // Miniature Minecart
        [53, 140], // Clockwork Barrow
        [111, 105], // Hoary the Snowman
        [65, 116], // Demon Box
        [137, 188], // Magic Bucket
        [195, 278], // Private Moai
        [54, 291], // Clockwork Lantern
        [231, 346], // Tinker's Bell
        [4, 386], // Allagan Melon
        [394, 413], // Benben Stone
        [400, 414], // Wanderer's Campfire
        [408, 436], // Adventure Basket
        [489, 489], // Goggle-eyed Dogu
        [495, 495], // Kydonia Strolls
        [349, 239], // Wind-up Red Mage
        [154, 67], // Minion of Light
        [378, 77], // Wind-up Warrior of Light
        [288, 167], // Wind-up Firion
        [341, 92], // Wind-up Onion Knight
        [310, 129], // Wind-up Kain
        [216, 182], // Spoony Bard
        [169, 214], // Namingway
        [403, 399], // Wind-up Palom
        [430, 400], // Wind-up Porom
        [401, 401], // Wind-up Edge
        [406, 402], // Wind-up Rydia
        [404, 403], // Wind-up Rosa
        [265, 238], // Wind-up Bartz
        [351, 161], // Wind-up Relm
        [273, 309], // Wind-up Cloud
        [254, 310], // Wind-up Aerith
        [370, 311], // Wind-up Tifa
        [454, 454], // Wind-up PuPu
        [504, 504], // Wind-up Zidane
        [384, 220], // Wind-up Yuna
        [352, 221], // Wind-up Rikku
        [321, 222], // Wind-up Lulu
        [359, 63], // Wind-up Shantotto
        [498, 498], // Torgal Pup
        [347, 270], // Wind-up Ramza
        [248, 117], // Water Imp
        [188, 187], // Piggy
        [127, 380], // Lalinator 5.H0
        [267, 62], // Wind-up Brickman
        [118, 200], // Jibanyan
        [123, 201], // Komasan
        [251, 202], // Whisper
        [30, 203], // Blizzaria
        [125, 204], // Kyubi
        [122, 205], // Komajiro
        [147, 206], // Manjimutt
        [172, 207], // Noko
        [247, 208], // Venoct
        [212, 209], // Shogunyan
        [112, 210], // Hovernyan
        [200, 211], // Robonyan F-type
        [246, 212], // USApyon
        [135, 390], // Lord Enma
        [134, 391], // Lord Ananta
        [389, 392], // Zazel
        [64, 393], // Damona
        [182, 300], // Palico
        [192, 301], // Poogie
        [190, 364], // Pod 054
        [191, 365], // Pod 316
        [0, 394], // 2B Automaton
        [1, 395], // 2P Automaton
        [399, 415], // Smaller Stubby
        [392, 419], // 9S Automaton
        [39477, 470], // Mama Automaton
        [499, 499], // Pink Bean
        [500, 500], // Pegwin
    ]);
}
