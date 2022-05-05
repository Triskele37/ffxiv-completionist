import { ChangeStore } from '@service/store/migration/ChangeStore';

/** FATE ingested from XIVAPI in this version
 * All IDs need to be updated to their actual ID
 * */
export function migrateFates(store: ChangeStore): void {
    const FATE = 'overall.duty.fate';
    store.moveGroup('overall.duty.fates', FATE);

    // Update with new IDs
    const AZYS_LLA = `${FATE}.abalathias-spine.azys-lla`; //#region
    store.changeKey(AZYS_LLA, 0, 890);
    store.changeKey(AZYS_LLA, 1, 888);
    store.changeKey(AZYS_LLA, 2, 889);
    store.changeKey(AZYS_LLA, 3, 877);
    store.changeKey(AZYS_LLA, 4, 882);
    store.changeKey(AZYS_LLA, 5, 881);
    store.changeKey(AZYS_LLA, 6, 894);
    store.changeKey(AZYS_LLA, 7, 886);
    store.changeKey(AZYS_LLA, 8, 887);
    store.changeKey(AZYS_LLA, 9, 884);
    store.changeKey(AZYS_LLA, 10, 892);
    store.changeKey(AZYS_LLA, 11, 893);
    store.changeKey(AZYS_LLA, 12, 897);
    store.changeKey(AZYS_LLA, 13, 901);
    store.changeKey(AZYS_LLA, 14, 900);
    store.changeKey(AZYS_LLA, 15, 899);
    store.changeKey(AZYS_LLA, 16, 883);
    store.changeKey(AZYS_LLA, 17, 895);
    store.changeKey(AZYS_LLA, 18, 891);
    store.changeKey(AZYS_LLA, 19, 885);
    store.changeKey(AZYS_LLA, 20, 898);
    store.changeKey(AZYS_LLA, 21, 880); //#endregion

    const THE_SEA_OF_CLOUDS = `${FATE}.abalathias-spine.the-sea-of-clouds`; //#region
    store.changeKey(THE_SEA_OF_CLOUDS, 0, 842);
    store.changeKey(THE_SEA_OF_CLOUDS, 1, 839);
    store.changeKey(THE_SEA_OF_CLOUDS, 2, 847);
    store.changeKey(THE_SEA_OF_CLOUDS, 3, 843);
    store.changeKey(THE_SEA_OF_CLOUDS, 4, 841);
    store.changeKey(THE_SEA_OF_CLOUDS, 5, 840);
    store.changeKey(THE_SEA_OF_CLOUDS, 6, 846);
    store.changeKey(THE_SEA_OF_CLOUDS, 7, 844);
    store.changeKey(THE_SEA_OF_CLOUDS, 8, 845);
    store.changeKey(THE_SEA_OF_CLOUDS, 9, 855);
    store.changeKey(THE_SEA_OF_CLOUDS, 10, 852);
    store.changeKey(THE_SEA_OF_CLOUDS, 11, 857);
    store.changeKey(THE_SEA_OF_CLOUDS, 12, 860);
    store.changeKey(THE_SEA_OF_CLOUDS, 13, 854);
    store.changeKey(THE_SEA_OF_CLOUDS, 14, 856);
    store.changeKey(THE_SEA_OF_CLOUDS, 15, 851);
    store.changeKey(THE_SEA_OF_CLOUDS, 16, 853);
    store.changeKey(THE_SEA_OF_CLOUDS, 17, 865);
    store.changeKey(THE_SEA_OF_CLOUDS, 18, 866);
    store.changeKey(THE_SEA_OF_CLOUDS, 19, 862);
    store.changeKey(THE_SEA_OF_CLOUDS, 20, 867);
    store.changeKey(THE_SEA_OF_CLOUDS, 21, 861);
    store.changeKey(THE_SEA_OF_CLOUDS, 22, 864);
    store.changeKey(THE_SEA_OF_CLOUDS, 23, 863);
    store.changeKey(THE_SEA_OF_CLOUDS, 24, 875); //#endregion

    store.moveGroup(`${FATE}.the-black-shroud`, `${FATE}.black-shroud`);
    store.changeKey(`${FATE}.black-shroud`, 0, 196);

    const CENTRAL_SHROUD = `${FATE}.black-shroud.central-shroud`; //#region
    store.changeKey(CENTRAL_SHROUD, 0, 121);
    store.changeKey(CENTRAL_SHROUD, 1, 120);
    store.changeKey(CENTRAL_SHROUD, 2, 136);
    store.changeKey(CENTRAL_SHROUD, 3, 208);
    store.changeKey(CENTRAL_SHROUD, 4, 127);
    store.changeKey(CENTRAL_SHROUD, 5, 123);
    store.changeKey(CENTRAL_SHROUD, 6, 126);
    store.changeKey(CENTRAL_SHROUD, 7, 128);
    store.changeKey(CENTRAL_SHROUD, 8, 140);
    store.changeKey(CENTRAL_SHROUD, 9, 131);
    store.changeKey(CENTRAL_SHROUD, 10, 124);
    store.changeKey(CENTRAL_SHROUD, 11, 141);
    store.changeKey(CENTRAL_SHROUD, 12, 139);
    store.changeKey(CENTRAL_SHROUD, 13, 137);
    store.changeKey(CENTRAL_SHROUD, 14, 142);
    store.changeKey(CENTRAL_SHROUD, 15, 601);
    store.changeKey(CENTRAL_SHROUD, 16, 602);
    store.changeKey(CENTRAL_SHROUD, 17, 209);
    store.changeKey(CENTRAL_SHROUD, 18, 600);
    store.changeKey(CENTRAL_SHROUD, 19, 603);
    store.changeKey(CENTRAL_SHROUD, 20, 125);
    store.changeKey(CENTRAL_SHROUD, 21, 604); //#endregion

    const EAST_SHROUD = `${FATE}.black-shroud.east-shroud`; //#region
    store.changeKey(EAST_SHROUD, 0, 143);
    store.changeKey(EAST_SHROUD, 1, 214);
    store.changeKey(EAST_SHROUD, 2, 144);
    store.changeKey(EAST_SHROUD, 3, 149);
    store.changeKey(EAST_SHROUD, 4, 150);
    store.changeKey(EAST_SHROUD, 5, 212);
    store.changeKey(EAST_SHROUD, 6, 152);
    store.changeKey(EAST_SHROUD, 7, 218);
    store.changeKey(EAST_SHROUD, 8, 217);
    store.changeKey(EAST_SHROUD, 9, 213);
    store.changeKey(EAST_SHROUD, 10, 608);
    store.changeKey(EAST_SHROUD, 11, 607);
    store.changeKey(EAST_SHROUD, 12, 610);
    store.changeKey(EAST_SHROUD, 13, 691);
    store.changeKey(EAST_SHROUD, 14, 611);
    store.changeKey(EAST_SHROUD, 15, 609);
    store.changeKey(EAST_SHROUD, 16, 612);
    store.changeKey(EAST_SHROUD, 17, 615);
    store.changeKey(EAST_SHROUD, 18, 616);
    store.changeKey(EAST_SHROUD, 19, 619);
    store.changeKey(EAST_SHROUD, 20, 620);
    store.changeKey(EAST_SHROUD, 21, 618);
    store.changeKey(EAST_SHROUD, 22, 622);
    store.changeKey(EAST_SHROUD, 23, 692); //#endregion

    const NORTH_SHROUD = `${FATE}.black-shroud.north-shroud`; //#region
    store.changeKey(NORTH_SHROUD, 0, 178);
    store.changeKey(NORTH_SHROUD, 1, 183);
    store.changeKey(NORTH_SHROUD, 2, 174);
    store.changeKey(NORTH_SHROUD, 3, 184);
    store.changeKey(NORTH_SHROUD, 4, 185);
    store.changeKey(NORTH_SHROUD, 5, 187);
    store.changeKey(NORTH_SHROUD, 6, 189);
    store.changeKey(NORTH_SHROUD, 7, 188);
    store.changeKey(NORTH_SHROUD, 8, 180);
    store.changeKey(NORTH_SHROUD, 9, 216);
    store.changeKey(NORTH_SHROUD, 10, 634);
    store.changeKey(NORTH_SHROUD, 11, 631);
    store.changeKey(NORTH_SHROUD, 12, 633);
    store.changeKey(NORTH_SHROUD, 13, 632); //#endregion

    const SOUTH_SHROUD = `${FATE}.black-shroud.south-shroud`; //#region
    store.changeKey(SOUTH_SHROUD, 0, 167);
    store.changeKey(SOUTH_SHROUD, 1, 170);
    store.changeKey(SOUTH_SHROUD, 2, 163);
    store.changeKey(SOUTH_SHROUD, 3, 166);
    store.changeKey(SOUTH_SHROUD, 4, 153);
    store.changeKey(SOUTH_SHROUD, 5, 215);
    store.changeKey(SOUTH_SHROUD, 6, 158);
    store.changeKey(SOUTH_SHROUD, 7, 172);
    store.changeKey(SOUTH_SHROUD, 8, 164);
    store.changeKey(SOUTH_SHROUD, 9, 168);
    store.changeKey(SOUTH_SHROUD, 10, 626);
    store.changeKey(SOUTH_SHROUD, 11, 627);
    store.changeKey(SOUTH_SHROUD, 12, 159);
    store.changeKey(SOUTH_SHROUD, 13, 160);
    store.changeKey(SOUTH_SHROUD, 14, 161);
    store.changeKey(SOUTH_SHROUD, 15, 162);
    store.changeKey(SOUTH_SHROUD, 16, 169);
    store.changeKey(SOUTH_SHROUD, 17, 624);
    store.changeKey(SOUTH_SHROUD, 18, 154);
    store.changeKey(SOUTH_SHROUD, 19, 628); //#endregion

    const CENTRAL_HIGHLANDS = `${FATE}.coerthas.central-highlands`; //#region
    store.changeKey(CENTRAL_HIGHLANDS, 0, 466);
    store.changeKey(CENTRAL_HIGHLANDS, 1, 464);
    store.changeKey(CENTRAL_HIGHLANDS, 2, 460);
    store.changeKey(CENTRAL_HIGHLANDS, 3, 463);
    store.changeKey(CENTRAL_HIGHLANDS, 4, 467);
    store.changeKey(CENTRAL_HIGHLANDS, 5, 465);
    store.changeKey(CENTRAL_HIGHLANDS, 6, 491);
    store.changeKey(CENTRAL_HIGHLANDS, 7, 473);
    store.changeKey(CENTRAL_HIGHLANDS, 8, 474);
    store.changeKey(CENTRAL_HIGHLANDS, 9, 470);
    store.changeKey(CENTRAL_HIGHLANDS, 10, 472);
    store.changeKey(CENTRAL_HIGHLANDS, 11, 503);
    store.changeKey(CENTRAL_HIGHLANDS, 12, 502);
    store.changeKey(CENTRAL_HIGHLANDS, 13, 501);
    store.changeKey(CENTRAL_HIGHLANDS, 14, 504);
    store.changeKey(CENTRAL_HIGHLANDS, 15, 469);
    store.changeKey(CENTRAL_HIGHLANDS, 16, 479);
    store.changeKey(CENTRAL_HIGHLANDS, 17, 475);
    store.changeKey(CENTRAL_HIGHLANDS, 18, 483);
    store.changeKey(CENTRAL_HIGHLANDS, 19, 494);
    store.changeKey(CENTRAL_HIGHLANDS, 20, 507);
    store.changeKey(CENTRAL_HIGHLANDS, 21, 496);
    store.changeKey(CENTRAL_HIGHLANDS, 22, 480);
    store.changeKey(CENTRAL_HIGHLANDS, 23, 497);
    store.changeKey(CENTRAL_HIGHLANDS, 24, 482);
    store.changeKey(CENTRAL_HIGHLANDS, 25, 493);
    store.changeKey(CENTRAL_HIGHLANDS, 26, 484);
    store.changeKey(CENTRAL_HIGHLANDS, 27, 486);
    store.changeKey(CENTRAL_HIGHLANDS, 28, 490);
    store.changeKey(CENTRAL_HIGHLANDS, 29, 487);
    store.changeKey(CENTRAL_HIGHLANDS, 30, 489);
    store.changeKey(CENTRAL_HIGHLANDS, 31, 498);
    store.changeKey(CENTRAL_HIGHLANDS, 32, 500);
    store.changeKey(CENTRAL_HIGHLANDS, 33, 499);
    store.changeKey(CENTRAL_HIGHLANDS, 34, 508);
    store.changeKey(CENTRAL_HIGHLANDS, 35, 505);
    store.changeKey(CENTRAL_HIGHLANDS, 36, 506); //#endregion

    const WESTERN_HIGHLANDS = `${FATE}.coerthas.western-highlands`; //#region
    store.changeKey(WESTERN_HIGHLANDS, 0, 814);
    store.changeKey(WESTERN_HIGHLANDS, 1, 788);
    store.changeKey(WESTERN_HIGHLANDS, 2, 815);
    store.changeKey(WESTERN_HIGHLANDS, 3, 809);
    store.changeKey(WESTERN_HIGHLANDS, 4, 813);
    store.changeKey(WESTERN_HIGHLANDS, 5, 807);
    store.changeKey(WESTERN_HIGHLANDS, 6, 810);
    store.changeKey(WESTERN_HIGHLANDS, 7, 789);
    store.changeKey(WESTERN_HIGHLANDS, 8, 816);
    store.changeKey(WESTERN_HIGHLANDS, 9, 791);
    store.changeKey(WESTERN_HIGHLANDS, 10, 792);
    store.changeKey(WESTERN_HIGHLANDS, 11, 796);
    store.changeKey(WESTERN_HIGHLANDS, 12, 801);
    store.changeKey(WESTERN_HIGHLANDS, 13, 787);
    store.changeKey(WESTERN_HIGHLANDS, 14, 795);
    store.changeKey(WESTERN_HIGHLANDS, 15, 794);
    store.changeKey(WESTERN_HIGHLANDS, 16, 811);
    store.changeKey(WESTERN_HIGHLANDS, 17, 793);
    store.changeKey(WESTERN_HIGHLANDS, 18, 798);
    store.changeKey(WESTERN_HIGHLANDS, 19, 802);
    store.changeKey(WESTERN_HIGHLANDS, 20, 817);
    store.changeKey(WESTERN_HIGHLANDS, 21, 812);
    store.changeKey(WESTERN_HIGHLANDS, 22, 800);
    store.changeKey(WESTERN_HIGHLANDS, 23, 805);
    store.changeKey(WESTERN_HIGHLANDS, 24, 909);
    store.changeKey(WESTERN_HIGHLANDS, 25, 908); //#endregion

    const THE_CHURNING_MISTS = `${FATE}.dravania.the-churning-mists`; //#region
    store.changeKey(THE_CHURNING_MISTS, 0, 727);
    store.changeKey(THE_CHURNING_MISTS, 1, 726);
    store.changeKey(THE_CHURNING_MISTS, 2, 872);
    store.changeKey(THE_CHURNING_MISTS, 3, 740);
    store.changeKey(THE_CHURNING_MISTS, 4, 741);
    store.changeKey(THE_CHURNING_MISTS, 5, 874);
    store.changeKey(THE_CHURNING_MISTS, 6, 752);
    store.changeKey(THE_CHURNING_MISTS, 7, 732);
    store.changeKey(THE_CHURNING_MISTS, 8, 737);
    store.changeKey(THE_CHURNING_MISTS, 9, 742);
    store.changeKey(THE_CHURNING_MISTS, 10, 735);
    store.changeKey(THE_CHURNING_MISTS, 11, 755);
    store.changeKey(THE_CHURNING_MISTS, 12, 725);
    store.changeKey(THE_CHURNING_MISTS, 13, 753);
    store.changeKey(THE_CHURNING_MISTS, 14, 736);
    store.changeKey(THE_CHURNING_MISTS, 15, 738);
    store.changeKey(THE_CHURNING_MISTS, 16, 731);
    store.changeKey(THE_CHURNING_MISTS, 17, 748);
    store.changeKey(THE_CHURNING_MISTS, 18, 744);
    store.changeKey(THE_CHURNING_MISTS, 19, 754);
    store.changeKey(THE_CHURNING_MISTS, 20, 870);
    store.changeKey(THE_CHURNING_MISTS, 21, 868);
    store.changeKey(THE_CHURNING_MISTS, 22, 728);
    store.changeKey(THE_CHURNING_MISTS, 23, 873);
    store.changeKey(THE_CHURNING_MISTS, 24, 869);
    store.changeKey(THE_CHURNING_MISTS, 25, 747);
    store.changeKey(THE_CHURNING_MISTS, 26, 751);
    store.changeKey(THE_CHURNING_MISTS, 27, 746);
    store.changeKey(THE_CHURNING_MISTS, 28, 871); //#endregion

    const THE_DRAVANIAN_FORELANDS = `${FATE}.dravania.the-dravanian-forelands`; //#region
    store.changeKey(THE_DRAVANIAN_FORELANDS, 0, 822);
    store.changeKey(THE_DRAVANIAN_FORELANDS, 1, 833);
    store.changeKey(THE_DRAVANIAN_FORELANDS, 2, 823);
    store.changeKey(THE_DRAVANIAN_FORELANDS, 3, 819);
    store.changeKey(THE_DRAVANIAN_FORELANDS, 4, 828);
    store.changeKey(THE_DRAVANIAN_FORELANDS, 5, 902);
    store.changeKey(THE_DRAVANIAN_FORELANDS, 6, 820);
    store.changeKey(THE_DRAVANIAN_FORELANDS, 7, 829);
    store.changeKey(THE_DRAVANIAN_FORELANDS, 8, 824);
    store.changeKey(THE_DRAVANIAN_FORELANDS, 9, 818);
    store.changeKey(THE_DRAVANIAN_FORELANDS, 10, 821);
    store.changeKey(THE_DRAVANIAN_FORELANDS, 11, 826);
    store.changeKey(THE_DRAVANIAN_FORELANDS, 12, 827);
    store.changeKey(THE_DRAVANIAN_FORELANDS, 13, 825);
    store.changeKey(THE_DRAVANIAN_FORELANDS, 14, 835);
    store.changeKey(THE_DRAVANIAN_FORELANDS, 15, 836);
    store.changeKey(THE_DRAVANIAN_FORELANDS, 16, 838);
    store.changeKey(THE_DRAVANIAN_FORELANDS, 17, 834);
    store.changeKey(THE_DRAVANIAN_FORELANDS, 18, 831);
    store.changeKey(THE_DRAVANIAN_FORELANDS, 19, 830);
    store.changeKey(THE_DRAVANIAN_FORELANDS, 20, 832);
    store.changeKey(THE_DRAVANIAN_FORELANDS, 21, 910);
    store.changeKey(THE_DRAVANIAN_FORELANDS, 22, 837);
    store.changeKey(THE_DRAVANIAN_FORELANDS, 23, 903);
    store.changeKey(THE_DRAVANIAN_FORELANDS, 24, 905); //#endregion

    const THE_DRAVANIAN_HINTERLANDS = `${FATE}.dravania.the-dravanian-hinterlands`; //#region
    store.changeKey(THE_DRAVANIAN_HINTERLANDS, 0, 767);
    store.changeKey(THE_DRAVANIAN_HINTERLANDS, 1, 786);
    store.changeKey(THE_DRAVANIAN_HINTERLANDS, 2, 768);
    store.changeKey(THE_DRAVANIAN_HINTERLANDS, 3, 766);
    store.changeKey(THE_DRAVANIAN_HINTERLANDS, 4, 785);
    store.changeKey(THE_DRAVANIAN_HINTERLANDS, 5, 773);
    store.changeKey(THE_DRAVANIAN_HINTERLANDS, 6, 759);
    store.changeKey(THE_DRAVANIAN_HINTERLANDS, 7, 779);
    store.changeKey(THE_DRAVANIAN_HINTERLANDS, 8, 760);
    store.changeKey(THE_DRAVANIAN_HINTERLANDS, 9, 780);
    store.changeKey(THE_DRAVANIAN_HINTERLANDS, 10, 775);
    store.changeKey(THE_DRAVANIAN_HINTERLANDS, 11, 774);
    store.changeKey(THE_DRAVANIAN_HINTERLANDS, 12, 763);
    store.changeKey(THE_DRAVANIAN_HINTERLANDS, 13, 772);
    store.changeKey(THE_DRAVANIAN_HINTERLANDS, 14, 761);
    store.changeKey(THE_DRAVANIAN_HINTERLANDS, 15, 764);
    store.changeKey(THE_DRAVANIAN_HINTERLANDS, 16, 769);
    store.changeKey(THE_DRAVANIAN_HINTERLANDS, 17, 757);
    store.changeKey(THE_DRAVANIAN_HINTERLANDS, 18, 770);
    store.changeKey(THE_DRAVANIAN_HINTERLANDS, 19, 758);
    store.changeKey(THE_DRAVANIAN_HINTERLANDS, 20, 756);
    store.changeKey(THE_DRAVANIAN_HINTERLANDS, 21, 771);
    store.changeKey(THE_DRAVANIAN_HINTERLANDS, 22, 782);
    store.changeKey(THE_DRAVANIAN_HINTERLANDS, 23, 783);
    store.changeKey(THE_DRAVANIAN_HINTERLANDS, 24, 777);
    store.changeKey(THE_DRAVANIAN_HINTERLANDS, 25, 762);
    store.changeKey(THE_DRAVANIAN_HINTERLANDS, 26, 781);
    store.changeKey(THE_DRAVANIAN_HINTERLANDS, 27, 784);
    store.changeKey(THE_DRAVANIAN_HINTERLANDS, 28, 778); //#endregion

    const THE_FRINGES = `${FATE}.gyr-abania.the-fringes`; //#region
    store.changeKey(THE_FRINGES, 0, 1124);
    store.changeKey(THE_FRINGES, 1, 1115);
    store.changeKey(THE_FRINGES, 2, 1116);
    store.changeKey(THE_FRINGES, 3, 1126);
    store.changeKey(THE_FRINGES, 4, 1112);
    store.changeKey(THE_FRINGES, 5, 1113);
    store.changeKey(THE_FRINGES, 6, 1114);
    store.changeKey(THE_FRINGES, 7, 1118);
    store.changeKey(THE_FRINGES, 8, 1119);
    store.changeKey(THE_FRINGES, 9, 1120);
    store.changeKey(THE_FRINGES, 10, 1121);
    store.changeKey(THE_FRINGES, 11, 1122);
    store.changeKey(THE_FRINGES, 12, 1129);
    store.changeKey(THE_FRINGES, 13, 1125);
    store.changeKey(THE_FRINGES, 14, 1130);
    store.changeKey(THE_FRINGES, 15, 1128);
    store.changeKey(THE_FRINGES, 16, 1117);
    store.changeKey(THE_FRINGES, 17, 1127);
    store.changeKey(THE_FRINGES, 18, 1140);
    store.changeKey(THE_FRINGES, 19, 1135);
    store.changeKey(THE_FRINGES, 20, 1139);
    store.changeKey(THE_FRINGES, 21, 1136);
    store.changeKey(THE_FRINGES, 22, 1137);
    store.changeKey(THE_FRINGES, 23, 1133);
    store.changeKey(THE_FRINGES, 24, 1131);
    store.changeKey(THE_FRINGES, 25, 1138);
    store.changeKey(THE_FRINGES, 26, 1132);
    store.changeKey(THE_FRINGES, 27, 1141);
    store.changeKey(THE_FRINGES, 28, 1134); //#endregion

    const THE_LOCHS = `${FATE}.gyr-abania.the-lochs`; //#region
    store.changeKey(THE_LOCHS, 0, 1291);
    store.changeKey(THE_LOCHS, 1, 1293);
    store.changeKey(THE_LOCHS, 2, 1303);
    store.changeKey(THE_LOCHS, 3, 1298);
    store.changeKey(THE_LOCHS, 4, 1292);
    store.changeKey(THE_LOCHS, 5, 1304);
    store.changeKey(THE_LOCHS, 6, 1305);
    store.changeKey(THE_LOCHS, 7, 1294);
    store.changeKey(THE_LOCHS, 8, 1282);
    store.changeKey(THE_LOCHS, 9, 1279);
    store.changeKey(THE_LOCHS, 10, 1275);
    store.changeKey(THE_LOCHS, 11, 1273);
    store.changeKey(THE_LOCHS, 12, 1299);
    store.changeKey(THE_LOCHS, 13, 1297);
    store.changeKey(THE_LOCHS, 14, 1284);
    store.changeKey(THE_LOCHS, 15, 1296);
    store.changeKey(THE_LOCHS, 16, 1281);
    store.changeKey(THE_LOCHS, 17, 1295);
    store.changeKey(THE_LOCHS, 18, 1272);
    store.changeKey(THE_LOCHS, 19, 1302);
    store.changeKey(THE_LOCHS, 20, 1274);
    store.changeKey(THE_LOCHS, 21, 1287);
    store.changeKey(THE_LOCHS, 22, 1283);
    store.changeKey(THE_LOCHS, 23, 1288);
    store.changeKey(THE_LOCHS, 24, 1280);
    store.changeKey(THE_LOCHS, 25, 1286);
    store.changeKey(THE_LOCHS, 26, 1278);
    store.changeKey(THE_LOCHS, 27, 1277);
    store.changeKey(THE_LOCHS, 28, 1301);
    store.changeKey(THE_LOCHS, 29, 1276);
    store.changeKey(THE_LOCHS, 30, 1300);
    store.changeKey(THE_LOCHS, 31, 1285);
    store.changeKey(THE_LOCHS, 32, 1289);
    store.changeKey(THE_LOCHS, 33, 1290);
    store.changeKey(THE_LOCHS, 34, 1103); //#endregion

    const THE_PEAKS = `${FATE}.gyr-abania.the-peaks`; //#region
    store.changeKey(THE_PEAKS, 0, 1174);
    store.changeKey(THE_PEAKS, 1, 1197);
    store.changeKey(THE_PEAKS, 2, 1173);
    store.changeKey(THE_PEAKS, 3, 1199);
    store.changeKey(THE_PEAKS, 4, 1201);
    store.changeKey(THE_PEAKS, 5, 1184);
    store.changeKey(THE_PEAKS, 6, 1180);
    store.changeKey(THE_PEAKS, 7, 1176);
    store.changeKey(THE_PEAKS, 8, 1200);
    store.changeKey(THE_PEAKS, 9, 1178);
    store.changeKey(THE_PEAKS, 10, 1203);
    store.changeKey(THE_PEAKS, 11, 1187);
    store.changeKey(THE_PEAKS, 12, 1177);
    store.changeKey(THE_PEAKS, 13, 1179);
    store.changeKey(THE_PEAKS, 14, 1182);
    store.changeKey(THE_PEAKS, 15, 1175);
    store.changeKey(THE_PEAKS, 16, 1181);
    store.changeKey(THE_PEAKS, 17, 1189);
    store.changeKey(THE_PEAKS, 18, 1185);
    store.changeKey(THE_PEAKS, 19, 1188);
    store.changeKey(THE_PEAKS, 20, 1207);
    store.changeKey(THE_PEAKS, 21, 1196);
    store.changeKey(THE_PEAKS, 22, 1204);
    store.changeKey(THE_PEAKS, 23, 1202);
    store.changeKey(THE_PEAKS, 24, 1198);
    store.changeKey(THE_PEAKS, 25, 1195);
    store.changeKey(THE_PEAKS, 26, 1193);
    store.changeKey(THE_PEAKS, 27, 1194);
    store.changeKey(THE_PEAKS, 28, 1205);
    store.changeKey(THE_PEAKS, 29, 1191);
    store.changeKey(THE_PEAKS, 30, 1190);
    store.changeKey(THE_PEAKS, 31, 1186); //#endregion

    const EASTERN_LA_NOSCEA = `${FATE}.la-noscea.eastern-la-noscea`; //#region
    store.moveGroup(`${FATE}.la-noscea.eastern`, EASTERN_LA_NOSCEA);
    store.changeKey(EASTERN_LA_NOSCEA, 0, 278);
    store.changeKey(EASTERN_LA_NOSCEA, 1, 282);
    store.changeKey(EASTERN_LA_NOSCEA, 2, 287);
    store.changeKey(EASTERN_LA_NOSCEA, 3, 280);
    store.changeKey(EASTERN_LA_NOSCEA, 4, 272);
    store.changeKey(EASTERN_LA_NOSCEA, 5, 268);
    store.changeKey(EASTERN_LA_NOSCEA, 6, 560);
    store.changeKey(EASTERN_LA_NOSCEA, 7, 564);
    store.changeKey(EASTERN_LA_NOSCEA, 8, 335);
    store.changeKey(EASTERN_LA_NOSCEA, 9, 267);
    store.changeKey(EASTERN_LA_NOSCEA, 10, 566);
    store.changeKey(EASTERN_LA_NOSCEA, 11, 274);
    store.changeKey(EASTERN_LA_NOSCEA, 12, 271);
    store.changeKey(EASTERN_LA_NOSCEA, 13, 334);
    store.changeKey(EASTERN_LA_NOSCEA, 14, 565);
    store.changeKey(EASTERN_LA_NOSCEA, 15, 562);
    store.changeKey(EASTERN_LA_NOSCEA, 16, 286);
    store.changeKey(EASTERN_LA_NOSCEA, 17, 279);
    store.changeKey(EASTERN_LA_NOSCEA, 18, 563);
    store.changeKey(EASTERN_LA_NOSCEA, 19, 561); //#endregion

    const LOWER_LA_NOSCEA = `${FATE}.la-noscea.lower-la-noscea`; //#region
    store.moveGroup(`${FATE}.la-noscea.lower`, LOWER_LA_NOSCEA);
    store.changeKey(LOWER_LA_NOSCEA, 0, 257);
    store.changeKey(LOWER_LA_NOSCEA, 1, 249);
    store.changeKey(LOWER_LA_NOSCEA, 2, 246);
    store.changeKey(LOWER_LA_NOSCEA, 3, 250);
    store.changeKey(LOWER_LA_NOSCEA, 4, 251);
    store.changeKey(LOWER_LA_NOSCEA, 5, 265);
    store.changeKey(LOWER_LA_NOSCEA, 6, 264);
    store.changeKey(LOWER_LA_NOSCEA, 7, 333);
    store.changeKey(LOWER_LA_NOSCEA, 8, 261);
    store.changeKey(LOWER_LA_NOSCEA, 9, 260);
    store.changeKey(LOWER_LA_NOSCEA, 10, 262);
    store.changeKey(LOWER_LA_NOSCEA, 11, 245); //#endregion

    const MIDDLE_LA_NOSCEA = `${FATE}.la-noscea.middle-la-noscea`; //#region
    store.moveGroup(`${FATE}.la-noscea.middle`, MIDDLE_LA_NOSCEA);
    store.changeKey(MIDDLE_LA_NOSCEA, 0, 227);
    store.changeKey(MIDDLE_LA_NOSCEA, 1, 239);
    store.changeKey(MIDDLE_LA_NOSCEA, 2, 226);
    store.changeKey(MIDDLE_LA_NOSCEA, 3, 221);
    store.changeKey(MIDDLE_LA_NOSCEA, 4, 225);
    store.changeKey(MIDDLE_LA_NOSCEA, 5, 240);
    store.changeKey(MIDDLE_LA_NOSCEA, 6, 237);
    store.changeKey(MIDDLE_LA_NOSCEA, 7, 220);
    store.changeKey(MIDDLE_LA_NOSCEA, 8, 229);
    store.changeKey(MIDDLE_LA_NOSCEA, 9, 231);
    store.changeKey(MIDDLE_LA_NOSCEA, 10, 649);
    store.changeKey(MIDDLE_LA_NOSCEA, 11, 222);
    store.changeKey(MIDDLE_LA_NOSCEA, 12, 238);
    store.changeKey(MIDDLE_LA_NOSCEA, 13, 233);
    store.changeKey(MIDDLE_LA_NOSCEA, 14, 223); //#endregion

    const OUTER_LA_NOSCEA = `${FATE}.la-noscea.outer-la-noscea`; //#region
    store.moveGroup(`${FATE}.la-noscea.outer`, OUTER_LA_NOSCEA);
    store.changeKey(OUTER_LA_NOSCEA, 0, 591);
    store.changeKey(OUTER_LA_NOSCEA, 1, 593);
    store.changeKey(OUTER_LA_NOSCEA, 2, 580);
    store.changeKey(OUTER_LA_NOSCEA, 3, 583);
    store.changeKey(OUTER_LA_NOSCEA, 4, 595);
    store.changeKey(OUTER_LA_NOSCEA, 5, 581);
    store.changeKey(OUTER_LA_NOSCEA, 6, 594);
    store.changeKey(OUTER_LA_NOSCEA, 7, 587);
    store.changeKey(OUTER_LA_NOSCEA, 8, 589);
    store.changeKey(OUTER_LA_NOSCEA, 9, 588);
    store.changeKey(OUTER_LA_NOSCEA, 10, 586);
    store.changeKey(OUTER_LA_NOSCEA, 11, 599);
    store.changeKey(OUTER_LA_NOSCEA, 12, 700);
    store.changeKey(OUTER_LA_NOSCEA, 13, 597); //#endregion

    const UPPER_LA_NOSCEA = `${FATE}.la-noscea.upper-la-noscea`; //#region
    store.moveGroup(`${FATE}.la-noscea.upper`, UPPER_LA_NOSCEA);
    store.changeKey(UPPER_LA_NOSCEA, 0, 451);
    store.changeKey(UPPER_LA_NOSCEA, 1, 453);
    store.changeKey(UPPER_LA_NOSCEA, 2, 452);
    store.changeKey(UPPER_LA_NOSCEA, 3, 323);
    store.changeKey(UPPER_LA_NOSCEA, 4, 314);
    store.changeKey(UPPER_LA_NOSCEA, 5, 320);
    store.changeKey(UPPER_LA_NOSCEA, 6, 322);
    store.changeKey(UPPER_LA_NOSCEA, 7, 329);
    store.changeKey(UPPER_LA_NOSCEA, 8, 321);
    store.changeKey(UPPER_LA_NOSCEA, 9, 331);
    store.changeKey(UPPER_LA_NOSCEA, 10, 332);
    store.changeKey(UPPER_LA_NOSCEA, 11, 317); //#endregion

    const WESTERN_LA_NOSCEA = `${FATE}.la-noscea.western-la-noscea`; //#region
    store.moveGroup(`${FATE}.la-noscea.western`, WESTERN_LA_NOSCEA);
    store.changeKey(WESTERN_LA_NOSCEA, 0, 306);
    store.changeKey(WESTERN_LA_NOSCEA, 1, 291);
    store.changeKey(WESTERN_LA_NOSCEA, 2, 650);
    store.changeKey(WESTERN_LA_NOSCEA, 3, 304);
    store.changeKey(WESTERN_LA_NOSCEA, 4, 295);
    store.changeKey(WESTERN_LA_NOSCEA, 5, 308);
    store.changeKey(WESTERN_LA_NOSCEA, 6, 310);
    store.changeKey(WESTERN_LA_NOSCEA, 7, 289);
    store.changeKey(WESTERN_LA_NOSCEA, 8, 312);
    store.changeKey(WESTERN_LA_NOSCEA, 9, 298);
    store.changeKey(WESTERN_LA_NOSCEA, 10, 303);
    store.changeKey(WESTERN_LA_NOSCEA, 11, 309);
    store.changeKey(WESTERN_LA_NOSCEA, 12, 297);
    store.changeKey(WESTERN_LA_NOSCEA, 13, 576);
    store.changeKey(WESTERN_LA_NOSCEA, 14, 577);
    store.changeKey(WESTERN_LA_NOSCEA, 15, 568);
    store.changeKey(WESTERN_LA_NOSCEA, 16, 569);
    store.changeKey(WESTERN_LA_NOSCEA, 17, 572);
    store.changeKey(WESTERN_LA_NOSCEA, 18, 571);
    store.changeKey(WESTERN_LA_NOSCEA, 19, 570);
    store.changeKey(WESTERN_LA_NOSCEA, 20, 574);
    store.changeKey(WESTERN_LA_NOSCEA, 21, 575);
    store.changeKey(WESTERN_LA_NOSCEA, 22, 578); //#endregion

    const MOR_DHONA = `${FATE}.mor-dhona`; //#region
    store.changeKey(MOR_DHONA, 0, 514);
    store.changeKey(MOR_DHONA, 1, 517);
    store.changeKey(MOR_DHONA, 2, 530);
    store.changeKey(MOR_DHONA, 3, 529);
    store.changeKey(MOR_DHONA, 4, 523);
    store.changeKey(MOR_DHONA, 5, 516);
    store.changeKey(MOR_DHONA, 6, 512);
    store.changeKey(MOR_DHONA, 7, 524);
    store.changeKey(MOR_DHONA, 8, 525);
    store.changeKey(MOR_DHONA, 9, 522);
    store.changeKey(MOR_DHONA, 10, 520);
    store.changeKey(MOR_DHONA, 11, 527);
    store.changeKey(MOR_DHONA, 12, 526);
    store.changeKey(MOR_DHONA, 13, 521); //#endregion

    const AMH_ARAENG = `${FATE}.norvrandt.amh-araeng`; //#region
    store.changeKey(AMH_ARAENG, 0, 1522);
    store.changeKey(AMH_ARAENG, 1, 1513);
    store.changeKey(AMH_ARAENG, 2, 1519);
    store.changeKey(AMH_ARAENG, 3, 1520);
    store.changeKey(AMH_ARAENG, 4, 1512);
    store.changeKey(AMH_ARAENG, 5, 1511);
    store.changeKey(AMH_ARAENG, 6, 1514);
    store.changeKey(AMH_ARAENG, 7, 1521);
    store.changeKey(AMH_ARAENG, 8, 1517);
    store.changeKey(AMH_ARAENG, 9, 1524);
    store.changeKey(AMH_ARAENG, 10, 1523);
    store.changeKey(AMH_ARAENG, 11, 1527);
    store.changeKey(AMH_ARAENG, 12, 1515);
    store.changeKey(AMH_ARAENG, 13, 1518);
    store.changeKey(AMH_ARAENG, 14, 1516);
    store.changeKey(AMH_ARAENG, 15, 1526);
    store.changeKey(AMH_ARAENG, 16, 1525); //#endregion

    const IL_MHEG = `${FATE}.norvrandt.il-mheg`; //#region
    store.changeKey(IL_MHEG, 0, 1489);
    store.changeKey(IL_MHEG, 1, 1493);
    store.changeKey(IL_MHEG, 2, 1491);
    store.changeKey(IL_MHEG, 3, 1488);
    store.changeKey(IL_MHEG, 4, 1495);
    store.changeKey(IL_MHEG, 5, 1494);
    store.changeKey(IL_MHEG, 6, 1492);
    store.changeKey(IL_MHEG, 7, 1490);
    store.changeKey(IL_MHEG, 8, 1483);
    store.changeKey(IL_MHEG, 9, 1484);
    store.changeKey(IL_MHEG, 10, 1485);
    store.changeKey(IL_MHEG, 11, 1480);
    store.changeKey(IL_MHEG, 12, 1482);
    store.changeKey(IL_MHEG, 13, 1487);
    store.changeKey(IL_MHEG, 14, 1486);
    store.changeKey(IL_MHEG, 15, 1481); //#endregion

    const KHOLUSIA = `${FATE}.norvrandt.kholusia`; //#region
    store.changeKey(KHOLUSIA, 0, 1469);
    store.changeKey(KHOLUSIA, 1, 1470);
    store.changeKey(KHOLUSIA, 2, 1472);
    store.changeKey(KHOLUSIA, 3, 1471);
    store.changeKey(KHOLUSIA, 4, 1465);
    store.changeKey(KHOLUSIA, 5, 1467);
    store.changeKey(KHOLUSIA, 6, 1463);
    store.changeKey(KHOLUSIA, 7, 1462);
    store.changeKey(KHOLUSIA, 8, 1477);
    store.changeKey(KHOLUSIA, 9, 1478);
    store.changeKey(KHOLUSIA, 10, 1479);
    store.changeKey(KHOLUSIA, 11, 1473);
    store.changeKey(KHOLUSIA, 12, 1476);
    store.changeKey(KHOLUSIA, 13, 1474);
    store.changeKey(KHOLUSIA, 14, 1475);
    store.changeKey(KHOLUSIA, 15, 1464); //#endregion

    const LAKELAND = `${FATE}.norvrandt.lakeland`; //#region
    store.changeKey(LAKELAND, 0, 1507);
    store.changeKey(LAKELAND, 1, 1509);
    store.changeKey(LAKELAND, 2, 1510);
    store.changeKey(LAKELAND, 3, 1497);
    store.changeKey(LAKELAND, 4, 1499);
    store.changeKey(LAKELAND, 5, 1504);
    store.changeKey(LAKELAND, 6, 1506);
    store.changeKey(LAKELAND, 7, 1498);
    store.changeKey(LAKELAND, 8, 1505);
    store.changeKey(LAKELAND, 9, 1501);
    store.changeKey(LAKELAND, 10, 1508);
    store.changeKey(LAKELAND, 11, 1496);
    store.changeKey(LAKELAND, 12, 1500);
    store.changeKey(LAKELAND, 13, 1502);
    store.changeKey(LAKELAND, 14, 1503); //#endregion

    const THE_RAK_TIKA_GREATWOOD = `${FATE}.norvrandt.the-rak-tika-greatwood`; //#region
    store.moveGroup(`${FATE}.norvrandt.the-raktika-greatwood`, THE_RAK_TIKA_GREATWOOD);
    store.changeKey(THE_RAK_TIKA_GREATWOOD, 0, 1456);
    store.changeKey(THE_RAK_TIKA_GREATWOOD, 1, 1455);
    store.changeKey(THE_RAK_TIKA_GREATWOOD, 2, 1451);
    store.changeKey(THE_RAK_TIKA_GREATWOOD, 3, 1453);
    store.changeKey(THE_RAK_TIKA_GREATWOOD, 4, 1454);
    store.changeKey(THE_RAK_TIKA_GREATWOOD, 5, 1452);
    store.changeKey(THE_RAK_TIKA_GREATWOOD, 6, 1461);
    store.changeKey(THE_RAK_TIKA_GREATWOOD, 7, 1441);
    store.changeKey(THE_RAK_TIKA_GREATWOOD, 8, 1442);
    store.changeKey(THE_RAK_TIKA_GREATWOOD, 9, 1459);
    store.changeKey(THE_RAK_TIKA_GREATWOOD, 10, 1458);
    store.changeKey(THE_RAK_TIKA_GREATWOOD, 11, 1443);
    store.changeKey(THE_RAK_TIKA_GREATWOOD, 12, 1457);
    store.changeKey(THE_RAK_TIKA_GREATWOOD, 13, 1460);
    store.changeKey(THE_RAK_TIKA_GREATWOOD, 14, 1444);
    store.changeKey(THE_RAK_TIKA_GREATWOOD, 15, 1446);
    store.changeKey(THE_RAK_TIKA_GREATWOOD, 16, 1448);
    store.changeKey(THE_RAK_TIKA_GREATWOOD, 17, 1450);
    store.changeKey(THE_RAK_TIKA_GREATWOOD, 18, 1445); //#endregion

    const THE_TEMPEST = `${FATE}.norvrandt.the-tempest`; //#region
    store.changeKey(THE_TEMPEST, 0, 1439);
    store.changeKey(THE_TEMPEST, 1, 1429);
    store.changeKey(THE_TEMPEST, 2, 1438);
    store.changeKey(THE_TEMPEST, 3, 1428);
    store.changeKey(THE_TEMPEST, 4, 1430);
    store.changeKey(THE_TEMPEST, 5, 1436);
    store.changeKey(THE_TEMPEST, 6, 1440);
    store.changeKey(THE_TEMPEST, 7, 1431);
    store.changeKey(THE_TEMPEST, 8, 1427);
    store.changeKey(THE_TEMPEST, 9, 1435);
    store.changeKey(THE_TEMPEST, 10, 1433);
    store.changeKey(THE_TEMPEST, 11, 1437);
    store.changeKey(THE_TEMPEST, 12, 1434);
    store.changeKey(THE_TEMPEST, 13, 1426);
    store.changeKey(THE_TEMPEST, 14, 1432); //#endregion

    const THE_AZIM_STEPPE = `${FATE}.othard.the-azim-steppe`; //#region
    store.changeKey(THE_AZIM_STEPPE, 0, 1250);
    store.changeKey(THE_AZIM_STEPPE, 1, 1309);
    store.changeKey(THE_AZIM_STEPPE, 2, 1243);
    store.changeKey(THE_AZIM_STEPPE, 3, 1308);
    store.changeKey(THE_AZIM_STEPPE, 4, 1320);
    store.changeKey(THE_AZIM_STEPPE, 5, 1318);
    store.changeKey(THE_AZIM_STEPPE, 6, 1312);
    store.changeKey(THE_AZIM_STEPPE, 7, 1307);
    store.changeKey(THE_AZIM_STEPPE, 8, 1313);
    store.changeKey(THE_AZIM_STEPPE, 9, 1315);
    store.changeKey(THE_AZIM_STEPPE, 10, 1310);
    store.changeKey(THE_AZIM_STEPPE, 11, 1311);
    store.changeKey(THE_AZIM_STEPPE, 12, 1306);
    store.changeKey(THE_AZIM_STEPPE, 13, 1245);
    store.changeKey(THE_AZIM_STEPPE, 14, 1319);
    store.changeKey(THE_AZIM_STEPPE, 15, 1316);
    store.changeKey(THE_AZIM_STEPPE, 16, 1259);
    store.changeKey(THE_AZIM_STEPPE, 17, 1268);
    store.changeKey(THE_AZIM_STEPPE, 18, 1265);
    store.changeKey(THE_AZIM_STEPPE, 19, 1269);
    store.changeKey(THE_AZIM_STEPPE, 20, 1270);
    store.changeKey(THE_AZIM_STEPPE, 21, 1251);
    store.changeKey(THE_AZIM_STEPPE, 22, 1260);
    store.changeKey(THE_AZIM_STEPPE, 23, 1261);
    store.changeKey(THE_AZIM_STEPPE, 24, 1271);
    store.changeKey(THE_AZIM_STEPPE, 25, 1258);
    store.changeKey(THE_AZIM_STEPPE, 26, 1256);
    store.changeKey(THE_AZIM_STEPPE, 27, 1255);
    store.changeKey(THE_AZIM_STEPPE, 28, 1257);
    store.changeKey(THE_AZIM_STEPPE, 29, 1246);
    store.changeKey(THE_AZIM_STEPPE, 30, 1267);
    store.changeKey(THE_AZIM_STEPPE, 31, 1264);
    store.changeKey(THE_AZIM_STEPPE, 32, 1262);
    store.changeKey(THE_AZIM_STEPPE, 33, 1249);
    store.changeKey(THE_AZIM_STEPPE, 34, 1244);
    store.changeKey(THE_AZIM_STEPPE, 35, 1242);
    store.changeKey(THE_AZIM_STEPPE, 36, 1247);
    store.changeKey(THE_AZIM_STEPPE, 37, 1254);
    store.changeKey(THE_AZIM_STEPPE, 38, 1252);
    store.changeKey(THE_AZIM_STEPPE, 39, 1253);
    store.changeKey(THE_AZIM_STEPPE, 40, 1263);
    store.changeKey(THE_AZIM_STEPPE, 41, 1248);
    store.changeKey(THE_AZIM_STEPPE, 42, 1266); //#endregion

    const THE_RUBY_SEA = `${FATE}.othard.the-ruby-sea`; //#region
    store.changeKey(THE_RUBY_SEA, 0, 1148);
    store.changeKey(THE_RUBY_SEA, 1, 1153);
    store.changeKey(THE_RUBY_SEA, 2, 1151);
    store.changeKey(THE_RUBY_SEA, 3, 1168);
    store.changeKey(THE_RUBY_SEA, 4, 1155);
    store.changeKey(THE_RUBY_SEA, 5, 1149);
    store.changeKey(THE_RUBY_SEA, 6, 1150);
    store.changeKey(THE_RUBY_SEA, 7, 1147);
    store.changeKey(THE_RUBY_SEA, 8, 1152);
    store.changeKey(THE_RUBY_SEA, 9, 1166);
    store.changeKey(THE_RUBY_SEA, 10, 1156);
    store.changeKey(THE_RUBY_SEA, 11, 1167);
    store.changeKey(THE_RUBY_SEA, 12, 1142);
    store.changeKey(THE_RUBY_SEA, 13, 1146);
    store.changeKey(THE_RUBY_SEA, 14, 1172);
    store.changeKey(THE_RUBY_SEA, 15, 1159);
    store.changeKey(THE_RUBY_SEA, 16, 1143);
    store.changeKey(THE_RUBY_SEA, 17, 1170);
    store.changeKey(THE_RUBY_SEA, 18, 1160);
    store.changeKey(THE_RUBY_SEA, 19, 1161);
    store.changeKey(THE_RUBY_SEA, 20, 1164);
    store.changeKey(THE_RUBY_SEA, 21, 1163);
    store.changeKey(THE_RUBY_SEA, 22, 1165);
    store.changeKey(THE_RUBY_SEA, 23, 1157);
    store.changeKey(THE_RUBY_SEA, 24, 1171);
    store.changeKey(THE_RUBY_SEA, 25, 1158);
    store.changeKey(THE_RUBY_SEA, 26, 1162);
    store.changeKey(THE_RUBY_SEA, 27, 1154);
    store.changeKey(THE_RUBY_SEA, 28, 1145);
    store.changeKey(THE_RUBY_SEA, 29, 1144); //#endregion

    const YANXIA = `${FATE}.othard.yanxia`; //#region
    store.changeKey(YANXIA, 0, 1209);
    store.changeKey(YANXIA, 1, 1208);
    store.changeKey(YANXIA, 2, 1217);
    store.changeKey(YANXIA, 3, 1219);
    store.changeKey(YANXIA, 4, 1230);
    store.changeKey(YANXIA, 5, 1221);
    store.changeKey(YANXIA, 6, 1214);
    store.changeKey(YANXIA, 7, 1215);
    store.changeKey(YANXIA, 8, 1222);
    store.changeKey(YANXIA, 9, 1231);
    store.changeKey(YANXIA, 10, 1227);
    store.changeKey(YANXIA, 11, 1223);
    store.changeKey(YANXIA, 12, 1228);
    store.changeKey(YANXIA, 13, 1229);
    store.changeKey(YANXIA, 14, 1220);
    store.changeKey(YANXIA, 15, 1225);
    store.changeKey(YANXIA, 16, 1224);
    store.changeKey(YANXIA, 17, 1110);
    store.changeKey(YANXIA, 18, 1218);
    store.changeKey(YANXIA, 19, 1210);
    store.changeKey(YANXIA, 20, 1216);
    store.changeKey(YANXIA, 21, 1239);
    store.changeKey(YANXIA, 22, 1241);
    store.changeKey(YANXIA, 23, 1240);
    store.changeKey(YANXIA, 24, 1226);
    store.changeKey(YANXIA, 25, 1111);
    store.changeKey(YANXIA, 26, 1109);
    store.changeKey(YANXIA, 27, 1236);
    store.changeKey(YANXIA, 28, 1211);
    store.changeKey(YANXIA, 29, 1212);
    store.changeKey(YANXIA, 30, 1213);
    store.changeKey(YANXIA, 31, 1233);
    store.changeKey(YANXIA, 32, 1234);
    store.changeKey(YANXIA, 33, 1232);
    store.changeKey(YANXIA, 34, 1235);
    store.changeKey(YANXIA, 35, 1237);
    store.changeKey(YANXIA, 36, 1238);
    store.changeKey(YANXIA, 37, 1106); //#endregion

    const CENTRAL_THANALAN = `${FATE}.thanalan.central-thanalan`; //#region
    store.moveGroup(`${FATE}.thanalan.central`, CENTRAL_THANALAN);
    store.changeKey(CENTRAL_THANALAN, 0, 378);
    store.changeKey(CENTRAL_THANALAN, 1, 370);
    store.changeKey(CENTRAL_THANALAN, 2, 373);
    store.changeKey(CENTRAL_THANALAN, 3, 375);
    store.changeKey(CENTRAL_THANALAN, 4, 374);
    store.changeKey(CENTRAL_THANALAN, 5, 389);
    store.changeKey(CENTRAL_THANALAN, 6, 383);
    store.changeKey(CENTRAL_THANALAN, 7, 379);
    store.changeKey(CENTRAL_THANALAN, 8, 376);
    store.changeKey(CENTRAL_THANALAN, 9, 381);
    store.changeKey(CENTRAL_THANALAN, 10, 393);
    store.changeKey(CENTRAL_THANALAN, 11, 385);
    store.changeKey(CENTRAL_THANALAN, 12, 377); //#endregion

    const EASTERN_THANALAN = `${FATE}.thanalan.eastern-thanalan`; //#region
    store.moveGroup(`${FATE}.thanalan.eastern`, EASTERN_THANALAN);
    store.changeKey(EASTERN_THANALAN, 0, 395);
    store.changeKey(EASTERN_THANALAN, 1, 400);
    store.changeKey(EASTERN_THANALAN, 2, 413);
    store.changeKey(EASTERN_THANALAN, 3, 401);
    store.changeKey(EASTERN_THANALAN, 4, 402);
    store.changeKey(EASTERN_THANALAN, 5, 412);
    store.changeKey(EASTERN_THANALAN, 6, 397);
    store.changeKey(EASTERN_THANALAN, 7, 398);
    store.changeKey(EASTERN_THANALAN, 8, 394);
    store.changeKey(EASTERN_THANALAN, 9, 194);
    store.changeKey(EASTERN_THANALAN, 10, 409);
    store.changeKey(EASTERN_THANALAN, 11, 195);
    store.changeKey(EASTERN_THANALAN, 12, 193);
    store.changeKey(EASTERN_THANALAN, 13, 191);
    store.changeKey(EASTERN_THANALAN, 14, 192);
    store.changeKey(EASTERN_THANALAN, 15, 406);
    store.changeKey(EASTERN_THANALAN, 16, 407);
    store.changeKey(EASTERN_THANALAN, 17, 541);
    store.changeKey(EASTERN_THANALAN, 18, 540);
    store.changeKey(EASTERN_THANALAN, 19, 542);
    store.changeKey(EASTERN_THANALAN, 20, 543); //#endregion

    const NORTHERN_THANALAN = `${FATE}.thanalan.northern-thanalan`; //#region
    store.moveGroup(`${FATE}.thanalan.northern`, NORTHERN_THANALAN);
    store.changeKey(NORTHERN_THANALAN, 0, 642);
    store.changeKey(NORTHERN_THANALAN, 1, 457);
    store.changeKey(NORTHERN_THANALAN, 2, 450);
    store.changeKey(NORTHERN_THANALAN, 3, 637);
    store.changeKey(NORTHERN_THANALAN, 4, 641);
    store.changeKey(NORTHERN_THANALAN, 5, 446);
    store.changeKey(NORTHERN_THANALAN, 6, 447);
    store.changeKey(NORTHERN_THANALAN, 7, 638);
    store.changeKey(NORTHERN_THANALAN, 8, 647);
    store.changeKey(NORTHERN_THANALAN, 9, 644);
    store.changeKey(NORTHERN_THANALAN, 10, 556);
    store.changeKey(NORTHERN_THANALAN, 11, 646);
    store.changeKey(NORTHERN_THANALAN, 12, 643);
    store.changeKey(NORTHERN_THANALAN, 13, 639);
    store.changeKey(NORTHERN_THANALAN, 14, 645);
    store.changeKey(NORTHERN_THANALAN, 15, 449); //#endregion

    const SOUTHERN_THANALAN = `${FATE}.thanalan.southern-thanalan`; //#region
    store.moveGroup(`${FATE}.thanalan.southern`, SOUTHERN_THANALAN);
    store.changeKey(SOUTHERN_THANALAN, 0, 421);
    store.changeKey(SOUTHERN_THANALAN, 1, 434);
    store.changeKey(SOUTHERN_THANALAN, 2, 420);
    store.changeKey(SOUTHERN_THANALAN, 3, 441);
    store.changeKey(SOUTHERN_THANALAN, 4, 456);
    store.changeKey(SOUTHERN_THANALAN, 5, 419);
    store.changeKey(SOUTHERN_THANALAN, 6, 422);
    store.changeKey(SOUTHERN_THANALAN, 7, 455);
    store.changeKey(SOUTHERN_THANALAN, 8, 437);
    store.changeKey(SOUTHERN_THANALAN, 9, 429);
    store.changeKey(SOUTHERN_THANALAN, 10, 436);
    store.changeKey(SOUTHERN_THANALAN, 11, 432);
    store.changeKey(SOUTHERN_THANALAN, 12, 552);
    store.changeKey(SOUTHERN_THANALAN, 13, 424);
    store.changeKey(SOUTHERN_THANALAN, 14, 549);
    store.changeKey(SOUTHERN_THANALAN, 15, 423);
    store.changeKey(SOUTHERN_THANALAN, 16, 555);
    store.changeKey(SOUTHERN_THANALAN, 17, 546);
    store.changeKey(SOUTHERN_THANALAN, 18, 548);
    store.changeKey(SOUTHERN_THANALAN, 19, 545);
    store.changeKey(SOUTHERN_THANALAN, 20, 550);
    store.changeKey(SOUTHERN_THANALAN, 21, 427);
    store.changeKey(SOUTHERN_THANALAN, 22, 551);
    store.changeKey(SOUTHERN_THANALAN, 23, 558);
    store.changeKey(SOUTHERN_THANALAN, 24, 554);
    store.changeKey(SOUTHERN_THANALAN, 25, 553);
    store.changeKey(SOUTHERN_THANALAN, 26, 431);
    store.changeKey(SOUTHERN_THANALAN, 27, 557);
    store.changeKey(SOUTHERN_THANALAN, 28, 430); //#endregion

    const WESTERN_THANALAN = `${FATE}.thanalan.western-thanalan`; //#region
    store.moveGroup(`${FATE}.thanalan.western`, WESTERN_THANALAN);
    store.changeKey(WESTERN_THANALAN, 0, 342);
    store.changeKey(WESTERN_THANALAN, 1, 356);
    store.changeKey(WESTERN_THANALAN, 2, 343);
    store.changeKey(WESTERN_THANALAN, 3, 346);
    store.changeKey(WESTERN_THANALAN, 4, 344);
    store.changeKey(WESTERN_THANALAN, 5, 345);
    store.changeKey(WESTERN_THANALAN, 6, 348);
    store.changeKey(WESTERN_THANALAN, 7, 347);
    store.changeKey(WESTERN_THANALAN, 8, 361);
    store.changeKey(WESTERN_THANALAN, 9, 350);
    store.changeKey(WESTERN_THANALAN, 10, 349);
    store.changeKey(WESTERN_THANALAN, 11, 352);
    store.changeKey(WESTERN_THANALAN, 12, 353);
    store.changeKey(WESTERN_THANALAN, 13, 367);
    store.changeKey(WESTERN_THANALAN, 14, 357);
    store.changeKey(WESTERN_THANALAN, 15, 354);
    store.changeKey(WESTERN_THANALAN, 16, 366);
    store.changeKey(WESTERN_THANALAN, 17, 355); //#endregion

    const EUREKA_NM = 'overall.duty.exploratory-missions.the-forbidden-land-eureka.notorious-monsters';
    const ANEMOS = `${EUREKA_NM}.anemos`; //#region
    store.changeKey(ANEMOS, 0, 1332);
    store.changeKey(ANEMOS, 1, 1348);
    store.changeKey(ANEMOS, 2, 1333);
    store.changeKey(ANEMOS, 3, 1328);
    store.changeKey(ANEMOS, 4, 1344);
    store.changeKey(ANEMOS, 5, 1347);
    store.changeKey(ANEMOS, 6, 1345);
    store.changeKey(ANEMOS, 7, 1334);
    store.changeKey(ANEMOS, 8, 1335);
    store.changeKey(ANEMOS, 9, 1336);
    store.changeKey(ANEMOS, 10, 1339);
    store.changeKey(ANEMOS, 11, 1346);
    store.changeKey(ANEMOS, 12, 1343);
    store.changeKey(ANEMOS, 13, 1337);
    store.changeKey(ANEMOS, 14, 1342);
    store.changeKey(ANEMOS, 15, 1341);
    store.changeKey(ANEMOS, 16, 1331);
    store.changeKey(ANEMOS, 17, 1340);
    store.changeKey(ANEMOS, 18, 1338);
    store.changeKey(ANEMOS, 19, 1329); //#endregion

    const HYDATOS = `${EUREKA_NM}.hydatos`; //#region
    store.changeKey(HYDATOS, 0, 1425);
    store.changeKey(HYDATOS, 1, 1412);
    store.changeKey(HYDATOS, 2, 1413);
    store.changeKey(HYDATOS, 3, 1414);
    store.changeKey(HYDATOS, 4, 1415);
    store.changeKey(HYDATOS, 5, 1416);
    store.changeKey(HYDATOS, 6, 1417);
    store.changeKey(HYDATOS, 7, 1418);
    store.changeKey(HYDATOS, 8, 1419);
    store.changeKey(HYDATOS, 9, 1420);
    store.changeKey(HYDATOS, 10, 1421);
    store.changeKey(HYDATOS, 11, 1423);
    store.changeKey(HYDATOS, 12, 1424);
    store.changeKey(HYDATOS, 13, 1422); //#endregion

    const PAGOS = `${EUREKA_NM}.pagos`; //#region
    store.changeKey(PAGOS, 0, 1367);
    store.changeKey(PAGOS, 1, 1351);
    store.changeKey(PAGOS, 2, 1369);
    store.changeKey(PAGOS, 3, 1353);
    store.changeKey(PAGOS, 4, 1354);
    store.changeKey(PAGOS, 5, 1355);
    store.changeKey(PAGOS, 6, 1366);
    store.changeKey(PAGOS, 7, 1357);
    store.changeKey(PAGOS, 8, 1356);
    store.changeKey(PAGOS, 9, 1352);
    store.changeKey(PAGOS, 10, 1360);
    store.changeKey(PAGOS, 11, 1358);
    store.changeKey(PAGOS, 12, 1361);
    store.changeKey(PAGOS, 13, 1368);
    store.changeKey(PAGOS, 14, 1362);
    store.changeKey(PAGOS, 15, 1359);
    store.changeKey(PAGOS, 16, 1363);
    store.changeKey(PAGOS, 17, 1365);
    store.changeKey(PAGOS, 18, 1364); //#endregion

    const PYROS = `${EUREKA_NM}.pyros`; //#region
    store.changeKey(PYROS, 0, 1388);
    store.changeKey(PYROS, 1, 1407);
    store.changeKey(PYROS, 2, 1389);
    store.changeKey(PYROS, 3, 1390);
    store.changeKey(PYROS, 4, 1391);
    store.changeKey(PYROS, 5, 1392);
    store.changeKey(PYROS, 6, 1393);
    store.changeKey(PYROS, 7, 1394);
    store.changeKey(PYROS, 8, 1395);
    store.changeKey(PYROS, 9, 1396);
    store.changeKey(PYROS, 10, 1397);
    store.changeKey(PYROS, 11, 1398);
    store.changeKey(PYROS, 12, 1399);
    store.changeKey(PYROS, 13, 1408);
    store.changeKey(PYROS, 14, 1400);
    store.changeKey(PYROS, 15, 1401);
    store.changeKey(PYROS, 16, 1402);
    store.changeKey(PYROS, 17, 1403);
    store.changeKey(PYROS, 18, 1404); //#endregion

    const EVENTS = 'overall.duty.exploratory-missions.the-bozjan-southern-front.events'; //#region
    store.changeKey(EVENTS, 0, 1604);
    store.changeKey(EVENTS, 1, 1606);
    store.changeKey(EVENTS, 2, 1602);
    store.changeKey(EVENTS, 3, 1605);
    store.changeKey(EVENTS, 4, 1624);
    store.changeKey(EVENTS, 5, 1622);
    store.changeKey(EVENTS, 6, 1625);
    store.changeKey(EVENTS, 7, 1612);
    store.changeKey(EVENTS, 8, 1615);
    store.changeKey(EVENTS, 9, 1620);
    store.changeKey(EVENTS, 10, 1627);
    store.changeKey(EVENTS, 11, 1601);
    store.changeKey(EVENTS, 12, 1621);
    store.changeKey(EVENTS, 13, 1619);
    store.changeKey(EVENTS, 14, 1613);
    store.changeKey(EVENTS, 15, 1598);
    store.changeKey(EVENTS, 16, 1626);
    store.changeKey(EVENTS, 17, 1610);
    store.changeKey(EVENTS, 18, 1616);
    store.changeKey(EVENTS, 19, 1608);
    store.changeKey(EVENTS, 20, 1614);
    store.changeKey(EVENTS, 21, 1603);
    store.changeKey(EVENTS, 22, 1597);
    store.changeKey(EVENTS, 24, 1623);
    store.changeKey(EVENTS, 25, 1599);
    store.changeKey(EVENTS, 26, 1611);
    store.changeKey(EVENTS, 27, 1607);
    store.changeKey(EVENTS, 28, 1628);
    store.changeKey(EVENTS, 29, 1618);
    store.changeKey(EVENTS, 30, 1609);
    store.changeKey(EVENTS, 31, 1600);
    store.changeKey(EVENTS, 32, 1617);
    store.changeKey(EVENTS, 49, 1728);
    store.changeKey(EVENTS, 50, 1737);
    store.changeKey(EVENTS, 51, 1721);
    store.changeKey(EVENTS, 52, 1727);
    store.changeKey(EVENTS, 53, 1719);
    store.changeKey(EVENTS, 54, 1722);
    store.changeKey(EVENTS, 55, 1742);
    store.changeKey(EVENTS, 56, 1740);
    store.changeKey(EVENTS, 57, 1723);
    store.changeKey(EVENTS, 58, 1725);
    store.changeKey(EVENTS, 59, 1720);
    store.changeKey(EVENTS, 60, 1731);
    store.changeKey(EVENTS, 65, 1739);
    store.changeKey(EVENTS, 68, 1736);
    store.changeKey(EVENTS, 69, 1724);
    store.changeKey(EVENTS, 71, 1717);
    store.changeKey(EVENTS, 73, 1718);
    store.changeKey(EVENTS, 74, 1735);
    store.changeKey(EVENTS, 75, 1732);
    store.changeKey(EVENTS, 76, 1734);
    store.changeKey(EVENTS, 77, 1730);
    store.changeKey(EVENTS, 79, 1729);
    store.changeKey(EVENTS, 80, 1726);
    store.changeKey(EVENTS, 81, 1733);
    store.changeKey(EVENTS, 83, 1741);
    store.changeKey(EVENTS, 86, 1738); //#endregion
}
