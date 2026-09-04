import type { ChangeStore } from '@service/store/migration/ChangeStore';

const GLOG = 'overall.logs.gathering.gathering-log';

/**
 * Gathering log key changes from Generated Resources
 */
export function migrateGathering(store: ChangeStore): void {
    migrateGroups(store);

    migrateMining(store);
    migrateQuarrying(store);
    migrateLogging(store);
    migrateHarvesting(store);
}

function migrateGroups(store: ChangeStore): void {
    ['mining', 'quarrying', 'logging', 'harvesting'].forEach((method) => {
        store.moveGroup(
            `${GLOG}.${method}.collectables.96-100`,
            `${GLOG}.${method}.collectables.91-100`
        );

        store.moveGroup(
            `${GLOG}.${method}.regional-folklore.ilsabard-northern-empty`,
            `${GLOG}.${method}.regional-folklore.ilsabard-and-northern-empty`
        );
    });
}

function migrateMining(store: ChangeStore): void {
    store.safeChangeKeys(`${GLOG}.mining.collectables.50-70`, [
        [0, 10598], // Rarefied Pyrite
        [1, 10599], // Rarefied Chalcocite
        [2, 10600], // Rarefied Limonite
        [3, 10601], // Rarefied Abalathian Spring Water
        [4, 10602], // Rarefied Aurum Regis Sand
        [5, 10603], // Rarefied Raw Triphane
        [6, 10617], // Rarefied Gyr Abanian Mineral Water
        [7, 10604], // Rarefied Raw Star Spinel
        [8, 10605], // Rarefied Raw Kyanite
        [9, 10606], // Rarefied Raw Azurite
        [10, 10607], // Rarefied Silvergrace Ore
    ]);
    store.safeChangeKeys(`${GLOG}.mining.collectables.71-80`, [
        [0, 10608], // Rarefied Titancopper Ore
        [1, 10618], // Rarefied Bluespirit Ore
        [2, 10609], // Rarefied Raw Lazurite
        [3, 10610], // Rarefied Raw Petalite
        [4, 10611], // Rarefied Sea Salt
        [5, 10612], // Rarefied Reef Rock
        [6, 10613], // Rarefied Raw Onyx
        [7, 10614], // Rarefied Tungsten Ore
        [8, 10615], // Rarefied Gyr Abanian Alumen
    ]);
    store.safeChangeKeys(`${GLOG}.mining.collectables.81-90`, [
        [0, 10760], // Rarefied High Durium Ore
        [1, 10761], // Rarefied Raw Ametrine
        [2, 10762], // Rarefied Bismuth Ore
        [3, 10763], // Rarefied Sharlayan Rock Salt
    ]);
    store.safeChangeKeys(`${GLOG}.mining.collectables.91-100`, [
        [0, 10187], // Rarefied Raw Ihuykanite
        [1, 10189], // Rarefied Raw Dark Amber
        [2, 10190], // Rarefied Titanium Gold Ore
        [3, 10191], // Rarefied White Gold Ore
        [4, 10192], // Rarefied Magnesite Ore
        [5, 10193], // Rarefied Ra'Kaznar Ore
    ], true);
    store.safeChangeKeys(`${GLOG}.mining.level.1-5`, [
        [0, 75], // Copper Ore
        [1, 1], // Fire Shard
        [2, 2], // Ice Shard
        [3, 3], // Wind Shard
        [4, 4], // Earth Shard
        [5, 5], // Lightning Shard
        [6, 6], // Water Shard
        [7, 73], // Muddy Water
        [8, 69], // Bone Chip
    ]);
    store.safeChangeKeys(`${GLOG}.mining.level.11-15`, [
        [0, 74], // Iron Ore
    ]);
    store.safeChangeKeys(`${GLOG}.mining.level.16-20`, [
        [0, 58], // Raw Malachite
        [1, 48], // Raw Sphene
        [2, 55], // Raw Fluorite
        [3, 51], // Raw Danburite
        [4, 70], // Sunrise Tellin
        [5, 38], // Alumen
    ]);
    store.safeChangeKeys(`${GLOG}.mining.level.21-25`, [
        [0, 49], // Effervescent Water
        [1, 66], // Silver Ore
    ]);
    store.safeChangeKeys(`${GLOG}.mining.level.26-30`, [
        [0, 7], // Fire Crystal
        [1, 8], // Ice Crystal
        [2, 9], // Wind Crystal
        [3, 10], // Earth Crystal
        [4, 11], // Lightning Crystal
        [5, 12], // Water Crystal
        [6, 76], // Wyvern Obsidian
        [7, 297], // Saltpeter
    ]);
    store.safeChangeKeys(`${GLOG}.mining.level.31-35`, [
        [0, 41], // Raw Garnet
        [1, 219], // Granite
        [2, 293], // Little Worm
        [3, 56], // Raw Heliodor
        [4, 43], // Raw Goshenite
        [5, 57], // Raw Peridot
        [6, 77], // Mythril Ore
        [7, 37], // Raw Amethyst
        [8, 36], // Raw Aquamarine
    ]);
    store.safeChangeKeys(`${GLOG}.mining.level.36-40`, [
        [0, 52], // Raw Tourmaline
        [1, 47], // Raw Spinel
        [2, 46], // Raw Zircon
        [3, 45], // Jade
        [4, 54], // Black Alumen
    ]);
    store.safeChangeKeys(`${GLOG}.mining.level.41-45`, [
        [0, 50], // Raw Turquoise
        [1, 72], // Electrum Ore
        [2, 39], // Raw Amber
        [3, 62], // Raw Rubellite
    ]);
    store.safeChangeKeys(`${GLOG}.mining.level.46-50`, [
        [0, 53], // Basilisk Egg
        [1, 65], // Cobalt Ore
        [2, 64], // Adamantoise Shell
        [3, 40], // Ogre Horn
        [4, 14], // Ice Cluster
        [5, 17], // Lightning Cluster
        [6, 18], // Water Cluster
        [7, 42], // Gold Ore
        [8, 60], // Darksteel Ore
        [9, 59], // Coblyn Larva
        [10, 292], // Unaspected Crystal
        [11, 294], // Gregarious Worm
        [12, 266], // Ferberite
        [13, 268], // Raw Ruby
        [14, 277], // Raw Diamond
        [15, 278], // Raw Emerald
        [16, 279], // Raw Topaz
        [17, 280], // Raw Iolite
        [18, 281], // Raw Sapphire
        [19, 267], // Native Gold
        [20, 387], // Dark Matter Cluster
        [21, 320], // Yellow Copper Ore
        [22, 285], // Platinum Ore
        [23, 298], // Dragon Obsidian
        [24, 290], // Virgin Basilisk Egg
    ]);
    store.safeChangeKeys(`${GLOG}.mining.level.51-55`, [
        [0, 321], // Pyrite
        [1, 303], // Raw Agate
        [2, 302], // Raw Tiger's Eye
        [3, 301], // Mythrite Ore
        [4, 323], // Chalcocite
        [5, 300], // Raw Larimar
        [6, 324], // Limonite
        [7, 316], // Raw Mormorion
        [8, 304], // Dravanian Spring Water
        [9, 307], // Titanium Ore
        [10, 306], // Raw Star Ruby
        [11, 305], // Raw Star Sapphire
    ]);
    store.safeChangeKeys(`${GLOG}.mining.level.56-60`, [
        [0, 329], // Light Kidney Ore
        [1, 308], // Raw Opal
        [2, 310], // Abalathian Spring Water
        [3, 423], // Dated Radz-at-Han Coin
        [4, 313], // Hardsilver Ore
        [5, 317], // Raw Carnelian
        [6, 424], // Ice Stalagmite
        [7, 331], // Cuprite
        [8, 311], // Raw Citrine
        [9, 315], // Aurum Regis Sand
        [10, 318], // Adamantite Ore
        [11, 319], // Wyrm Obsidian
        [12, 312], // Raw Chrysolite
        [13, 389], // Eventide Jade
        [14, 426], // Glass Eye
        [15, 501], // Starcrack Sand
        [16, 502], // Shishu Koban
        [17, 503], // Cotter Dynasty Relic
        [18, 405], // Beastkin Horn
        [19, 427], // Rainbow Pigment
        [20, 504], // Peaks Pigment
        [21, 505], // Yellow Kudzu Root
        [22, 429], // Raw Triphane
        [23, 428], // Gyr Abanian Alumen
    ]);
    store.safeChangeKeys(`${GLOG}.mining.level.6-10`, [
        [0, 71], // Tin Ore
        [1, 44], // Raw Sunstone
        [2, 61], // Raw Lapis Lazuli
        [3, 67], // Soiled Femur
        [4, 63], // Zinc Ore
        [5, 68], // Obsidian
        [6, 217], // Potter's Clay
    ]);
    store.safeChangeKeys(`${GLOG}.mining.level.61-65`, [
        [0, 430], // Gyr Abanian Mineral Water
        [1, 431], // Raw Kyanite
        [2, 517], // Harpoon Head
        [3, 432], // Koppranickel Ore
        [4, 434], // Raw Star Spinel
        [5, 518], // Phial of Thermal Fluid
        [6, 433], // Crescent Spring Water
        [7, 526], // Sparkstone
        [8, 435], // Doman Iron Ore
        [9, 527], // Malleable Still Material
    ]);
    store.safeChangeKeys(`${GLOG}.mining.level.66-70`, [
        [0, 437], // Schorl
        [1, 436], // Raw Azurite
        [2, 438], // Durium Ore
        [3, 439], // Raw Imperial Jade
        [4, 529], // Hard Place Furnishing Materials
        [5, 440], // Molybdenum Ore
        [6, 441], // Raw Rhodonite
        [7, 530], // Sturdy Vat Material
        [8, 603], // Clinquant Stones
        [9, 444], // Almandine
        [10, 635], // Rhodolite
        [11, 531], // Raw Hematite
        [12, 514], // Yanxian Soil
    ]);
    store.safeChangeKeys(`${GLOG}.mining.level.71-75`, [
        [10, 636], // Patient Necessity Materials
        [0, 533], // Truegold Ore
        [1, 532], // Raw Diaspore
        [2, 615], // Weaving Paraphernalia
        [11, 637], // Medical Supply Materials
        [3, 534], // Highland Spring Water
        [4, 616], // Crafting Tool Paraphernalia
        [12, 638], // Rehabilitation Aid Materials
        [5, 598], // Animal Droppings
        [6, 535], // Raw Lazurite
        [7, 536], // Bluespirit Ore
        [8, 618], // Printing Paraphernalia
        [9, 599], // Megafauna Leftovers
    ]);
    store.safeChangeKeys(`${GLOG}.mining.level.76-80`, [
        [0, 538], // Raw Triplite
        [1, 540], // Gale Rock
        [2, 541], // Solarite
        [3, 537], // Extra Effervescent Water
        [4, 539], // Titancopper Ore
        [5, 543], // Raw Petalite
        [6, 542], // Underground Spring Water
        [7, 600], // Megafauna Trace
        [8, 544], // Dimythrite Ore
        [9, 545], // Raw Onyx
        [10, 621], // Thunder Rock
    ]);
    store.safeChangeKeys(`${GLOG}.mining.level.81-85`, [
        [0, 641], // Sharlayan Rock Salt
        [1, 640], // Raw Ametrine
        [5, 697], // Aetheroconductive Feather
        [2, 642], // High Durium Ore
        [6, 701], // School Supply Materials
        [3, 643], // Bismuth Ore
        [7, 716], // Lovely Knickknacks
        [8, 742], // Energizing Eye-lixir Materials
        [4, 693], // Lunar Staple
    ]);
    store.safeChangeKeys(`${GLOG}.mining.level.86-90`, [
        [0, 644], // Manganese Ore
        [1, 694], // Elpis Staple
        [2, 645], // Chondrite
        [3, 646], // Ghostly Umbral Rock
    ]);
    store.safeChangeKeys(`${GLOG}.mining.level.91-95`, [
        [0, 744], // Mountain Chromite Ore
        [1, 797], // Locomotive Lubricant
        [2, 798], // Carriage Furnishing Supplies
        [3, 745], // Lar Ore
        [4, 799], // Mapmaking Pigment
        [5, 747], // Raw Ihuykanite
        [6, 801], // Trackbed Repair Materials
        [7, 748], // Ruthenium Ore
        [8, 749], // Cobalt Tungsten Ore
    ]);
    store.safeChangeKeys(`${GLOG}.mining.level.96-100`, [
        [0, 750], // Raw Pink Beryl
        [1, 751], // Yak T'el Spring Water
        [2, 752], // Titanium Gold Ore
        [3, 754], // Raw Black Star
        [4, 755], // White Gold Ore
        [5, 756], // Ra'Kaznar Ore
    ]);
    store.safeChangeKeys(`${GLOG}.mining.regional-folklore.abalathia`, [
        [0, 336], // Red Alumen
        [1, 404], // Smithsonite Ore
        [2, 406], // Meteorite
        [3, 421], // Luminium Ore
    ]);
    store.safeChangeKeys(`${GLOG}.mining.regional-folklore.alexandria`, [
        [0, 787], // Harmonite Ore
        [1, 796], // Alexandrian Ore
    ]);
    store.safeChangeKeys(`${GLOG}.mining.regional-folklore.coerthas`, [
        [0, 420], // Tungstite
    ]);
    store.safeChangeKeys(`${GLOG}.mining.regional-folklore.dravania`, [
        [0, 334], // Aurum Regis Ore
        [1, 402], // Lumythrite Ore
    ]);
    store.safeChangeKeys(`${GLOG}.mining.regional-folklore.gyr-abania`, [
        [0, 443], // Chromite Ore
        [1, 506], // Gyr Abanian Spring Water
        [2, 522], // Gyr Abanian Ore
        [3, 523], // Evergleam Ore
    ]);
    store.safeChangeKeys(`${GLOG}.mining.regional-folklore.ilsabard-and-northern-empty`, [
        [0, 658], // Stonehard Water
        [1, 647], // Rime Dolomite
        [2, 695], // Raw Eblan Danburite
        [3, 704], // Prime Siderite
        [4, 705], // Sublime Siderite
    ], true);
    store.safeChangeKeys(`${GLOG}.mining.regional-folklore.norvrandt`, [
        [0, 547], // Tungsten Ore
        [1, 546], // Prismstone
        [2, 606], // Beryllium Ore
        [3, 608], // Fireheart Cobalt
        [4, 620], // Brashgold Ore
        [5, 624], // Dolomite
        [6, 628], // Hard Water
    ]);
    store.safeChangeKeys(`${GLOG}.mining.regional-folklore.othard`, [
        [0, 442], // Palladium Ore
        [1, 508], // Nightsteel Ore
        [2, 509], // Silvergrace Ore
        [3, 512], // Hawk's Eye
        [4, 521], // Azim Spring Water
    ]);
    store.safeChangeKeys(`${GLOG}.mining.regional-folklore.sea-of-stars`, [
        [0, 707], // Ilmenite
        [1, 721], // Prime Achondrite
        [2, 722], // Sublime Achondrite
        [3, 726], // Softsilver Ore
        [4, 735], // Prime Fossilized Dragon's Scale
        [5, 736], // Sublime Fossilized Dragon's Scale
    ]);
    store.safeChangeKeys(`${GLOG}.mining.regional-folklore.world-unsundered`, [
        [0, 727], // Raw Spodumene
    ]);
    store.safeChangeKeys(`${GLOG}.mining.regional-folklore.xak-tural`, [
        [0, 786], // Fine Silver Ore
    ]);
    store.safeChangeKeys(`${GLOG}.mining.sidequests.ishgard-restoration`, [
        [0, 10644], // Grade 4 Skybuilders' Iron Ore
        [1, 10649], // Grade 4 Skybuilders' Ore
        [2, 10650], // Grade 4 Skybuilders' Rock Salt
        [3, 10657], // Grade 4 Skybuilders' Electrum Ore
        [4, 10658], // Grade 4 Skybuilders' Alumen
        [5, 10659], // Grade 4 Skybuilders' Spring Water
        [6, 10667], // Grade 4 Skybuilders' Gold Ore
        [7, 10668], // Grade 4 Skybuilders' Finest Rock Salt
        [8, 10669], // Grade 4 Skybuilders' Truespring Water
        [9, 10691], // Grade 2 Artisanal Skybuilders' Cloudstone
        [10, 10698], // Grade 2 Skybuilders' Umbral Flarestone
        [11, 10692], // Grade 2 Artisanal Skybuilders' Rock Salt
        [12, 10693], // Grade 2 Artisanal Skybuilders' Spring Water
        [13, 10705], // Grade 3 Artisanal Skybuilders' Cloudstone
        [14, 10706], // Grade 3 Artisanal Skybuilders' Basilisk Egg
        [15, 10712], // Grade 3 Skybuilders' Umbral Magma Shard
        [16, 10707], // Grade 3 Artisanal Skybuilders' Alumen
        [17, 10677], // Grade 4 Artisanal Skybuilders' Cloudstone
        [18, 10684], // Grade 4 Skybuilders' Umbral Flarerock
        [19, 10678], // Grade 4 Artisanal Skybuilders' Spring Water
        [20, 10679], // Grade 4 Artisanal Skybuilders' Ice Stalagmite
    ]);
    store.safeChangeKeys(`${GLOG}.mining.sidequests.skysteel-tools`, [
        [0, 10522], // Oddly Specific Obsidian
        [1, 10523], // Oddly Specific Mineral Sand
        [2, 10527], // Oddly Specific Striking Stone
        [3, 10526], // Oddly Specific Dark Matter
        [4, 10530], // Oddly Specific Schorl
        [5, 10531], // Oddly Specific Landborne Aethersand
        [6, 10534], // Oddly Specific Primordial Ore
        [7, 10535], // Oddly Specific Primordial Asphaltum
        [8, 10596], // Oddly Delicate Adamantite Ore
        [9, 10597], // Oddly Delicate Raw Jade
    ]);
    store.safeChangeKeys(`${GLOG}.mining.sidequests.splendorous-tools`, [
        [0, 10832], // Connoisseur's Prismstone
        [1, 10833], // Splendorous Water Shard
        [2, 10836], // Connoisseur's Red Malachite
        [3, 10837], // Adaptive Fire Crystal
        [4, 10841], // Connoisseur's Soiled Femur
        [5, 10842], // Custom Ice Crystal
        [6, 10845], // Connoisseur's Aurum Regis Ore
        [7, 10846], // Brilliant Lightning Cluster
        [8, 10849], // Connoisseur's Asphaltum
        [9, 10850], // Inspirational Wind Cluster
        [10, 10853], // Connoisseur's Raw Onyx
        [11, 10854], // Nightforged Ice Cluster
    ]);
}

