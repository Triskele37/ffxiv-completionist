import { ChangeStore } from '@service/store/migration/ChangeStore';
import { ZoneTaskMap } from '../ZoneTaskMap';

const QUEST = 'overall.duty.quest';
const LEVE = `${QUEST}.levequests`;

/** Levequest changes from Generated Resources
 * */
export function migrateLevequests(store: ChangeStore): void {
    migrate(store, 'alchemy', {
        'coerthas-central-highlands': [363, 366, 367, 368, 369, 372, 373, 374],
        'eastern-la-noscea': [357, 360, 361, 362],
        'eastern-thanalan': [341, 342, 343],
        ishgard: range(1058, 1087),
        kugane: range(1313, 1327),
        'mor-dhona': [375, 378, 379, 380],
        'old-sharlayan': range(1628, 1637),
        'south-shroud': [347, 348, 349, 350, 352, 354, 355, 356],
        'the-crystarium': range(1478, 1492),
        uldah: [
            321, 322, 326, 327, 328, 332, 333, 334, 338, 339,
            340, 344, 345, 346, 351, 353, 358, 359, 364, 365,
            370, 371, 376, 377
        ],
        'western-thanalan': [323, 324, 325, 329, 330, 331, 335, 336, 337],
    });

    migrate(store, 'armoring', {
        'coerthas-central-highlands': [243, 246, 247, 248, 249, 252, 253, 254],
        'eastern-la-noscea': [237, 240, 241, 242],
        ishgard: range(998, 1027),
        kugane: range(1283, 1297),
        'limsa-lominsa': [
            201, 202, 206, 207, 208, 212, 213, 214, 218, 219,
            220, 224, 225, 226, 231, 233, 238, 239, 244, 245,
            250, 251, 256, 257
        ],
        'lower-la-noscea': [203, 204, 205, 209, 210, 211],
        'mor-dhona': [255, 258, 259, 260],
        'old-sharlayan': range(1588, 1597),
        'south-shroud': [227, 228, 229, 230, 232, 234, 235, 236],
        'the-crystarium': range(1448, 1462),
        'western-la-noscea': [215, 216, 217, 221, 222, 223],
    });

    migrate(store, 'battlecraft', {
        'central-shroud': [...range(501, 506), ...range(519, 524), ...range(537, 546)],
        'coerthas-central-highlands': [...range(636, 642), ...range(649, 655)],
        'coerthas-western-highlands': range(878, 883),
        'eastern-la-noscea': range(623, 635),
        'eastern-thanalan': range(581, 588),
        'east-shroud': range(567, 573),
        'lower-la-noscea': [...range(507, 512), ...range(525, 530), ...range(597, 603)],
        'mor-dhona': range(656, 661),
        'northern-thanalan': range(643, 648),
        'southern-thanalan': range(611, 616),
        'south-shroud': [...range(589, 596), ...range(604, 610), ...range(617, 622)],
        'the-churning-mists': range(890, 895),
        'the-dravanian-forelands': range(884, 889),
        'the-dravanian-hinterlands': range(902, 907),
        'the-sea-of-clouds': range(896, 901),
        'western-la-noscea': [...range(547, 556), ...range(574, 580)],
        'western-thanalan': [...range(513, 518), ...range(531, 536), ...range(557, 566)]
    });

    migrate(store, 'blacksmithing', {
        'coerthas-central-highlands': [183, 186, 187, 188, 189, 192, 193, 194],
        'eastern-la-noscea': [177, 180, 181, 182],
        ishgard: range(968, 997),
        kugane: range(1268, 1282),
        'limsa-lominsa': [
            141, 142, 146, 147, 148, 152, 153, 154, 158, 159,
            160, 164, 165, 166, 171, 173, 178, 179, 184, 185,
            190, 191, 196, 197
        ],
        'lower-la-noscea': [143, 144, 145, 149, 150, 151],
        'mor-dhona': [195, 198, 199, 200],
        'old-sharlayan': range(1578, 1587),
        'south-shroud': [167, 168, 169, 170, 172, 174, 175, 176],
        'the-crystarium': range(1433, 1447),
        'western-la-noscea': [155, 156, 157, 161, 162, 163]
    });

    migrate(store, 'botany', {
        'amh-araeng': range(1532, 1534),
        'central-shroud': range(674, 685),
        'coerthas-central-highlands': range(702, 709),
        'coerthas-western-highlands': range(1148, 1153),
        'eastern-la-noscea': range(698, 701),
        'east-shroud': range(686, 689),
        garlemald: range(1654, 1656),
        'il-mheg': range(1526, 1528),
        kholusia: range(1523, 1525),
        labyrinthos: [...range(1648, 1650), ...range(1660, 1662)],
        lakeland: range(1535, 1537),
        'mor-dhona': range(710, 713),
        'south-shroud': range(690, 697),
        thavnair: [...range(1651, 1653), ...range(1657, 1659)],
        'the-azim-steppe': range(1367, 1369),
        'the-churning-mists': range(1160, 1165),
        'the-dravanian-forelands': range(1154, 1159),
        'the-dravanian-hinterlands': range(1172, 1177),
        'the-fringes': range(1358, 1360),
        'the-peaks': range(1370, 1372),
        'the-raktika-greatwood': range(1529, 1531),
        'the-ruby-sea': range(1361, 1363),
        'the-sea-of-clouds': range(1166, 1171),
        yanxia: range(1364, 1366),
    });

    migrate(store, 'carpentry', {
        'central-shroud': [23, 24, 25, 29, 30, 31, 35, 36, 37],
        'coerthas-central-highlands': [63, 66, 67, 68, 69, 72, 73, 74],
        'eastern-la-noscea': [57, 60, 61, 62],
        'east-shroud': [41, 42, 43],
        gridania: [
            21, 22, 26, 27, 28, 32, 33, 34, 38, 39,
            40, 44, 45, 46, 51, 53, 58, 59, 64, 65,
            70, 71, 76, 77
        ],
        ishgard: range(908, 937),
        kugane: range(1238, 1252),
        'mor-dhona': [75, 78, 79, 80],
        'old-sharlayan': range(1568, 1577),
        'south-shroud': [47, 48, 49, 50, 52, 54, 55, 56],
        'the-crystarium': range(1403, 1417),
    });

    migrate(store, 'clothcrafting', {
        'coerthas-central-highlands': [423, 426, 427, 428, 429, 432, 433, 434],
        'eastern-la-noscea': [417, 420, 421, 422],
        'eastern-thanalan': [401, 402, 403],
        ishgard: range(1088, 1117),
        kugane: range(1328, 1342),
        'mor-dhona': [435, 438, 439, 440],
        'old-sharlayan': range(1618, 1627),
        'south-shroud': [407, 408, 409, 410, 412, 414, 415, 416],
        'the-crystarium': range(1493, 1507),
        uldah: [
            381, 382, 386, 387, 388, 392, 393, 394, 398, 399,
            400, 404, 405, 406, 411, 413, 418, 419, 424, 425,
            430, 431, 436, 437
        ],
        'western-thanalan': [383, 384, 385, 389, 390, 391, 395, 396, 397]
    });

    migrateCompany(store);

    migrate(store, 'cooking', {
        'coerthas-central-highlands': [303, 306, 307, 308, 309, 312, 313, 314],
        'eastern-la-noscea': [297, 300, 301, 302],
        ishgard: range(1028, 1057),
        kugane: range(1298, 1312),
        'limsa-lominsa': [
            261, 262, 266, 267, 268, 272, 273, 274, 278, 279,
            280, 284, 285, 286, 291, 293, 298, 299, 304, 305,
            310, 311, 316, 317
        ],
        'lower-la-noscea': [263, 264, 265, 269, 270, 271],
        'mor-dhona': [315, 318, 319, 320],
        'old-sharlayan': range(1638, 1647),
        'south-shroud': [287, 288, 289, 290, 292, 294, 295, 296],
        'the-crystarium': range(1463, 1477),
        'western-la-noscea': [275, 276, 277, 281, 282, 283],
    });

    migrate(store, 'fishing', {
        'coerthas-central-highlands': range(782, 789),
        'eastern-la-noscea': range(778, 781),
        ishgard: range(1208, 1237),
        kugane: range(1388, 1402),
        'limsa-lominsa': range(754, 761),
        'mor-dhona': range(790, 793),
        'old-sharlayan': range(1678, 1687),
        'south-shroud': range(770, 777),
        'the-crystarium': range(1553, 1567),
        'western-la-noscea': range(762, 769),
    });

    migrate(store, 'goldsmithing', {
        'coerthas-central-highlands': [483, 486, 487, 488, 489, 492, 493, 494],
        'eastern-la-noscea': [477, 480, 481, 482],
        'eastern-thanalan': [461, 462, 463],
        ishgard: range(1118, 1147),
        kugane: range(1343, 1357),
        'mor-dhona': [495, 498, 499, 500],
        'old-sharlayan': range(1598, 1607),
        'south-shroud': [467, 468, 469, 470, 472, 474, 475, 476],
        'the-crystarium': range(1508, 1522),
        uldah: [
            441, 442, 446, 447, 448, 452, 453, 454, 458, 459,
            460, 464, 465, 466, 471, 473, 478, 479, 484, 485,
            490, 491, 496, 497
        ],
        'western-thanalan': [443, 444, 445, 449, 450, 451, 455, 456, 457]
    });

    migrate(store, 'leatherworking', {
        'central-shroud': [83, 84, 85, 89, 90, 91, 95, 96, 97],
        'coerthas-central-highlands': [123, 126, 127, 128, 129, 132, 133, 134],
        'eastern-la-noscea': [117, 120, 121, 122],
        'east-shroud': [101, 102, 103],
        gridania: [
            81, 82, 86, 87, 88, 92, 93, 94, 98, 99,
            100, 104, 105, 106, 111, 113, 118, 119, 124, 125,
            130, 131, 136, 137
        ],
        ishgard: range(938, 967),
        kugane: range(1253, 1267),
        'mor-dhona': [135, 138, 139, 140],
        'old-sharlayan': range(1608, 1617),
        'south-shroud': [107, 108, 109, 110, 112, 114, 115, 116],
        'the-crystarium': range(1418, 1432),
    });

    migrate(store, 'mining', {
        'amh-araeng': range(1547, 1549),
        'coerthas-central-highlands': range(742, 749),
        'coerthas-western-highlands': range(1178, 1183),
        'eastern-la-noscea': range(738, 741),
        'eastern-thanalan': range(726, 729),
        garlemald: range(1669, 1671),
        'il-mheg': range(1541, 1543),
        kholusia: range(1538, 1540),
        labyrinthos: [...range(1663, 1665), ...range(1675, 1677)],
        lakeland: range(1550, 1552),
        'mor-dhona': range(750, 753),
        'south-shroud': range(730, 737),
        thavnair: [...range(1666, 1668), ...range(1672, 1674)],
        'the-azim-steppe': range(1382, 1384),
        'the-churning-mists': range(1190, 1195),
        'the-dravanian-forelands': range(1184, 1189),
        'the-dravanian-hinterlands': range(1202, 1207),
        'the-fringes': range(1373, 1375),
        'the-peaks': range(1385, 1387),
        'the-raktika-greatwood': range(1544, 1546),
        'the-ruby-sea': range(1376, 1378),
        'the-sea-of-clouds': range(1196, 1201),
        'western-thanalan': range(714, 725),
        yanxia: range(1379, 1381),
    });
}

