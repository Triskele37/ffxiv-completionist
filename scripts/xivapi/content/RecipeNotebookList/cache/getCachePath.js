module.exports = function(RecipeNotebookList) {
    const job = RecipeNotebookList.Recipe0.CraftType.Name;
    const ID = RecipeNotebookList.ID;
    let subdirs = ["_error"];

    // Level-Based
         if(level_01_05.includes(ID)) subdirs = ["level-based", "level-1-5"];
    else if(level_06_10.includes(ID)) subdirs = ["level-based", "level-6-10"];
    else if(level_11_15.includes(ID)) subdirs = ["level-based", "level-11-15"];
    else if(level_16_20.includes(ID)) subdirs = ["level-based", "level-16-20"];
    else if(level_21_25.includes(ID)) subdirs = ["level-based", "level-21-25"];
    else if(level_26_30.includes(ID)) subdirs = ["level-based", "level-26-30"];
    else if(level_31_35.includes(ID)) subdirs = ["level-based", "level-31-35"];
    else if(level_36_40.includes(ID)) subdirs = ["level-based", "level-36-40"];
    else if(level_41_45.includes(ID)) subdirs = ["level-based", "level-41-45"];
    else if(level_46_50.includes(ID)) subdirs = ["level-based", "level-46-50"];
    else if(level_51_55.includes(ID)) subdirs = ["level-based", "level-51-55"];
    else if(level_56_60.includes(ID)) subdirs = ["level-based", "level-56-60"];
    else if(level_61_65.includes(ID)) subdirs = ["level-based", "level-61-65"];
    else if(level_66_70.includes(ID)) subdirs = ["level-based", "level-66-70"];
    else if(level_71_75.includes(ID)) subdirs = ["level-based", "level-71-75"];
    else if(level_76_80.includes(ID)) subdirs = ["level-based", "level-76-80"];

    // Master Recipes
    else if(master_1.includes(ID)) subdirs = ["master-recipes", "mr-1"];
    else if(master_2.includes(ID)) subdirs = ["master-recipes", "mr-2"];
    else if(master_3.includes(ID)) subdirs = ["master-recipes", "mr-3"];
    else if(master_4.includes(ID)) subdirs = ["master-recipes", "mr-4"];
    else if(master_5.includes(ID)) subdirs = ["master-recipes", "mr-5"];
    else if(master_6.includes(ID)) subdirs = ["master-recipes", "mr-6"];
    else if(master_7.includes(ID)) subdirs = ["master-recipes", "mr-7"];
    else if(master_8.includes(ID)) subdirs = ["master-recipes", "mr-8"];
    else if(master_other.includes(ID)) subdirs = ["master-recipes", "other"];

    // Housing, Story, & Ornaments
    else if(housing_1.includes(ID)) subdirs = ["housing", "housing-1"];
    else if(housing_2.includes(ID)) subdirs = ["housing", "housing-2"];
    else if(ornaments.includes(ID)) subdirs = ["ornaments"];
    else if(class_quests.includes(ID)) subdirs = ["story", "class-quests"];
    else if(crystarium_deliveries.includes(ID)) subdirs = ["story", "crystarium-deliveries"];

    // Ishgard Restoration
    else if(ishgard_restoration_1.includes(ID)) subdirs = ["ishgard-restoration", "restoration-1"];
    else if(ishgard_restoration_2.includes(ID)) subdirs = ["ishgard-restoration", "restoration-2"];
    else if(ishgard_restoration_3.includes(ID)) subdirs = ["ishgard-restoration", "restoration-3"];
    else if(ishgard_restoration_4.includes(ID)) subdirs = ["ishgard-restoration", "restoration-4"];
    else if(skysteel_tools.includes(ID)) subdirs = ["ishgard-restoration", "skysteel-tools"];
    else if(ishgard_restoration_other.includes(ID)) subdirs = ["ishgard-restoration", "other"];

    // Collectables
    else if(collectables_50_60.includes(ID)) subdirs = ["collectables", "50-60"];
    else if(collectables_61_70.includes(ID)) subdirs = ["collectables", "61-70"];
    else if(collectables_71_80.includes(ID)) subdirs = ["collectables", "71-80"];

    // Beast Tribe
    else if(beast_tribe_ixal.includes(ID)) subdirs = ["beast-tribe-quests", "ixal-quests"];
    else if(beast_tribe_moogle.includes(ID)) subdirs = ["beast-tribe-quests", "moogle-quests"];
    else if(beast_tribe_namazu.includes(ID)) subdirs = ["beast-tribe-quests", "namazu-quests"];
    else if(beast_tribe_dwarf.includes(ID)) subdirs = ["beast-tribe-quests", "dwarf-quests"];

    // Custom Deliveries
    else if(custom_deliveries_zhloe.includes(ID)) subdirs = ["custom-deliveries", "zhloe-aliapoh"];
    else if(custom_deliveries_m_naago.includes(ID)) subdirs = ["custom-deliveries", "m-naago"];
    else if(custom_deliveries_kurenai.includes(ID)) subdirs = ["custom-deliveries", "kurenai"];
    else if(custom_deliveries_adkiragh.includes(ID)) subdirs = ["custom-deliveries", "adkiragh"];
    else if(custom_deliveries_kai_shirr.includes(ID)) subdirs = ["custom-deliveries", "kai-shirr"];
    else if(custom_deliveries_ehll_tou.includes(ID)) subdirs = ["custom-deliveries", "ehll-tou"];
    else if(custom_deliveries_charlemend.includes(ID)) subdirs = ["custom-deliveries", "charlemend"];

    // Dyes
    else if(dyes.includes(ID)) subdirs = ["dyes"];

    return [job, ...subdirs];
};

