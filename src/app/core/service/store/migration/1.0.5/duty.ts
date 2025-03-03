import { ChangeStore } from '@service/store/migration/ChangeStore';
import { ZoneTaskMap } from '../ZoneTaskMap';

const DUTY = 'overall.duty';
const DRF = `${DUTY}.duty-raid-finder`;

/** Duty changes from Generated Resources
 * */
export function migrateDuties(store: ChangeStore): void {
    store.moveGroup('overall.duty.dutyraid-finder', DRF);

    migrateDeepDungeons(store);
    migrateDungeons(store);
    migrateTrials(store);
    migrateRaids(store);
    migrateGuildhests(store);
    migrateVCDungeons(store);
    migrateHunts(store);

    store.moveGroup(
        `${DUTY}.exploratory-missions.the-bozjan-southern-front`,
        `${DUTY}.exploratory-missions.bozja`
    );
}

function migrateDeepDungeons(store: ChangeStore): void {
    const OLD_DD = `${DRF}.deep-dungeon`;
    const NEW_DD = `${DRF}.deep-dungeons`;

    store.changeKey(OLD_DD, 0, 174);
    store.changeKey(OLD_DD, 1, 540);
    store.changeKey(OLD_DD, 2, 897);
    store.moveGroup(OLD_DD, NEW_DD, true);
}

function migrateDungeons(store: ChangeStore): void {
    const DUNGEONS = `${DRF}.dungeons`;

    store.safeChangeKeys(`${DUNGEONS}.arr`, [
        [0, 4],
        [1, 2],
        [2, 3],
        [3, 7],
        [4, 1],
        [5, 6],
        [6, 8],
        [7, 9],
        [8, 12],
        [9, 11],
        [10, 13],
        [11, 5],
        [12, 15],
        [13, 16],
        [14, 10],
        [15, 14],
        [16, 17],
        [17, 18],
        [18, 19],
        [19, 22],
        [20, 21],
        [21, 20],
        [22, 23],
        [23, 25],
        [24, 24],
        [25, 27],
        [26, 28],
        [27, 26],
        [28, 32],
        [29, 30],
        [30, 29],
    ]);

    store.changeKey(`${DUNGEONS}.hw`, 0, 36);
    store.changeKey(`${DUNGEONS}.hw`, 1, 37);
    store.changeKey(`${DUNGEONS}.hw`, 2, 39);
    store.changeKey(`${DUNGEONS}.hw`, 3, 34);
    store.changeKey(`${DUNGEONS}.hw`, 4, 31);
    store.changeKey(`${DUNGEONS}.hw`, 5, 38);
    store.changeKey(`${DUNGEONS}.hw`, 6, 33);
    store.changeKey(`${DUNGEONS}.hw`, 7, 35);
    store.changeKey(`${DUNGEONS}.hw`, 8, 41);
    store.changeKey(`${DUNGEONS}.hw`, 9, 40);
    store.changeKey(`${DUNGEONS}.hw`, 10, 141);
    store.changeKey(`${DUNGEONS}.hw`, 11, 140);
    store.changeKey(`${DUNGEONS}.hw`, 12, 171);
    store.changeKey(`${DUNGEONS}.hw`, 13, 172);
    store.changeKey(`${DUNGEONS}.hw`, 14, 182);
    store.changeKey(`${DUNGEONS}.hw`, 15, 196);
    store.changeKey(`${DUNGEONS}.hw`, 16, 219);
    store.changeKey(`${DUNGEONS}.hw`, 17, 221);

    store.changeKey(`${DUNGEONS}.sb`, 0, 238);
    store.changeKey(`${DUNGEONS}.sb`, 1, 235);
    store.changeKey(`${DUNGEONS}.sb`, 2, 240);
    store.changeKey(`${DUNGEONS}.sb`, 3, 241);
    store.changeKey(`${DUNGEONS}.sb`, 4, 242);
    store.changeKey(`${DUNGEONS}.sb`, 5, 247);
    store.changeKey(`${DUNGEONS}.sb`, 6, 262);
    store.changeKey(`${DUNGEONS}.sb`, 7, 236);
    store.changeKey(`${DUNGEONS}.sb`, 8, 279);
    store.changeKey(`${DUNGEONS}.sb`, 9, 284);
    store.changeKey(`${DUNGEONS}.sb`, 10, 285);
    store.changeKey(`${DUNGEONS}.sb`, 11, 536);
    store.changeKey(`${DUNGEONS}.sb`, 12, 585);
    store.changeKey(`${DUNGEONS}.sb`, 13, 584);
    store.changeKey(`${DUNGEONS}.sb`, 14, 611);

    store.changeKey(`${DUNGEONS}.shb`, 0, 676);
    store.changeKey(`${DUNGEONS}.shb`, 1, 649);
    store.changeKey(`${DUNGEONS}.shb`, 2, 651);
    store.changeKey(`${DUNGEONS}.shb`, 3, 656);
    store.changeKey(`${DUNGEONS}.shb`, 4, 659);
    store.changeKey(`${DUNGEONS}.shb`, 5, 652);
    store.changeKey(`${DUNGEONS}.shb`, 6, 655);
    store.changeKey(`${DUNGEONS}.shb`, 7, 661);
    store.changeKey(`${DUNGEONS}.shb`, 8, 692);
    store.changeKey(`${DUNGEONS}.shb`, 9, 714);
    store.changeKey(`${DUNGEONS}.shb`, 10, 737);
    store.changeKey(`${DUNGEONS}.shb`, 11, 746);
    store.changeKey(`${DUNGEONS}.shb`, 12, 777);

    store.changeKey(`${DUNGEONS}.ew`, 0, 783);
    store.changeKey(`${DUNGEONS}.ew`, 1, 785);
    store.changeKey(`${DUNGEONS}.ew`, 2, 789);
    store.changeKey(`${DUNGEONS}.ew`, 3, 787);
    store.changeKey(`${DUNGEONS}.ew`, 4, 786);
    store.changeKey(`${DUNGEONS}.ew`, 5, 792);
    store.changeKey(`${DUNGEONS}.ew`, 6, 794);
    store.changeKey(`${DUNGEONS}.ew`, 7, 784);
    store.changeKey(`${DUNGEONS}.ew`, 8, 844);
    store.changeKey(`${DUNGEONS}.ew`, 9, 869);
    store.changeKey(`${DUNGEONS}.ew`, 10, 896);
    store.changeKey(`${DUNGEONS}.ew`, 11, 822);
    store.changeKey(`${DUNGEONS}.ew`, 12, 823);
}