function migrateQuarrying(store: ChangeStore): void {
    store.safeChangeKeys(`${GLOG}.quarrying.collectables.50-70`, [
        [0, 10616], // Rarefied Mythrite Sand
    ]);
    store.safeChangeKeys(`${GLOG}.quarrying.collectables.71-80`, [
        [0, 10619], // Rarefied Manasilver Sand
    ]);
    store.safeChangeKeys(`${GLOG}.quarrying.collectables.81-90`, [
        [0, 10764], // Rarefied Phrygian Gold Ore
        [1, 10765], // Rarefied Blue Zircon
        [2, 10769], // Rarefied Chloroschist
        [3, 10766], // Rarefied Eblan Alumen
        [4, 10767], // Rarefied Annite
        [5, 10768], // Rarefied Pewter Ore
    ]);
    store.safeChangeKeys(`${GLOG}.quarrying.collectables.91-100`, [
        [0, 10188], // Rarefied Artificial Volcanic Rock
        [1, 10194], // Rarefied Ash Soil
    ], true);
    store.safeChangeKeys(`${GLOG}.quarrying.level.1-5`, [
        [0, 1], // Fire Shard
        [1, 2], // Ice Shard
        [2, 3], // Wind Shard
        [3, 4], // Earth Shard
        [4, 5], // Lightning Shard
        [5, 6], // Water Shard
    ]);
    store.safeChangeKeys(`${GLOG}.quarrying.level.11-15`, [
        [0, 216], // Fine Sand
        [1, 95], // Copper Sand
        [2, 87], // Rock Salt
        [3, 89], // Ragstone
        [4, 82], // Iron Sand
        [5, 92], // Cinnabar
    ]);
    store.safeChangeKeys(`${GLOG}.quarrying.level.16-20`, [
        [0, 218], // Limestone
        [1, 93], // Mudstone
        [2, 24], // Grade 1 Carbonized Matter
    ]);
    store.safeChangeKeys(`${GLOG}.quarrying.level.21-25`, [
        [0, 94], // Earth Rock
        [1, 80], // Silver Sand
        [2, 86], // Fire Rock
        [3, 96], // Ice Rock
        [4, 97], // Wind Rock
        [5, 98], // Lightning Rock
        [6, 90], // Water Rock
    ]);
    store.safeChangeKeys(`${GLOG}.quarrying.level.26-30`, [
        [0, 84], // Bomb Ash
        [1, 7], // Fire Crystal
        [2, 8], // Ice Crystal
        [3, 9], // Wind Crystal
        [4, 10], // Earth Crystal
        [5, 11], // Lightning Crystal
        [6, 12], // Water Crystal
        [7, 88], // Silex
        [8, 29], // Blue Pigment
        [9, 30], // Red Pigment
        [10, 31], // Yellow Pigment
        [11, 32], // Grey Pigment
        [12, 33], // Brown Pigment
        [13, 34], // Green Pigment
        [14, 35], // Purple Pigment
        [15, 99], // Brimstone
        [16, 83], // Siltstone
        [17, 256], // Grade 1 La Noscean Topsoil
        [18, 259], // Grade 1 Shroud Topsoil
        [19, 262], // Grade 1 Thanalan Topsoil
    ]);
    store.safeChangeKeys(`${GLOG}.quarrying.level.31-35`, [
        [0, 100], // Mythril Sand
    ]);
    store.safeChangeKeys(`${GLOG}.quarrying.level.36-40`, [
        [0, 81], // Grenade Ash
    ]);
    store.safeChangeKeys(`${GLOG}.quarrying.level.41-45`, [
        [0, 78], // Electrum Sand
        [1, 215], // Marble
    ]);
    store.safeChangeKeys(`${GLOG}.quarrying.level.46-50`, [
        [0, 257], // Grade 2 La Noscean Topsoil
        [1, 260], // Grade 2 Shroud Topsoil
        [2, 263], // Grade 2 Thanalan Topsoil
        [3, 289], // Black Limestone
        [4, 13], // Fire Cluster
        [5, 14], // Ice Cluster
        [6, 15], // Wind Cluster
        [7, 16], // Earth Cluster
        [8, 17], // Lightning Cluster
        [9, 18], // Water Cluster
        [10, 91], // Astral Rock
        [11, 79], // Gold Sand
        [12, 85], // Volcanic Rock Salt
        [13, 265], // Umbral Rock
        [14, 292], // Unaspected Crystal
        [15, 258], // Grade 3 La Noscean Topsoil
        [16, 261], // Grade 3 Shroud Topsoil
        [17, 264], // Grade 3 Thanalan Topsoil
        [18, 276], // Antumbral Rock
        [19, 387], // Dark Matter Cluster
        [20, 287], // Pumice
    ]);
    store.safeChangeKeys(`${GLOG}.quarrying.level.51-55`, [
        [0, 299], // Mythrite Sand
        [1, 322], // Yellow Quartz
        [2, 325], // Green Quartz
    ]);
    store.safeChangeKeys(`${GLOG}.quarrying.level.56-60`, [
        [0, 326], // Abalathian Rock Salt
        [1, 327], // Fire Moraine
        [2, 328], // Lightning Moraine
        [3, 309], // Hardsilver Sand
        [4, 390], // Fossilized Dragon Bone
        [5, 314], // Cloud Mica
        [6, 330], // Red Quartz
        [7, 332], // Bright Fire Rock
        [8, 333], // Bright Lightning Rock
        [9, 388], // Tektite
        [10, 425], // Duskfall Moss
        [11, 340], // Radiant Fire Moraine
        [12, 341], // Radiant Lightning Moraine
        [13, 403], // Lumythrite Sand
        [14, 409], // Radiant Astral Moraine
    ]);
    store.safeChangeKeys(`${GLOG}.quarrying.level.61-65`, [
        [0, 445], // Stiperstone
        [1, 446], // Koppranickel Sand
        [2, 516], // Pinch of Active Ingredients
        [3, 447], // Slate
        [4, 448], // Diatomite
        [5, 519], // Shisui Jewel
        [6, 520], // Cloudkin Feather
    ]);
    store.safeChangeKeys(`${GLOG}.quarrying.level.66-70`, [
        [0, 450], // Perlite
        [1, 634], // Dacite
        [2, 449], // Durium Sand
        [3, 528], // Strong Steppe Spice
        [4, 451], // Doman Iron Sand
        [5, 452], // Palladium Sand
        [6, 453], // Ala Mhigan Salt Crystal
        [7, 601], // Raven Coal
        [8, 602], // Amh Araeng Seasonings
        [9, 597], // Animal Trace
        [10, 604], // Airship Fitting Components
        [11, 605], // Kholusian Miscellany
        [12, 514], // Yanxian Soil
        [13, 549], // Coarse Saltpeter
        [14, 548], // Yellow Alumen
    ]);
    store.safeChangeKeys(`${GLOG}.quarrying.level.71-75`, [
        [0, 550], // Hard Mudstone
        [1, 551], // Truegold Sand
        [2, 614], // Gathering Tool Paraphernalia
        [3, 617], // Handpicked Ingredients
        [4, 552], // Manasilver Sand
        [5, 639], // High Tea Ingredients
    ]);
    store.safeChangeKeys(`${GLOG}.quarrying.level.76-80`, [
        [0, 553], // Volcanic Tuff
        [1, 554], // Titancopper Sand
        [5, 19], // Art Supply Materials
        [2, 555], // Dimythrite Sand
        [3, 556], // Shade Quartz
        [4, 621], // Thunder Rock
    ]);
    store.safeChangeKeys(`${GLOG}.quarrying.level.81-85`, [
        [0, 648], // High Durium Sand
        [1, 649], // Chloroschist
        [7, 698], // Aetheroconductive Focus Materials
        [10, 712], // Raw Sheep Fodder
        [14, 739], // Cushion Care Package Materials
        [2, 691], // Hannish Staple
        [3, 650], // Pewter Ore
        [8, 699], // Luncheon Coffer Materials
        [9, 700], // Aetheroconductive Mammet Materials
        [11, 713], // Combustible Fuel
        [15, 740], // Feline Fascinators
        [4, 651], // Phrygian Gold Ore
        [12, 714], // Natural Ingredients
        [16, 741], // Mesmerizing Miniature Materials
        [5, 692], // Garlean Staple
        [6, 652], // Eblan Alumen
        [13, 715], // Crafters' Supplies
    ]);
    store.safeChangeKeys(`${GLOG}.quarrying.level.86-90`, [
        [0, 653], // Raw Blue Zircon
        [1, 657], // Lunar Quartz
        [2, 654], // Annite
        [6, 743], // Researcher's Relaxation Kit Materials
        [3, 655], // Ambrosial Water
        [4, 656], // Raw Star Quartz
        [5, 717], // Earthen Quartz
    ]);
    store.safeChangeKeys(`${GLOG}.quarrying.level.91-95`, [
        [0, 746], // Mountain Rock Salt
        [1, 800], // Industrial Sanitizing Fluid
    ]);
    store.safeChangeKeys(`${GLOG}.quarrying.level.96-100`, [
        [0, 791], // Electrocoal
        [1, 753], // Magnesia Powder
        [2, 792], // Brightwind Ore
    ]);
    store.safeChangeKeys(`${GLOG}.quarrying.regional-folklore.abalathia`, [
        [0, 335], // Sun Mica
    ]);
    store.safeChangeKeys(`${GLOG}.quarrying.regional-folklore.coerthas`, [
        [0, 338], // Violet Quartz
        [1, 337], // Astral Moraine
    ]);
    store.safeChangeKeys(`${GLOG}.quarrying.regional-folklore.dravania`, [
        [0, 339], // Blue Quartz
        [1, 422], // Zeolite Ore
    ]);
    store.safeChangeKeys(`${GLOG}.quarrying.regional-folklore.ilsabard-and-northern-empty`, [
        [0, 706], // Raw Rutilated Quartz
        [1, 708], // Ash Diatomite
        [2, 719], // Raw Zoisite
        [3, 725], // Maghemite
        [4, 731], // Prime Chloroschist
        [5, 732], // Sublime Chloroschist
    ], true);
    store.safeChangeKeys(`${GLOG}.quarrying.regional-folklore.norvrandt`, [
        [0, 609], // Purpure Shell Chip
        [1, 610], // Ashen Alumen
        [2, 625], // Solstice Stone
    ]);
    store.safeChangeKeys(`${GLOG}.quarrying.regional-folklore.sea-of-stars`, [
        [0, 658], // Stonehard Water
        [1, 659], // Lunar Adamantite Ore
    ]);
    store.safeChangeKeys(`${GLOG}.quarrying.regional-folklore.world-unsundered`, [
        [0, 658], // Stonehard Water
        [1, 660], // Rhodium Sand
    ]);
    store.safeChangeKeys(`${GLOG}.quarrying.sidequests.ishgard-restoration`, [
        [0, 10645], // Grade 4 Skybuilders' Iron Sand
        [1, 10651], // Grade 4 Skybuilders' Mythrite Sand
        [2, 10660], // Grade 4 Skybuilders' Gold Sand
        [3, 10661], // Grade 4 Skybuilders' Ragstone
        [4, 10670], // Grade 4 Skybuilders' Mineral Sand
        [5, 10671], // Grade 4 Skybuilders' Bluespirit Ore
        [6, 10694], // Grade 2 Artisanal Skybuilders' Aurum Regis Sand
        [7, 10695], // Grade 2 Artisanal Skybuilders' Jade
        [8, 10699], // Grade 2 Skybuilders' Umbral Levinshard
        [9, 10708], // Grade 3 Artisanal Skybuilders' Clay
        [10, 10709], // Grade 3 Artisanal Skybuilders' Granite
        [11, 10713], // Grade 3 Skybuilders' Umbral Levinite
        [12, 10680], // Grade 4 Artisanal Skybuilders' Silex
        [13, 10681], // Grade 4 Artisanal Skybuilders' Prismstone
        [14, 10685], // Grade 4 Skybuilders' Umbral Levinsand
    ]);
    store.safeChangeKeys(`${GLOG}.quarrying.sidequests.skysteel-tools`, [
        [0, 10527], // Oddly Specific Striking Stone
        [1, 10526], // Oddly Specific Dark Matter
    ]);
}

