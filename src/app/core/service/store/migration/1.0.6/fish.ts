import { ChangeStore } from '@service/store/migration/ChangeStore';

const GUIDE = 'overall.logs.gathering.fishing-guide';
const FISHING = `${GUIDE}.fishing`;
const SPEARFISHING = `${GUIDE}.spearfishing`;

/**
 * Fishing guide key changes from Generated Resources
 */
export function migrateFishingGuide(store: ChangeStore): void {
    migrateFishFish(store);
    migrateSpearfishing(store);
}

function migrateFishFish(store: ChangeStore): void {
    store.safeChangeKeys(`${FISHING}.page-1`, [
        [0, 1], // Malm Kelp
        [1, 2], // Crayfish
        [2, 3], // Chub
        [3, 4], // Merlthor Goby
        [4, 5], // Lominsan Anchovy
        [5, 6], // Striped Goby
        [6, 7], // Dwarf Catfish
        [7, 8], // Finger Shrimp
        [8, 9], // Bone Crayfish
        [9, 10], // White Coral
        [10, 11], // Princess Trout
        [11, 12], // Ocean Cloud
        [12, 13], // Dusk Goby
        [13, 14], // Sea Cucumber
        [14, 15], // Harbor Herring
        [15, 16], // Pipira
        [16, 17], // Crimson Crayfish
        [17, 18], // Vongola Clam
        [18, 19], // Gudgeon
        [19, 20], // Coral Butterfly
        [20, 21], // Brass Loach
        [21, 22], // Moraby Flounder
        [22, 23], // Maiden Carp
        [23, 24], // Abalathian Smelt
        [24, 25], // Blindfish
        [25, 26], // Pebble Crab
        [26, 27], // Mudskipper
        [27, 28], // Rainbow Trout
        [28, 29], // River Crab
        [29, 30], // Tiger Cod
        [30, 31], // Ala Mhigan Fighting Fish
        [31, 32], // Helmet Crab
        [32, 33], // Faerie Bass
        [33, 34], // Acorn Snail
        [34, 35], // Rothlyt Oyster
        [35, 36], // Dark Sleeper
        [36, 37], // La Noscean Perch
        [37, 38], // Navigator's Dagger
        [38, 39], // Moat Carp
        [39, 40], // Angelfish
        [40, 41], // Copperfish
        [41, 42], // Bluebell Salmon
        [42, 43], // Razor Clam
        [43, 44], // Mudcrab
        [44, 45], // Blue Octopus
        [45, 46], // Tricolored Carp
        [46, 47], // Eunuch Crayfish
        [47, 48], // Jade Eel
        [48, 49], // Blowfish
        [49, 50], // Pond Mussel
        [50, 51], // Warmwater Trout
        [51, 52], // Glass Perch
        [52, 53], // Four-eyed Fish
        [53, 54], // Saber Sardine
        [54, 55], // Black Eel
        [55, 56], // Dark Bass
        [56, 57], // Blue Coral
        [57, 58], // Ogre Barracuda
        [58, 59], // Aegis Shrimp
        [59, 60], // Five-ilm Pleco
        [60, 61], // Monkfish
        [61, 62], // Sea Bo
        [62, 63], // Climbing Perch
        [63, 64], // Shadow Catfish
        [64, 65], // Bianaq Bream
        [65, 66], // Black Ghost
        [66, 67], // Black Sole
        [67, 68], // Lamprey
        [68, 69], // Plaguefish
        [69, 70], // Hammerhead Shark
        [70, 71], // Yugr'am Salmon
        [71, 72], // Sea Pickle
        [72, 73], // Spotted Pleco
        [73, 74], // Lamp Marimo
        [74, 75], // Indigo Herring
        [75, 76], // Ropefish
        [76, 77], // Ash Tuna
        [77, 78], // Grip Killifish
        [78, 79], // Bone Cleaner
        [79, 80], // Root Skipper
        [80, 81], // Leafy Seadragon
        [81, 82], // Bonytongue
        [82, 83], // Fullmoon Sardine
        [83, 84], // Mitten Crab
        [84, 85], // Haraldr Haddock
        [85, 86], // Monke Onke
        [86, 87], // Seema
        [87, 88], // Whitelip Oyster
        [88, 89], // Sandfish
        [89, 90], // Silverfish
        [90, 91], // Clown Loach
        [91, 92], // Sand Bream
        [92, 93], // Lavender Remora
        [93, 94], // Armored Pleco
        [94, 95], // Giant Bass
        [95, 96], // Desert Catfish
        [96, 97], // Balloonfish
        [97, 98], // Velodyna Carp
        [98, 99], // Spotted Puffer
        [99, 100], // Dustfish
    ]);

    store.safeChangeKeys(`${FISHING}.page-2`, [
        [0, 101], // Golden Loach
        [1, 102], // Storm Rider
        [2, 103], // Trader Eel
        [3, 104], // Crimson Trout
        [4, 105], // Discus
        [5, 106], // Antlion Slug
        [6, 107], // Red Coral
        [7, 108], // Bronze Lake Trout
        [8, 109], // Ignus Snail
        [9, 110], // Dune Manta
        [10, 111], // Silver Shark
        [11, 112], // Loyal Pleco
        [12, 113], // Thunderbolt Sculpin
        [13, 114], // Fall Jumper
        [14, 115], // Knifefish
        [15, 116], // Wahoo
        [16, 117], // Raincaller
        [17, 118], // Oakroot
        [18, 119], // Common Sculpin
        [19, 120], // Blacklip Oyster
        [20, 121], // Southern Pike
        [21, 122], // Northern Pike
        [22, 123], // Kobold Puffer
        [23, 124], // Nautilus
        [24, 125], // Archerfish
        [25, 126], // Cloud Jellyfish
        [26, 127], // Goblin Perch
        [27, 128], // Agelyss Carp
        [28, 129], // Pike Eel
        [29, 130], // Assassin Betta
        [30, 131], // Sludgeskipper
        [31, 132], // Skyfish
        [32, 133], // Mummer Wrasse
        [33, 134], // Cloud Cutter
        [34, 135], // Boltfish
        [35, 136], // Garpike
        [36, 137], // Blind Manta
        [37, 138], // Plaice
        [38, 139], // Ilsabardian Bass
        [39, 140], // Paglth'an Discus
        [40, 141], // Boxing Pleco
        [41, 142], // Rift Sailor
        [42, 143], // Sea Devil
        [43, 144], // Kissing Trout
        [44, 145], // Angry Pike
        [45, 146], // Goldfish
        [46, 147], // Sagolii Monkfish
        [47, 148], // Saucerfish
        [48, 149], // Rock Lobster
        [49, 150], // Vampire Lampern
        [50, 151], // Wandering Sculpin
        [51, 152], // Goosefish
        [52, 153], // Cave Cherax
        [53, 154], // Coeurlfish
        [54, 155], // Little Thalaos
        [55, 156], // Shall Shell
        [56, 157], // Giant Donko
        [57, 158], // Sundisc
        [58, 159], // Mahi-mahi
        [59, 160], // Halibut
        [60, 161], // Alligator Garfish
        [61, 162], // Wootz Knifefish
        [62, 163], // Giant Catfish
        [63, 164], // Caravan Eel
        [64, 165], // Mazlaya Marlin
        [65, 166], // Coelacanth
        [66, 167], // Cadaver Carp
        [67, 168], // Rhamphorhynchus
        [68, 169], // Giant Squid
        [69, 170], // Gigant Octopus
        [70, 171], // Sunfish
        [71, 172], // Dinichthys
        [72, 173], // Mushroom Crab
        [73, 174], // Judgment Staff
        [74, 175], // Poxpike
        [75, 176], // Emperor Fish
        [76, 177], // Bowfin
        [77, 178], // Heliobatis
        [78, 179], // Megalodon
        [79, 180], // Titanic Sawfish
        [80, 181], // Takitaro
        [81, 182], // Pirarucu
        [82, 183], // Morinabaligi
        [83, 184], // Jungle Catfish
        [84, 185], // Tiny Tortoise
        [85, 186], // Gigantpole
        [86, 187], // Zalera
        [87, 188], // Beguiler Chub
        [88, 189], // Oschon's Print
        [89, 190], // Caterwauler
        [90, 191], // Crystal Perch
        [91, 192], // Moldva
        [92, 193], // Junkmonger
        [93, 194], // Goldenfin
        [94, 195], // Gigantshark
        [95, 196], // Armorer
        [96, 197], // Great Gudgeon
        [97, 198], // Dark Knight
        [98, 199], // Silver Sovereign
        [99, 200], // Sabertooth Cod
    ]);

    store.safeChangeKeys(`${FISHING}.page-3`, [
        [0, 201], // Dream Goby
        [1, 202], // Navigator's Brand
        [2, 203], // Dark Ambusher
        [3, 204], // Judgeray
        [4, 205], // Bloody Brewer
        [5, 206], // Faerie Queen
        [6, 207], // Slime King
        [7, 208], // Blue Widow
        [8, 209], // Ghost Carp
        [9, 210], // Carp Diem
        [10, 211], // Mud Pilgrim
        [11, 212], // Old Softie
        [12, 213], // Marrow Sucker
        [13, 214], // Chirurgeon
        [14, 215], // Mud Golem
        [15, 216], // Octomammoth
        [16, 217], // Matron Carp
        [17, 218], // High Perch
        [18, 219], // Syldra
        [19, 220], // Rivet Oyster
        [20, 221], // Jacques the Snipper
        [21, 222], // Stormdancer
        [22, 223], // Glimmerscale
        [23, 224], // Cupfish
        [24, 225], // Meteor Survivor
        [25, 226], // Joan of Trout
        [26, 227], // Toramafish
        [27, 228], // Fingers
        [28, 229], // The Assassin
        [29, 230], // Vip Viper
        [30, 231], // The Greatest Bream in the World
        [31, 232], // Dirty Herry
        [32, 233], // Old Hollow Eyes
        [33, 234], // Sylphsbane
        [34, 235], // Floating Boulder
        [35, 236], // The Grinner
        [36, 237], // Shark Tuna
        [37, 238], // Worm of Nym
        [38, 239], // Twitchbeard
        [39, 240], // The Warden's Wand
        [40, 241], // Spearnose
        [41, 242], // Levinlight
        [42, 243], // The Sinker
        [43, 244], // The Gobfather
        [44, 245], // Sweetnewt
        [45, 246], // Bombardfish
        [46, 247], // The Salter
        [47, 248], // The Lone Ripper
        [48, 249], // King of the Spring
        [49, 250], // Discobolus
        [50, 251], // Iron Noose
        [51, 252], // Olgoi-Khorkhoi
        [52, 253], // Magic Carpet
        [53, 254], // Daniffen's Mark
        [54, 255], // Charon's Lantern
        [55, 256], // The Green Jester
        [56, 257], // Bloodbath
        [57, 258], // Son of Levin
        [58, 259], // Thundergut
        [59, 260], // The Drowned Sniper
        [60, 261], // The Terpsichorean
        [61, 262], // Mirrorscale
        [62, 263], // Helmsman's Hand
        [63, 264], // The Thousand-year Itch
        [64, 265], // Hannibal
        [65, 266], // Dawn Maiden
        [66, 267], // Starbright
        [67, 268], // The Matriarch
        [68, 269], // Shadowstreak
        [69, 270], // The Captain's Chalice
        [70, 271], // Anomalocaris
        [71, 272], // Frilled Shark
        [72, 273], // Aetherlouse
        [73, 274], // Imperial Goldfish
        [74, 275], // The Old Man in the Sea
        [75, 276], // Nepto Dragon
        [76, 277], // Coelacanthus
        [77, 278], // Endoceras
        [78, 279], // Seahag
        [79, 280], // Ignus Horn
        [80, 281], // Void Bass
        [81, 282], // Cornelia
        [82, 283], // Ninja Betta
        [83, 284], // Canavan
        [84, 285], // Kuno the Killer
        [85, 286], // Pirate's Bane
        [86, 287], // Ndendecki
        [87, 288], // Bat-o'-Nine-Tails
        [88, 289], // Wootz Knifefish Zenith
        [89, 290], // Helicoprion
        [90, 291], // Darkstar
        [91, 292], // Blue Corpse
        [92, 293], // Mahar
        [93, 294], // Shonisaurus
        [94, 295], // Magicked Mushroom
        [95, 296], // Giant Takitaro
        [96, 297], // Namitaro
        [97, 298], // Blood Red Bonytongue
        [98, 299], // Gigant Clam
        [99, 300], // Icepick
    ]);

    store.safeChangeKeys(`${FISHING}.page-4`, [
        [0, 301], // Cloud Coral
        [1, 302], // Ice Faerie
        [2, 303], // Skyworm
        [3, 304], // Coerthan Crab
        [4, 305], // Fanged Clam
        [5, 306], // Lake Urchin
        [6, 307], // Whilom Catfish
        [7, 308], // Blueclaw Shrimp
        [8, 309], // Starflower
        [9, 310], // Glacier Core
        [10, 311], // Ogre Horn Snail
        [11, 312], // Sorcerer Fish
        [12, 313], // Hotrod
        [13, 314], // Maiboi
        [14, 315], // Three-lip Carp
        [15, 316], // Bullfrog
        [16, 317], // Cloudfish
        [17, 318], // Mahu Wai
        [18, 319], // Rock Mussel
        [19, 320], // Buoyant Oviform
        [20, 321], // Whiteloom
        [21, 322], // Blue Cloud Coral
        [22, 323], // Seema Patrician
        [23, 324], // Ammonite
        [24, 325], // Bubble Eye
        [25, 326], // Grass Carp
        [26, 327], // Pipira Pira
        [27, 328], // Dravanian Squeaker
        [28, 329], // Kissing Fish
        [29, 330], // Mitre Slug
        [30, 331], // Lava Crab
        [31, 332], // Storm Core
        [32, 333], // Scholar Sculpin
        [33, 334], // Gigant Grouper
        [34, 335], // Vanuhead
        [35, 336], // Marble Oscar
        [36, 337], // Lungfish
        [37, 338], // Tigerfish
        [38, 339], // Sky Faerie
        [39, 340], // Granite Crab
        [40, 341], // Aithon's Colt
        [41, 342], // Shipworm
        [42, 343], // Hedgemole Cricket
        [43, 344], // Mogpom
        [44, 345], // Magma Tree
        [45, 346], // Cloud Rider
        [46, 347], // Dravanian Bass
        [47, 348], // Coerthan Puffer
        [48, 349], // Snowcaller
        [49, 350], // Dragonhead
        [50, 351], // Mercy Staff
        [51, 352], // Rime Eater
        [52, 353], // Warmwater Bichir
        [53, 354], // Noontide Oscar
        [54, 355], // Shadowhisker
        [55, 356], // Gobbie Mask
        [56, 357], // Blue Medusa
        [57, 358], // Cindersmith
        [58, 359], // Bullwhip
        [59, 360], // Tiny Axolotl
        [60, 361], // High Allagan Helmet
        [61, 362], // Platinum Fish
        [62, 363], // Aether Eye
        [63, 364], // Azysfish
        [64, 365], // Crystalfin
        [65, 366], // Sweetfish
        [66, 367], // Orn Butterfly
        [67, 368], // Hundred Fin
        [68, 369], // Autumn Leaf
        [69, 370], // Manasail
        [70, 371], // Sky Sweeper
        [71, 372], // Magma Louse
        [72, 373], // Cometoise
        [73, 374], // Aetherochemical Compound #123
        [74, 375], // Brown Bolo
        [75, 376], // Philosopher's Stone
        [76, 377], // Fountfish
        [77, 378], // Weston Bowfin
        [78, 379], // Letter Puffer
        [79, 380], // Star Faerie
        [80, 381], // Gloaming Coral
        [81, 382], // Albino Octopus
        [82, 383], // Dragon's Soul
        [83, 384], // Tornado Shark
        [84, 385], // Warballoon
        [85, 386], // Fossiltongue
        [86, 387], // Proto-hropken
        [87, 388], // Caiman
        [88, 389], // Euphotic Pirarucu
        [89, 390], // Illuminati Perch
        [90, 391], // Rudderfish
        [91, 392], // Bomb Puffer
        [92, 393], // Mucous Minnow
        [93, 394], // Unidentified Flying Biomass
        [94, 395], // Hospitalier Fish
        [95, 396], // Scorpionfly
        [96, 397], // Rockclimber
        [97, 398], // Blood Skipper
        [98, 399], // Cobrafish
        [99, 400], // Moogle Spirit
    ]);

    store.safeChangeKeys(`${FISHING}.page-5`, [
        [0, 401], // Oil Eel
        [1, 402], // Jeweled Jellyfish
        [2, 403], // Battle Galley
        [3, 404], // Yalm Lobster
        [4, 405], // Hinterlands Perch
        [5, 406], // Oven Catfish
        [6, 407], // Pteranodon
        [7, 408], // Winged Gurnard
        [8, 409], // Spring Urchin
        [9, 410], // Cherry Trout
        [10, 411], // Stupendemys
        [11, 412], // Black Magefish
        [12, 413], // Barreleye
        [13, 414], // Thunderbolt Eel
        [14, 415], // Catkiller
        [15, 416], // Loosetongue
        [16, 417], // Thaliak Caiman
        [17, 418], // Lavalord
        [18, 419], // Tupuxuara
        [19, 420], // Vampiric Tapestry
        [20, 421], // Storm Chaser
        [21, 422], // Berserker Betta
        [22, 423], // Capelin
        [23, 424], // Functional Proto-hropken
        [24, 425], // Coerthan Clione
        [25, 426], // Dravanian Smelt
        [26, 427], // Heavens Coral
        [27, 428], // Sunsail
        [28, 429], // Goblin Bass
        [29, 430], // Lava Snail
        [30, 431], // Amber Salamander
        [31, 432], // Gnomefish
        [32, 433], // Fleece Stingray
        [33, 434], // Nyctosaur
        [34, 435], // Priestfish
        [35, 436], // Coerthan Oyster
        [36, 437], // Oliphant's Trunk
        [37, 438], // Mountain Kraken
        [38, 439], // Armored Catfish
        [39, 440], // Magic Bucket
        [40, 441], // Fat Purse
        [41, 442], // The Impaler
        [42, 443], // La Reale
        [43, 444], // Scaleripper
        [44, 445], // The Dreamweaver
        [45, 446], // Meteortoise
        [46, 447], // The Ewer King
        [47, 448], // Vidofnir
        [48, 449], // The Soul of the Martyr
        [49, 450], // Inkfish
        [50, 451], // The Second One
        [51, 452], // Augmented High Allagan Helmet
        [52, 453], // Aphotic Pirarucu
        [53, 454], // Hailfinder
        [54, 455], // Flarefish
        [55, 456], // Twin-tongued Carp
        [56, 457], // Madam Butterfly
        [57, 458], // Moggle Mogpom
        [58, 459], // Cirrostratus
        [59, 460], // Hraesvelgr's Tear
        [60, 461], // Aetherochemical Compound #666
        [61, 462], // Hundred-eyed Axolotl
        [62, 463], // Bobgoblin Bass
        [63, 464], // Merciless
        [64, 465], // Dimorphodon
        [65, 466], // Basking Shark
        [66, 467], // Allagan Bladeshark
        [67, 468], // Bishopfish
        [68, 469], // Captain Nemo
        [69, 470], // Paikiller
        [70, 471], // Ceti
        [71, 472], // Crystal Pigeon
        [72, 473], // Thunderscale
        [73, 474], // Riddle
        [74, 475], // The Lord of Lords
        [75, 476], // The Speaker
        [76, 477], // Thousand Fin
        [77, 478], // Bloodchaser
        [78, 479], // Problematicus
        [79, 480], // Opabinia
        [80, 481], // Armor Fish
        [81, 482], // Sea Butterfly
        [82, 483], // Charibenet
        [83, 484], // Raimdellopterus
        [84, 485], // Thavnairian Leaf
        [85, 486], // Ghost Faerie
        [86, 487], // Red Sky Coral
        [87, 488], // Lovers' Clam
        [88, 489], // River Shrimp
        [89, 490], // Comet Minnow
        [90, 491], // Golden Cichlid
        [91, 492], // Abalathian Bitterling
        [92, 493], // Idle Goby
        [93, 494], // Steelhead Trout
        [94, 495], // Broken Crab
        [95, 496], // Miounnefish
        [96, 497], // Temple Carp
        [97, 498], // Balloon Frog
        [98, 499], // Lantern Marimo
        [99, 500], // Rapids Jumper
    ]);

    store.safeChangeKeys(`${FISHING}.page-6`, [
        [0, 501], // Adamantite Bichir
        [1, 502], // Bone Melter
        [2, 503], // Fallen Leaf
        [3, 504], // Velodyna Grass Carp
        [4, 505], // Highland Perch
        [5, 506], // Greenstream Loach
        [6, 507], // Mirage Chub
        [7, 508], // Padjali Loach
        [8, 509], // Gyr Abanian Trout
        [9, 510], // Bloodsipper
        [10, 511], // Monk Betta
        [11, 512], // Gilfish
        [12, 513], // Falling Star
        [13, 514], // Capsized Squeaker
        [14, 515], // Nirvana Crab
        [15, 516], // Gravel Gudgeon
        [16, 517], // Grinning Anchovy
        [17, 518], // Glass Herring
        [18, 519], // Hellyfish
        [19, 520], // Ruby Coral
        [20, 521], // Sapphire Coral
        [21, 522], // Bone Coral
        [22, 523], // Ruby Shrimp
        [23, 524], // Coeurl Snake Eel
        [24, 525], // Heather Charr
        [25, 526], // Electric Catfish
        [26, 527], // Death Loach
        [27, 528], // Grymm Crab
        [28, 529], // Invisible Crayfish
        [29, 530], // Abalathian Salamander
        [30, 531], // Cave Killifish
        [31, 532], // Rhalgr's Bolt
        [32, 533], // Butterfly Fish
        [33, 534], // Dafu
        [34, 535], // Leaf Tatsunoko
        [35, 536], // Glass Flounder
        [36, 537], // Gliding Fish
        [37, 538], // Globefish
        [38, 539], // Fan Clam
        [39, 540], // Striped Fugu
        [40, 541], // Ruby Meagre
        [41, 542], // River Barramundi
        [42, 543], // Nogoi
        [43, 544], // Pagan Pirarucu
        [44, 545], // Enid Shrimp
        [45, 546], // Black Velodyna Carp
        [46, 547], // Yanxian Koi
        [47, 548], // Longhair Catfish
        [48, 549], // Doman Trout
        [49, 550], // Yanxian Barramundi
        [50, 551], // Tail Mountains Minnow
        [51, 552], // Killifish
        [52, 553], // Doman Crayfish
        [53, 554], // Othardian Trout
        [54, 555], // Zagas Khaal
        [55, 556], // Steppe Skipper
        [56, 557], // Sun Bass
        [57, 558], // Dawn Crayfish
        [58, 559], // Curtain Pleco
        [59, 560], // Yat Goby
        [60, 561], // Nhaama's Boon
        [61, 562], // Doman Eel
        [62, 563], // Brassfish
        [63, 564], // Dry Steppe Skipper
        [64, 565], // Skytear
        [65, 566], // Dusk Crayfish
        [66, 567], // Bowfish
        [67, 568], // Jade Sculpin
        [68, 569], // Hardscale
        [69, 570], // Doman Grass Carp
        [70, 571], // Samurai Fish
        [71, 572], // Tao Bitterling
        [72, 573], // Blank Oscar
        [73, 574], // Dragonfish
        [74, 575], // Lordly Salmon
        [75, 576], // Yellow Prismfish
        [76, 577], // Blue Prismfish
        [77, 578], // Bull's Bite
        [78, 579], // Peeping Pisces
        [79, 580], // Gigant Bass
        [80, 581], // Daio Squid
        [81, 582], // Koromo Octopus
        [82, 583], // Glass Tuna
        [83, 584], // Raitonfish
        [84, 585], // Eastern Pike
        [85, 586], // Rock Saltfish
        [86, 587], // Tawny Wench Shark
        [87, 588], // Zekki Grouper
        [88, 589], // Saltshield Snapper
        [89, 590], // Meditator
        [90, 591], // Stonytongue
        [91, 592], // Scimitarfish
        [92, 593], // Blockhead
        [93, 594], // Kotsu Zetsu
        [94, 595], // Pandamoth
        [95, 596], // Liopleurodon
        [96, 597], // Ala Mhigan Ribbon
        [97, 598], // Seraphim
        [98, 599], // Blackfin Snake Eel
        [99, 600], // Sweatfish
    ]);

    store.safeChangeKeys(`${FISHING}.page-7`, [
        [0, 601], // Hak Bitterling
        [1, 602], // Whitehorse
        [2, 603], // Sculptor
        [3, 604], // Pearl-eye
        [4, 605], // Steelshark
        [5, 606], // Harutsuge
        [6, 607], // Silken Koi
        [7, 608], // Hanatatsu
        [8, 609], // Deemster
        [9, 610], // Swordfish
        [10, 611], // Plum Gazer
        [11, 612], // Zekki Gator
        [12, 613], // Wraithfish
        [13, 614], // Castaway Chocobo Chick
        [14, 615], // Little Perykos
        [15, 616], // Gyr Abanian Chub
        [16, 617], // Coral Horse
        [17, 618], // Maiden's Heart
        [18, 619], // Velodyna Salmon
        [19, 620], // Purple Buckler
        [20, 621], // Cardinalfish
        [21, 622], // Rockfish
        [22, 623], // Ukiki
        [23, 624], // Violet Prismfish
        [24, 625], // Guppy
        [25, 626], // Redtail
        [26, 627], // Mirage Mahi
        [27, 628], // Alligator Snapping Turtle
        [28, 629], // Saltmill
        [29, 630], // Ribbon Eel
        [30, 631], // Bonsai Fish
        [31, 632], // Triplespine
        [32, 633], // Usuginu Octopus
        [33, 634], // Red Prismfish
        [34, 635], // Elder Gourami
        [35, 636], // Shrieker
        [36, 637], // White Goldfish
        [37, 638], // Firelight Goldfish
        [38, 639], // Hookstealer
        [39, 640], // Sapphire Fan
        [40, 641], // The Archbishop
        [41, 642], // Bondsplitter
        [42, 643], // The Undecided
        [43, 644], // Diamond-eye
        [44, 645], // Rising Dragon
        [45, 646], // The Gambler
        [46, 647], // The Winter Queen
        [47, 648], // Rakshasa
        [48, 649], // Bokuden
        [49, 650], // Hagoromo Koi
        [50, 651], // The Word of God
        [51, 652], // Yat Khan
        [52, 653], // Curefish
        [53, 654], // Lake Sphairai
        [54, 655], // Warmscale Pleco
        [55, 656], // Shirogane Clam
        [56, 657], // Illuminati Mask
        [57, 658], // Indigo Prismfish
        [58, 659], // Green Prismfish
        [59, 660], // Watcher Catfish
        [60, 661], // Bloodtail Zombie
        [61, 662], // Hardhead Trout
        [62, 663], // Downstream Loach
        [63, 664], // Corpse Chub
        [64, 665], // The Last Tear
        [65, 666], // Hemon
        [66, 667], // Moksha
        [67, 668], // Princess Killifish
        [68, 669], // Ku'er
        [69, 670], // Argonautica
        [70, 671], // Hagoromo Bijin
        [71, 672], // Duskfish
        [72, 673], // Blade Skipper
        [73, 674], // Lily of the Veil
        [74, 675], // The Vegetarian
        [75, 676], // Seven Stars
        [76, 677], // Pinhead
        [77, 678], // Pomegranate Trout
        [78, 679], // Glarramundi
        [79, 680], // Hermit's End
        [80, 681], // Suiten Ippeki
        [81, 682], // Axelrod
        [82, 683], // The Unraveled Bow
        [83, 684], // Nhaama's Treasure
        [84, 685], // Garden Skipper
        [85, 686], // Banderole
        [86, 687], // Northern Oyster
        [87, 688], // Ruby Laver
        [88, 689], // Chakrafish
        [89, 690], // Wicked Wartfish
        [90, 691], // Othardian Salmon
        [91, 692], // Warden of the Seven Hues
        [92, 693], // Xenacanthus
        [93, 694], // Drepanaspis
        [94, 695], // Stethacanthus
        [95, 696], // The Ruby Dragon
        [96, 697], // The Unconditional
        [97, 698], // Eighteyes Eel
        [98, 699], // Crystal Knife
        [99, 700], // Laxan Carp
    ]);

    store.safeChangeKeys(`${FISHING}.page-8`, [
        [0, 701], // Asteroidea
        [1, 702], // Hard Candy
        [2, 703], // Abyssal Snail
        [3, 704], // Clean Saucer
        [4, 705], // Rabbit Skipper
        [5, 706], // Water Ball
        [6, 707], // Xanthic Bass
        [7, 708], // Albino Garfish
        [8, 709], // Albino Caiman
        [9, 710], // Skulleater
        [10, 711], // Toffee Snail
        [11, 712], // Watts Trout
        [12, 713], // South Kholusian Cod
        [13, 714], // Kholusian Flounder
        [14, 715], // Shellfracture Kelp
        [15, 716], // Blood Cloud
        [16, 717], // Rose Shrimp
        [17, 718], // Sand Egg
        [18, 719], // Lover's Flower
        [19, 720], // Crystarium Tetra
        [20, 721], // Sinspitter
        [21, 722], // Jacketed Snail
        [22, 723], // Milky Coral
        [23, 724], // Gravel Mussel
        [24, 725], // Bonefish
        [25, 726], // Misty Killifish
        [26, 727], // Snakeskin Discus
        [27, 728], // Albino Rock Crab
        [28, 729], // Noble's Fan
        [29, 730], // Zebra Catfish
        [30, 731], // Sepia Sole
        [31, 732], // Spearhead Squid
        [32, 733], // Shapeshifter
        [33, 734], // Kholusian Wrasse
        [34, 735], // Razorfish
        [35, 736], // Weedy Seadragon
        [36, 737], // Shadow Crab
        [37, 738], // Desert Dustfish
        [38, 739], // Amber Lamprey
        [39, 740], // Wandering Catfish
        [40, 741], // Skeletonfish
        [41, 742], // Crimson Sea Spider
        [42, 743], // Vicejaw
        [43, 744], // Creamy Oyster
        [44, 745], // Minstrelfish
        [45, 746], // Hornhelm
        [46, 747], // Web-footed Sand Gecko
        [47, 748], // Grey Skipper
        [48, 749], // Cerulean Loach
        [49, 750], // Pixie Fish
        [50, 751], // Official Ball
        [51, 752], // Cherry Herring
        [52, 753], // Eulmore Butterfly
        [53, 754], // Red Hammerhead
        [54, 755], // Blood-eyed Frog
        [55, 756], // Spotted Blue-eye
        [56, 757], // Lemonfish
        [57, 758], // Rebel
        [58, 759], // Wild Red Betta
        [59, 760], // Golden Lobster
        [60, 761], // Clawbow
        [61, 762], // Yellow Pipira
        [62, 763], // Oathfish
        [63, 764], // Brightmirror Clam
        [64, 765], // Wimple Carp
        [65, 766], // Spotted Ctenopoma
        [66, 767], // Rak'tika Trout
        [67, 768], // Darkroot
        [68, 769], // Night's Bass
        [69, 770], // Robber Crab
        [70, 771], // Garik Crab
        [71, 772], // Clown Tetra
        [72, 773], // Eryops
        [73, 774], // Diamond Pipira
        [74, 775], // Hucho Taimen
        [75, 776], // Nabaath Manta
        [76, 777], // Silver Kitten
        [77, 778], // Black Tri-star
        [78, 779], // Stormfish
        [79, 780], // Sycorax
        [80, 781], // Winged Hatchetfish
        [81, 782], // Amber Monkfish
        [82, 783], // Desert Saw
        [83, 784], // Maneater Clam
        [84, 785], // Sweetflesh Oyster
        [85, 786], // Azure Sea Spider
        [86, 787], // Deep Purple Coral
        [87, 788], // Caliban
        [88, 789], // Ancient Shrimp
        [89, 790], // Cyan Sea Devil
        [90, 791], // Stippled Eel
        [91, 792], // Platinum Guppy
        [92, 793], // Henodus
        [93, 794], // Thorned Lizard
        [94, 795], // Toadhead
        [95, 796], // Darkdweller
        [96, 797], // Hoodwinker
        [97, 798], // Bubble Angler
        [98, 799], // Yeti Crab
        [99, 800], // Rainbow Shrimp
    ]);

    store.safeChangeKeys(`${FISHING}.page-9`, [
        [0, 801], // Ondobane
        [1, 802], // Seatrap
        [2, 803], // Stargazer
        [3, 804], // Pancake Octopus
        [4, 805], // Predator
        [5, 806], // Ondo Harpoon
        [6, 807], // Aapoak
        [7, 808], // Sweetmeat Mussel
        [8, 809], // Loose Pendant
        [9, 810], // Winged Dame
        [10, 811], // The Unforgiven
        [11, 812], // Bronze Sole
        [12, 813], // The Horned King
        [13, 814], // The Sound of Fury
        [14, 815], // Priest of Yx'Lokwa
        [15, 816], // Starchaser
        [16, 817], // Laxan Inkhorn
        [17, 818], // White Oil Perch
        [18, 819], // Faeshine Clam
        [19, 820], // Areng Dire
        [20, 821], // Kholusian King Crab
        [21, 822], // The Jaws of Undeath
        [22, 823], // White Ronso
        [23, 824], // Ambling Caltrop
        [24, 825], // Fae Rainbow
        [25, 826], // Black Jet
        [26, 827], // Ondo Sigh
        [27, 828], // Galadion Goby
        [28, 829], // Galadion Chovy
        [29, 830], // La Noscean Jelly
        [30, 831], // Ghoul Barracuda
        [31, 832], // Leopard Eel
        [32, 833], // Sunfly
        [33, 834], // Rhotano Wahoo
        [34, 835], // Rhotano Sardine
        [35, 836], // Deep Plaice
        [36, 837], // Floefish
        [37, 838], // Megasquid
        [38, 839], // Oschon's Stone
        [39, 840], // Jasperhead
        [40, 841], // Tarnished Shark
        [41, 842], // Rosy Bream
        [42, 843], // Marine Bomb
        [43, 844], // Tripod Fish
        [44, 845], // Momora Mora
        [45, 846], // Crimson Monkfish
        [46, 847], // Chrome Hammerhead
        [47, 848], // Ogre Eel
        [48, 849], // Tossed Dagger
        [49, 850], // Shaggy Seadragon
        [50, 851], // Net Crawler
        [51, 852], // Cyan Octopus
        [52, 853], // Heavenswimmer
        [53, 854], // Merlthor Butterfly
        [54, 855], // Gladius
        [55, 856], // Dark Nautilus
        [56, 857], // Lampfish
        [57, 858], // Merlthor Lobster
        [58, 859], // Elder Dinichthys
        [59, 860], // Drunkfish
        [60, 861], // Little Leviathan
        [61, 862], // Sabaton
        [62, 863], // Shooting Star
        [63, 864], // Merman's Mane
        [64, 865], // Heavenskey
        [65, 866], // Ghost Shark
        [66, 867], // Quicksilver Blade
        [67, 868], // Navigator's Print
        [68, 869], // Casket Oyster
        [69, 870], // Fishmonger
        [70, 871], // Mythril Sovereign
        [71, 872], // Nimble Dancer
        [72, 873], // Sea Nettle
        [73, 874], // Great Grandmarlin
        [74, 875], // Shipwreck's Sail
        [75, 876], // Charlatan Survivor
        [76, 877], // Hi-aetherlouse
        [77, 878], // Azeyma's Sleeve
        [78, 879], // Aetheric Seadragon
        [79, 880], // Coral Seadragon
        [80, 881], // Roguesaurus
        [81, 882], // Aronnax
        [82, 883], // Sweeper
        [83, 884], // Silencer
        [84, 885], // Deep-sea Eel
        [85, 886], // Executioner
        [86, 887], // Wild Urchin
        [87, 888], // True Barramundi
        [88, 889], // Prodigal Son
        [89, 890], // Slipsnail
        [90, 891], // Hammerclaw
        [91, 892], // Coccosteus
        [92, 893], // Bartholomew the Chopper
        [93, 894], // Prowler
        [94, 895], // Mopbeard
        [95, 896], // Floating Saucer
        [96, 897], // Gugrusaurus
        [97, 898], // Funnel Shark
        [98, 899], // The Fallen One
        [99, 900], // Spectral Megalodon
    ]);

    store.safeChangeKeys(`${FISHING}.page-10`, [
        [0, 901], // Spectral Discus
        [1, 902], // Spectral Sea Bo
        [2, 903], // Spectral Bass
        [3, 904], // Sothis
        [4, 905], // Coral Manta
        [5, 906], // Stonescale
        [6, 907], // Elasmosaurus
        [7, 908], // Thinker's Coral
        [8, 909], // Dragonspine
        [9, 910], // Blue Crab
        [10, 911], // Fuchsia Bloom
        [11, 912], // The Sinsteeped
        [12, 913], // Sweetheart
        [13, 914], // Giant Taimen
        [14, 915], // Leannisg
        [15, 916], // Gold Hammer
        [16, 917], // Recordkiller
        [17, 918], // The Mother of All Pancakes
        [18, 919], // Opal Shrimp
        [19, 920], // Hoplite
        [20, 921], // Hook Fish
        [21, 922], // Cloudweed
        [22, 923], // Fatty Herring
        [23, 924], // Inkshell
        [24, 925], // Petal Shell
        [25, 926], // Allagan Hunter
        [26, 927], // Moonlight Guppy
        [27, 928], // Steel Fan
        [28, 929], // Henodus Grandis
        [29, 930], // Sunken Tome
        [30, 931], // Pearl Pipira
        [31, 932], // The Ondotaker
        [32, 933], // Tortoiseshell Crab
        [33, 934], // Lady's Cameo
        [34, 935], // Metallic Boxfish
        [35, 936], // Thaliak Crab
        [36, 937], // Star of the Destroyer
        [37, 938], // True Scad
        [38, 939], // Crow Puffer
        [39, 940], // Rothlyt Kelp
        [40, 941], // Living Lantern
        [41, 942], // Goobbue Ray
        [42, 943], // Watermoura
        [43, 944], // King Cobrafish
        [44, 945], // Blooded Wrasse
        [45, 946], // Bloodpolish Crab
        [46, 947], // Blue Stitcher
        [47, 948], // Honeycomb Fish
        [48, 949], // Godsbed
        [49, 950], // Lansquenet
        [50, 951], // Mamahi-mahi
        [51, 952], // Lavandin Remora
        [52, 953], // Bloodfresh Tuna
        [53, 954], // Sunken Mask
        [54, 955], // Thavnairian Shark
        [55, 956], // Nephrite Eel
        [56, 957], // Cieldalaes Geode
        [57, 958], // Bareface
        [58, 959], // Ginkgo Fin
        [59, 960], // Titanshell Crab
        [60, 961], // Mythril Boxfish
        [61, 962], // Mistbeard's Cup
        [62, 963], // Anomalocaris Saron
        [63, 964], // Flaming Eel
        [64, 965], // Jetborne Manta
        [65, 966], // Devil's Sting
        [66, 967], // Callichthyid
        [67, 968], // Meandering Mora
        [68, 969], // Oracular Crab
        [69, 970], // Dravanian Bream
        [70, 971], // Skaldminni
        [71, 972], // Serrated Clam
        [72, 973], // Beatific Vision
        [73, 974], // Exterminator
        [74, 975], // Gory Tuna
        [75, 976], // Ticinepomis
        [76, 977], // Quartz Hammerhead
        [77, 978], // Garum Jug
        [78, 979], // Smooth Jaguar
        [79, 980], // Rothlyt Mussel
        [80, 981], // Levi Elver
        [81, 982], // Pearl Bombfish
        [82, 983], // Trollfish
        [83, 984], // Panoptes
        [84, 985], // Crepe Sole
        [85, 986], // Knifejaw
        [86, 987], // Spectral Butterfly
        [87, 988], // Spectral Eel
        [88, 989], // Spectresaur
        [89, 990], // Hafgufa
        [90, 991], // Seafaring Toad
        [91, 992], // Placodus
        [92, 993], // Pickled Pom
        [93, 994], // Flintstrike
        [94, 995], // Aster Trivi
        [95, 996], // Python Discus
        [96, 997], // Steel Razor
        [97, 998], // Shadeshifter
        [98, 999], // Nabaath Saw
        [99, 1000], // Dammroen Herring
    ]);

    store.safeChangeKeys(`${FISHING}.page-11`, [
        [0, 1001], // Celestial
        [1, 1002], // Deephaunt
        [2, 1003], // Golden Pipira
        [3, 1004], // Mora Tecta
        [4, 1005], // Maru Crab
        [5, 1006], // Dravanian Scallop
        [6, 1007], // Cloud Kelp
        [7, 1008], // Scarlet Frog
        [8, 1009], // White Clam
        [9, 1010], // Fragrant Sweetfish
        [10, 1011], // Listracanthus
        [11, 1012], // Aquamaton
        [12, 1013], // Cinder Surprise
        [13, 1014], // Ealad Skaan
        [14, 1015], // Greater Serpent of Ronka
        [15, 1016], // Lancetfish
        [16, 1017], // Pecten
        [17, 1018], // Northern Herring
        [18, 1019], // Dog-faced Puffer
        [19, 1020], // Cobalt Chromis
        [20, 1021], // Guitarfish
        [21, 1022], // Astacus
        [22, 1023], // Peacock Bass
        [23, 1024], // Academician
        [24, 1025], // Swordspine Snook
        [25, 1026], // Ponderer
        [26, 1027], // Tidal Dahlia
        [27, 1028], // Butterfly Fry
        [28, 1029], // Xenocypris
        [29, 1030], // Topminnow
        [30, 1031], // Tessera
        [31, 1032], // Giant Aetherlouse
        [32, 1033], // Fat Snook
        [33, 1034], // Prochilodus Luminosus
        [34, 1035], // Mesonauta
        [35, 1036], // Greengill Salmon
        [36, 1037], // Raiamas
        [37, 1038], // Red Bowfin
        [38, 1039], // Macrobrachium Lar
        [39, 1040], // Blowgun
        [40, 1041], // Darksteel Knifefish
        [41, 1042], // Astacus Aetherius
        [42, 1043], // Labyrinthos Tilapia
        [43, 1044], // Trunkblessed
        [44, 1045], // Seema Duta
        [45, 1046], // Longear Sunfish
        [46, 1047], // Silver Characin
        [47, 1048], // Thavnairian Goby
        [48, 1049], // Qeyiq Sole
        [49, 1050], // Gwl Crab
        [50, 1051], // Pantherscale Grouper
        [51, 1052], // Fate's Design
        [52, 1053], // Shadowdart Sardine
        [53, 1054], // Paksa Fish
        [54, 1055], // Garjana Wrasse
        [55, 1056], // Golden Barramundi
        [56, 1057], // Kadjaya's Castaway
        [57, 1058], // Marid Frog
        [58, 1059], // Bluegill
        [59, 1060], // Bronze Pipira
        [60, 1061], // Green Swordtail
        [61, 1062], // Ksirapayin
        [62, 1063], // Wakeful Watcher
        [63, 1064], // Red Drum
        [64, 1065], // Forgeflame
        [65, 1066], // Bicuda
        [66, 1067], // Radzbalik
        [67, 1068], // Half-moon Betta
        [68, 1069], // Banana Eel
        [69, 1070], // Handy Hamsa
        [70, 1071], // Flowerhorn
        [71, 1072], // Thavnairian Caiman
        [72, 1073], // Fiery Goby
        [73, 1074], // Puff-paya
        [74, 1075], // Narunnairian Octopus
        [75, 1076], // Roosterfish
        [76, 1077], // Basilosaurus
        [77, 1078], // Garlean Clam
        [78, 1079], // Eblan Trout
        [79, 1080], // Animulus
        [80, 1081], // Cerule Core
        [81, 1082], // Icepike
        [82, 1083], // Dark Crown
        [83, 1084], // Imperial Pleco
        [84, 1085], // Bluetail
        [85, 1086], // Star-blue Guppy
        [86, 1087], // Lunar Cichlid
        [87, 1088], // Teareye
        [88, 1089], // Replipirarucu
        [89, 1090], // Feverfish
        [90, 1091], // Calicia
        [91, 1092], // Protomyke #987
        [92, 1093], // Lunar Deathworm
        [93, 1094], // Fleeting Brand
        [94, 1095], // Regotoise
        [95, 1096], // Isle Skipper
        [96, 1097], // Iribainion
        [97, 1098], // Albino Loach
        [98, 1099], // Golden Shiner
        [99, 1100], // Mangar
    ]);

    store.safeChangeKeys(`${FISHING}.page-12`, [
        [0, 1101], // Dermogenys
        [1, 1102], // Antheia
        [2, 1103], // Colossoma
        [3, 1104], // Smaragdos
        [4, 1105], // Superstring
        [5, 1106], // Star Eater
        [6, 1107], // Vacuum Shrimp
        [7, 1108], // Cosmic Noise
        [8, 1109], // Glassfish
        [9, 1110], // Foun Myhk
        [10, 1111], // Dragonscale
        [11, 1112], // Ypupîara
        [12, 1113], // Eehs Forhnesh
        [13, 1114], // Katoptron
        [14, 1115], // Comet Tail
        [15, 1116], // Aoide
        [16, 1117], // Protoflesh
        [17, 1118], // Wandering Starscale
        [18, 1119], // Wormhole Worm
        [19, 1120], // Unidentified Flying Biomass II
        [20, 1121], // Triaina
        [21, 1122], // Sophos Deka-okto
        [22, 1123], // Class Twenty-four
        [23, 1124], // Terrifyingway
        [24, 1125], // Alien Mertone
        [25, 1126], // Monster Carrot
        [26, 1127], // Argonaut
        [27, 1128], // Echinos
        [28, 1129], // Space Bishop
        [29, 1130], // Alyketos
        [30, 1131], // Horizon Event
        [31, 1132], // E.B.E.-9318
        [32, 1133], // Unbegotten
        [33, 1134], // Phallaina
        [34, 1135], // Aetherolectric Guitarfish
        [35, 1136], // Jumbo Snook
        [36, 1137], // Earful
        [37, 1138], // Hippo Frog
        [38, 1139], // Rimepike
        [39, 1140], // Foun Ahlm
        [40, 1141], // Forbiddingway
        [41, 1142], // Thavnairian Calamari
        [42, 1143], // Seedtoad
        [43, 1144], // Holier-than Mogpom
        [44, 1145], // Chalky Coral
        [45, 1146], // Greatsword Snook
        [46, 1147], // Swampsucker Bowfin
        [47, 1148], // Lale Crab
        [48, 1149], // Bigcuda
        [49, 1150], // Sovereign Shadow
        [50, 1151], // Disappirarucu
        [51, 1152], // Starscryer
        [52, 1153], // Argonauta argo
        [53, 1154], // Planetes
        [54, 1155], // Mayashell
        [55, 1156], // Catastrophizer
        [56, 1157], // Mossgill Salmon
        [57, 1158], // Vidyutvat Wrasse
        [58, 1159], // Browned Banana Eel
        [59, 1160], // Frozen Regotoise
        [60, 1161], // Cosmic Haze
        [61, 1162], // Antheian Dahlia
        [62, 1163], // Ondo Kelp
        [63, 1164], // Purpure Cod
        [64, 1165], // Il Lydha
        [65, 1166], // Jhinga
        [66, 1167], // Phyllinos
        [67, 1168], // Platinum Seahorse
        [68, 1169], // Clavekeeper
        [69, 1170], // Mirror Image
        [70, 1171], // Spangled Pirarucu
        [71, 1172], // Onyx Knifefish
        [72, 1173], // Wakeful Warden
        [73, 1174], // Basilosaurus Rex
        [74, 1175], // Eehs Fan
        [75, 1176], // Gilt Dermogenys
        [76, 1177], // Deepshade Sardine
        [77, 1178], // Sirensong Mussel
        [78, 1179], // Arrowhead
        [79, 1180], // Ruby Herring
        [80, 1181], // Whirlpool Turban
        [81, 1182], // Leopard Prawn
        [82, 1183], // Crimson Kelp
        [83, 1184], // Reef Squid
        [84, 1185], // Pinebark Flounder
        [85, 1186], // Catching Carp
        [86, 1187], // Garlean Bluegill
        [87, 1188], // Yanxian Softshell
        [88, 1189], // Pink Shrimp
        [89, 1190], // Sirensong Mullet
        [90, 1191], // Selkie Puffer
        [91, 1192], // Spear Squid
        [92, 1193], // Floating Lantern
        [93, 1194], // Rubescent Tatsunoko
        [94, 1195], // Mantle Moray
        [95, 1196], // Barded Lobster
        [96, 1197], // Sanbaso
        [97, 1198], // Princess Salmon
        [98, 1199], // Calligraph
        [99, 1200], // Singular Shrimp
    ]);

    store.safeChangeKeys(`${FISHING}.page-13`, [
        [0, 1201], // Poet's Pipe
        [1, 1202], // Marine Matanga
        [2, 1203], // Hatatate
        [3, 1204], // Silent Shark
        [4, 1205], // Shisui Goby
        [5, 1206], // Violet Sentry
        [6, 1207], // Brocade Carp
        [7, 1208], // Yanxian Sturgeon
        [8, 1209], // Dusk Shark
        [9, 1210], // Mizuhiki
        [10, 1211], // Heavensent Shark
        [11, 1212], // Fishy Shark
        [12, 1213], // Mermaid Scale
        [13, 1214], // Broadhead
        [14, 1215], // Vivid Pink Shrimp
        [15, 1216], // Sunken Coelacanth
        [16, 1217], // Siren's Sigh
        [17, 1218], // Black-jawed Helicoprion
        [18, 1219], // Impostopus
        [19, 1220], // Jade Mantis Shrimp
        [20, 1221], // Nymeia's Wheel
        [21, 1222], // Snapping Koban
        [22, 1223], // Silkweft Prawn
        [23, 1224], // Stingfin Trevally
        [24, 1225], // Swordtip Squid
        [25, 1226], // Mailfish
        [26, 1227], // Idaten's Bolt
        [27, 1228], // Maelstrom Turban
        [28, 1229], // Shoshitsuki
        [29, 1230], // Spadefish
        [30, 1231], // Fleeting Squid
        [31, 1232], // Bowbarb Lobster
        [32, 1233], // Pitch Pickle
        [33, 1234], // Senbei Octopus
        [34, 1235], // Tentacle Thresher
        [35, 1236], // Bekko Rockhugger
        [36, 1237], // Yellow Iris
        [37, 1238], // Crimson Sentry
        [38, 1239], // Flying Squid
        [39, 1240], // Gensui Shrimp
        [40, 1241], // Yato-no-kami
        [41, 1242], // Heron's Eel
        [42, 1243], // Crowshadow Mussel
        [43, 1244], // Yanxian Goby
        [44, 1245], // Iridescent Trout
        [45, 1246], // Un-Namazu
        [46, 1247], // Gakugyo
        [47, 1248], // Ginrin Goshiki
        [48, 1249], // Spectral Coelacanth
        [49, 1250], // Spectral Wrasse
        [50, 1251], // Spectral Snake Eel
        [51, 1252], // Spectral Kotsu Zetsu
        [52, 1253], // Taniwha
        [53, 1254], // Glass Dragon
        [54, 1255], // Hells' Claw
        [55, 1256], // Jewel of Plum Spring
        [56, 1257], // The Fury's Aegis
        [57, 1258], // Gold Dustfish
        [58, 1259], // Forgiven Melancholy
        [59, 1260], // Oil Slick
        [60, 1261], // Gonzalo's Grace
        [61, 1262], // Circuit Tilapia
        [62, 1263], // Durdina Fish
        [63, 1264], // Mayaman
        [64, 1265], // Chlorophos Deathworm
        [65, 1266], // Starscale Ephemeris
        [66, 1267], // E.B.E.-852738
        [67, 1268], // Ossicula
        [68, 1269], // Kitty Herring
        [69, 1270], // Sarikuyruk
        [70, 1271], // Stargilt Lobster
        [71, 1272], // Deadwood Shadow
        [72, 1273], // Ronkan Bullion
        [73, 1274], // Golding
        [74, 1275], // Little Bounty
        [75, 1276], // Saint Fathric's Face
        [76, 1277], // Hyphalosaurus
        [77, 1278], // Gharlichthys
        [78, 1279], // Snowy Parexus
        [79, 1280], // Furcacauda
        [80, 1281], // Lopoceras Elegans
        [81, 1282], // Sidereal Whale
        [82, 1283], // Mosquito Fish
        [83, 1284], // Pel Frog
        [84, 1285], // Petticoat Tetra
        [85, 1286], // Reasonscale Silverside
        [86, 1287], // Stardust Shrimp
        [87, 1288], // Shallows Sot
        [88, 1289], // Ghostfish
        [89, 1290], // Permit
        [90, 1291], // Floating Fife
        [91, 1292], // Blue Purse
        [92, 1293], // Goldfin Cavalli
        [93, 1295], // Sea Alpaca
        [94, 1296], // Marbled Hatchetfish
        [95, 1297], // Starsnipper
        [96, 1298], // Urqotrout
        [97, 1299], // Yok Huy Stonecutter
        [98, 1300], // Chirwagur Loach
        [99, 1301], // Alright Alright Alright
    ]);

    store.safeChangeKeys(`${FISHING}.page-14`, [
        [0, 1302], // Zorlortor
        [1, 1303], // Shooting Starscale
        [2, 1304], // First Feastfish
        [3, 1305], // Urqofrog
        [4, 1306], // Zeh Tortoh
        [5, 1307], // Morsel Trout
        [6, 1308], // Deepwarden
        [7, 1310], // Kozama'uka Skipper
        [8, 1311], // Bopo'u Sleeper
        [9, 1312], // Poison Dyefrog
        [10, 1313], // Pleated Matamata
        [11, 1314], // Uyuy Xage
        [12, 1315], // Plattershell
        [13, 1317], // Candiru
        [14, 1318], // Trahira
        [15, 1319], // Driftwood Catfish
        [16, 1320], // Oho Hunu
        [17, 1321], // Bronze Pleco
        [18, 1322], // Crenicichla
        [19, 1323], // Hunu Peacock Bass
        [20, 1324], // Pelubane
        [21, 1325], // Giant Trahira
        [22, 1326], // Ku'uxage Bitterling
        [23, 1327], // Tonguesnatcher
        [24, 1328], // Corn Dace
        [25, 1329], // Ka Puyhu
        [26, 1330], // Ligaka Guppy
        [27, 1331], // Dumplingfish
        [28, 1332], // Banded Candiru
        [29, 1333], // Oxydoras
        [30, 1334], // Spotted Stingray
        [31, 1335], // Yellow Peacock Bass
        [32, 1336], // Shovelnose Catfish
        [33, 1337], // Shimmering Shadow
        [34, 1338], // Ut'ohmu Dawnfish
        [35, 1339], // Belonesox
        [36, 1340], // Xd'aa Talat Cichlid
        [37, 1341], // Iq Br'aax Sailfin
        [38, 1342], // Hunmu Ob
        [39, 1343], // Apoda
        [40, 1344], // Mirror Carp
        [41, 1345], // Tsoly Mu
        [42, 1346], // Iq Rrax Leaffish
        [43, 1347], // Archmatron Angelfish
        [44, 1348], // Yak T'el Salamander
        [45, 1349], // Shadowtongue
        [46, 1350], // Cloud-eye Carp
        [47, 1351], // Xobr'it Lobster
        [48, 1352], // Sunbright Axolotl
        [49, 1353], // Horned Frog
        [50, 1354], // Mudfish
        [51, 1355], // Turali Beaded Lizard
        [52, 1356], // Yak T'el Catfish
        [53, 1357], // Ankledeep Catfish
        [54, 1358], // Checkered Cichlid
        [55, 1359], // Moxutural Gar
        [56, 1360], // Variatus
        [57, 1361], // Welkin Catfish
        [58, 1362], // Flawless Saucer
        [59, 1363], // Glittergill
        [60, 1364], // Twig Catfish
        [61, 1365], // Blind Brotula
        [62, 1366], // Yak T'el Caiman
        [63, 1367], // Ut'ohmu Tiika
        [64, 1368], // Sharknose Goby
        [65, 1369], // Yak T'el Crab
        [66, 1370], // Xty'iinbek Sleeper
        [67, 1371], // Chain Shark
        [68, 1372], // Bonytail Chub
        [69, 1373], // Niikwerepi Trout
        [70, 1374], // Pyariyoanaan Cichlid
        [71, 1375], // Shaaloani Salmon
        [72, 1376], // Trailtrout
        [73, 1377], // Toari Sucker
        [74, 1378], // Turali Paddlefish
        [75, 1379], // Zorgor Core
        [76, 1380], // Cloudribbon
        [77, 1381], // Zorgor Scorpion
        [78, 1382], // Vagrant Cascade
        [79, 1383], // Zorgor Condor
        [80, 1384], // Cloud Wasp
        [81, 1385], // Azure Glider
        [82, 1386], // Hellsnow Shark
        [83, 1388], // Heritage Loach
        [84, 1389], // Outskirts Sniffer
        [85, 1390], // Pumpkin Perch
        [86, 1391], // Tiger Muskellunge
        [87, 1392], // Moon Croppie
        [88, 1393], // Driftdowns Trout
        [89, 1394], // Electrobetta
        [90, 1395], // Thundering Redbelly
        [91, 1396], // Yyasulani Bowfin
        [92, 1397], // Crackling Flounder
        [93, 1398], // Goldgrouper
        [94, 1399], // Everkeep Yabby
        [95, 1400], // Stickleback
        [96, 1401], // Custodian Carp
        [97, 1402], // Mosaic Loach
        [98, 1403], // Rosebud Frog
        [99, 1404], // Knight Goby
    ]);

    store.safeChangeKeys(`${FISHING}.page-15`, [
        [0, 1405], // Windspath Eel
        [1, 1406], // Harlequin Lancer
        [2, 1407], // Cleyran Carp
        [3, 1408], // Giant Snakehead
        [4, 1409], // Datnioides
        [5, 1410], // Neo Arowana
        [6, 1411], // Canal Bream
        [7, 1412], // Iris Wrasse
        [8, 1413], // Canal Drum
        [9, 1414], // Butterfly Ray
        [10, 1415], // Hydro Louvar
        [11, 1416], // Devotion Clam
        [12, 1417], // Forgotten One
        [13, 1418], // Copper Shark
        [14, 1419], // Golden Day
        [15, 1420], // Starglass Gibel
        [16, 1421], // Scarlet Queen
        [17, 1422], // Ultimoat Carp
        [18, 1423], // Icuvlo's Barter
        [19, 1424], // Moongripper
        [20, 1425], // Cazuela Crab
        [21, 1426], // Ilyon Asoh Cichlid
        [22, 1427], // Stardust Sleeper
        [23, 1428], // Hwittayoanaan Cichlid
        [24, 1429], // Thunderswift Trout
        [25, 1430], // Pixel Loach
        [26, 1431], // Cloudsail
        [27, 1432], // Oily Ropefish
        [28, 1433], // Yak Awak Core
        [29, 1434], // Inktopus
        [30, 1435], // Honeycomb Sponge
        [31, 1436], // Cenote Oyster
    ]);
}