function migrateTrials(store: ChangeStore): void {
    const TRIALS = `${DRF}.trials`;

    store.changeKey(`${TRIALS}.arr`, 0, 56);
    store.changeKey(`${TRIALS}.arr`, 1, 57);
    store.changeKey(`${TRIALS}.arr`, 2, 58);
    store.changeKey(`${TRIALS}.arr`, 3, 830);
    store.changeKey(`${TRIALS}.arr`, 4, 84);
    store.changeKey(`${TRIALS}.arr`, 6, 74);
    store.changeKey(`${TRIALS}.arr`, 7, 75);
    store.changeKey(`${TRIALS}.arr`, 8, 76);
    store.changeKey(`${TRIALS}.arr`, 9, 81);
    store.changeKey(`${TRIALS}.arr`, 10, 85);
    store.changeKey(`${TRIALS}.arr`, 11, 59);
    store.changeKey(`${TRIALS}.arr`, 12, 61);
    store.changeKey(`${TRIALS}.arr`, 13, 60);
    store.changeKey(`${TRIALS}.arr`, 14, 66);
    store.changeKey(`${TRIALS}.arr`, 15, 72);
    store.changeKey(`${TRIALS}.arr`, 16, 77);
    store.changeKey(`${TRIALS}.arr`, 17, 79);
    store.changeKey(`${TRIALS}.arr`, 18, 82);
    store.changeKey(`${TRIALS}.arr`, 19, 68);
    store.changeKey(`${TRIALS}.arr`, 20, 65);
    store.changeKey(`${TRIALS}.arr`, 21, 64);
    store.changeKey(`${TRIALS}.arr`, 22, 63);
    store.changeKey(`${TRIALS}.arr`, 23, 67);
    store.changeKey(`${TRIALS}.arr`, 24, 73);
    store.changeKey(`${TRIALS}.arr`, 25, 78);
    store.changeKey(`${TRIALS}.arr`, 26, 80);

    store.changeKey(`${TRIALS}.hw`, 0, 86);
    store.changeKey(`${TRIALS}.hw`, 1, 88);
    store.changeKey(`${TRIALS}.hw`, 2, 90);
    store.changeKey(`${TRIALS}.hw`, 3, 169);
    store.changeKey(`${TRIALS}.hw`, 4, 134);
    store.changeKey(`${TRIALS}.hw`, 5, 183);
    store.changeKey(`${TRIALS}.hw`, 6, 223);
    store.changeKey(`${TRIALS}.hw`, 7, 89);
    store.changeKey(`${TRIALS}.hw`, 8, 87);
    store.changeKey(`${TRIALS}.hw`, 9, 91);
    store.changeKey(`${TRIALS}.hw`, 10, 170);
    store.changeKey(`${TRIALS}.hw`, 11, 135);
    store.changeKey(`${TRIALS}.hw`, 12, 184);
    store.changeKey(`${TRIALS}.hw`, 13, 224);

    store.changeKey(`${TRIALS}.sb`, 0, 243);
    store.changeKey(`${TRIALS}.sb`, 1, 263);
    store.changeKey(`${TRIALS}.sb`, 2, 239);
    store.changeKey(`${TRIALS}.sb`, 3, 290);
    store.changeKey(`${TRIALS}.sb`, 4, 537);
    store.changeKey(`${TRIALS}.sb`, 12, 596);
    store.changeKey(`${TRIALS}.sb`, 13, 637);
    store.changeKey(`${TRIALS}.sb`, 14, 595);
    store.changeKey(`${TRIALS}.sb`, 5, 474);
    store.changeKey(`${TRIALS}.sb`, 6, 264);
    store.changeKey(`${TRIALS}.sb`, 7, 244);
    store.changeKey(`${TRIALS}.sb`, 8, 278);
    store.changeKey(`${TRIALS}.sb`, 9, 291);
    store.changeKey(`${TRIALS}.sb`, 10, 538);
    store.changeKey(`${TRIALS}.sb`, 11, 475);
    store.changeKey(`${TRIALS}.sb`, 15, 597);
    store.changeKey(`${TRIALS}.sb`, 16, 638);

    store.changeKey(`${TRIALS}.shb`, 0, 657);
    store.changeKey(`${TRIALS}.shb`, 1, 666);
    store.changeKey(`${TRIALS}.shb`, 2, 687);
    store.changeKey(`${TRIALS}.shb`, 3, 717);
    store.changeKey(`${TRIALS}.shb`, 4, 738);
    store.changeKey(`${TRIALS}.shb`, 5, 762);
    store.changeKey(`${TRIALS}.shb`, 17, 781);
    store.changeKey(`${TRIALS}.shb`, 6, 658);
    store.changeKey(`${TRIALS}.shb`, 7, 667);
    store.changeKey(`${TRIALS}.shb`, 8, 693);
    store.changeKey(`${TRIALS}.shb`, 9, 718);
    store.changeKey(`${TRIALS}.shb`, 10, 725);
    store.changeKey(`${TRIALS}.shb`, 11, 739);
    store.changeKey(`${TRIALS}.shb`, 12, 763);
    store.changeKey(`${TRIALS}.shb`, 16, 782);

    store.changeKey(`${TRIALS}.ew`, 0, 802);
    store.changeKey(`${TRIALS}.ew`, 1, 790);
    store.changeKey(`${TRIALS}.ew`, 2, 796);
    store.changeKey(`${TRIALS}.ew`, 7, 870);
    store.changeKey(`${TRIALS}.ew`, 10, 886);
    store.changeKey(`${TRIALS}.ew`, 13, 949);
    store.changeKey(`${TRIALS}.ew`, 16, 964);
    store.changeKey(`${TRIALS}.ew`, 19, 69);
    store.changeKey(`${TRIALS}.ew`, 3, 803);
    store.changeKey(`${TRIALS}.ew`, 4, 791);
    store.changeKey(`${TRIALS}.ew`, 5, 846);
    store.changeKey(`${TRIALS}.ew`, 8, 871);
    store.changeKey(`${TRIALS}.ew`, 11, 924);
    store.changeKey(`${TRIALS}.ew`, 14, 950);
    store.changeKey(`${TRIALS}.ew`, 17, 965);

    // Unreal
    store.changeKey(`${TRIALS}.shb`, 13, 90999);
    store.changeKey(`${TRIALS}.shb`, 14, 91000);
    store.changeKey(`${TRIALS}.shb`, 15, 91001);
    store.changeKey(`${TRIALS}.ew`, 6, 91002);
    store.changeKey(`${TRIALS}.ew`, 9, 91003);
    store.changeKey(`${TRIALS}.ew`, 12, 91004);
    store.changeKey(`${TRIALS}.ew`, 15, 91005);
    store.changeKey(`${TRIALS}.ew`, 18, 91006);
}

