import type { ChangeStore } from '@service/store/migration/ChangeStore';

const LOG = 'overall.logs.gathering.fishing-log';
const FISHING_LOG = `${LOG}.fishing`;
const SPEARFISHING_LOG = `${LOG}.spearfishing`;

/**
 * Fishing Log key changes from Generated Resources
 */
export function migrateFishingHoles(store: ChangeStore): void {
    migrateFishingLog(store);
    migrateSpearfishingLog(store);
}

function migrateFishingLog(store: ChangeStore): void {
    store.safeChangeKeys(`${FISHING_LOG}.abalathias-spine`, [
        [0, 135], // Voor Sian Siran
        [1, 136], // The Eddies
        [2, 137], // Cloudtop
        [3, 138], // The Blue Window
        [4, 139], // Mok Oogl Island
        [5, 140], // Alpha Quadrant
        [6, 141], // Aetherochemical Spill
        [7, 142], // Hyperstellar Downconverter
        [8, 143], // Delta Quadrant
        [9, 144], // The Pappus Tree
        [10, 145], // The Habisphere
        [11, 146], // The Flagship
    ]);

    store.safeChangeKeys(`${FISHING_LOG}.coerthas`, [
        [0, 26], // Coerthas River
        [1, 31], // Daniffen Pass
        [2, 28], // The Nail
        [3, 30], // Dragonhead Latrines
        [4, 32], // Exploratory Ice Hole
        [5, 29], // The Weeping Saint
        [6, 33], // Snowcloak
        [7, 34], // Sea of Clouds
        [8, 27], // Witchdrop
        [9, 109], // Riversmeet
        [10, 110], // Greytail Falls
        [11, 111], // Unfrozen Pond
        [12, 112], // Clearpool
        [13, 113], // Dragonspit
        [14, 114], // South Banepool
        [15, 115], // Ashpool
        [16, 116], // West Banepool
    ]);

    store.safeChangeKeys(`${FISHING_LOG}.dravania`, [
        [0, 117], // The Hundred Throes
        [1, 118], // Whilom River
        [2, 119], // The Smoldering Wastes
        [3, 120], // The Iron Feast
        [4, 121], // Mourn
        [5, 122], // West Mourn
        [6, 123], // Anyx Old
        [7, 124], // Halo
        [8, 125], // Thaliak River
        [9, 126], // Quickspill Delta
        [10, 127], // Upper Thaliak River
        [11, 128], // Middle Thaliak River
        [12, 129], // Eil Tohm
        [13, 130], // Greensward
        [14, 131], // Weston Waters
        [15, 132], // Landlord Colony
        [16, 133], // Sohm Al Summit
        [17, 134], // Tharl Oom Khash
    ]);

    store.safeChangeKeys(`${FISHING_LOG}.gyr-abania`, [
        [0, 182], // Upper Mirage Creek
        [1, 183], // Rhalgr's Reach
        [2, 184], // The Outer Fist
        [3, 185], // Timmon Beck
        [4, 186], // Dimwold
        [5, 187], // The Comet's Tail
        [6, 188], // The Velodyna River
        [7, 189], // Mirage Creek
        [8, 190], // Grymm & Enid
        [9, 191], // The Slow Wash
        [10, 192], // Heather Falls
        [11, 193], // The Ephor
        [12, 194], // The Bull's Bath
        [13, 195], // The Arms of Meed
        [14, 196], // Loch Seld
    ]);

    store.safeChangeKeys(`${FISHING_LOG}.hingashi`, [
        [0, 157], // Kugane Piers
        [1, 197], // Shirogane
        [2, 198], // The Silver Canal
    ]);

    store.safeChangeKeys(`${FISHING_LOG}.ilsabard`, [
        [0, 260], // Meghaduta
        [2, 261], // Yedlihmad
        [1, 262], // The Thavnairian Coast
        [4, 263], // The Great Runoff
        [3, 264], // Giantsgall Grounds
        [9, 265], // The Wakeful Torana
        [5, 266], // Ksiroda
        [6, 267], // Pavana's Remorse
        [8, 268], // The Font of Maya
        [7, 269], // The Perfumed Tides
        [11, 270], // The Eblan Thaw
        [10, 271], // The Stainless Course
    ]);

    store.safeChangeKeys(`${FISHING_LOG}.la-noscea`, [
        [0, 36], // Limsa Lominsa Upper Decks
        [1, 35], // Limsa Lominsa Lower Decks
        [2, 37], // Zephyr Drift
        [3, 39], // Rogue River
        [4, 40], // West Agelyss River
        [5, 38], // Summerford
        [6, 41], // Nym River
        [7, 42], // Woad Whisper Canyon
        [8, 43], // The Mourning Widow
        [9, 44], // Moraby Bay
        [10, 45], // Cedarwood
        [11, 47], // Oschon's Torch
        [12, 49], // Candlekeep Quay
        [13, 46], // Moraby Drydocks
        [14, 50], // Empty Heart
        [15, 48], // The Salt Strand
        [16, 97], // Blind Iron Mines
        [17, 51], // South Bloodshore
        [18, 52], // Costa del Sol
        [19, 53], // North Bloodshore
        [20, 107], // Rhotano Sea (Privateer Forecastle)
        [21, 108], // Rhotano Sea (Privateer Sterncastle)
        [22, 54], // Hidden Falls
        [23, 55], // East Agelyss River
        [24, 56], // Raincatcher Gully
        [25, 57], // The Juggernaut
        [26, 58], // Red Mantis Falls
        [27, 156], // North Isle of Endless Summer
        [28, 59], // Swiftperch
        [29, 60], // Skull Valley
        [30, 64], // The Brewer's Beacon
        [31, 61], // Halfstone
        [32, 62], // Isles of Umbra Northshore
        [33, 65], // The Ship Graveyard
        [34, 101], // Sapsa Spawning Grounds
        [35, 63], // Isles of Umbra Southshore
        [36, 102], // Reaver Hide
        [37, 66], // Oakwood
        [38, 67], // Fool Falls
        [39, 98], // Bronze Lake Shallows
        [40, 68], // Northeast Bronze Lake
        [41, 99], // The Long Climb
        [42, 155], // Northwest Bronze Lake
        [43, 104], // Mist
    ]);

    store.safeChangeKeys(`${FISHING_LOG}.mor-dhona`, [
        [0, 22], // North Silvertear
        [1, 25], // The Deep Tangle
        [2, 93], // Singing Shards
        [3, 23], // Rathefrost
        [4, 24], // The Tangle
        [5, 94], // The North Shards
    ]);

    store.safeChangeKeys(`${FISHING_LOG}.norvrandt`, [
        [0, 199], // The Trivium
        [1, 200], // The Quadrivium
        [2, 201], // Crystarium Personal Suites
        [3, 214], // The Derelicts
        [4, 202], // The Rift of Sighs
        [5, 203], // The Rusted Reservoir
        [6, 204], // The Source
        [7, 205], // Sullen
        [8, 206], // The Isle of Ken
        [9, 207], // Upper Watts River
        [10, 208], // White Oil Falls
        [11, 209], // Lower Watts River
        [12, 210], // Sharptongue Drip
        [13, 211], // The Western Kholusian Coast
        [14, 212], // Seagazer Shoals
        [15, 213], // The Eastern Kholusian Coast
        [16, 215], // The River of Sand
        [17, 217], // The Nabaath Severance
        [18, 216], // The Hills of Amber
        [19, 218], // Handmirror Lake
        [20, 219], // Longmirror Lake
        [21, 220], // The Haughty One
        [22, 221], // The Jealous One
        [23, 223], // The Spoiled One
        [24, 224], // Saint Fathric's Temple
        [25, 222], // Father Collard's Failings
        [26, 225], // Lake Tusi Mek'ta
        [27, 226], // The Red Chalice
        [28, 227], // The Lozatl
        [29, 228], // South Mjrl's Regret
        [30, 229], // Woven Oath
        [31, 245], // Mjrl's Tears
        [32, 230], // The Flounders' Floor
        [33, 231], // Where the Dry Return
        [34, 232], // Northwest Caliban Gorge
        [35, 233], // West Caliban Gap
        [36, 234], // East Caliban Gap
        [37, 235], // Purpure
        [38, 236], // The Norvrandt Slope
    ]);

    store.safeChangeKeys(`${FISHING_LOG}.othard`, [
        [0, 158], // The Ruby Price
        [1, 159], // Hells' Lid
        [2, 160], // The Isle of Bekko
        [3, 161], // Shoal Rock
        [4, 162], // Onokoro
        [5, 163], // Isari
        [6, 164], // The Isle of Zekki
        [7, 165], // The Heron's Nest
        [8, 166], // The Heron's Way
        [9, 167], // Namai
        [10, 172], // The One River (East)
        [11, 173], // The One River (West)
        [12, 174], // Plum Spring
        [13, 169], // Prism Canyon
        [14, 168], // Prism Lake
        [15, 171], // Mercantile Docks
        [16, 170], // Doma Castle
        [17, 175], // Nem Khaal
        [18, 176], // Hak Khaal
        [19, 177], // Upper Yat Khaal
        [20, 178], // Azim Khaat
        [21, 179], // Tao Khaal
        [22, 180], // Lower Yat Khaal
        [23, 181], // Dotharl Khaa
    ]);

    store.safeChangeKeys(`${FISHING_LOG}.thanalan`, [
        [0, 72], // Nophica's Wells
        [1, 73], // The Footfalls
        [2, 70], // Vesper Bay
        [3, 71], // Crescent Cove
        [4, 69], // The Silver Bazaar
        [5, 74], // Cape Westwind
        [6, 103], // Moondrip
        [7, 95], // Parata's Peace
        [8, 75], // Upper Soot Creek
        [9, 76], // Lower Soot Creek
        [10, 96], // The Clutch
        [11, 77], // The Unholy Heir
        [12, 78], // North Drybone
        [13, 79], // South Drybone
        [14, 80], // Yugr'am River
        [15, 82], // The Burning Wall
        [16, 83], // Burnt Lizard Creek
        [17, 84], // Zahar'ak
        [18, 85], // Forgotten Springs
        [19, 86], // Sagolii Desert
        [20, 87], // Sagolii Dunes
        [21, 89], // Bluefog
        [22, 88], // Ceruleum Field
        [23, 106], // The Goblet
    ]);

    store.safeChangeKeys(`${FISHING_LOG}.the-black-shroud`, [
        [0, 90], // Jadeite Flood
        [1, 91], // Lower Black Tea Brook
        [2, 81], // Whispering Gorge
        [3, 100], // Upper Black Tea Brook
        [4, 2], // The Vein
        [5, 3], // The Mirror
        [6, 4], // Everschade
        [7, 5], // Hopeseed Pond
        [8, 92], // Haukke Manor
        [9, 6], // Sweetbloom Pier
        [10, 8], // Springripple Brook
        [11, 10], // Sanctum of the Twelve
        [12, 7], // Verdant Drop
        [13, 9], // Sylphlands
        [14, 11], // Upper Hathoeva River
        [15, 13], // Lower Hathoeva River
        [16, 14], // East Hathoeva River
        [17, 12], // Middle Hathoeva River
        [18, 15], // Goblinblood
        [19, 16], // Rootslake
        [20, 17], // Urth's Gift
        [21, 18], // Murmur Rills
        [22, 19], // Fallgourd Float
        [23, 20], // Proud Creek
        [24, 21], // Lake Tahtotl
        [25, 105], // The Lavender Beds
    ]);

    store.safeChangeKeys(`${FISHING_LOG}.the-high-seas`, [
        [0, 237], // Outer Galadion Bay
        [1, 238], // Galadion Spectral Current
        [2, 239], // The Southern Strait of Merlthor
        [3, 240], // Southern Merlthor Spectral Current
        [4, 243], // The Northern Strait of Merlthor
        [5, 244], // Northern Merlthor Spectral Current
        [6, 241], // Open Rhotano Sea
        [7, 242], // Rhotano Spectral Current
        [8, 246], // Cieldalaes Margin
        [9, 247], // Cieldalaes Spectral Current
        [10, 248], // Open Bloodbrine Sea
        [11, 249], // Bloodbrine Spectral Current
        [12, 250], // Outer Rothlyt Sound
        [13, 251], // Rothlyt Spectral Current
        [14, 286], // Open Sirensong Sea
        [15, 287], // Sirensong Spectral Current
        [16, 288], // Kugane Coast
        [17, 289], // Kugane Spectral Current
        [18, 290], // Open Ruby Sea
        [19, 291], // Ruby Spectral Current
        [20, 292], // Lower One River
        [21, 293], // One River Spectral Current
    ]);

    store.safeChangeKeys(`${FISHING_LOG}.the-northern-empty`, [
        [0, 252], // Scholar's Harbor
        [1, 253], // Oinops
        [2, 254], // Reflecting Pool
        [4, 255], // Unmoved Source Alpha
        [3, 256], // The Mover Alpha
        [7, 257], // Unmoved Source Beta
        [6, 258], // The Mover Beta
        [5, 259], // Deepmoat
    ]);

    store.safeChangeKeys(`${FISHING_LOG}.the-sea-of-stars`, [
        [0, 272], // Greatest Endsvale
        [1, 273], // The Chlorophospond
        [2, 274], // The Frozen Fissure
        [6, 280], // Apohelos 18-α
        [4, 279], // Apohelos 18-β
        [3, 278], // Apohelos 18-γ
        [10, 281], // The Wellspring of Regret
        [7, 282], // Abode of the Ea
        [5, 283], // Limne 18
        [8, 284], // Limne 3-α
        [9, 285], // Limne 3-β
    ]);

    store.safeChangeKeys(`${FISHING_LOG}.the-world-unsundered`, [
        [0, 275], // Rumination's Ramble
        [2, 276], // The Lower Hungering Gardens
        [1, 277], // Lethe
    ]);

    store.safeChangeKeys(`${FISHING_LOG}.unlost-world`, [
        [0, 328], // The Knowable
        [1, 329], // Mu Springs Eternal
        [2, 330], // Leynode Aero
        [3, 331], // Canal Town South
        [4, 332], // Canal Town North
        [5, 333], // Proto Alexandria
    ]);

    store.safeChangeKeys(`${FISHING_LOG}.xak-tural`, [
        [0, 327], // Residential Sector
        [1, 319], // Niikwerepi
        [2, 320], // Lake Toari
        [3, 321], // Westbound Zorgor
        [4, 322], // Eastbound Zorgor
        [5, 323], // Outskirts Shallows
        [6, 324], // The Driftdowns
        [7, 325], // Crackling Canyons
        [8, 326], // Alexandrian Ruins
    ]);

    store.safeChangeKeys(`${FISHING_LOG}.yok-tural`, [
        [0, 294], // Downripple
        [2, 295], // The For'ard Cabins
        [3, 296], // High Tide Harbor
        [4, 297], // Sunken Stars
        [5, 298], // Chirwagur Lake
        [6, 299], // Karvarhur the First
        [7, 300], // Bopo'uihih
        [8, 301], // Waters Hanu
        [9, 302], // Miyakabek'zu
        [10, 303], // The Dewspun Bank
        [11, 304], // Peaks Poga
        [12, 305], // Ku'uxage
        [13, 306], // Miyakabek'zoma
        [14, 307], // Marsh Ligaka
        [15, 308], // Xd'aa Talat Tsoly
        [16, 309], // Iq Br'aax Reservoir
        [17, 310], // Yak Awak Tsoly
        [18, 311], // Iq Rrax Tsoly
        [19, 312], // Xobr'it Tsoly
        [20, 313], // Ankledeep
        [21, 314], // Cenote Moxutural
        [22, 315], // Cenote Jayunja
        [23, 316], // Sapsweet Cenote
        [24, 317], // Bitterbark Cenote
        [25, 318], // Xty'iinbek Tsoly
    ]);
}