//----------------------------------------------------------------------------- Fuck It
const level_01_05 = [0, 40, 80, 120, 160, 200, 240, 280];
const level_06_10 = [1, 41, 81, 121, 161, 201, 241, 281];
const level_11_15 = [2, 42, 82, 122, 162, 202, 242, 282];
const level_16_20 = [3, 43, 83, 123, 163, 203, 243, 283];
const level_21_25 = [4, 44, 84, 124, 164, 204, 244, 284];
const level_26_30 = [5, 45, 85, 125, 165, 205, 245, 285];
const level_31_35 = [6, 46, 86, 126, 166, 206, 246, 286];
const level_36_40 = [7, 47, 87, 127, 167, 207, 247, 287];
const level_41_45 = [8, 48, 88, 128, 168, 208, 248, 288];
const level_46_50 = [9, 49, 89, 129, 169, 209, 249, 289];
const level_51_55 = [10, 50, 90, 130, 170, 210, 250, 290];
const level_56_60 = [11, 51, 91, 131, 171, 211, 251, 291];
const level_61_65 = [12, 52, 92, 132, 172, 212, 252, 292];
const level_66_70 = [13, 53, 93, 133, 173, 213, 253, 293];
const level_71_75 = [14, 54, 94, 134, 174, 214, 254, 294];
const level_76_80 = [15, 55, 95, 135, 175, 215, 255, 295];
const master_1 = [1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007];
const master_2 = [1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015];
const master_3 = [1016, 1017, 1018, 1019, 1020, 1021, 1022, 1023];
const master_4 = [1024, 1025, 1026, 1027, 1028, 1029, 1030, 1031];
const master_5 = [1032, 1033, 1034, 1035, 1036, 1037, 1038, 1039];
const master_6 = [1040, 1041, 1042, 1043, 1044, 1045, 1046, 1047];
const master_7 = [1048, 1049, 1050, 1051, 1052, 1053, 1054, 1055];
const master_8 = [1056, 1057, 1058, 1059, 1060, 1061, 1062, 1063];
const master_other = [1064, 1065, 1066, 1067, 1068, 1069, 1070, 1071];
const housing_1 = [1072, 1073, 1074, 1075, 1076, 1077, 1078, 1079];
const housing_2 = [1080, 1081, 1082, 1083, 1084, 1085, 1086, 1087];
const dyes = [1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095];
// const other = [1096, 1097, 1098, 1099, 1100, 1101, 1102, 1103]; // Removed from game
const class_quests = [1104, 1105, 1106, 1107, 1108, 1109, 1110, 1111];
// 1112-1119: Metal Gauntlets, 1120-1127: Canvas Repair Materials, 1128-1135: Edible Antidote
const crystarium_deliveries = [1120, 1113, 1114, 1115, 1124, 1125, 1134, 1135];
const beast_tribe_ixal = [1136, 1137, 1138, 1139, 1140, 1141, 1142, 1143];
const beast_tribe_moogle = [1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151];
const beast_tribe_namazu = [1152, 1153, 1154, 1155, 1156, 1157, 1158, 1159];
const custom_deliveries_zhloe = [1160, 1161, 1162, 1163, 1164, 1165, 1166, 1167];
const custom_deliveries_m_naago = [1168, 1169, 1170, 1171, 1172, 1173, 1174, 1175];
const custom_deliveries_kurenai = [1176, 1177, 1178, 1179, 1180, 1181, 1182, 1183];
const custom_deliveries_adkiragh = [1184, 1185, 1186, 1187, 1188, 1189, 1190, 1191];
const custom_deliveries_kai_shirr = [1192, 1193, 1194, 1195, 1196, 1197, 1198, 1199];
const ishgard_restoration_1 = [1200, 1201, 1202, 1203, 1204, 1205, 1206, 1207];
const ishgard_restoration_other = [1208, 1209, 1210, 1211, 1212, 1213, 1214, 1215];
const ishgard_restoration_2 = [1216, 1217, 1218, 1219, 1220, 1221, 1222, 1223];
const skysteel_tools = [1224, 1225, 1226, 1227, 1228, 1229, 1230, 1231];
const beast_tribe_dwarf = [1232, 1233, 1234, 1235, 1236, 1237, 1238, 1239];
const custom_deliveries_ehll_tou = [1240, 1241, 1242, 1243, 1244, 1245, 1246, 1247];
const ishgard_restoration_3 = [1248, 1249, 1250, 1251, 1252, 1253, 1254, 1255];
const collectables_50_60 = [1256, 1257, 1258, 1259, 1260, 1261, 1262, 1263];
const collectables_61_70 = [1264, 1265, 1266, 1267, 1268, 1269, 1270, 1271];
const collectables_71_80 = [1272, 1273, 1274, 1275, 1276, 1277, 1278, 1279];
const ornaments = [null, null, null, null, null, null, 1286, null];
const ishgard_restoration_4 = [1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295];
const custom_deliveries_charlemend = [1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303];