function migrateRaids(store: ChangeStore): void {
    const RAIDS = `${DRF}.raids`;

    store.changeKey(`${RAIDS}.arr`, 0, 93);
    store.changeKey(`${RAIDS}.arr`, 1, 94);
    store.changeKey(`${RAIDS}.arr`, 2, 95);
    store.changeKey(`${RAIDS}.arr`, 3, 96);
    store.changeKey(`${RAIDS}.arr`, 4, 97);
    store.changeKey(`${RAIDS}.arr`, 5, 98);
    store.changeKey(`${RAIDS}.arr`, 6, 99);
    store.changeKey(`${RAIDS}.arr`, 7, 100);
    store.changeKey(`${RAIDS}.arr`, 8, 101);
    store.changeKey(`${RAIDS}.arr`, 9, 107);
    store.changeKey(`${RAIDS}.arr`, 10, 108);
    store.changeKey(`${RAIDS}.arr`, 11, 109);
    store.changeKey(`${RAIDS}.arr`, 12, 110);
    store.changeKey(`${RAIDS}.arr`, 13, 103);
    store.changeKey(`${RAIDS}.arr`, 14, 104);
    store.changeKey(`${RAIDS}.arr`, 15, 105);
    store.changeKey(`${RAIDS}.arr`, 16, 106);
    store.changeKey(`${RAIDS}.arr`, 17, 92);
    store.changeKey(`${RAIDS}.arr`, 18, 102);
    store.changeKey(`${RAIDS}.arr`, 19, 111);

    store.changeKey(`${RAIDS}.hw`, 0, 112);
    store.changeKey(`${RAIDS}.hw`, 1, 113);
    store.changeKey(`${RAIDS}.hw`, 2, 114);
    store.changeKey(`${RAIDS}.hw`, 3, 115);
    store.changeKey(`${RAIDS}.hw`, 4, 116);
    store.changeKey(`${RAIDS}.hw`, 5, 117);
    store.changeKey(`${RAIDS}.hw`, 6, 118);
    store.changeKey(`${RAIDS}.hw`, 7, 119);
    store.changeKey(`${RAIDS}.hw`, 8, 136);
    store.changeKey(`${RAIDS}.hw`, 9, 137);
    store.changeKey(`${RAIDS}.hw`, 10, 138);
    store.changeKey(`${RAIDS}.hw`, 11, 139);
    store.changeKey(`${RAIDS}.hw`, 12, 147);
    store.changeKey(`${RAIDS}.hw`, 13, 148);
    store.changeKey(`${RAIDS}.hw`, 14, 149);
    store.changeKey(`${RAIDS}.hw`, 15, 150);
    store.changeKey(`${RAIDS}.hw`, 16, 186);
    store.changeKey(`${RAIDS}.hw`, 17, 187);
    store.changeKey(`${RAIDS}.hw`, 18, 188);
    store.changeKey(`${RAIDS}.hw`, 19, 189);
    store.changeKey(`${RAIDS}.hw`, 20, 190);
    store.changeKey(`${RAIDS}.hw`, 21, 191);
    store.changeKey(`${RAIDS}.hw`, 22, 192);
    store.changeKey(`${RAIDS}.hw`, 23, 193);
    store.changeKey(`${RAIDS}.hw`, 24, 120);
    store.changeKey(`${RAIDS}.hw`, 25, 168);
    store.changeKey(`${RAIDS}.hw`, 26, 220);

    store.changeKey(`${RAIDS}.sb`, 0, 252);
    store.changeKey(`${RAIDS}.sb`, 1, 253);
    store.changeKey(`${RAIDS}.sb`, 2, 254);
    store.changeKey(`${RAIDS}.sb`, 3, 255);
    store.changeKey(`${RAIDS}.sb`, 4, 256);
    store.changeKey(`${RAIDS}.sb`, 5, 257);
    store.changeKey(`${RAIDS}.sb`, 6, 258);
    store.changeKey(`${RAIDS}.sb`, 7, 259);
    store.changeKey(`${RAIDS}.sb`, 8, 280);
    store.changeKey(`${RAIDS}.sb`, 9, 286);
    store.changeKey(`${RAIDS}.sb`, 10, 287);
    store.changeKey(`${RAIDS}.sb`, 11, 288);
    store.changeKey(`${RAIDS}.sb`, 12, 289);
    store.changeKey(`${RAIDS}.sb`, 13, 292);
    store.changeKey(`${RAIDS}.sb`, 14, 293);
    store.changeKey(`${RAIDS}.sb`, 15, 294);
    store.changeKey(`${RAIDS}.sb`, 16, 295);
    store.changeKey(`${RAIDS}.sb`, 17, 539);
    store.changeKey(`${RAIDS}.sb`, 18, 587);
    store.changeKey(`${RAIDS}.sb`, 19, 588);
    store.changeKey(`${RAIDS}.sb`, 20, 589);
    store.changeKey(`${RAIDS}.sb`, 21, 590);
    store.changeKey(`${RAIDS}.sb`, 22, 591);
    store.changeKey(`${RAIDS}.sb`, 23, 592);
    store.changeKey(`${RAIDS}.sb`, 24, 593);
    store.changeKey(`${RAIDS}.sb`, 25, 594);
    store.changeKey(`${RAIDS}.sb`, 26, 281);
    store.changeKey(`${RAIDS}.sb`, 27, 550);
    store.changeKey(`${RAIDS}.sb`, 28, 636);

    store.changeKey(`${RAIDS}.shb`, 0, 653);
    store.changeKey(`${RAIDS}.shb`, 1, 684);
    store.changeKey(`${RAIDS}.shb`, 2, 682);
    store.changeKey(`${RAIDS}.shb`, 3, 689);
    store.changeKey(`${RAIDS}.shb`, 4, 654);
    store.changeKey(`${RAIDS}.shb`, 5, 685);
    store.changeKey(`${RAIDS}.shb`, 6, 683);
    store.changeKey(`${RAIDS}.shb`, 7, 690);
    store.changeKey(`${RAIDS}.shb`, 8, 694);
    store.changeKey(`${RAIDS}.shb`, 10, 715);
    store.changeKey(`${RAIDS}.shb`, 11, 719);
    store.changeKey(`${RAIDS}.shb`, 12, 726);
    store.changeKey(`${RAIDS}.shb`, 13, 728);
    store.changeKey(`${RAIDS}.shb`, 14, 716);
    store.changeKey(`${RAIDS}.shb`, 15, 720);
    store.changeKey(`${RAIDS}.shb`, 16, 727);
    store.changeKey(`${RAIDS}.shb`, 17, 729);
    store.changeKey(`${RAIDS}.shb`, 19, 749);
    store.changeKey(`${RAIDS}.shb`, 20, 747);
    store.changeKey(`${RAIDS}.shb`, 21, 751);
    store.changeKey(`${RAIDS}.shb`, 22, 758);
    store.changeKey(`${RAIDS}.shb`, 23, 750);
    store.changeKey(`${RAIDS}.shb`, 24, 748);
    store.changeKey(`${RAIDS}.shb`, 25, 752);
    store.changeKey(`${RAIDS}.shb`, 26, 759);
    store.changeKey(`${RAIDS}.shb`, 9, 700);
    store.changeKey(`${RAIDS}.shb`, 18, 736);
    store.changeKey(`${RAIDS}.shb`, 27, 779);

    store.changeKey(`${RAIDS}.ew`, 0, 808);
    store.changeKey(`${RAIDS}.ew`, 1, 810);
    store.changeKey(`${RAIDS}.ew`, 2, 806);
    store.changeKey(`${RAIDS}.ew`, 3, 800);
    store.changeKey(`${RAIDS}.ew`, 10, 872);
    store.changeKey(`${RAIDS}.ew`, 11, 880);
    store.changeKey(`${RAIDS}.ew`, 12, 876);
    store.changeKey(`${RAIDS}.ew`, 13, 883);
    store.changeKey(`${RAIDS}.ew`, 20, 936);
    store.changeKey(`${RAIDS}.ew`, 21, 938);
    store.changeKey(`${RAIDS}.ew`, 22, 940);
    store.changeKey(`${RAIDS}.ew`, 23, 942);
    store.changeKey(`${RAIDS}.ew`, 4, 809);
    store.changeKey(`${RAIDS}.ew`, 5, 811);
    store.changeKey(`${RAIDS}.ew`, 6, 807);
    store.changeKey(`${RAIDS}.ew`, 7, 801);
    store.changeKey(`${RAIDS}.ew`, 14, 873);
    store.changeKey(`${RAIDS}.ew`, 15, 881);
    store.changeKey(`${RAIDS}.ew`, 16, 877);
    store.changeKey(`${RAIDS}.ew`, 17, 884);
    store.changeKey(`${RAIDS}.ew`, 24, 937);
    store.changeKey(`${RAIDS}.ew`, 25, 939);
    store.changeKey(`${RAIDS}.ew`, 26, 941);
    store.changeKey(`${RAIDS}.ew`, 27, 943);
    store.changeKey(`${RAIDS}.ew`, 8, 866);
    store.changeKey(`${RAIDS}.ew`, 18, 911);
    store.changeKey(`${RAIDS}.ew`, 28, 962);
    store.changeKey(`${RAIDS}.ew`, 9, 788);
    store.changeKey(`${RAIDS}.ew`, 19, 908);
}