function migrateLogging(store: ChangeStore): void {
    store.safeChangeKeys(`${GLOG}.logging.collectables.50-70`, [
        [0, 10620], // Rarefied Dark Chestnut Sap
        [1, 10621], // Rarefied Dark Chestnut Log
        [2, 10622], // Rarefied Dark Chestnut Branch
        [3, 10623], // Rarefied Dark Chestnut
        [4, 10624], // Rarefied Dark Chestnut Resin
        [5, 10625], // Rarefied Larch Log
        [6, 10626], // Rarefied Shiitake Mushroom
        [7, 10627], // Rarefied Larch Sap
        [8, 10628], // Rarefied Pine Resin
        [9, 10629], // Rarefied Pine Log
    ]);
    store.safeChangeKeys(`${GLOG}.logging.collectables.71-80`, [
        [0, 10630], // Rarefied Pixie Apple
        [1, 10631], // Rarefied White Oak Log
        [2, 10632], // Rarefied Miracle Apple Log
        [3, 10633], // Rarefied Sandteak Log
        [4, 10634], // Rarefied Kelp
        [5, 10635], // Rarefied Amber Cloves
        [6, 10636], // Rarefied Coral
        [7, 10637], // Rarefied Urunday Log
    ]);
    store.safeChangeKeys(`${GLOG}.logging.collectables.81-90`, [
        [0, 10771], // Rarefied Palm Log
        [1, 10772], // Rarefied Red Pine Log
        [2, 10773], // Rarefied Coconut
        [3, 10774], // Rarefied Sykon
        [4, 10779], // Rarefied Ironwood Log
        [5, 10776], // Rarefied Elder Nutmeg
    ]);
    store.safeChangeKeys(`${GLOG}.logging.collectables.91-100`, [
        [0, 10198], // Rarefied Sweet Kukuru Bean
        [1, 10199], // Rarefied Acacia Bark
        [2, 10200], // Rarefied Dark Mahogany Log
        [3, 10201], // Rarefied Acacia Log
    ], true);
    store.safeChangeKeys(`${GLOG}.logging.level.1-5`, [
        [0, 137], // Latex
        [1, 1], // Fire Shard
        [2, 2], // Ice Shard
        [3, 3], // Wind Shard
        [4, 4], // Earth Shard
        [5, 5], // Lightning Shard
        [6, 6], // Water Shard
        [7, 105], // Allagan Snail
        [8, 134], // Maple Sap
        [9, 133], // Maple Log
        [10, 118], // Cinnamon
        [11, 132], // Maple Branch
        [12, 141], // Beehive Chip
    ]);
    store.safeChangeKeys(`${GLOG}.logging.level.11-15`, [
        [0, 110], // Elm Log
        [1, 122], // Gridanian Chestnut
    ]);
    store.safeChangeKeys(`${GLOG}.logging.level.16-20`, [
        [0, 128], // Faerie Apple
        [1, 238], // Faerie Apple Seeds
        [2, 117], // Sun Lemon
        [3, 239], // Sun Lemon Seeds
        [4, 126], // Nopales
        [5, 136], // Yew Log
        [6, 135], // Yew Branch
        [7, 24], // Grade 1 Carbonized Matter
    ]);
    store.safeChangeKeys(`${GLOG}.logging.level.21-25`, [
        [0, 108], // Gridanian Walnut
        [1, 127], // Matron's Mistletoe
        [2, 109], // Walnut Log
    ]);
    store.safeChangeKeys(`${GLOG}.logging.level.26-30`, [
        [0, 7], // Fire Crystal
        [1, 8], // Ice Crystal
        [2, 9], // Wind Crystal
        [3, 10], // Earth Crystal
        [4, 11], // Lightning Crystal
        [5, 12], // Water Crystal
        [6, 29], // Blue Pigment
        [7, 30], // Red Pigment
        [8, 31], // Yellow Pigment
        [9, 32], // Grey Pigment
        [10, 33], // Brown Pigment
        [11, 34], // Green Pigment
        [12, 35], // Purple Pigment
        [13, 123], // Chocobo Feather
        [14, 106], // Alligator Pear
    ]);
    store.safeChangeKeys(`${GLOG}.logging.level.31-35`, [
        [0, 111], // Oak Branch
        [1, 112], // Oak Log
        [2, 121], // Tarantula
    ]);
    store.safeChangeKeys(`${GLOG}.logging.level.36-40`, [
        [0, 102], // Iron Acorn
        [1, 130], // Mahogany Log
        [2, 125], // Nutmeg
        [3, 101], // Almonds
        [4, 255], // Almond Seeds
    ]);
    store.safeChangeKeys(`${GLOG}.logging.level.41-45`, [
        [0, 119], // Mirror Apple
        [1, 242], // Mirror Apple Seeds
        [2, 131], // Mistletoe
    ]);
    store.safeChangeKeys(`${GLOG}.logging.level.46-50`, [
        [0, 140], // Rosewood Log
        [1, 139], // Rosewood Branch
        [2, 13], // Fire Cluster
        [3, 14], // Ice Cluster
        [4, 15], // Wind Cluster
        [5, 16], // Earth Cluster
        [6, 17], // Lightning Cluster
        [7, 18], // Water Cluster
        [8, 173], // Prickly Pineapple
        [9, 120], // Spruce Log
        [10, 129], // Thavnairian Mistletoe
        [11, 107], // Vampire Plant
        [12, 245], // Prickly Pineapple Seeds
        [13, 292], // Unaspected Crystal
        [14, 269], // Fragrant Log
        [15, 272], // Apricot
        [16, 275], // Blood Orange
        [17, 283], // Bamboo Stick
        [18, 282], // Redolent Log
        [19, 270], // Scarlet Sap
        [20, 387], // Dark Matter Cluster
        [21, 343], // Cedar Log
        [22, 286], // Ebony Log
        [23, 288], // Cypress Log
        [24, 342], // Cedar Branch
    ]);
    store.safeChangeKeys(`${GLOG}.logging.level.51-55`, [
        [0, 366], // Porcini
        [1, 349], // Dark Chestnut Log
        [2, 369], // Dravanian Mistletoe
        [3, 351], // Dark Chestnut
        [4, 350], // Dark Chestnut Branch
    ]);
    store.safeChangeKeys(`${GLOG}.logging.level.56-60`, [
        [0, 371], // Heavens Lemon
        [1, 393], // Wind Widow
        [2, 375], // Cloud Banana
        [3, 357], // Birch Log
        [4, 358], // Birch Branch
        [5, 374], // Abalathian Mistletoe
        [6, 376], // Morel
        [7, 362], // Birch Sap
        [8, 392], // Cloud Mushroom
        [9, 399], // Camphorwood Log
        [10, 400], // Camphorwood Branch
    ]);
    store.safeChangeKeys(`${GLOG}.logging.level.6-10`, [
        [0, 116], // Cock Feather
        [1, 124], // Tinolqa Mistletoe
        [2, 138], // La Noscean Orange
        [3, 236], // La Noscean Orange Seeds
        [4, 104], // Ash Log
        [5, 113], // Kukuru Bean
        [6, 103], // Ash Branch
        [7, 115], // Cloves
        [8, 114], // Crow Feather
    ]);
    store.safeChangeKeys(`${GLOG}.logging.level.61-65`, [
        [0, 455], // Loquat
        [1, 456], // Beech Log
        [11, 454], // Beech Branch
        [2, 460], // Bamboo Shoot
        [3, 457], // Larch Log
        [4, 458], // Pine Resin
        [5, 526], // Sparkstone
        [6, 461], // Shiitake Mushroom
        [7, 459], // Pine Log
        [8, 527], // Malleable Still Material
    ]);
    store.safeChangeKeys(`${GLOG}.logging.level.66-70`, [
        [0, 462], // Persimmon Leaf
        [1, 463], // Persimmon
        [2, 464], // Persimmon Log
        [3, 529], // Hard Place Furnishing Materials
        [4, 466], // Othardian Plum
        [5, 465], // Zelkova Log
        [6, 530], // Sturdy Vat Material
        [7, 601], // Raven Coal
        [8, 468], // Torreya Branch
        [9, 605], // Kholusian Miscellany
        [10, 515], // Yanxian Verbena
    ]);
    store.safeChangeKeys(`${GLOG}.logging.level.71-75`, [
        [0, 559], // Pixie Apple
        [1, 558], // Frantoio
        [2, 560], // White Oak Log
        [11, 557], // White Oak Branch
        [8, 636], // Patient Necessity Materials
        [3, 561], // Miracle Apple Log
        [4, 615], // Weaving Paraphernalia
        [9, 638], // Rehabilitation Aid Materials
        [5, 562], // White Ash Log
        [6, 617], // Handpicked Ingredients
        [7, 563], // Gianthive Chip
        [10, 639], // High Tea Ingredients
    ]);
    store.safeChangeKeys(`${GLOG}.logging.level.76-80`, [
        [0, 564], // Amber Cloves
        [1, 565], // Sandteak Log
        [2, 566], // Harcot
        [3, 568], // Lemonette
        [4, 567], // Lignum Vitae Log
    ]);
    store.safeChangeKeys(`${GLOG}.logging.level.81-85`, [
        [0, 661], // Horse Chestnut Log
        [1, 664], // Coconut
        [2, 663], // Palm Syrup
        [3, 662], // Palm Log
        [6, 699], // Luncheon Coffer Materials
        [7, 700], // Aetheroconductive Mammet Materials
        [8, 701], // School Supply Materials
        [4, 692], // Garlean Staple
        [5, 665], // Red Pine Log
    ]);
    store.safeChangeKeys(`${GLOG}.logging.level.86-90`, [
        [0, 666], // Ironwood Log
        [1, 667], // Sykon
        [2, 668], // Elder Nutmeg Seeds
        [3, 669], // Integral Log
        [4, 670], // Palm Chippings
    ]);
    store.safeChangeKeys(`${GLOG}.logging.level.91-95`, [
        [0, 798], // Carriage Furnishing Supplies
        [1, 761], // Wild Ja Tiika Bananas
        [2, 764], // Royal Maple Sap
        [3, 763], // Ginseng Log
        [4, 760], // Ceiba Log
        [5, 801], // Trackbed Repair Materials
        [6, 769], // Sweet Kukuru Bean
        [7, 771], // Turali Pineapple
        [8, 770], // Dark Mahogany Log
    ]);
    store.safeChangeKeys(`${GLOG}.logging.level.96-100`, [
        [0, 777], // Mesquite Beans
        [1, 774], // Acacia Log
        [2, 776], // Acacia Bark
        [3, 775], // Claro Walnut Log
    ]);
    store.safeChangeKeys(`${GLOG}.logging.regional-folklore.abalathia`, [
        [0, 381], // Honeydew Almonds
        [1, 380], // Wattle Bark
    ]);
    store.safeChangeKeys(`${GLOG}.logging.regional-folklore.dravania`, [
        [0, 401], // Old-growth Camphorwood Log
        [1, 407], // Crystallized Sap
        [2, 418], // Brown Mushroom
        [3, 416], // Teak Log
    ]);
    store.safeChangeKeys(`${GLOG}.logging.regional-folklore.gyr-abania`, [
        [0, 467], // Torreya Log
        [1, 510], // Black Willow Log
        [2, 513], // Hardened Veteran Tree Sap
        [3, 524], // Urunday Log
    ]);
    store.safeChangeKeys(`${GLOG}.logging.regional-folklore.ilsabard-and-northern-empty`, [
        [0, 710], // Haritaki
        [1, 711], // Bayberry
        [2, 720], // Mornveil Tree Bark
        [3, 728], // Dark Cherry Log
        [4, 733], // Prime Haritaki
        [5, 734], // Sublime Haritaki
        [6, 737], // Prime Kukuru Beans
        [7, 738], // Sublime Kukuru Beans
    ], true);
    store.safeChangeKeys(`${GLOG}.logging.regional-folklore.norvrandt`, [
        [0, 569], // Sandalwood Log
        [1, 607], // Sandalwood Sap
        [2, 611], // Merbau Log
        [3, 623], // Silver Beech Log
        [4, 627], // Wattle Petribark
    ]);
    store.safeChangeKeys(`${GLOG}.logging.regional-folklore.world-unsundered`, [
        [0, 671], // Potent Spice
        [1, 672], // Mempisang Log
        [2, 709], // Paldao Log
        [3, 723], // Prime Sphongos
        [4, 724], // Sublime Sphongos
    ]);
    store.safeChangeKeys(`${GLOG}.logging.regional-folklore.xak-tural`, [
        [0, 789], // Nopaliflower
    ]);
    store.safeChangeKeys(`${GLOG}.logging.regional-folklore.yok-tural`, [
        [0, 788], // Ipe Log
    ]);
    store.safeChangeKeys(`${GLOG}.logging.sidequests.ishgard-restoration`, [
        [0, 10642], // Grade 4 Skybuilders' Switch
        [1, 10646], // Grade 4 Skybuilders' Mahogany Log
        [2, 10652], // Grade 4 Skybuilders' Spruce Log
        [3, 10653], // Grade 4 Skybuilders' Mistletoe
        [4, 10662], // Grade 4 Skybuilders' White Cedar Log
        [5, 10663], // Grade 4 Skybuilders' Primordial Resin
        [6, 10686], // Grade 2 Artisanal Skybuilders' Log
        [7, 10696], // Grade 2 Skybuilders' Umbral Galewood Log
        [8, 10687], // Grade 2 Artisanal Skybuilders' Hardened Sap
        [9, 10701], // Grade 3 Artisanal Skybuilders' Amber
        [10, 10700], // Grade 3 Artisanal Skybuilders' Log
        [11, 10710], // Grade 3 Skybuilders' Umbral Galewood Sap
        [12, 10673], // Grade 4 Artisanal Skybuilders' Raspberry
        [13, 10672], // Grade 4 Artisanal Skybuilders' Log
        [14, 10682], // Grade 4 Skybuilders' Umbral Galewood Branch
    ]);
    store.safeChangeKeys(`${GLOG}.logging.sidequests.skysteel-tools`, [
        [0, 10520], // Oddly Specific Latex
        [1, 10521], // Oddly Specific Fossil Dust
        [2, 10524], // Oddly Specific Amber
        [3, 10525], // Oddly Specific Bauble
        [4, 10528], // Oddly Specific Dark Chestnut Log
        [5, 10529], // Oddly Specific Leafborne Aethersand
        [6, 10532], // Oddly Specific Primordial Log
        [7, 10533], // Oddly Specific Primordial Resin
        [8, 10595], // Oddly Delicate Birch Log
        [9, 10594], // Oddly Delicate Feather
    ]);
    store.safeChangeKeys(`${GLOG}.logging.sidequests.splendorous-tools`, [
        [0, 10834], // Connoisseur's Wattle Petribark
        [1, 10835], // Splendorous Earth Shard
        [2, 10838], // Connoisseur's Levin Mint
        [3, 10839], // Adaptive Lightning Crystal
        [4, 10843], // Connoisseur's Miracle Apple
        [5, 10844], // Custom Wind Crystal
        [6, 10847], // Connoisseur's Cloves
        [7, 10848], // Brilliant Earth Cluster
        [8, 10851], // Connoisseur's Gianthive Chip
        [9, 10852], // Inspirational Fire Cluster
        [10, 10855], // Connoisseur's Glimshroom
        [11, 10856], // Nightforged Water Cluster
    ]);
}

