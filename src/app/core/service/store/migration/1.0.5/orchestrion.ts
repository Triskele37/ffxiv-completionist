import { ChangeStore } from '@service/store/migration/ChangeStore';

/** Orchestrion changes from Generated Resources
 * */
export function migrateOrchestrions(store: ChangeStore): void {
    const ORCH = `overall.logs.orchestrion-list`;

    store.safeChangeKeys(`${ORCH}.ambient`, [
        [0, 152], // Ambient Birdsong
        [1, 151], // Ambient Waves
        [2, 153], // Ambient Rainfall
        [3, 154], // Ambient Cricketsong
        [4, 168], // Ambient Insects
        [5, 169], // Ambient Bonfire
        [6, 170], // Ambient Kitchen
        [7, 194], // Babbling Brook
        [8, 195], // Bustling Boulevard
        [9, 196], // Temple Bell
        [10, 197], // Chapel Bell
        [11, 221], // Ambient Wind Chime
        [12, 222], // Ambient Abyss
        [13, 564], // Silence
    ]);

    store.safeChangeKeys(`${ORCH}.dungeons-i`, [
        [71, 502], // From the Depths
        [64, 431], // Below
        [65, 426], // The Ludus
        [91, 559], // A Thousand Screams
        [0, 368], // The Maiden's Lament
        [92, 560], // Lipflaps on Longstops
        [59, 396], // Abomination
        [1, 369], // The Darkhold
        [60, 395], // A Tonberry's Tears
        [89, 557], // The Emperor's Wont
        [90, 558], // Penitus
        [2, 23], // A Light in the Storm
        [3, 22], // The Dark's Embrace
        [4, 26], // The Scars of Battle
        [5, 249], // Beneath Bloodied Banners
        [6, 326], // Fury
        [7, 67], // Horizons Calling
        [8, 21], // Dark Vows
        [9, 62], // The Warrens
        [10, 20], // Riptide
        [11, 102], // Silver Tears
        [12, 248], // Tricksome
        [83, 530], // Aftermath
        [63, 430], // A Fine Death
        [62, 421], // Nemesis
        [29, 97], // Blackbosom
        [31, 98], // Fog of Phantom
        [30, 99], // Blasphemous Experiment
        [32, 100], // Notice of Death
        [82, 529], // Descent
        [15, 101], // Slumber Eternal
        [70, 501], // Roar of the Wyrm
        [87, 555], // Toll of the Bells
        [16, 130], // Hallowed Halls
        [88, 556], // Stigma
        [17, 64], // Ink Long Dry
        [18, 24], // Imagination
        [81, 528], // Like a Summer Rain
        [19, 65], // Unbreakable
        [20, 155], // Poison Ivy
        [21, 247], // Upon the Rocks
        [22, 25], // Down the Up Staircase
        [66, 432], // Dancing Calcabrina
        [23, 227], // The Ancient City
        [24, 66], // Apologies
        [25, 103], // Grounded
        [26, 156], // Bibliophobia
        [27, 132], // Another Brick
        [28, 131], // Quicksand
        [13, 63], // Ominous Prognisticks
        [14, 217], // Revenge Twofold
        [69, 500], // Dawnbound
        [34, 180], // The Open Box
        [35, 181], // Most Unworthy
        [36, 228], // Gates of the Moon
        [37, 325], // Alienus
        [38, 213], // Liberty or Death
        [39, 182], // Deception
        [40, 212], // Their Deadly Mission
        [41, 183], // Far From Home
        [42, 210], // Down Where Daemons Dwell
        [43, 211], // Unbreakable (Duality)
        [44, 229], // Earth, Wind, and Water
        [45, 251], // A Land Long Dead
        [46, 250], // From Mud
        [47, 269], // A Pall Most Murderous
        [33, 214], // Triumph
        [94, 575], // Echoes of Ages Past
        [95, 576], // Cold Salvation
        [96, 577], // Miser's Folly
        [97, 574], // Cracks in the Wall
        [98, 578], // Forgotten by the Sun
        [99, 579], // Holy Consult
        [100, 573], // Dangertek
        [101, 583], // The Promise of Plunder
        [102, 612], // My Soul to Keep
    ]);

    store.safeChangeKeys(`${ORCH}.dungeons-ii`, [
        [48, 317], // To Fire and Sword
        [49, 318], // Figments
        [50, 319], // Unwound
        [51, 320], // Deep Down
        [52, 321], // In the Belly of the Beast
        [53, 322], // Mortal Instants
        [54, 324], // A Long Fall
        [55, 323], // Shadows Withal
        [56, 344], // The Grand Cosmos
        [57, 370], // Floundering in the Depths
        [58, 393], // Where All Roads Lead
        [61, 416], // Freshly Glazed Porxie
        [67, 439], // Seven Flames
        [68, 330], // Insatiable
        [72, 475], // Tower of Zot (Endwalker)
        [73, 476], // Garlemald Express
        [74, 477], // As the Sky Burns
        [75, 478], // Miracle Works
        [76, 479], // The Aetherial Sea
        [77, 480], // Of Countless Stars
        [78, 481], // Carrots of Happiness
        [79, 506], // The Map Unfolds
        [80, 537], // Troian Beauty (Endwalker)
        [84, 538], // FINAL FANTASY IV: Battle 2 (Endwalker)
        [85, 496], // On Blade's Edge
        [86, 497], // Finality
        [93, 539], // Desert Sun
        [27, 567], // Deep Blue
        [28, 568], // Forbidden Land (Endwalker)
        [29, 596], // Starsbreath
        [30, 597], // Crimson Rise
        [643, 643], // Kingdom of Baron (Endwalker)
        [648, 648], // O Speaker, Slumber
        [649, 649], // O Hunter, Rejoice
    ]);

    store.safeChangeKeys(`${ORCH}.locales-i`, [
        [0, 2], // Wailers and Waterwheels
        [1, 3], // I Am the Sea
        [2, 4], // A New Hope
        [3, 49], // A Sailor Never Sleeps
        [4, 50], // Dance of the Fireflies
        [5, 48], // Sultana Dreaming
        [6, 58], // On Westerly Winds
        [7, 59], // Serenity
        [8, 57], // To the Sun
        [9, 165], // Navigator's Glory - The Theme of Limsa Lominsa
        [10, 166], // Born of the Boughs - The Theme of Gridania
        [11, 167], // The Twin Faces of Fate - The Theme of Ul'dah
        [12, 76], // On Windy Meadows
        [13, 77], // Whisper of the Land
        [14, 78], // Twilight over Thanalan
        [15, 92], // Unspoken
        [16, 6], // The Waking Sands
        [17, 9], // Another Round
        [18, 7], // Four-sided Circle
        [19, 85], // Smoulder
        [20, 117], // Flibbertigibbet
        [21, 89], // Behind Closed Doors
        [22, 93], // Where the Heart Is
        [23, 90], // Reflections
        [24, 119], // Frontiers Within
        [25, 120], // Fleeting Rays
        [26, 121], // Saltswept
        [27, 164], // The Edge
        [28, 51], // Nobility Obliges
        [29, 5], // Solid
        [30, 54], // Against the Wind
        [31, 55], // Landlords
        [32, 10], // Painted Foothills
        [33, 56], // Missing Pages
        [34, 11], // Lost in the Clouds
        [35, 87], // Nobility Sleeps
        [36, 88], // Night in the Brume
        [37, 230], // Black and White
        [38, 159], // Skylords
        [39, 160], // The Silent Regard of Stars
        [40, 91], // Close to the Heavens
        [41, 118], // Piece of Mind
        [42, 86], // Coming Home
        [43, 52], // The Mushroomery
        [44, 53], // Shelter
        [45, 94], // Homestead
        [46, 122], // Thicker than a Knife's Blade
        [47, 349], // Safety in Numbers
        [48, 174], // Impact
        [49, 161], // Beyond the Wall
        [50, 176], // On High
        [51, 177], // Songs of Salt and Suffering
        [52, 175], // Crimson Sunrise
        [53, 162], // Liquid Flame
        [54, 178], // A Father's Pride
        [55, 163], // Drowning in the Horizon
        [56, 283], // Afterglow
        [57, 284], // Hope Forgotten
        [58, 285], // The Stone Remembers
        [59, 286], // Old Wounds
        [60, 203], // Crimson Sunset
        [61, 204], // Westward Tide
        [62, 205], // A Mother's Pride
        [63, 206], // He Rises Above
        [64, 179], // Indomitable
        [65, 207], // Keepers of the Lock
        [66, 231], // Seven Hundred Seventy-Seven Whiskers
        [67, 246], // Cradle
        [68, 287], // Harmony
        [69, 382], // Order Yet Undeciphered
        [70, 374], // Paradise Found
        [71, 375], // Fealty
        [72, 429], // Painted Skies
        [73, 441], // What Is Love?
        [74, 548], // Into the Adder's Den
        [75, 549], // Maelstrom Command
        [76, 550], // The Hall of Flames
        [77, 584], // Crystal Rain
        [78, 603], // Looping in the Deepest Fringes
    ]);

    store.safeChangeKeys(`${ORCH}.locales-ii`, [
        [0, 331], // The Dark Which Illuminates the World
        [1, 332], // Indulgence
        [2, 342], // Pain in Pleasure
        [3, 307], // The Source
        [4, 308], // A World Divided
        [5, 309], // Sands of Amber
        [6, 310], // Fierce and Free
        [7, 311], // Civilizations
        [8, 312], // Full Fathom Five
        [9, 334], // Knowledge Never Sleeps
        [10, 335], // Masquerade
        [11, 336], // Unchanging, Everchanging
        [12, 337], // The Quick Way
        [13, 338], // Sands of Blood
        [14, 339], // The Faerie Ring
        [15, 340], // A Hopeless Race
        [16, 341], // Neath Dark Waters
        [17, 329], // Rencounter
        [18, 345], // The Garden's Gates
        [19, 371], // Hopl's Dropple
        [20, 379], // A Reason to Live
        [21, 380], // No Greater Sorrow
        [22, 383], // Watts's Anvil
        [23, 425], // Unmatching Pieces
        [24, 487], // The Ewer Brimmeth
        [25, 488], // Twilit Terraces
        [26, 489], // The Labyrinth
        [27, 490], // Divine Words
        [28, 491], // White Snow, Black Steel
        [29, 492], // One Small Step
        [30, 493], // Sky Unsundered
        [31, 494], // Close in the Distance
        [32, 495], // Unbowed
        [33, 515], // The Nautilus Knoweth
        [34, 516], // The Day Will Come (Endwalker)
        [35, 517], // Vibrant Voices
        [36, 518], // Perfumed Eves
        [37, 519], // Dreams of Man
        [38, 520], // Prayers Repeated
        [39, 521], // Black Steel, Cold Embers
        [40, 523], // Stars Long Dead
        [41, 524], // Welcome to Our Town! (Endwalker)
        [42, 514], // Hippo Ridin'
        [43, 546], // Cradle of Hope
        [44, 566], // Dreamwalker
        [45, 582], // Battle 1 from FINAL FANTASY IV
        [46, 591], // Another Moon
    ]);

    store.safeChangeKeys(`${ORCH}.mog-station`, [
        [0, 114], // Borderless (Duality)
        [1, 115], // Unbending Steel (Duality)
        [2, 191], // Ultima (Orchestral Version)
        [3, 192], // Heroes (Orchestral Version)
        [4, 242], // Rise of the White Raven (Orchestral Version)
        [5, 243], // Revenge Twofold (Orchestral Version)
        [6, 244], // Oblivion (Orchestral Version)
        [7, 272], // Serenity (Orchestral Version)
        [8, 273], // Calamity Unbound (Orchestral Version)
        [9, 274], // Ominous Prognisticks (Orchestral Version)
        [10, 277], // Wayward Daughter (Chiptune Version)
        [11, 278], // The Worm's Tail (Chiptune Version)
        [12, 279], // Rise (The Primals)
        [13, 280], // Oblivion (GUNN Vocals)
        [14, 281], // Painted Foothills (Orchestral Version)
        [15, 282], // Moebius (Orchestral Version)
        [16, 305], // The Worm's Tail (Journeys Version)
        [17, 306], // eScape (Journeys Version)
        [18, 358], // Tsukuyomi's Pain (Orchestral Version)
        [19, 359], // The Worm's Tail (Orchestral Version)
        [20, 407], // A New Hope (Piano Collections)
        [21, 408], // Wailers and Waterwheels (Piano Collections)
        [22, 409], // I Am the Sea (Piano Collections)
        [23, 405], // Neath Dark Waters (Scions & Sinners)
        [24, 406], // A Long Fall (Scions & Sinners: Band)
        [25, 433], // Ominous Prognisticks (Piano Collections)
        [26, 434], // Night in the Brume (Piano Collections)
        [27, 435], // Painted Foothills (Piano Collections)
        [28, 445], // On Westerly Winds (Piano Collections)
        [29, 446], // Serenity (Piano Collections)
        [30, 447], // To the Sun (Piano Collections)
        [31, 448], // Invincible (Scions & Sinners: Piano)
        [32, 449], // Tomorrow and Tomorrow (Scions & Sinners: Amanda Achen Vocals)
        [33, 450], // Return to Oblivion (Scions & Sinners: Amanda Achen Vocals)
        [34, 451], // What Angel Wakes Me (Scions & Sinners: Amanda Achen Vocals)
        [35, 452], // A Long Fall (Scions & Sinners: Piano)
        [36, 453], // Equilibrium (Scions & Sinners: Band)
        [37, 454], // What Angel Wakes Me (Scions & Sinners: Band)
        [38, 455], // Shadowbringers (Scions & Sinners: Band)
        [39, 456], // Blinding Indigo (Scions & Sinners: Band)
        [40, 457], // Insatiable (Scions & Sinners: Band)
        [41, 458], // Rise (Pulse)
        [42, 459], // Through the Maelstrom (Pulse)
        [43, 460], // Neath Dark Waters (Pulse)
        [44, 461], // What Angel Wakes Me (Pulse)
        [45, 462], // Sunrise (Pulse)
        [46, 503], // Ink Long Dry (Piano Collections)
        [47, 504], // Heroes (Piano Collections)
        [48, 505], // Old Wounds (Piano Collections)
        [49, 535], // Crimson Sunset (Piano Collections)
        [50, 534], // Imagination (Piano Collections)
        [51, 533], // Westward Tide (Piano Collections)
        [52, 563], // Hic Svnt Leones (Beyond the Shadow)
        [53, 562], // Close in the Distance (Beyond the Shadow)
        [54, 588], // To the Edge (Orchestral Version)
        [55, 589], // Flow (Orchestral Version)
        [56, 615], // Shadowbringers (Orchestral Version)
        [57, 616], // Endcaller (Orchestral Version)
        [58, 617], // Your Answer (Orchestral Version)
        [59, 618], // Close in the Distance (Orchestral Version)
        [60, 619], // The Final Day (Orchestral Version)
        [61, 621], // Equilibrium (Pulse)
        [62, 620], // Unbreakable (Pulse)
        [63, 622], // Beauty's Wicked Wiles (Pulse)
        [64, 623], // I Am the Sea (Pulse)
        [65, 624], // A Long Fall (Pulse)
        [626, 626], // To the Edge (Forge Ahead)
        [627, 627], // White Stone Black (Forge Ahead)
        [628, 628], // Scream (Forge Ahead)
        [629, 629], // In the Balance (Forge Ahead)
        [630, 630], // Athena, the Tireless One (Forge Ahead)
        [631, 631], // Flow (Forge Ahead)
        [632, 632], // What Once Was (Forge Ahead)
        [633, 633], // Carrots of Happiness (Forge Ahead)
        [634, 634], // The Labyrinth (Forge Ahead)
        [635, 635], // Dedicated to Moonlight (Amanda Achen Vocals)
        [641, 641], // Dedicated to Moonlight (Forge Ahead)
        [642, 642], // In the Balance (Amanda Achen Vocals)
    ]);

    store.safeChangeKeys(`${ORCH}.others`, [
        [93, 547], // Born to Ride
        [7, 17], // Tenacity
        [8, 47], // When a Tree Falls
        [57, 394], // Hard to Miss
        [9, 18], // Blood for Blood
        [10, 19], // Starved
        [23, 171], // Birds of Prey
        [24, 202], // Rival Wings
        [48, 346], // A Fierce Air Forceth
        [49, 347], // A Fine Air Forbiddeth
        [85, 525], // Warming Up
        [86, 526], // Festival of the Hunt (Endwalker)
        [87, 527], // Run! (Endwalker)
        [88, 531], // Gateway to Paradise
        [2, 8], // Sport of Kings
        [69, 561], // Shuffle or Boogie
        [97, 436], // Shuffle or Boogie (Shadowbringers)
        [41, 270], // Game Theory
        [42, 271], // Doman Distractions
        [40, 276], // Rise of Heroes (Chiptune Version)
        [19, 123], // Jewel
        [32, 208], // Wicked Winds Whisper
        [33, 209], // No Quarter
        [43, 288], // Gates of Paradise - The Garden of Ru'Hmet
        [44, 289], // Onslaught
        [45, 290], // Turmoil
        [37, 237], // Cornerstone of the New World - Astera
        [50, 360], // Nail of the Heavens
        [51, 361], // Imperium
        [72, 412], // Gogo's Theme
        [54, 381], // On Our Fates Alight
        [56, 377], // The Mendicant's Relish
        [70, 410], // New Foundations
        [71, 428], // Hearthward
        [80, 463], // Skyrise
        [60, 387], // Wind on the Plains
        [61, 388], // Blood on the Wind
        [62, 389], // Discord: Imperial (Zodiac Age Version)
        [63, 390], // Into the Fortress (Zodiac Age Version)
        [64, 391], // Battle with an Esper (Zodiac Age Version)
        [65, 392], // Life and Death (Zodiac Age Version)
        [73, 413], // The Sochen Cave Palace (Zodiac Age Version)
        [74, 414], // Giving Chase (Zodiac Age Version)
        [75, 415], // The Queen Awakens
        [81, 438], // Wrath of the Harrier
        [91, 544], // A Quiet Moment
        [92, 545], // Island Paradise
        [100, 572], // A Victory Fanfare Reborn
        [101, 593], // Subterranean Sanctuary
        [102, 602], // Battle 2 from FINAL FANTASY III
        [0, 12], // Prelude – Discoveries
    ]);

    store.safeChangeKeys(`${ORCH}.quests`, [
        [18, 128], // Forever Lost
        [29, 200], // Daring Dalliances
        [77, 442], // By Design
        [17, 127], // Canticle
        [94, 551], // Dewdrops & Moonbeams
        [95, 552], // Ripples in the Sea
        [96, 553], // The Sands' Secrets
        [89, 532], // Starlight and Sellswords
        [4, 13], // Agent of Inquiry
        [22, 126], // Steel Reason
        [21, 125], // Imperial Will
        [5, 14], // The Only Path
        [6, 15], // A World Apart
        [14, 84], // The Seventh Sun
        [16, 129], // Breaking Boundaries
        [12, 75], // Defender of the Realm
        [15, 96], // Battle Theme 1.x
        [13, 79], // Dragonsong
        [1, 1], // A Cold Wind
        [3, 46], // Contention
        [11, 74], // Engage
        [20, 124], // He Who Continues the Attack
        [78, 443], // Freedom
        [30, 219], // Fragments of Forever
        [55, 376], // Stone and Steel
        [59, 398], // The Heavens' Ward
        [31, 201], // Prelude - Long March Home
        [25, 172], // The Measure of His Reach
        [27, 173], // The Measure of Our Reach
        [35, 224], // Far East of Eorzea
        [36, 225], // Parting Ways
        [26, 198], // Cyan's Theme
        [28, 199], // Iroha
        [53, 378], // Bedlam's Brink
        [66, 422], // Everywhere and Nowhere
        [34, 223], // Victory or Death
        [39, 266], // A Dream in Flight
        [38, 267], // Ending
        [46, 315], // Shadowbringers
        [67, 423], // Tomorrow and Tomorrow - Reprise
        [68, 424], // Dangerous Words
        [76, 440], // And Love You Shall Find
        [79, 444], // A Better Tomorrow
        [52, 373], // Vamo' alla Flamenco (Shadowbringers)
        [58, 385], // Eternal Wind (Shadowbringers)
        [47, 316], // Tomorrow and Tomorrow
        [82, 498], // Endwalker – Footfalls
        [84, 522], // Home Beyond the Horizon
        [83, 499], // Flow
        [90, 509], // Flow Together
        [100, 585], // Bliss
        [101, 586], // Sacred Bonds
        [102, 587], // Dreams Aloft
        [103, 590], // Somewhere in the World (Ambitions Writhe)
        [104, 604], // Fracture
        [105, 605], // Conundrum
        [106, 606], // Return of the Hero
        [107, 607], // Kiss of Chaos
        [108, 608], // Machinations
        [109, 609], // Damnation
        [110, 610], // Skullduggery
        [111, 611], // Tranquility
        [112, 613], // Meteor
        [650, 650], // Pennons Aloft
        [651, 651], // From Fear to Fortitude
        [644, 644], // A Gentleman to Walk with Me
    ]);

    store.safeChangeKeys(`${ORCH}.raids-i`, [
        [0, 35], // Hubris
        [1, 36], // Tumbling Down
        [2, 37], // Now I Know the Truth
        [3, 38], // Out of the Labyrinth
        [4, 218], // Shattered
        [5, 39], // Blind to the Dark
        [6, 40], // Hunger
        [7, 41], // Eternal Wind
        [8, 95], // Calamity Unbound
        [9, 140], // Spiral
        [10, 42], // Thunderer
        [11, 139], // Tempest
        [12, 43], // Rise of the White Raven
        [13, 44], // From the Ashes
        [14, 45], // Answers
        [15, 291], // Beyond Redemption
        [16, 142], // Aetherosphere
        [17, 143], // Six Fulms Under
        [18, 144], // Teardrops in the Rain
        [19, 145], // A Thousand Faces
        [20, 146], // Promises
        [21, 147], // Shadow of the Body
        [22, 108], // Sins of the Father, Sins of the Son
        [23, 109], // Locus
        [24, 110], // Metal
        [25, 111], // Metal - Brute Justice Mode
        [26, 112], // Exponential Entropy
        [27, 113], // Rise
        [28, 141], // Moebius
        [29, 186], // Trisection
        [30, 187], // Precipitous Combat
        [31, 188], // Ultima's Transformation
        [32, 189], // Protagonist's Theme
        [33, 190], // Background Story
        [34, 232], // World Map
        [35, 233], // A Chapel
        [36, 234], // The Mystery of Giruvegan
        [37, 235], // Apoplexy
        [38, 236], // Flash of Steel
        [39, 292], // Staff Credits
        [40, 293], // Alma's Theme
        [41, 294], // Under the Stars
        [42, 295], // Pressure (No. 1)
        [43, 296], // Antipyretic
        [44, 297], // A Man Consumed
        [45, 298], // Ultima's Perfection
        [46, 265], // Deltascape
        [47, 253], // Omega Squared
        [48, 254], // Decisions (Omega)
        [49, 255], // Final, Not Final
        [50, 256], // A Battle Decisively
        [51, 257], // Dancing Mad - Movement I
        [52, 258], // Dancing Mad - Movement II
        [53, 259], // Dancing Mad - Movement III
        [54, 260], // Dancing Mad - Movement IV
        [55, 261], // Battle
        [56, 262], // Primogenitor
        [57, 263], // eScape
        [58, 264], // Heartless
        [59, 275], // From the Heavens
    ]);

    store.safeChangeKeys(`${ORCH}.raids-ii`, [
        [0, 350], // Significance (Nothing)
        [1, 351], // City Ruins (Rays of Light)
        [2, 353], // Voice of no Return (Guitar)
        [3, 354], // Alien Manifestation
        [4, 355], // Song of the Ancients (Atonement)
        [5, 356], // Bipolar Nightmare
        [6, 357], // Weight of the World (Prelude Version)
        [7, 372], // Crumbling Lies (Front)
        [8, 362], // Blue Fields (Shadowbringers)
        [9, 327], // Force Your Way (Shadowbringers)
        [10, 333], // Blinding Indigo
        [11, 328], // Landslide
        [12, 363], // Twice Stricken
        [13, 364], // Primal Angel
        [14, 365], // Return to Oblivion
        [15, 399], // Broken Heart
        [16, 400], // Amusement Park
        [17, 401], // Fortress of Lies
        [18, 402], // Grandma (Destruction)
        [19, 403], // End of the Unknown
        [20, 404], // Torn from the Heavens／The Dark Colossus Destroys All (Medley Version)
        [21, 417], // Don't Be Afraid (Shadowbringers)
        [22, 418], // The Legendary Beast (Shadowbringers)
        [23, 419], // Promises to Keep
        [24, 420], // The Extreme (Shadowbringers)
        [25, 464], // Mourning
        [26, 465], // Emil (Despair)
        [27, 352], // The Sound of the End
        [28, 467], // The Sound of the End: 8bit
        [29, 468], // Kainé (Final Fantasy Main Theme Version)
        [30, 470], // Voice of no Return (Normal)
        [31, 471], // The Color of Depression
        [32, 472], // Widespread Illness
        [33, 473], // Possessed by Disease
        [34, 474], // Faltering Prayer (Dawn Breeze)
        [35, 469], // Weight of the World (Instrumental)
        [36, 485], // Ancient Shackles
        [37, 486], // Hic Svnt Leones
        [38, 511], // Pilgrimage
        [39, 512], // Radiance
        [40, 513], // In the Balance
        [41, 540], // Silent Scream
        [42, 541], // Scream
        [43, 542], // Embers
        [44, 543], // White Stone Black
        [45, 569], // Favor
        [46, 570], // Rhythm of the Realm
        [47, 571], // Dedicated to Moonlight
        [48, 598], // One Amongst the Weary
        [49, 599], // Fleeting Moment
        [50, 600], // Athena, the Tireless One
        [51, 601], // Ultima's Perfection (Endwalker)
        [510, 510], // One among Wonders
        [645, 645], // Fair Winds to Guide
        [646, 646], // Course Uncharted
        [647, 647], // Myths of the Realm
        [0, 16], // Pa-Paya
        [1, 60], // Moonfire Faire
        [2, 61], // Heavensward
        [3, 80], // All Saints' Wake
        [4, 81], // Up at Dawn
        [5, 82], // Starlight Celebration
        [6, 83], // Heavensturn
        [7, 116], // The Kiss
        [8, 148], // Hyper Rainbow Z
        [9, 149], // Answers - Reprise
        [10, 150], // Stormblood
        [11, 193], // Starlit Gateway
        [12, 220], // Siren Song
        [13, 226], // Revolutions
        [14, 245], // Starlight, Starbright
        [21, 348], // Starlight de Chocobo
        [15, 299], // Hammerhead
    ]);

    store.safeChangeKeys(`${ORCH}.seasonal`, [
        [16, 300], // Valse di Fantastica
        [17, 301], // Relax and Reflect
        [18, 302], // Veiled in Black
        [19, 303], // Apocalypsis Noctis
        [20, 304], // A Quick Pit Stop
        [22, 580], // Decisions
        [23, 581], // Pa-Paya Demastered
        [24, 594], // The Land Reborn
        [25, 595], // Pom from the Heavens
        [657, 657], // Everybody Falls (Fall Guys Theme)
        [636, 636], // Tonitrua ex Machina
        [637, 637], // Idylls of the Empire
        [638, 638], // Forevermore - The Grand Duchy of Rosaria
        [639, 639], // Before the Storm - Caer Norvent
        [640, 640], // The State of the Realm
        [652, 652], // Who I Really Am
        [653, 653], // Away (Refrain)
        [654, 654], // To Sail Forbidden Seas
        [655, 655], // Find the Flame
        [656, 656], // Land of Eikons
    ]);

    store.safeChangeKeys(`${ORCH}.trials`, [
        [0, 27], // Torn from the Heavens
        [1, 28], // Ultima
        [2, 29], // The Maker's Ruin
        [3, 30], // Primal Judgment
        [4, 31], // Fallen Angel
        [5, 32], // Under the Weight
        [6, 33], // Heroes
        [7, 34], // Fiend
        [8, 68], // Wreck to the Seaman
        [9, 69], // Through the Maelstrom
        [10, 70], // Good King Moggle Mog XII
        [11, 71], // Revenge of the Horde
        [12, 72], // Battle on the Big Bridge
        [13, 73], // Battle to the Death - Heavensward
        [14, 104], // Footsteps in the Snow
        [15, 105], // Oblivion
        [16, 106], // Thunder Rolls
        [17, 107], // Equilibrium
        [18, 133], // The Corpse Hall
        [19, 134], // Limitless Blue
        [20, 135], // Woe that Is Madness
        [21, 136], // The Hand that Gives the Rose
        [22, 137], // Unbending Steel
        [23, 138], // Infinity
        [24, 157], // Revelation
        [25, 158], // Beauty's Wicked Wiles
        [26, 184], // The Worm's Head
        [27, 185], // The Worm's Tail
        [28, 215], // Answer on High
        [29, 216], // Amatsu Kaze
        [30, 240], // Nightbloom
        [31, 241], // Wayward Daughter
        [32, 238], // Savage of the Ancient Forest
        [33, 239], // Proof of a Hero - Monster Hunter: World Version
        [34, 252], // Sunrise
        [35, 268], // From the Dragon's Wake
        [36, 313], // What Angel Wakes Me
        [37, 314], // Insanity
        [38, 343], // Invincible
        [39, 366], // Ultima (The Primals)
        [40, 386], // To the Edge
        [41, 397], // Freefall
        [42, 411], // The Black Wolf Stalks Again
        [43, 427], // Faith in Her Fury
        [44, 437], // In the Arms of War
        [45, 482], // Endcaller
        [46, 483], // Your Answer
        [47, 507], // The Final Day
        [48, 508], // With Hearts Aligned
        [49, 536], // Battle with the Four Fiends (Buried Memory)
        [50, 554], // Unworthy
        [51, 565], // Forged in Crimson
        [52, 592], // Voidcast Savior
        [614, 614], // FINAL FANTASY IV: The Final Battle (Endwalker)
        [625, 625], // The Red Wings (Endwalker)
    ]);

    store.moveGroup(`${ORCH}.mog-station`, `${ORCH}.online-store-and-bonuses`, true);
}