function migrateGuildhests(store: ChangeStore): void {
    const GUILDHESTS = `${DRF}.guildhests`;
    migrateGuildhestJob('arcanist');
    migrateGuildhestJob('archer');
    migrateGuildhestJob('astrologian');
    migrateGuildhestJob('conjurer');
    migrateGuildhestJob('dark-knight');
    migrateGuildhestJob('gladiator');
    migrateGuildhestJob('lancer');
    migrateGuildhestJob('machinist');
    migrateGuildhestJob('marauder');
    migrateGuildhestJob('pugilist');
    migrateGuildhestJob('red-mage');
    migrateGuildhestJob('rogue');
    migrateGuildhestJob('samurai');
    migrateGuildhestJob('thaumaturge');

    function migrateGuildhestJob(job: string) {
        store.changeKey(`${GUILDHESTS}.${job}`, 0, 42);
        store.changeKey(`${GUILDHESTS}.${job}`, 1, 43);
        store.changeKey(`${GUILDHESTS}.${job}`, 2, 44);
        store.changeKey(`${GUILDHESTS}.${job}`, 3, 45);
        store.changeKey(`${GUILDHESTS}.${job}`, 4, 46);
        store.changeKey(`${GUILDHESTS}.${job}`, 5, 47);
        store.changeKey(`${GUILDHESTS}.${job}`, 6, 48);
        store.changeKey(`${GUILDHESTS}.${job}`, 7, 49);
        store.changeKey(`${GUILDHESTS}.${job}`, 8, 50);
        store.changeKey(`${GUILDHESTS}.${job}`, 9, 51);
        store.changeKey(`${GUILDHESTS}.${job}`, 10, 52);
        store.changeKey(`${GUILDHESTS}.${job}`, 11, 53);
        store.changeKey(`${GUILDHESTS}.${job}`, 12, 54);
        store.changeKey(`${GUILDHESTS}.${job}`, 13, 55);
    }
}

