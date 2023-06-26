
import { ChangeStore } from '@service/store/migration/ChangeStore';

/** Quest Achievements split into main scenario & job/role
 * */
export function migrateAchievements(store: ChangeStore): void {
    const OLD_QUEST = 'overall.character.achievement.quests.quests';

    const NEW_MAIN = 'overall.character.achievement.quests.main-scenario';
    const oldMain = [
        310, 311, 312, 783, 784, 785, 786, 787, 788, 898,
        899, 1001, 1029, 1129, 1133, 1134, 1135, 1136, 1137, 1138,
        1139, 1387, 1493, 1594, 1630, 1690, 1691, 1787, 1788, 1789,
        1790, 1791, 1792, 1793, 1794, 1990, 2013, 2098, 2124, 2160,
        2233, 2293, 2294, 2295, 2296, 2297, 2298, 2424, 2587, 2642,
        2714, 2850, 2851, 2952, 2953, 2954, 2955, 2956, 2957, 2958,
        3075, 3105
    ];
    oldMain.forEach((id) => store.moveTask(OLD_QUEST, NEW_MAIN, id));

    const NEW_ROLE = 'overall.character.achievement.quests.job-role-quests';
    const oldRole = [
        313, 314, 315, 316, 317, 318, 407, 1141, 1797, 2306,
        408, 1142, 1798, 2307, 409, 1143, 1799, 2308, 410, 1144,
        1800, 2309, 411, 1145, 1801, 2310, 1052, 1150, 1806, 2315,
        412, 1146, 1802, 2311, 413, 1147, 1803, 2312, 599, 1148,
        1804, 2313, 600, 1149, 1805, 2314, 1151, 1154, 1807, 2316,
        1152, 1155, 1808, 2317, 1153, 1156, 1809, 2318, 1810, 1811,
        2319, 1812, 1813, 2320, 2299, 2321, 2300, 2322, 2959, 2960,
        2301, 2302, 2303, 2304, 2305, 2323, 2324, 2325, 2326, 2327,
        2328, 2715, 2961, 2962, 2963, 2964, 2965, 2966, 2967, 2968,
        2969, 2970, 2971, 3076, 414
    ];
    oldRole.forEach((id) => store.moveTask(OLD_QUEST, NEW_ROLE, id));
}