function migrateSpearfishingLog(store: ChangeStore): void {
    store.safeChangeKeys(`${SPEARFISHING_LOG}.gyr-abania`, [
        [0, 13], // Loch Seld Northwestern Lakebed
        [1, 14], // Loch Seld Central Lakebed
        [2, 15], // Loch Seld Southeastern Lakebed
        [3, 32], // Loch Seld Deep Lakebed
        [4, 45], // Loch Seld Northeastern Lakebed
        [5, 48], // Loch Seld Southwestern Loch Seld
    ]);

    store.safeChangeKeys(`${SPEARFISHING_LOG}.ilsabard`, [
        [0, 36], // Southern Akyaali
        [4, 40], // Western Akyaali
        [2, 41], // Southern Great Runoff
        [3, 42], // The Font of Maya
        [1, 47], // Outer Akyaali
    ]);

    store.safeChangeKeys(`${SPEARFISHING_LOG}.la-noscea`, [
        [0, 52], // Northeast Bronze Lake Depths
        [1, 54], // Northwest Bronze Lake Depths
    ]);

    store.safeChangeKeys(`${SPEARFISHING_LOG}.norvrandt`, [
        [0, 16], // Northeast Source
        [1, 17], // The Isle of Ken
        [2, 18], // Southeast Source
        [3, 33], // Eastern Isle of Ken
        [15, 50], // Southwestern Isle of Ken
        [4, 19], // North Lyhe Ghiah
        [5, 20], // Deepwood Swim
        [6, 21], // Central Longmirror Lake
        [7, 22], // Thysm Lran
        [8, 23], // South Longmirror Lake
        [9, 34], // East Longmirror Lake
        [16, 51], // The House of the First Light
        [10, 24], // North Lake Tusi Mek'ta
        [11, 25], // The Covered Halls of Dwatl
        [12, 26], // Central Lake Tusi Mek'ta
        [13, 27], // South Lake Tusi Mek'ta
        [14, 35], // Deep Lake Tusi Mek'ta
    ]);

    store.safeChangeKeys(`${SPEARFISHING_LOG}.othard`, [
        [0, 0], // Ruby Price Depths
        [1, 1], // Tamamizu
        [2, 2], // Sui-no-Sato
        [3, 3], // The Adventure
        [4, 4], // Shisui of the Violet Tides
        [5, 5], // The Kobayashi Maru
        [6, 28], // The Eastern Ruby Sea
        [7, 29], // Kobayashi Maru's Northern Wake
        [17, 37], // Northern Onokoro
        [18, 38], // Isari Slope
        [19, 39], // Exile
        [20, 43], // Northeastern Bekko
        [21, 44], // Eastern Barrier Isle
        [22, 46], // Northwestern Onokoro
        [23, 49], // The Anemone Gardens
        [24, 53], // Saibai Cavern
        [8, 6], // The One River Southwestern Riverbeds
        [9, 7], // The One River Southern Riverbeds
        [10, 8], // Imperial Hypersonic Assault Craft L-XXIII
        [11, 9], // The Sunken Junk
        [12, 10], // The Dragon's Struggle
        [13, 30], // The Sunken Junk's South Side
        [14, 11], // Azim Khaat Western Lakebed
        [15, 12], // Azim Khaat Eastern Lakebed
        [16, 31], // Azim Khaat Southern Lakebed
    ]);

    store.safeChangeKeys(`${SPEARFISHING_LOG}.xak-tural`, [
        [0, 61], // Northern Lake Toari
    ]);

    store.safeChangeKeys(`${SPEARFISHING_LOG}.yok-tural`, [
        [0, 55], // Karvarhur the First
        [1, 56], // Eastern Marsh Ligaka
        [2, 57], // Western Marsh Ligaka
        [3, 62], // Marsh Ligaka Depths
        [4, 58], // Xd'aa Talat Tsoly
        [5, 59], // Western Iq Rrax Tsoly
        [6, 60], // Eastern Iq Rrax Tsoly
        [7, 63], // Iq Rrax Tsoly Depths
    ]);
}