function migrateVCDungeons(store: ChangeStore): void {
    const OLD_VC = `${DRF}.v-and-c-dungeon`;
    const NEW_VC = `${DRF}.v-and-c-dungeons`;

    store.changeKey(`${OLD_VC}.aloalo-island`, 0, 961);
    store.changeKey(`${OLD_VC}.aloalo-island`, 1, 979);
    store.changeKey(`${OLD_VC}.aloalo-island`, 2, 980);
    store.changeKey(`${OLD_VC}.mount-rokkon`, 0, 945);
    store.changeKey(`${OLD_VC}.mount-rokkon`, 1, 946);
    store.changeKey(`${OLD_VC}.mount-rokkon`, 2, 947);
    store.changeKey(`${OLD_VC}.sildihn-subterrane`, 0, 868);
    store.changeKey(`${OLD_VC}.sildihn-subterrane`, 1, 878);
    store.changeKey(`${OLD_VC}.sildihn-subterrane`, 2, 879);

    store.moveGroup(OLD_VC, NEW_VC, true);
}

function migrateHunts(store: ChangeStore): void {
    const HUNTS = `${DUTY}.the-hunt`;
    store.moveGroup(`${DRF}.the-hunt`, HUNTS);

    store.safeChangeKeys(`${HUNTS}.arr`, [
        [0, 2926],
        [1, 2929],
        [2, 2930],
        [3, 2931],
        [4, 2927],
        [5, 2925],
        [6, 2935],
        [7, 2921],
        [8, 2932],
        [9, 2934],
        [10, 2924],
        [11, 2922],
        [12, 2923],
        [13, 2928],
        [14, 2920],
        [15, 2933],
        [16, 2919],
        [17, 2940],
        [18, 2950],
        [19, 2944],
        [20, 2936],
        [21, 2938],
        [22, 2939],
        [23, 2947],
        [24, 2952],
        [25, 2942],
        [26, 2949],
        [27, 2951],
        [28, 2937],
        [29, 2948],
        [30, 2941],
        [31, 2946],
        [32, 2945],
        [33, 2943],
        [34, 2969],
        [35, 2965],
        [36, 2958],
        [37, 2967],
        [38, 2963],
        [39, 2962],
        [40, 2953],
        [41, 2959],
        [42, 31],
        [43, 2961],
        [44, 2966],
        [45, 558],
        [46, 2968],
        [47, 2964],
        [48, 2956],
        [49, 2954],
        [50, 2957],
    ]);

    store.changeKey(`${HUNTS}.hw`, 0, 4350);
    store.changeKey(`${HUNTS}.hw`, 1, 4355);
    store.changeKey(`${HUNTS}.hw`, 2, 4352);
    store.changeKey(`${HUNTS}.hw`, 3, 4351);
    store.changeKey(`${HUNTS}.hw`, 4, 4360);
    store.changeKey(`${HUNTS}.hw`, 5, 4361);
    store.changeKey(`${HUNTS}.hw`, 6, 4354);
    store.changeKey(`${HUNTS}.hw`, 7, 4359);
    store.changeKey(`${HUNTS}.hw`, 8, 4356);
    store.changeKey(`${HUNTS}.hw`, 9, 4358);
    store.changeKey(`${HUNTS}.hw`, 10, 4357);
    store.changeKey(`${HUNTS}.hw`, 11, 4353);
    store.changeKey(`${HUNTS}.hw`, 12, 4369);
    store.changeKey(`${HUNTS}.hw`, 13, 4368);
    store.changeKey(`${HUNTS}.hw`, 14, 4372);
    store.changeKey(`${HUNTS}.hw`, 15, 4370);
    store.changeKey(`${HUNTS}.hw`, 16, 4365);
    store.changeKey(`${HUNTS}.hw`, 17, 4363);
    store.changeKey(`${HUNTS}.hw`, 18, 4362);
    store.changeKey(`${HUNTS}.hw`, 19, 4364);
    store.changeKey(`${HUNTS}.hw`, 20, 4371);
    store.changeKey(`${HUNTS}.hw`, 21, 4366);
    store.changeKey(`${HUNTS}.hw`, 22, 4373);
    store.changeKey(`${HUNTS}.hw`, 23, 4367);
    store.changeKey(`${HUNTS}.hw`, 24, 4378);
    store.changeKey(`${HUNTS}.hw`, 25, 4377);
    store.changeKey(`${HUNTS}.hw`, 26, 4374);
    store.changeKey(`${HUNTS}.hw`, 27, 4380);
    store.changeKey(`${HUNTS}.hw`, 28, 4375);
    store.changeKey(`${HUNTS}.hw`, 29, 4376);

    store.changeKey(`${HUNTS}.sb`, 0, 6007);
    store.changeKey(`${HUNTS}.sb`, 1, 6011);
    store.changeKey(`${HUNTS}.sb`, 2, 6004);
    store.changeKey(`${HUNTS}.sb`, 3, 6002);
    store.changeKey(`${HUNTS}.sb`, 4, 6003);
    store.changeKey(`${HUNTS}.sb`, 5, 6010);
    store.changeKey(`${HUNTS}.sb`, 6, 6005);
    store.changeKey(`${HUNTS}.sb`, 7, 6013);
    store.changeKey(`${HUNTS}.sb`, 8, 6006);
    store.changeKey(`${HUNTS}.sb`, 9, 6012);
    store.changeKey(`${HUNTS}.sb`, 10, 6009);
    store.changeKey(`${HUNTS}.sb`, 11, 6008);
    store.changeKey(`${HUNTS}.sb`, 12, 5999);
    store.changeKey(`${HUNTS}.sb`, 13, 5993);
    store.changeKey(`${HUNTS}.sb`, 14, 5991);
    store.changeKey(`${HUNTS}.sb`, 15, 5996);
    store.changeKey(`${HUNTS}.sb`, 16, 5998);
    store.changeKey(`${HUNTS}.sb`, 17, 6000);
    store.changeKey(`${HUNTS}.sb`, 18, 5995);
    store.changeKey(`${HUNTS}.sb`, 19, 5994);
    store.changeKey(`${HUNTS}.sb`, 20, 5997);
    store.changeKey(`${HUNTS}.sb`, 21, 5990);
    store.changeKey(`${HUNTS}.sb`, 22, 6001);
    store.changeKey(`${HUNTS}.sb`, 23, 5992);
    store.changeKey(`${HUNTS}.sb`, 24, 5988);
    store.changeKey(`${HUNTS}.sb`, 25, 5985);
    store.changeKey(`${HUNTS}.sb`, 26, 5984);
    store.changeKey(`${HUNTS}.sb`, 27, 5986);
    store.changeKey(`${HUNTS}.sb`, 28, 5989);
    store.changeKey(`${HUNTS}.sb`, 29, 5987);

    store.changeKey(`${HUNTS}.shb`, 0, 8908);
    store.changeKey(`${HUNTS}.shb`, 1, 8909);
    store.changeKey(`${HUNTS}.shb`, 2, 8656);
    store.changeKey(`${HUNTS}.shb`, 3, 8657);
    store.changeKey(`${HUNTS}.shb`, 4, 8913);
    store.changeKey(`${HUNTS}.shb`, 5, 8914);
    store.changeKey(`${HUNTS}.shb`, 6, 8903);
    store.changeKey(`${HUNTS}.shb`, 7, 8904);
    store.changeKey(`${HUNTS}.shb`, 8, 8893);
    store.changeKey(`${HUNTS}.shb`, 9, 8894);
    store.changeKey(`${HUNTS}.shb`, 10, 8899);
    store.changeKey(`${HUNTS}.shb`, 11, 8898);
    store.changeKey(`${HUNTS}.shb`, 12, 8907);
    store.changeKey(`${HUNTS}.shb`, 13, 8906);
    store.changeKey(`${HUNTS}.shb`, 14, 8655);
    store.changeKey(`${HUNTS}.shb`, 15, 8654);
    store.changeKey(`${HUNTS}.shb`, 16, 8911);
    store.changeKey(`${HUNTS}.shb`, 17, 8912);
    store.changeKey(`${HUNTS}.shb`, 18, 8901);
    store.changeKey(`${HUNTS}.shb`, 19, 8902);
    store.changeKey(`${HUNTS}.shb`, 20, 8892);
    store.changeKey(`${HUNTS}.shb`, 21, 8891);
    store.changeKey(`${HUNTS}.shb`, 22, 8897);
    store.changeKey(`${HUNTS}.shb`, 23, 8896);
    store.changeKey(`${HUNTS}.shb`, 24, 8905);
    store.changeKey(`${HUNTS}.shb`, 25, 8653);
    store.changeKey(`${HUNTS}.shb`, 26, 8910);
    store.changeKey(`${HUNTS}.shb`, 27, 8900);
    store.changeKey(`${HUNTS}.shb`, 28, 5025);
    store.changeKey(`${HUNTS}.shb`, 29, 8895);
    store.changeKey(`${HUNTS}.shb`, 30, 8915);

    store.changeKey(`${HUNTS}.ew`, 0, 10635);
    store.changeKey(`${HUNTS}.ew`, 1, 10636);
    store.changeKey(`${HUNTS}.ew`, 2, 10638);
    store.changeKey(`${HUNTS}.ew`, 3, 10637);
    store.changeKey(`${HUNTS}.ew`, 4, 10640);
    store.changeKey(`${HUNTS}.ew`, 5, 10639);
    store.changeKey(`${HUNTS}.ew`, 6, 10641);
    store.changeKey(`${HUNTS}.ew`, 7, 10642);
    store.changeKey(`${HUNTS}.ew`, 8, 10644);
    store.changeKey(`${HUNTS}.ew`, 9, 10643);
    store.changeKey(`${HUNTS}.ew`, 10, 10645);
    store.changeKey(`${HUNTS}.ew`, 11, 10646);
    store.changeKey(`${HUNTS}.ew`, 12, 10624);
    store.changeKey(`${HUNTS}.ew`, 13, 10623);
    store.changeKey(`${HUNTS}.ew`, 14, 10626);
    store.changeKey(`${HUNTS}.ew`, 15, 10625);
    store.changeKey(`${HUNTS}.ew`, 16, 10628);
    store.changeKey(`${HUNTS}.ew`, 17, 10627);
    store.changeKey(`${HUNTS}.ew`, 18, 10629);
    store.changeKey(`${HUNTS}.ew`, 19, 10630);
    store.changeKey(`${HUNTS}.ew`, 20, 688);
    store.changeKey(`${HUNTS}.ew`, 21, 10632);
    store.changeKey(`${HUNTS}.ew`, 22, 10634);
    store.changeKey(`${HUNTS}.ew`, 23, 10633);
    store.changeKey(`${HUNTS}.ew`, 24, 10617);
    store.changeKey(`${HUNTS}.ew`, 25, 10618);
    store.changeKey(`${HUNTS}.ew`, 26, 10619);
    store.changeKey(`${HUNTS}.ew`, 27, 10620);
    store.changeKey(`${HUNTS}.ew`, 28, 10621);
    store.changeKey(`${HUNTS}.ew`, 29, 10622);
    store.changeKey(`${HUNTS}.ew`, 30, 10615);
}
