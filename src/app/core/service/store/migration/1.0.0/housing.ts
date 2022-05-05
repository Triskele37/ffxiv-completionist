import { ChangeStore } from '@service/store/migration/ChangeStore';

/** Housing 1 & 2 moved into different
 * sections based on item type in 6.0
 * */
export function migrateHousing(store: ChangeStore): void {
    //#region Alchemist
    const ALC = buildCrafterPaths('alchemist');

    store.moveTasks(ALC.HOUSING_1, ALC.FIXTURES, [
        27269, 6430, 6347, 6357, 8013, 7132, 7142, 6457, 6350, 6360,
        7131, 7141, 6353, 6363, 8004, 33248, 33250
    ]);

    store.moveTasks(ALC.HOUSING_1, ALC.OUTDOOR, [
        6489, 6477, 6476, 6478, 6511, 6510, 6479, 6488, 6503, 6509,
        6481, 24536, 6480, 7992, 6483, 7994, 8002, 6507, 6508, 8816,
        21864, 22440, 9744, 12234, 13084, 14061, 12113, 17030, 17984, 13090,
        28165, 28169, 28170, 28160, 29687, 30396, 32251, 32249, 33296, 32245,
        33295
    ]);

    store.moveTasks(ALC.HOUSING_2, ALC.INDOOR, [
        6594, 6595, 9734, 7979, 7975, 8782, 7974, 33282, 28131, 30394,
        32228, 32221
    ]);

    store.moveTasks(ALC.HOUSING_2, ALC.TABLES_RUGS, [
        23893, 33276
    ]);

    store.moveTasks(ALC.HOUSING_2, ALC.TABLETOP, [
        24524, 6649, 6639, 6640, 6641, 6644, 6645, 6646, 6642, 24502,
        28965, 28137, 28970, 32236
    ]);

    store.moveTasks(ALC.HOUSING_2, ALC.WALL_MOUNTED, [
        7970, 23894, 8807, 8809, 24508, 28975
    ]);

    store.moveTasks(ALC.HOUSING_1, ALC.OTHER, [
        12214, 8844, 8845, 8846, 8847, 8848, 8849, 8850, 8851, 8852,
        8853, 8854, 8855, 8856, 8857, 8858, 8859
    ]);

    store.deleteGroup(ALC.HOUSING_1);
    store.deleteGroup(ALC.HOUSING_2);

    //#endregion

    //#region Armorer
    const ARM = buildCrafterPaths('armorer');

    store.moveTasks(ARM.HOUSING_1, ARM.FIXTURES, [
        6437, 6467, 6438, 6468, 6416, 8834, 6419, 6435, 6441, 6440,
        6422, 7137, 7147, 6469, 20682, 20691, 20700, 20715, 20685, 20709,
        20694, 20712, 20688, 20697, 30378, 30379
    ]);

    store.moveTasks(ARM.HOUSING_1, ARM.OUTDOOR, [
        6486, 7996, 12235, 6485, 6475, 28162, 33299
    ]);

    store.moveTasks(ARM.HOUSING_2, ARM.INDOOR, [
        6549, 6566, 6559, 7111, 9733, 7071, 20737, 27282, 30404, 29685,
        30407
    ]);

    store.moveTasks(ARM.HOUSING_2, ARM.TABLES_RUGS, [
        6612, 6611, 6619, 6601, 6604, 6610, 6616, 6634, 6605, 7100,
        7101
    ]);

    store.moveTasks(ARM.HOUSING_2, ARM.TABLETOP, [
        6636, 6652, 8798, 27278, 20748, 27286, 28984, 33292
    ]);

    store.moveTasks(ARM.HOUSING_2, ARM.WALL_MOUNTED, [
        6670, 27285, 28133, 30401, 30403
    ]);

    store.deleteGroup(ARM.HOUSING_1);
    store.deleteGroup(ARM.HOUSING_2);

    //#endregion

    //#region Blacksmith
    const BSM = buildCrafterPaths('blacksmith');

    store.moveTasks(BSM.HOUSING_1, BSM.FIXTURES, [
        6409, 6403, 6408, 6461, 6412, 6462, 6426, 6463, 6425, 7151,
        8006, 14068, 20680, 20713, 20683, 20686, 30380, 32253
    ]);

    store.moveTasks(BSM.HOUSING_1, BSM.OUTDOOR, [
        6490, 8821, 6487, 6505, 6506, 6501, 6504, 6499, 6500, 8817,
        8819, 7117, 28163, 33300, 32244, 33301
    ]);

    store.moveTasks(BSM.HOUSING_2, BSM.INDOOR, [
        6513, 6570, 6580, 6585, 6523, 6583, 6579, 6522, 7980, 8783,
        7981, 7066, 7072, 7064, 8784, 30405
    ]);

    store.moveTasks(BSM.HOUSING_2, BSM.TABLES_RUGS, [
        6602, 6606, 6625, 6564, 6626, 6630, 6620, 6632, 13071, 27284,
        28973
    ]);

    store.moveTasks(BSM.HOUSING_2, BSM.TABLETOP, [
        20747, 28145, 29683, 30402, 33266, 32235
    ]);

    store.moveTasks(BSM.HOUSING_2, BSM.WALL_MOUNTED, [
        8811, 6663, 6668, 8805, 7082, 30406, 30400
    ]);

    store.deleteGroup(BSM.HOUSING_1);
    store.deleteGroup(BSM.HOUSING_2);

    //#endregion

    //#region Carpenter
    const CRP = buildCrafterPaths('carpenter');

    store.moveTasks(CRP.HOUSING_1, CRP.FIXTURES, [
        6404, 6401, 6406, 6407, 6432, 6402, 6383, 6464, 6348, 6405,
        6374, 6365, 6392, 6384, 6349, 27268, 6414, 6421, 6458, 6459,
        6460, 6417, 6428, 7138, 6455, 6456, 6410, 6415, 6465, 6452,
        6351, 6386, 6377, 6368, 6395, 6387, 6352, 24539, 6466, 6451,
        6354, 6355, 6371, 6380, 6389, 6390, 6398, 13095, 13096, 20698,
        20701, 20704, 20689, 20690, 20702, 20710, 20721, 20699, 20703, 20692,
        20693, 20714, 20711, 20718, 20722, 20695, 20696, 32254, 32252, 28962
    ]);

    store.moveTasks(CRP.HOUSING_1, CRP.OUTDOOR, [
        6494, 6492, 6491, 12115, 6484, 7997, 12114, 9748, 8820, 9739,
        7993, 9746, 8000, 8001, 8818, 7116, 7121, 9740, 22520, 17983,
        28642, 30421, 32250
    ]);

    store.moveTasks(CRP.HOUSING_2, CRP.INDOOR, [
        6514, 7084, 6561, 6576, 13077, 6562, 6520, 6552, 6563, 6560,
        6569, 7114, 7109, 6550, 6515, 6577, 6551, 6574, 13078, 23884,
        9736, 8786, 6567, 6521, 8787, 15974, 6568, 8788, 6584, 6590,
        6592, 7079, 7985, 7081, 7098, 9719, 7972, 7090, 7091, 7108,
        7110, 7112, 7113, 9718, 7065, 7068, 7069, 7070, 8789, 8779,
        8780, 8781, 15147, 12084, 20731, 17960, 20739, 20740, 28637, 29686,
        32226, 33267, 33268, 29680, 32229, 33271
    ]);

    store.moveTasks(CRP.HOUSING_2, CRP.TABLES_RUGS, [
        6603, 6624, 13075, 7973, 6548, 6622, 6613, 8796, 6615, 12098,
        6621, 6627, 24507, 6623, 6628, 8797, 12095, 6607, 6618, 12096,
        6629, 6617, 7978, 6608, 9722, 17024, 8793, 8794, 8795, 13072,
        7102, 7089, 9724, 9737, 12101, 12097, 12085, 24509, 12100, 20734,
        20735, 20738, 20736, 28638, 28991, 30385, 33273, 33285, 28974, 33283,
        33284, 32225, 33279
    ]);

    store.moveTasks(CRP.HOUSING_2, CRP.TABLETOP, [
        6637, 23879, 17971, 27296, 7976, 15775, 17020, 23885, 7103, 7104,
        7105, 7106, 7107, 27279, 12094, 15776, 17023, 6541, 17958, 17959,
        33263, 30393, 33275, 33264
    ]);

    store.moveTasks(CRP.HOUSING_2, CRP.WALL_MOUNTED, [
        24501, 24526, 15970, 16935, 23891, 24511, 24512, 24513, 7958, 9730,
        23877, 16936, 20742, 28139, 29684, 30387, 33286
    ]);

    store.deleteGroup(CRP.HOUSING_1);
    store.deleteGroup(CRP.HOUSING_2);

    //#endregion

    //#region Culinarian
    const CUL = buildCrafterPaths('culinarian');

    store.moveTasks(CUL.HOUSING_1, CUL.OUTDOOR, [
        28166, 28167, 28168, 28171, 32246
    ]);

    store.moveTask(CUL.HOUSING_2, CUL.INDOOR, 33259);

    store.moveTasks(CUL.HOUSING_2, CUL.TABLETOP, [
        9723, 27295, 8802, 9727, 24515, 7963, 23862, 9726, 7959, 23874, 15146,
        8804, 7962, 9738, 9728, 7960, 7961, 9735, 12090, 21825, 21824,
        13070, 14053, 17021, 12092, 12086, 14052, 17969, 17967, 17970, 17968,
        21822, 28132, 32227, 28977, 28978, 33272, 33278, 33280, 30391, 30395,
        30427, 32202, 32212, 32237
    ]);

    store.deleteGroup(CUL.HOUSING_1);
    store.deleteGroup(CUL.HOUSING_2);

    //#endregion

    //#region Goldsmith
    const GSM = buildCrafterPaths('goldsmith');

    store.moveTasks(GSM.HOUSING_1, GSM.FIXTURES, [
        6367, 6375, 6394, 6366, 6385, 6393, 6376, 6439, 8015, 6411,
        6418, 6423, 6413, 8831, 8832, 6446, 6449, 8012, 6370, 6434,
        6436, 6378, 6397, 6420, 6369, 6388, 6396, 6379, 9770, 6424,
        6453, 6447, 6442, 6427, 7136, 7146, 8833, 6448, 6454, 9771,
        6372, 6373, 6381, 6382, 6391, 6399, 6400, 8005, 8014, 9769,
        15164, 6474, 17036, 8835, 8836, 10346, 14070, 14069, 20708, 20720,
        20681, 20705, 20684, 20706, 20707, 20687, 27270, 28127, 28128, 28960,
        28961
    ]);

    store.moveTasks(GSM.HOUSING_1, GSM.OUTDOOR, [
        7998, 7999, 6512, 6497, 9745, 6498, 6502, 7995, 7115, 28164
    ]);

    store.moveTasks(GSM.HOUSING_2, GSM.INDOOR, [
        6578, 6586, 24514, 8790, 27271, 6573, 6575, 6518, 6581, 6565,
        6571, 6599, 6596, 6588, 6591, 6593, 17025, 6597, 6536, 6589,
        6598, 6537, 7067, 7982, 8785, 30410, 33258
    ]);

    store.moveTasks(GSM.HOUSING_2, GSM.TABLES_RUGS, [
        6609, 6614, 6633, 33281
    ]);

    store.moveTasks(GSM.HOUSING_2, GSM.TABLETOP, [
        6635, 6638, 6650, 6648, 6643, 7086, 27297, 6651, 6647, 7073,
        7094, 24523, 24506, 28149, 28148, 27291
    ]);

    store.moveTasks(GSM.HOUSING_2, GSM.WALL_MOUNTED, [
        17955, 27272, 6667, 6671, 7074, 6669, 6665, 6666, 6664, 8808,
        7093, 33291, 33293
    ]);

    store.deleteGroup(GSM.HOUSING_1);
    store.deleteGroup(GSM.HOUSING_2);

    //#endregion

    //#region Leatherworker
    const LTW = buildCrafterPaths('leatherworker');

    store.moveTasks(LTW.HOUSING_1, LTW.FIXTURES, [
        7148, 6445, 6444, 6443, 6473
    ]);

    store.moveTask(LTW.HOUSING_1, LTW.OUTDOOR, 9749);

    store.moveTasks(LTW.HOUSING_2, LTW.INDOOR, [
        6524, 6519, 8806, 6535, 6517, 6530, 6533, 6516, 6572, 6582,
        7077, 7078, 7088, 17956, 17957, 28639, 28992
    ]);

    store.moveTasks(LTW.HOUSING_2, LTW.TABLES_RUGS, [
        6631, 6682, 6675, 6678, 6674, 6685, 7092
    ]);

    store.moveTasks(LTW.HOUSING_2, LTW.TABLETOP, [
        6655, 7966
    ]);

    store.moveTask(LTW.HOUSING_2, LTW.WALL_MOUNTED, 6672);

    store.deleteGroup(LTW.HOUSING_1);
    store.deleteGroup(LTW.HOUSING_2);

    //#endregion

    //#region Weaver
    const WVR = buildCrafterPaths('weaver');

    store.moveTasks(WVR.HOUSING_1, WVR.FIXTURES, [
        6356, 6358, 6429, 6359, 9766, 6361, 6431, 8007, 8008, 8009,
        6433, 6450, 8011, 24538, 9767, 7139, 7149, 8010, 6362, 6364,
        7140, 9768, 7150, 15165, 20716, 28126, 33249
    ]);

    store.moveTasks(WVR.HOUSING_1, WVR.OUTDOOR, [
        6482, 30388, 32242, 32243
    ]);

    store.moveTasks(WVR.HOUSING_2, WVR.INDOOR, [
        6542, 6543, 6544, 15151, 6529, 6525, 6532, 6531, 6534, 6587,
        7080, 7986, 7987, 7988, 8777, 8778, 7984, 17953, 20729, 24528,
        20730, 30390
    ]);

    store.moveTasks(WVR.HOUSING_2, WVR.TABLES_RUGS, [
        6681, 6673, 6677, 6679, 24525, 7983, 6676, 8813, 6683, 8814,
        6680, 7075, 7076, 7977, 15976, 7083, 7099, 6684, 7087, 8815
    ]);

    store.moveTasks(WVR.HOUSING_2, WVR.TABLETOP, [
        24522, 7085, 6654, 6653, 23896, 23880, 20745, 28147, 28142, 28983,
        28976, 32233, 32234
    ]);

    store.moveTasks(WVR.HOUSING_2, WVR.WALL_MOUNTED, [
        27274, 32224, 30389
    ]);

    store.deleteGroup(WVR.HOUSING_1);
    store.deleteGroup(WVR.HOUSING_2);

    //#endregion
}

function buildCrafterPaths(crafter: string) {
    const BASE = `overall.logs.crafting-log.${crafter}.housing`;
    return {
        BASE,
        HOUSING_1: `${BASE}.housing-1`,
        HOUSING_2: `${BASE}.housing-2`,
        FIXTURES: `${BASE}.fixtures`,
        OUTDOOR: `${BASE}.outdoor`,
        INDOOR: `${BASE}.indoor`,
        TABLES_RUGS: `${BASE}.tables-rugs`,
        TABLETOP: `${BASE}.tabletop`,
        WALL_MOUNTED: `${BASE}.wall-mounted`,
        OTHER: `${BASE}.other`,
    };
}