function migrateHarvesting(store: ChangeStore): void {
    store.safeChangeKeys(`${GLOG}.harvesting.collectables.50-70`, [
        [0, 10638], // Rarefied Rainbow Cotton Boll
        [1, 10639], // Rarefied Bloodhemp
    ]);
    store.safeChangeKeys(`${GLOG}.harvesting.collectables.71-80`, [
        [0, 10640], // Rarefied Bright Flax
        [1, 10641], // Rarefied Night Pepper
    ]);
    store.safeChangeKeys(`${GLOG}.harvesting.collectables.81-90`, [
        [0, 10770], // Rarefied Thavnairian Perilla Leaf
        [1, 10775], // Rarefied Dark Rye
        [2, 10777], // Rarefied Iceberg Lettuce
        [3, 10778], // Rarefied AR-Caean Cotton Boll
    ]);
    store.safeChangeKeys(`${GLOG}.harvesting.collectables.91-100`, [
        [0, 10195], // Rarefied Kozama'uka Chamomile
        [1, 10197], // Rarefied Mountain Flax
        [2, 10196], // Rarefied Wild Agave
        [3, 10202], // Rarefied Windsbalm Bay Leaf
    ], true);
    store.safeChangeKeys(`${GLOG}.harvesting.level.1-5`, [
        [0, 1], // Fire Shard
        [1, 2], // Ice Shard
        [2, 3], // Wind Shard
        [3, 4], // Earth Shard
        [4, 5], // Lightning Shard
        [5, 6], // Water Shard
        [6, 410], // Firelight Seeds
        [7, 411], // Icelight Seeds
        [8, 412], // Windlight Seeds
        [9, 413], // Earthlight Seeds
        [10, 414], // Levinlight Seeds
        [11, 415], // Waterlight Seeds
    ]);
    store.safeChangeKeys(`${GLOG}.harvesting.level.11-15`, [
        [0, 158], // Chanterelle
        [1, 206], // Lowland Grapes
        [2, 200], // Rye
        [3, 211], // Sunset Wheat
        [4, 149], // Garlean Garlic
        [5, 165], // Tree Toad
        [6, 198], // Moko Grass
        [7, 159], // Yellow Ginseng
        [8, 237], // Lowland Grape Seeds
        [9, 246], // Garlic Cloves
        [10, 209], // Wild Onion
        [11, 176], // Buffalo Beans
        [12, 214], // Straw
        [13, 202], // Lavender
        [14, 153], // Grass Viper
        [15, 227], // Wild Onion Set
        [16, 247], // Lavender Seeds
        [17, 154], // Coerthan Carrot
        [18, 146], // Ogre Pumpkin
        [19, 201], // La Noscean Lettuce
        [20, 147], // Cinderfoot Olive
        [21, 220], // Humus
        [22, 148], // Carnation
        [23, 228], // Coerthan Carrot Seeds
        [24, 229], // La Noscean Lettuce Seeds
        [25, 230], // Olive Seeds
        [26, 162], // Cieldalaes Spinach
        [27, 183], // Black Pepper
        [28, 213], // Cotton Boll
        [29, 248], // Black Pepper Seeds
        [30, 204], // Ruby Tomato
        [31, 171], // Alpine Parsnip
        [32, 175], // Highland Parsley
        [33, 190], // Marjoram
    ]);
    store.safeChangeKeys(`${GLOG}.harvesting.level.16-20`, [
        [0, 178], // Paprika
        [1, 151], // Galago Mint
        [2, 226], // Paprika Seeds
        [3, 205], // Lalafellin Lentil
        [4, 187], // Popoto
        [5, 185], // Belladonna
        [6, 231], // Popoto Set
        [7, 152], // Gil Bun
        [8, 223], // Island Seedling
        [9, 224], // Shroud Seedling
        [10, 225], // Desert Seedling
        [11, 188], // White Scorpion
    ]);
    store.safeChangeKeys(`${GLOG}.harvesting.level.21-25`, [
        [0, 179], // Pixie Plums
        [1, 240], // Pixie Plum Seeds
        [2, 186], // Button Mushroom
        [3, 170], // Noble Grapes
        [4, 143], // Ala Mhigan Mustard
        [5, 249], // Ala Mhigan Mustard Seeds
        [6, 172], // Pearl Ginger
        [7, 150], // Chamomile
        [8, 250], // Pearl Ginger Root
        [9, 251], // Chamomile Seeds
        [10, 161], // Sticky Rice
        [11, 196], // Millioncorn
        [12, 232], // Millioncorn Seeds
    ]);
    store.safeChangeKeys(`${GLOG}.harvesting.level.26-30`, [
        [0, 157], // Jade Peas
        [1, 7], // Fire Crystal
        [2, 8], // Ice Crystal
        [3, 9], // Wind Crystal
        [4, 10], // Earth Crystal
        [5, 11], // Lightning Crystal
        [6, 12], // Water Crystal
        [7, 145], // Wizard Eggplant
        [8, 233], // Wizard Eggplant Seeds
        [9, 193], // Midland Cabbage
        [10, 234], // Midland Cabbage Seeds
        [11, 197], // Moor Leech
    ]);
    store.safeChangeKeys(`${GLOG}.harvesting.level.31-35`, [
        [0, 210], // Flax
        [1, 295], // Yafaemi Wildgrass
        [2, 252], // Linseed
        [3, 144], // Aloe
        [4, 194], // Midland Basil
        [5, 253], // Midland Basil Seeds
        [6, 189], // White Truffle
        [7, 221], // Bloodgrass
        [8, 192], // Mandrake
        [9, 254], // Mandrake Seeds
        [10, 203], // Salt Leek
        [11, 207], // Laurel
        [12, 180], // Wildfowl Feather
        [13, 167], // Dragon Pepper
        [14, 166], // Desert Saffron
    ]);
    store.safeChangeKeys(`${GLOG}.harvesting.level.36-40`, [
        [0, 184], // Blood Currants
        [1, 241], // Blood Currant Seeds
        [2, 191], // Mugwort
        [3, 142], // Maiden Artichoke
        [4, 160], // Ramhorn Zucchini
        [5, 164], // Thyme
    ]);
    store.safeChangeKeys(`${GLOG}.harvesting.level.41-45`, [
        [0, 155], // Sagolii Sage
        [1, 181], // Black Scorpion
        [2, 208], // Rolanberry
        [3, 243], // Rolanberry Seeds
        [4, 163], // Dart Frog
    ]);
    store.safeChangeKeys(`${GLOG}.harvesting.level.46-50`, [
        [0, 156], // Thanalan Tea Leaves
        [1, 199], // Lava Toad
        [2, 222], // Maiden Grass
        [3, 14], // Ice Cluster
        [4, 15], // Wind Cluster
        [5, 16], // Earth Cluster
        [6, 174], // Dzemael Tomato
        [7, 182], // Black Truffle
        [8, 177], // Honey Lemon
        [9, 212], // Silkworm Cocoon
        [10, 168], // Trillium
        [11, 169], // Trillium Bulb
        [12, 195], // Kidragora
        [13, 235], // Dzemael Tomato Seeds
        [14, 244], // Honey Lemon Seeds
        [15, 292], // Unaspected Crystal
        [16, 296], // Mazlaya Greens
        [17, 273], // La Noscean Leek
        [18, 274], // Young Cieldalaes Spinach
        [19, 284], // Waterfowl Feather
        [20, 271], // Shroud Tea Leaves
        [21, 387], // Dark Matter Cluster
        [22, 365], // Old World Fig
        [23, 394], // Old World Fig Seeds
        [24, 291], // Rosemary
    ]);
    store.safeChangeKeys(`${GLOG}.harvesting.level.51-55`, [
        [0, 344], // Rainbow Cotton Boll
        [1, 367], // Pearl Sprouts
        [2, 346], // Mist Dill
        [3, 395], // Pearl Sprout Seeds
        [4, 347], // Cyclops Onion
        [5, 345], // Highland Wheat
        [6, 368], // Coerthan Tea Leaves
        [7, 396], // Coerthan Tea Seeds
        [8, 348], // Stalk of Ramie
        [9, 353], // Magma Beet
        [10, 352], // Emerald Beans
        [11, 370], // Chives
    ]);
    store.safeChangeKeys(`${GLOG}.harvesting.level.56-60`, [
        [0, 373], // Highland Oregano
        [1, 630], // Pot Marjoram
        [2, 372], // Granular Clay
        [3, 354], // Coneflower
        [4, 355], // Sesame Seeds
        [5, 356], // Cow Bitter
        [6, 423], // Dated Radz-at-Han Coin
        [7, 378], // Furymint
        [8, 631], // Water Mint
        [9, 424], // Ice Stalagmite
        [10, 377], // Peat Moss
        [11, 359], // Rue
        [12, 425], // Duskfall Moss
        [13, 361], // Dandelion
        [14, 360], // Coriander
        [15, 364], // Chysahl Greens
        [16, 386], // Clary Sage
        [17, 632], // Wild Sage
        [18, 385], // Black Soil
        [19, 629], // Humic Soil
        [20, 363], // Gaelicatnip
        [21, 391], // Periwinkle
        [22, 426], // Glass Eye
        [23, 501], // Starcrack Sand
        [24, 502], // Shishu Koban
        [25, 503], // Cotter Dynasty Relic
        [26, 408], // Lover's Laurel
        [27, 398], // Whitefrost Cotton Boll
        [28, 427], // Rainbow Pigment
        [29, 504], // Peaks Pigment
        [30, 505], // Yellow Kudzu Root
        [31, 469], // Gyr Abanian Wheat
        [32, 470], // Bloodhemp
    ]);
    store.safeChangeKeys(`${GLOG}.harvesting.level.61-65`, [
        [0, 516], // Pinch of Active Ingredients
        [1, 472], // Mountain Popoto
        [2, 471], // Buckwheat Kernels
        [3, 473], // Gem Algae
        [4, 517], // Harpoon Head
        [5, 475], // Ruby Cotton Boll
        [6, 474], // Holy Basil
        [7, 518], // Phial of Thermal Fluid
        [8, 476], // Sugar Beet
        [9, 477], // Green Leek
        [10, 478], // Soybeans
        [11, 479], // Ama Nori
        [12, 519], // Shisui Jewel
        [13, 480], // Kudzu Root
        [14, 481], // Cumin Seeds
        [15, 482], // Kudzu Vine
        [16, 520], // Cloudkin Feather
    ]);
    store.safeChangeKeys(`${GLOG}.harvesting.level.66-70`, [
        [0, 483], // Daikon Radish
        [1, 484], // Gyr Abanian Carrot
        [2, 485], // Lotus Root
        [3, 486], // Sun Cabbage
        [4, 487], // Fennel
        [5, 489], // Doman Yellow
        [6, 488], // Windtea Leaves
        [7, 633], // Countess Tea Leaves
        [8, 528], // Strong Steppe Spice
        [9, 490], // Ruby Tide Kelp
        [10, 491], // Jhammel Ginger
        [11, 492], // Yanxian Parsley
        [12, 493], // Alyssum
        [13, 494], // Nagxian Cudweed
        [14, 495], // Chickweed
        [15, 496], // Nipplewort
        [16, 497], // Doman Eggplant
        [17, 498], // Twincoon
        [18, 602], // Amh Araeng Seasonings
        [19, 603], // Clinquant Stones
        [20, 597], // Animal Trace
        [21, 499], // Hallowed Basil
        [22, 604], // Airship Fitting Components
        [23, 515], // Yanxian Verbena
        [24, 570], // Night Pepper
    ]);
    store.safeChangeKeys(`${GLOG}.harvesting.level.71-75`, [
        [0, 573], // Purple Carrot
        [1, 574], // Curly Parsley
        [2, 571], // Blood Tomato
        [3, 572], // Bright Flax
        [4, 614], // Gathering Tool Paraphernalia
        [5, 576], // Garden Beet
        [6, 575], // Broad Beans
        [7, 577], // Iridescent Cocoon
        [17, 637], // Medical Supply Materials
        [8, 578], // Upland Wheat
        [9, 616], // Crafting Tool Paraphernalia
        [10, 598], // Animal Droppings
        [11, 579], // Peppermint
        [12, 580], // Pixie Floss Boll
        [13, 581], // Creamtop Mushroom
        [14, 582], // Royal Grapes
        [15, 618], // Printing Paraphernalia
        [16, 599], // Megafauna Leftovers
    ]);
    store.safeChangeKeys(`${GLOG}.harvesting.level.76-80`, [
        [0, 583], // Russet Popoto
        [1, 585], // White Clay
        [2, 584], // Sweet Alyssum
        [3, 586], // Sweet Marjoram
        [4, 587], // Fernleaf Lavender
        [15, 19], // Art Supply Materials
        [5, 593], // Mist Spinach
        [6, 588], // Coffee Beans
        [7, 589], // Bomba Rice
        [8, 590], // Lime Basil
        [9, 600], // Megafauna Trace
        [10, 594], // Dwarven Cotton Boll
        [11, 591], // Tiger Lily
        [12, 592], // Light Gerbera
        [13, 595], // Bog Sage
        [14, 622], // Levin Mint
    ]);
    store.safeChangeKeys(`${GLOG}.harvesting.level.81-85`, [
        [0, 675], // Iceberg Lettuce
        [1, 674], // Dark Rye
        [2, 673], // Dark Hemp
        [12, 697], // Aetheroconductive Feather
        [13, 698], // Aetheroconductive Focus Materials
        [14, 712], // Raw Sheep Fodder
        [19, 739], // Cushion Care Package Materials
        [3, 691], // Hannish Staple
        [4, 677], // Thavnairian Paprika
        [5, 676], // Thavnairian Perilla Leaf
        [15, 713], // Combustible Fuel
        [20, 740], // Feline Fascinators
        [6, 678], // Cucumber
        [7, 679], // Eblan Lentils
        [16, 714], // Natural Ingredients
        [21, 741], // Mesmerizing Miniature Materials
        [8, 681], // Beet
        [9, 680], // Snow Flax
        [17, 715], // Crafters' Supplies
        [10, 682], // Carrot of Happiness
        [18, 716], // Lovely Knickknacks
        [22, 742], // Energizing Eye-lixir Materials
        [11, 693], // Lunar Staple
    ]);
    store.safeChangeKeys(`${GLOG}.harvesting.level.86-90`, [
        [0, 683], // Scarlet Moko Grass
        [1, 688], // Ewer Clay
        [2, 684], // Giant Popoto
        [8, 743], // Researcher's Relaxation Kit Materials
        [3, 685], // Sideritis Leaves
        [4, 694], // Elpis Staple
        [5, 686], // AR-Caean Cotton Boll
        [6, 687], // Alien Onion
        [7, 718], // Sophora Roots
    ]);
    store.safeChangeKeys(`${GLOG}.harvesting.level.91-95`, [
        [0, 759], // Ut'ohmu Tomato
        [1, 757], // Snow Cotton
        [2, 797], // Locomotive Lubricant
        [3, 758], // Eucalyptus
        [4, 762], // Turali Aloe
        [5, 799], // Mapmaking Pigment
        [6, 800], // Industrial Sanitizing Fluid
        [7, 767], // Shaaloani Oilseeds
        [8, 768], // Turali Corn
        [9, 765], // Mountain Flax
        [10, 766], // Kozama'uka Chamomile
    ]);
    store.safeChangeKeys(`${GLOG}.harvesting.level.96-100`, [
        [0, 773], // White Pepper
        [1, 772], // Sarcenet
        [2, 793], // Goldbranch
        [3, 780], // Bell Pepper
        [4, 779], // Yyasulani Garlic
        [5, 778], // Levinsilk
        [6, 782], // Wind Parsley
        [7, 783], // Windsbalm Bay Leaf
        [8, 781], // Pearl Grass
        [9, 784], // Broccoli
        [10, 794], // Volcanic Grass
    ]);
    store.safeChangeKeys(`${GLOG}.harvesting.regional-folklore.abalathia`, [
        [0, 417], // Star Cotton Boll
    ]);
    store.safeChangeKeys(`${GLOG}.harvesting.regional-folklore.alexandria`, [
        [0, 790], // Blackseed Cotton Boll
        [1, 795], // Optical Fibergrass
    ]);
    store.safeChangeKeys(`${GLOG}.harvesting.regional-folklore.coerthas`, [
        [0, 383], // Dravanian Paprika
        [1, 382], // Vanilla Beans
        [2, 397], // Frost Cotton Boll
    ]);
    store.safeChangeKeys(`${GLOG}.harvesting.regional-folklore.dravania`, [
        [0, 384], // Snurbleberry
        [1, 379], // Seventh Heaven
        [2, 419], // Noble Sage
    ]);
    store.safeChangeKeys(`${GLOG}.harvesting.regional-folklore.gyr-abania`, [
        [0, 511], // Hingan Flax
    ]);
    store.safeChangeKeys(`${GLOG}.harvesting.regional-folklore.ilsabard-and-northern-empty`, [
        [0, 671], // Potent Spice
        [1, 689], // Golden Cocoon
        [2, 696], // Thavnairian Corn
        [3, 729], // Field Mustard
    ], true);
    store.safeChangeKeys(`${GLOG}.harvesting.regional-folklore.norvrandt`, [
        [0, 596], // Ethereal Cocoon
        [1, 612], // Duskblooms
        [2, 613], // Imperial Fern
        [3, 619], // Tender Dill
        [4, 626], // Raindrop Cotton Boll
    ]);
    store.safeChangeKeys(`${GLOG}.harvesting.regional-folklore.othard`, [
        [0, 500], // Rhea
        [1, 507], // Azim Cotton Boll
        [2, 525], // Yanxian Cotton Boll
    ]);
    store.safeChangeKeys(`${GLOG}.harvesting.regional-folklore.sea-of-stars`, [
        [0, 671], // Potent Spice
        [1, 690], // Double-edged Herb
        [2, 702], // Prime Crystalbloom
        [3, 703], // Sublime Crystalbloom
        [4, 730], // Lovingbloom
    ]);
    store.safeChangeKeys(`${GLOG}.harvesting.sidequests.ishgard-restoration`, [
        [0, 10643], // Grade 4 Skybuilders' Hemp
        [1, 10648], // Grade 4 Skybuilders' Cotton Boll
        [2, 10647], // Grade 4 Skybuilders' Sesame
        [3, 10656], // Grade 4 Skybuilders' Tea Leaves
        [4, 10655], // Grade 4 Skybuilders' Vine
        [5, 10654], // Grade 4 Skybuilders' Toad
        [6, 10664], // Grade 4 Skybuilders' Wheat
        [7, 10665], // Grade 4 Skybuilders' Gossamer Cotton Boll
        [8, 10666], // Grade 4 Skybuilders' Tortoise
        [9, 10688], // Grade 2 Artisanal Skybuilders' Wheat
        [10, 10697], // Grade 2 Skybuilders' Umbral Earthcap
        [11, 10689], // Grade 2 Artisanal Skybuilders' Cotton Boll
        [12, 10690], // Grade 2 Artisanal Skybuilders' Dawn Lizard
        [13, 10703], // Grade 3 Artisanal Skybuilders' Rice
        [14, 10702], // Grade 3 Artisanal Skybuilders' Cotton Boll
        [15, 10704], // Grade 3 Artisanal Skybuilders' Vine
        [16, 10711], // Grade 3 Skybuilders' Umbral Tortoise
        [17, 10675], // Grade 4 Artisanal Skybuilders' Cocoon
        [18, 10674], // Grade 4 Artisanal Skybuilders' Caiman
        [19, 10676], // Grade 4 Artisanal Skybuilders' Barbgrass
        [20, 10683], // Grade 4 Skybuilders' Umbral Dirtleaf
    ]);
    store.safeChangeKeys(`${GLOG}.harvesting.sidequests.skysteel-tools`, [
        [0, 10520], // Oddly Specific Latex
        [1, 10521], // Oddly Specific Fossil Dust
        [2, 10524], // Oddly Specific Amber
        [3, 10525], // Oddly Specific Bauble
    ]);
}