function migrateCompany(store: ChangeStore): void {
    const OLD_CL = `${LEVE}.grand-company`;
    const NEW_CL = `${LEVE}.company-leves`;

    store.moveTasks(OLD_CL, `${NEW_CL}.immortal-flames-levequests`, [
        802, 803, 804, 805, 814, 815, 816, 817, 828, 829, 830,
        831, 832, 843, 844, 845, 858, 859, 860, 873, 874, 875
    ]);

    store.moveTasks(OLD_CL, `${NEW_CL}.maelstrom-levequests`, [
        794, 795, 796, 797, 806, 807, 808, 809, 818, 819, 820,
        821, 822, 833, 834, 835, 848, 849, 850, 863, 864, 865
    ]);

    store.moveTasks(OLD_CL, `${NEW_CL}.order-of-the-twin-adder-levequests`, [
        798, 799, 800, 801, 810, 811, 812, 813, 823, 824, 825,
        826, 827, 838, 839, 840, 853, 854, 855, 868, 869, 870
    ]);
}

const range = (start: number, end: number) => {
    const r = [];
    for(let i = start; i <= end; i++) r.push(i);
    return r;
};

function migrate(store: ChangeStore, job: string, taskGroups: ZoneTaskMap): void {
    const LEVE_JOB = `${LEVE}.${job}`;
    Object.keys(taskGroups).forEach((zoneKey) => {
        store.moveTasks(LEVE_JOB, `${LEVE_JOB}-leves.${zoneKey}`, taskGroups[zoneKey]);
    });
}