function migrateSpearfishing(store: ChangeStore): void {
    store.safeChangeKeys(`${SPEARFISHING}.page-1`, [
        [0, 20000], // Wentletrap
        [1, 20001], // Black Boxfish
        [2, 20002], // Glass Manta
        [3, 20003], // Regal Silverside
        [4, 20004], // Snowflake Moray
        [5, 20005], // Hoppfish
        [6, 20006], // Lightscale
        [7, 20007], // Grass Fugu
        [8, 20008], // Giant Eel
        [9, 20009], // Kamina Crab
        [10, 20010], // Spider Crab
        [11, 20011], // Little Dragonfish
        [12, 20012], // Black Fanfish
        [13, 20013], // Zebra Shark
        [14, 20014], // Nophica's Comb
        [15, 20015], // Warty Wartfish
        [16, 20016], // Common Whelk
        [17, 20017], // Hairless Barb
        [18, 20018], // Hatchetfish
        [19, 20019], // Threadfish
        [20, 20020], // Garden Eel
        [21, 20021], // Eastern Sea Pickle
        [22, 20022], // Brindlebass
        [23, 20023], // Demon Stonefish
        [24, 20024], // Armored Crayfish
        [25, 20025], // Bighead Carp
        [26, 20026], // Zeni Clam
        [27, 20027], // Corpse-eater
        [28, 20028], // Ronin Trevally
        [29, 20029], // Toothsome Grouper
        [30, 20030], // Horned Turban
        [31, 20031], // Ruby Sea Star
        [32, 20032], // Gauntlet Crab
        [33, 20033], // Hermit Goby
        [34, 20034], // Skythorn
        [35, 20035], // Swordtip
        [36, 20036], // False Scad
        [37, 20037], // Snow Crab
        [38, 20038], // Red-eyed Lates
        [39, 20039], // Common Bitterling
        [40, 20040], // Fifty-summer Cod
        [41, 20041], // Nagxian Mullet
        [42, 20042], // Redcoat
        [43, 20043], // Yanxian Tiger Prawn
        [44, 20044], // Tengu Fan
        [45, 20045], // Star Turban
        [46, 20046], // Blue-fish
        [47, 20047], // Steppe Bullfrog
        [48, 20048], // Cavalry Catfish
        [49, 20049], // Redfin
        [50, 20050], // Moondisc
        [51, 20051], // Bleached Bonytongue
        [52, 20052], // Salt Shark
        [53, 20053], // King's Mantle
        [54, 20054], // Sea Lamp
        [55, 20055], // Amberjack
        [56, 20056], // Cherry Salmon
        [57, 20057], // Yu-no-hana Crab
        [58, 20058], // Dotharli Gudgeon
        [59, 20059], // River Clam
        [60, 20060], // Grass Shark
        [61, 20061], // Typhoon Shrimp
        [62, 20062], // Rock Oyster
        [63, 20063], // Salt Urchin
        [64, 20064], // Carpenter Crab
        [65, 20065], // Spiny Lobster
        [66, 20066], // Mitsukuri Shark
        [67, 20067], // Doman Bubble Eye
        [68, 20068], // Dragon Squeaker
        [69, 20069], // Dawn Herald
        [70, 20070], // Salt Cellar
        [71, 20071], // White Sturgeon
        [72, 20072], // Tithe Collector
        [73, 20073], // Bashful Batfish
        [74, 20074], // River Bream
        [75, 20075], // Snipe Eel
        [76, 20076], // Cherubfish
        [77, 20077], // Dusk Herald
        [78, 20078], // Glaring Perch
        [79, 20079], // Abalathian Pipira
        [80, 20080], // Steel Loach
        [81, 20081], // Ivory Sole
        [82, 20082], // Motley Beakfish
        [83, 20083], // Thousandfang
        [84, 20084], // Ichthyosaur
        [85, 20085], // Sailfin
        [86, 20086], // Fangshi
        [87, 20087], // Flamefish
        [88, 20088], // Fickle Krait
        [89, 20089], // Eternal Eye
        [90, 20090], // Soul of the Stallion
        [91, 20091], // Flood Tuna
        [92, 20092], // Mercenary Crab
        [93, 20093], // Ashfish
        [94, 20094], // Silken Sunfish
        [95, 20095], // Mosasaur
        [96, 20096], // Tiny Tatsunoko
        [97, 20097], // Ichimonji
        [98, 20098], // Snailfish
        [99, 20099], // Grey Carp
    ]);

    store.safeChangeKeys(`${SPEARFISHING}.page-2`, [
        [0, 20100], // Lilac Goby
        [1, 20101], // Purple Ghost
        [2, 20102], // Gazing Glass
        [3, 20103], // Elven Spear
        [4, 20104], // Skykisser
        [5, 20105], // Viola Clam
        [6, 20106], // Lakeland Cod
        [7, 20107], // Big-eye
        [8, 20108], // Lakelouse
        [9, 20109], // Source Octopus
        [10, 20110], // Shade Gudgeon
        [11, 20111], // Lakethistle
        [12, 20112], // Platinum Bream
        [13, 20113], // Finned Eggplant
        [14, 20114], // Geayi
        [15, 20115], // Noblefish
        [16, 20116], // Wardenfish
        [17, 20117], // Misteye
        [18, 20118], // Jenanna's Tear
        [19, 20119], // Shade Axolotl
        [20, 20120], // Daisy Turban
        [21, 20121], // Little Flirt
        [22, 20122], // Peallaidh
        [23, 20123], // Gilded Batfish
        [24, 20124], // Mirrorfish
        [25, 20125], // Glass Eel
        [26, 20126], // Voeburt Bichir
        [27, 20127], // Poecilia
        [28, 20128], // Petalfish
        [29, 20129], // Voeburt Salamander
        [30, 20130], // Bedskipper
        [31, 20131], // Dandyfish
        [32, 20132], // Mock Pixie
        [33, 20133], // Hunter's Arrow
        [34, 20134], // Fuathgobbler
        [35, 20135], // Paradise Crab
        [36, 20136], // Saint Fathric's Ire
        [37, 20137], // Queensgown
        [38, 20138], // Ankle Snipper
        [39, 20139], // Treescale
        [40, 20140], // Ronkan Pleco
        [41, 20141], // Gourmand Crab
        [42, 20142], // Sauldia Ruby
        [43, 20143], // Flowering Kelpie
        [44, 20144], // Ghoulfish
        [45, 20145], // Measan Deala
        [46, 20146], // Dohn Horn
        [47, 20147], // Everdark Bass
        [48, 20148], // Aquabloom
        [49, 20149], // Jester Fish
        [50, 20150], // Blue Lightning
        [51, 20151], // Maidenhair
        [52, 20152], // Hermit's Hood
        [53, 20153], // Megapiranha
        [54, 20154], // Little Bismarck
        [55, 20155], // Elder Pixie
        [56, 20156], // Gatorl's Bead
        [57, 20157], // Hermit Crab
        [58, 20158], // Lozatl Pirarucu
        [59, 20159], // Rak'tika Goby
        [60, 20160], // Bothriolepis
        [61, 20161], // Blue Mountain Bubble
        [62, 20162], // Diamondtongue
        [63, 20163], // Anpa's Handmaid
        [64, 20164], // Viis Ear
        [65, 20165], // Thavnairian Cucumber
        [66, 20166], // Spiny King Crab
        [67, 20167], // Thavnairian Eel
        [68, 20168], // Gilled Topknot
        [69, 20169], // Purusa Fish
        [70, 20170], // Giantsgall Jaw
        [71, 20171], // Coffer Shell
        [72, 20172], // Onihige
        [73, 20173], // Onokoro Carp
        [74, 20174], // Ruby-spotted Crab
        [75, 20175], // Marrow-eater
        [76, 20176], // Cloudy Cat Shark
        [77, 20177], // Red Gurnard
        [78, 20178], // Dream Pickle
        [79, 20179], // Ruby Haddock
        [80, 20180], // Crown Fish
        [81, 20181], // Sword of Isari
        [82, 20182], // Blue Shark
        [83, 20183], // Barb of Exile
        [84, 20184], // Smooth Lumpfish
        [85, 20185], // Hells' Cap
        [86, 20186], // Keeled Fugu
        [87, 20187], // Eastern Seerfish
        [88, 20188], // False Fusilier
        [89, 20189], // Akyaali Sardine
        [90, 20190], // Spicy Pickle
        [91, 20191], // Mayavahana
        [92, 20192], // Hedonfish
        [93, 20193], // Satrap Trapfish
        [94, 20194], // Blue Marlin
        [95, 20195], // Satrap's Whisper
        [96, 20196], // Meyhane Reveler
        [97, 20197], // Shallows Cod
        [98, 20198], // Rasa Fish
        [99, 20199], // Daemir's Alloy
    ]);

    store.safeChangeKeys(`${SPEARFISHING}.page-3`, [
        [0, 20200], // Dusky Shark
        [1, 20201], // Agama's Palm
        [2, 20202], // Rummy-nosed Tetra
        [3, 20203], // Monksblade
        [4, 20204], // Atamra Cichlid
        [5, 20205], // Root of Maya
        [6, 20206], // Floral Snakehead
        [7, 20207], // Skipping Stone
        [8, 20208], // Red-spotted Blenny
        [9, 20209], // Deepbody Boarfish
        [10, 20210], // Grey Mullet
        [11, 20211], // Prayer Cushion
        [12, 20212], // Uzumaki
        [13, 20213], // Jointed Razorfish
        [14, 20214], // Mini Yasha
        [15, 20215], // Righteye Flounder
        [16, 20216], // Othardian Lumpsucker
        [17, 20217], // Sawshark
        [18, 20218], // Bluefin Trevally
        [19, 20219], // Natron Puffer
        [20, 20220], // Diamond Dagger
        [21, 20221], // Queenly Fan
        [22, 20222], // Pale Panther
        [23, 20223], // Saltsquid
        [24, 20224], // Platinum Hammerhead
        [25, 20225], // Othardian Wrasse
        [26, 20226], // Shogun's Kabuto
        [27, 20227], // Pipefish
        [28, 20228], // Xiphactinus
        [29, 20229], // Kitefin Shark
        [30, 20230], // Tebqeyiq Smelt
        [31, 20231], // Inksquid
        [32, 20232], // Auroral Clam
        [33, 20233], // Ken Kiln
        [34, 20234], // Glorianda's Tear
        [35, 20235], // Verdigris Guppy
        [36, 20236], // Lakeskipper
        [37, 20237], // Bronze Eel
        [38, 20238], // Striped Peacock Bass
        [39, 20239], // Bronze Trout
        [40, 20240], // Nosceasaur
        [41, 20241], // Empyreal Spiral
        [42, 20242], // Opal Tetra
        [43, 20243], // Turali Loach
        [44, 20244], // Yok Huy Toad
        [45, 20245], // Stone Pleco
        [46, 20246], // Shark Catfish
        [47, 20247], // Zeh Lar Dor
        [48, 20248], // Karvarichthys
        [49, 20249], // Severum
        [50, 20250], // Ligaka Blossom
        [51, 20251], // Potglaze Stingray
        [52, 20252], // Emberwisp
        [53, 20253], // Ihuyka Colossoma
        [54, 20254], // Torchtail
        [55, 20255], // Variegated Sisterscale
        [56, 20256], // Kozama'uka Characin
        [57, 20257], // Charcoal Eel
        [58, 20258], // Rainbow Pipira
        [59, 20259], // Lau Lau
        [60, 20260], // Ligaka Pirarucu
        [61, 20261], // Piraputanga
        [62, 20262], // Purussaurus
        [63, 20263], // Turali Land Crab
        [64, 20264], // Crested Goby
        [65, 20265], // Tsoly Turtle
        [66, 20266], // Viperfish
        [67, 20267], // Horizon Crocodile
        [68, 20268], // Tsoly Gar
        [69, 20269], // Sunlit Prism
        [70, 20270], // Fategazer
        [71, 20271], // Frillfin Goby
        [72, 20272], // Black Ibruq
        [73, 20273], // Speckled Peacock Bass
        [74, 20274], // Golden Characin
        [75, 20275], // Deadleaf Minnow
        [76, 20276], // Glistening Discus
        [77, 20277], // Lightning Eel
        [78, 20278], // Longwhisker Lungfish
        [79, 20279], // Minted Arowana
        [80, 20280], // Br'aaxfish
        [81, 20281], // Iq Rrax Crab
        [82, 20282], // Wivre Cod
        [83, 20283], // Warmouth
        [84, 20284], // Shaaloani Goby
        [85, 20285], // Sauger
        [86, 20286], // Niikwerepi Bass
        [87, 20287], // Longnose Gar
        [88, 20288], // Midnight Carp
    ]);
}
