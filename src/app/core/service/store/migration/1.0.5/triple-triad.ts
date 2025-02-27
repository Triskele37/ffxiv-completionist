import { ChangeStore } from '@service/store/migration/ChangeStore';

/** Triple Triad Cards changes from Generated Resources
 * */
export function migrateTripleTriadCards(store: ChangeStore): void {
    const TT = 'overall.character.gold-saucer.triple-triad-card-list';

    store.safeChangeKeys(`${TT}.page-`, []);

    store.safeChangeKeys(`${TT}.last-page`, [
        [0, 68], // Warrior of Light
        [1, 69], // Firion
        [2, 70], // Onion Knight
        [3, 71], // Cecil Harvey
        [4, 72], // Bartz Klauser
        [5, 73], // Terra Branford
        [6, 74], // Cloud Strife
        [7, 75], // Squall Leonhart
        [8, 76], // Zidane Tribal
        [9, 77], // Tidus
        [10, 78], // Shantotto
        [11, 79], // Vaan
        [12, 80], // Lightning
        [13, 252], // Noctis Lucis Caelum
        [14, 405], // Clive Rosfield
    ]);

    store.safeChangeKeys(`${TT}.page-1`, [
        [0, 1], // Dodo
        [1, 2], // Tonberry
        [2, 3], // Sabotender
        [3, 4], // Spriggan
        [4, 5], // Pudding
        [5, 6], // Bomb
        [6, 7], // Mandragora
        [7, 8], // Coblyn
        [8, 9], // Morbol
        [9, 10], // Coeurl
        [10, 11], // Ahriman
        [11, 12], // Goobbue
        [12, 13], // Chocobo
        [13, 14], // Amalj'aa
        [14, 15], // Ixal
        [15, 16], // Sylph
        [16, 17], // Kobold
        [17, 18], // Sahagin
        [18, 19], // Tataru Taru
        [19, 20], // Moogle
        [20, 21], // Siren
        [21, 22], // Ultros & Typhon
        [22, 23], // Demon Wall
        [23, 24], // Succubus
        [24, 25], // Chimera
        [25, 26], // Blue Dragon
        [26, 27], // Scarface Bugaal Ja
        [27, 28], // Momodi Modi
        [28, 29], // Baderon Tenfingers
        [29, 30], // Mother Miounne
    ]);

    store.safeChangeKeys(`${TT}.page-2`, [
        [0, 31], // Livia sas Junius
        [1, 32], // Rhitahtyn sas Arvina
        [2, 33], // Biggs & Wedge
        [3, 34], // Gerolt
        [4, 35], // Frixio
        [5, 36], // Mutamix Bubblypots
        [6, 37], // Memeroon
        [7, 38], // Behemoth
        [8, 39], // Gilgamesh & Enkidu
        [9, 40], // Ifrit
        [10, 41], // Titan
        [11, 42], // Garuda
        [12, 43], // Good King Moggle Mog XII
        [13, 44], // Raya-O-Senna & A-Ruhn-Senna
        [14, 45], // Godbert Manderville
        [15, 46], // Thancred
        [16, 47], // Nero tol Scaeva
        [17, 48], // Papalymo & Yda
        [18, 49], // Y'shtola
        [19, 50], // Urianger
        [20, 51], // Ultima Weapon
        [21, 52], // Odin
        [22, 53], // Ramuh
        [23, 54], // Leviathan
        [24, 55], // Shiva
        [25, 56], // Minfilia
        [26, 57], // Lahabrea
        [27, 58], // Cid Garlond
        [28, 59], // Alphinaud & Alisaie
        [29, 60], // Louisoix Leveilleur
    ]);

    store.safeChangeKeys(`${TT}.page-3`, [
        [0, 61], // Bahamut
        [1, 62], // Hildibrand & Nashu Mhakaracca
        [2, 63], // Nanamo Ul Namo
        [3, 64], // Gaius van Baelsar
        [4, 65], // Merlwyb Bloefhiswyn
        [5, 66], // Kan-E-Senna
        [6, 67], // Raubahn Aldynn
        [7, 81], // Gaelicat
        [8, 82], // Vanu Vanu
        [9, 83], // Gnath
        [10, 84], // Yugiri Mistwalker
        [11, 85], // Fat Chocobo
        [12, 86], // Griffin
        [13, 87], // Tioman
        [14, 88], // Estinien
        [15, 89], // Lucia goe Junius
        [16, 90], // Ysayle
        [17, 91], // Hilda
        [18, 92], // Matoya
        [19, 93], // Count Edmont de Fortemps
        [20, 94], // Byblos
        [21, 95], // Haurchefant
        [22, 96], // Aymeric
        [23, 97], // Ravana
        [24, 98], // Bismarck
        [25, 99], // Nidhogg
        [26, 100], // Midgardsormr
        [27, 101], // Deepeye
        [28, 102], // Archaeornis
        [29, 103], // Paissa
    ]);

    store.safeChangeKeys(`${TT}.page-4`, [
        [0, 104], // Dhalmel
        [1, 105], // Bandersnatch
        [2, 106], // Crawler
        [3, 107], // Poroggo
        [4, 108], // Vedrfolnir
        [5, 109], // Coeurlregina
        [6, 110], // Progenitrix
        [7, 111], // Belladonna
        [8, 112], // Echidna
        [9, 113], // Pipin Tarupin
        [10, 114], // Julyan Manderville
        [11, 115], // Moglin
        [12, 116], // Charibert
        [13, 117], // Roundrox
        [14, 118], // Senor Sabotender
        [15, 119], // Regula van Hydrus
        [16, 120], // Archbishop Thordan VII
        [17, 121], // Honoroit
        [18, 122], // Hoary Boulder & Coultenet
        [19, 123], // Brachiosaur
        [20, 124], // Darkscale
        [21, 125], // Fenrir
        [22, 126], // Kraken
        [23, 127], // Vicegerent to the Warden
        [24, 128], // Manxome Molaa Ja Ja
        [25, 129], // Ferdiad
        [26, 130], // Calcabrina
        [27, 131], // Kuribu
        [28, 132], // Phlegethon
        [29, 133], // Artoirel de Fortemps
    ]);

    store.safeChangeKeys(`${TT}.page-5`, [
        [0, 134], // Emmanellain de Fortemps
        [1, 135], // Xande
        [2, 136], // Brute Justice
        [3, 137], // Sephirot
        [4, 138], // F'lhaminn
        [5, 139], // Vidofnir
        [6, 140], // Cloud of Darkness
        [7, 141], // Lolorito Nanarito
        [8, 142], // Gibrillont
        [9, 143], // Laniaitte de Haillenarte
        [10, 144], // Rhoswen
        [11, 145], // Carvallain de Gorgagne
        [12, 146], // Kal Myhk
        [13, 147], // Waukkeon
        [14, 148], // Curator
        [15, 149], // Mistbeard
        [16, 150], // Unei & Doga
        [17, 151], // Tiamat
        [18, 152], // Calofisteri
        [19, 153], // Hraesvelgr
        [20, 154], // Apkallu
        [21, 155], // Colibri
        [22, 156], // Magitek Death Claw
        [23, 157], // Liquid Flame
        [24, 158], // Lost Lamb
        [25, 159], // Delivery Moogle
        [26, 160], // Magitek Colossus
        [27, 161], // Strix
        [28, 162], // Tozol Huatotl
        [29, 163], // Alexander Prime
    ]);

    store.safeChangeKeys(`${TT}.page-6`, [
        [0, 164], // Brendt, Brennan, & Bremondt
        [1, 165], // Heavensward Thancred
        [2, 166], // Heavensward Y'shtola
        [3, 167], // Nael van Darnus
        [4, 168], // Sophia
        [5, 169], // Opo-opo
        [6, 170], // Adamantoise
        [7, 171], // Magitek Vanguard
        [8, 172], // Magitek Gunship
        [9, 174], // Lava Scorpion
        [10, 175], // Magitek Predator
        [11, 176], // Magitek Sky Armor
        [12, 177], // The Griffin
        [13, 179], // Diabolos Hollow
        [14, 180], // Armored Weapon
        [15, 182], // Zurvan
        [16, 173], // Gold Saucer Attendant
        [17, 178], // Roland
        [18, 181], // Gigi
        [19, 183], // Namazu
        [20, 184], // Kojin
        [21, 185], // Ananta
        [22, 186], // M'naago
        [23, 187], // Kotokaze
        [24, 188], // Mammoth
        [25, 189], // Phoebad
        [26, 190], // Susano
        [27, 191], // Lakshmi
        [28, 192], // Grynewaht
        [29, 193], // Rasho
    ]);

    store.safeChangeKeys(`${TT}.page-7`, [
        [0, 194], // Cirina
        [1, 195], // Magnai
        [2, 196], // Sadu
        [3, 197], // Shinryu
        [4, 198], // Yotsuyu
        [5, 199], // Krile
        [6, 200], // Lyse
        [7, 201], // Zenos yae Galvus
        [8, 202], // Hien
        [9, 203], // Mossling
        [10, 204], // Chapuli
        [11, 205], // Qiqirn Meateater
        [12, 206], // Hrodric Poisontongue
        [13, 207], // Fordola rem Lupis
        [14, 208], // Rofocale
        [15, 209], // Argath Thadalfus
        [16, 210], // Raubahn & Pipin
        [17, 211], // Koja
        [18, 212], // Ango
        [19, 213], // Guidance Node
        [20, 214], // Tansui
        [21, 215], // Genbu
        [22, 216], // Byakko
        [23, 217], // Arenvald Lentinus
        [24, 218], // Lupin
        [25, 219], // Hancock
        [26, 220], // Hisui & Kurenai
        [27, 224], // Qitian Dasheng
        [28, 228], // Tsukuyomi
        [29, 229], // Yiazmat
    ]);

    store.safeChangeKeys(`${TT}.page-8`, [
        [0, 230], // Gosetsu
        [1, 221], // Wanyudo & Katasharin
        [2, 222], // Hatamoto
        [3, 225], // Hiruko
        [4, 223], // Yukinko
        [5, 226], // Happy Bunny
        [6, 227], // Louhi
        [7, 232], // Muud Suud
        [8, 233], // Tokkapchi
        [9, 234], // Mist Dragon
        [10, 235], // Suzaku
        [11, 238], // Asahi sas Brutus
        [12, 240], // Omega
        [13, 231], // Karakuri Hanya
        [14, 236], // Pazuzu
        [15, 237], // Penthesilea
        [16, 239], // Yojimbo & Daigoro
        [17, 241], // Stormblood Tataru Taru
        [18, 244], // Prometheus
        [19, 246], // Seiryu
        [20, 247], // Alpha
        [21, 248], // Great Gold Whisker
        [22, 250], // Ultima, the High Seraph
        [23, 251], // Stormblood Alphinaud & Alisaie
        [24, 242], // Dvergr
        [25, 243], // Ejika Tsunjika
        [26, 245], // Provenance Watcher
        [27, 249], // Stormblood Gilgamesh
        [28, 253], // Amaro
        [29, 254], // Evil Weapon
    ]);

    store.safeChangeKeys(`${TT}.page-9`, [
        [0, 255], // Lord and Lady Chai
        [1, 256], // Gigantender
        [2, 257], // Feo Ul
        [3, 258], // Runar
        [4, 259], // Grenoldt
        [5, 260], // Philia
        [6, 261], // Titania
        [7, 262], // Eros
        [8, 263], // Storge
        [9, 264], // Formidable
        [10, 265], // Lyna
        [11, 266], // Jongleurs of Eulmore
        [12, 267], // Innocence
        [13, 268], // Shadowbringers Y'shtola
        [14, 269], // Shadowbringers Urianger
        [15, 270], // Ran'jit
        [16, 271], // Hades
        [17, 272], // Ardbert
        [18, 273], // Hobgoblin
        [19, 274], // Porxie
        [20, 275], // Iguana
        [21, 276], // Nu Mou
        [22, 277], // Fuath
        [23, 278], // Leannan Sith
        [24, 279], // Seeker of Solitude
        [25, 280], // Oracle of Light
        [26, 281], // Archaeotania
        [27, 282], // 9S
        [28, 283], // Flower Basket
        [29, 284], // Qitari
    ]);

    store.safeChangeKeys(`${TT}.page-10`, [
        [0, 285], // Gnoll
        [1, 287], // Batsquatch
        [2, 288], // Forgiven Obscenity
        [3, 289], // Huaca
        [4, 290], // Unknown
        [5, 291], // Ruby Weapon
        [6, 292], // Therion
        [7, 286], // Lizbeth
        [8, 293], // Varis yae Galvus
        [9, 294], // Dwarf
        [10, 296], // Rolling Tankard
        [11, 297], // Lugus
        [12, 300], // Elidibus
        [13, 301], // Shadowbringers Thancred
        [14, 302], // Sapphire Weapon
        [15, 303], // 2P
        [16, 304], // Shadowbringers Warrior of Light
        [17, 295], // Ehll Tou
        [18, 298], // Dawon
        [19, 299], // Adrammelech
        [20, 306], // Mother Porxie
        [21, 312], // Emerald Weapon
        [22, 313], // Ryne
        [23, 314], // Gaia
        [24, 315], // Eden's Promise
        [25, 316], // Phoenix
        [26, 305], // Great Azuro
        [27, 307], // Trinity Seeker
        [28, 308], // Trinity Avowed
        [29, 309], // Azulmagia
    ]);

    store.safeChangeKeys(`${TT}.page-11`, [
        [0, 310], // Siegfried
        [1, 311], // Gogo, Master of Mimicry
        [2, 317], // Keeper of the Keys
        [3, 318], // Lunar Bahamut
        [4, 319], // Valens van Varro
        [5, 323], // G-Warrior
        [6, 324], // Diamond Weapon
        [7, 326], // 2B
        [8, 320], // Lunar Ifrit
        [9, 321], // 4th-make Shemhazai
        [10, 322], // 4th-make Cuchulainn
        [11, 325], // Diablo Armament
        [12, 327], // Troll
        [13, 328], // Pisaca
        [14, 329], // Ea
        [15, 330], // Arkasodara
        [16, 331], // Loporrit
        [17, 332], // Argos
        [18, 333], // Hermes
        [19, 334], // Amon the Undying
        [20, 336], // Magus Sisters
        [21, 337], // Meteion
        [22, 338], // Fourchenault Leveilleur
        [23, 339], // Anima
        [24, 340], // Quintus van Cinna
        [25, 341], // Endwalker Alphinaud & Alisaie
        [26, 342], // Hythlodaeus
        [27, 343], // Vrtra
        [28, 344], // Zodiark
        [29, 345], // Hydaelyn
    ]);

    store.safeChangeKeys(`${TT}.page-12`, [
        [0, 346], // Zenos Galvus
        [1, 335], // Erichthonios
        [2, 347], // Rampart
        [3, 350], // Rhalgr
        [4, 351], // Azeyma
        [5, 352], // Nald
        [6, 353], // Thal
        [7, 354], // Chi
        [8, 355], // Daivadipa
        [9, 356], // Endsinger
        [10, 348], // Hippo Cart
        [11, 349], // Gajasura
        [12, 361], // Beatrice
        [13, 362], // Byregot
        [14, 364], // Scarmiglione
        [15, 365], // Barbariccia
        [16, 366], // Chief Keyward Lahabrea
        [17, 367], // Hephaistos
        [18, 357], // N-7000
        [19, 358], // Geryon the Steer
        [20, 359], // Gladiator of Sil'dih
        [21, 360], // Thorne Knight
        [22, 363], // Shadowcaster Zeless Gah
        [23, 368], // Clockwork Onmyoji & Clockwork Yojimbo
        [24, 370], // Felicitous Furball
        [25, 371], // Anden
        [26, 374], // Menphina
        [27, 375], // Cagnazzo
        [28, 376], // Rubicante
        [29, 369], // Dreamingway
    ]);

    store.safeChangeKeys(`${TT}.page-13`, [
        [0, 372], // Suprae-Lugae
        [1, 373], // Gancanagh
        [2, 377], // Venat
        [3, 381], // Octomammoth
        [4, 382], // Proto-Carbuncle
        [5, 385], // Themis
        [6, 387], // Golbez
        [7, 388], // Athena
        [8, 378], // Okuri Chochin
        [9, 379], // Gorai the Uncaged
        [10, 380], // Moko the Restless
        [11, 383], // Goldor
        [12, 384], // Shishio
        [13, 386], // Enenra
        [14, 394], // Nophica
        [15, 395], // Althyk
        [16, 396], // Nymeia
        [17, 397], // Halone
        [18, 398], // Thaliak
        [19, 399], // Llymlaen
        [20, 400], // Oschon
        [21, 401], // Durante
        [22, 402], // Eulogia
        [23, 404], // Zeromus
        [24, 389], // Ketuduke
        [25, 390], // Lala
        [26, 391], // Statice
        [27, 393], // Loquloqui
        [28, 392], // PuPu
        [29, 403], // Asura
    ]);
}
