import { ChangeStore } from '@service/store/migration/ChangeStore';

const QUEST = 'overall.duty.quest';
const CAJ = `${QUEST}.class-and-job-quests`;
const SIDE_QUESTS = `${QUEST}.sidequests`;

// Add '-suffix' to the end of 'a'
const withSuffix = (suffix: string) => (base: string, a: string, b?: string): [string, string] => [
    `${base}.${a}`,
    `${base}.${b ?? a}-${suffix}`
];
const withQuests = withSuffix('quests');
const withSidequests = withSuffix('sidequests');
const withEvents = withSuffix('events');
const withMsq = withSuffix('main-scenario-quests')

/** Quest changes from Generated Resources
 * */
export function migrateQuests(store: ChangeStore): void {
    // Highest Level - remove the s
    store.moveGroup(QUEST + 's', QUEST);

    migrateCoane(store);
    migrateClassAndJobQuests(store);
    reorganizeRoleQuests(store);
    migrateDohlRoleQuests(store);
    migrateMsq(store);
    migrateSideStoryQuests(store);
    migrateSidequests(store);
    migrateTribalAGAIN(store);
    migrateOtherQuests(store);

    // Actually updated the quest reference for Steps of Faith
    store.changeKey(`${QUEST}.main-scenario.seventh-astral-era-main-scenario-quests`, 65955, 70127, true);

    store.moveTask(
        `${QUEST}.sidequests.weapon-enhancement-sidequests.resistance-weapons`,
        `${QUEST}.other-quests.quasi-quests`,
        69577,
        true
    );
}

function migrateCoane(store: ChangeStore): void {
    const coane = 'chronicles-of-a-new-era';
    const CoaNE = `${QUEST}.${coane}`;

    const foo = (a: string, b: string, c: string): [string, string] => [
        `${CoaNE}.${a}`,
        `${CoaNE}.${coane}---${b}.${c}`,
    ];

    store.moveGroup(...foo('alexander', 'alexander', 'alexander-quests'));
    store.moveGroup(...foo('bahamut', 'bahamut', 'bahamut-quests'));
    store.moveGroup(...foo('eden', 'eden', 'eden'));
    store.moveGroup(...foo('myths-of-the-realm', 'myths-of-the-realm', 'myths-of-the-realm'));
    store.moveGroup(...foo('pandaemonium', 'pandmonium', 'pandmonium'));
    store.moveGroup(...foo('primals', 'primals', 'primal-quests'));
    store.moveGroup(...foo('return-to-ivalice', 'return-to-ivalice', 'return-to-ivalice'));
    store.moveGroup(...foo('the-crystal-tower', 'the-crystal-tower', 'crystal-tower-quests'));
    store.moveGroup(...foo('the-four-lords', 'the-four-lords', 'the-four-lords'));
    store.moveGroup(...foo('the-shadow-of-mhach', 'the-shadow-of-mhach', 'shadow-of-mhach-quests'));
    store.moveGroup(...foo('the-sorrow-of-werlyt', 'the-sorrow-of-werlyt', 'garlemalds-machinations'));
    store.moveGroup(...foo('the-warring-triad', 'the-warring-triad', 'heavensward-primal-quests'));
    store.moveGroup(`${CoaNE}.yorha-dark-apocalypse`, `${CoaNE}.yorha-dark-apocalypse.yorha-dark-apocalypse`);

    // Omega already weirdly nested
    store.moveGroup(
        `${CoaNE}.omega.beyond-the-rift`,
        `${CoaNE}.${coane}---omega.omega-beyond-the-rift`
    );

    store.moveGroup(
        `${CoaNE}.omega`,
        `${CoaNE}.${coane}---omega.omega-quests`
    );
}

function migrateClassAndJobQuests(store: ChangeStore): void {
    store.moveGroup(`${QUEST}.class--job`, CAJ);

    const DOMJ = `${CAJ}.disciple-of-magic-job-quests`;
    store.moveGroup(...withQuests(CAJ, 'disciple-of-magic-job'));
    store.moveGroup(...withQuests(DOMJ, 'astrologian'));
    store.moveGroup(...withQuests(DOMJ, 'black-mage'));
    store.moveGroup(...withQuests(DOMJ, 'blue-mage'));
    store.moveGroup(...withQuests(DOMJ, 'red-mage'));
    store.moveGroup(...withQuests(DOMJ, 'sage'));
    store.moveGroup(...withQuests(DOMJ, 'scholar'));
    store.moveGroup(...withQuests(DOMJ, 'summoner'));
    store.moveGroup(...withQuests(DOMJ, 'white-mage'));

    const DOM = `${CAJ}.disciple-of-magic-quests`;
    store.moveGroup(...withQuests(CAJ, 'disciple-of-magic'));
    store.moveGroup(...withQuests(DOM, 'arcanist'));
    store.moveGroup(...withQuests(DOM, 'conjurer'));
    store.moveGroup(...withQuests(DOM, 'thaumaturge'));

    const DOH = `${CAJ}.disciple-of-the-hand-quests`;
    store.moveGroup(...withQuests(CAJ, 'disciple-of-the-hand'));
    store.moveGroup(...withQuests(DOH, 'alchemist'));
    store.moveGroup(...withQuests(DOH, 'armorer'));
    store.moveGroup(...withQuests(DOH, 'blacksmith'));
    store.moveGroup(...withQuests(DOH, 'carpenter'));
    store.moveGroup(...withQuests(DOH, 'culinarian'));
    store.moveGroup(...withQuests(DOH, 'goldsmith'));
    store.moveGroup(...withQuests(DOH, 'leatherworker'));
    store.moveGroup(...withQuests(DOH, 'weaver'));

    const DOL = `${CAJ}.disciple-of-the-land-quests`;
    store.moveGroup(...withQuests(CAJ, 'disciple-of-the-land'));
    store.moveGroup(...withQuests(DOL, 'botanist'));
    store.moveGroup(...withQuests(DOL, 'fisher'));
    store.moveGroup(...withQuests(DOL, 'miner'));

    const DOWJ = `${CAJ}.disciple-of-war-job-quests`;
    store.moveGroup(...withQuests(CAJ, 'disciple-of-war-job'));
    store.moveGroup(...withQuests(DOWJ, 'bard'));
    store.moveGroup(...withQuests(DOWJ, 'dancer'));
    store.moveGroup(...withQuests(DOWJ, 'dark-knight'));
    store.moveGroup(...withQuests(DOWJ, 'dragoon'));
    store.moveGroup(...withQuests(DOWJ, 'gunbreaker'));
    store.moveGroup(...withQuests(DOWJ, 'machinist'));
    store.moveGroup(...withQuests(DOWJ, 'monk'));
    store.moveGroup(...withQuests(DOWJ, 'ninja'));
    store.moveGroup(...withQuests(DOWJ, 'paladin'));
    store.moveGroup(...withQuests(DOWJ, 'reaper'));
    store.moveGroup(...withQuests(DOWJ, 'samurai'));
    store.moveGroup(...withQuests(DOWJ, 'warrior'));

    const DOW = `${CAJ}.disciple-of-war-quests`;
    store.moveGroup(...withQuests(CAJ, 'disciple-of-war'));
    store.moveGroup(...withQuests(DOW, 'archer'));
    store.moveGroup(...withQuests(DOW, 'gladiator'));
    store.moveGroup(...withQuests(DOW, 'lancer'));
    store.moveGroup(...withQuests(DOW, 'marauder'));
    store.moveGroup(...withQuests(DOW, 'pugilist'));
    store.moveGroup(...withQuests(DOW, 'rogue'));
}

function migrateDohlRoleQuests(store: ChangeStore): void {
    const OLD_CM = `${CAJ}.crystalline-mean`;
    const NEW_CM = `${OLD_CM}-quests`;
    store.moveTasks(OLD_CM, `${OLD_CM}.crystalline-mean-quests`, [68778, 69191]);
    store.moveGroup(OLD_CM, NEW_CM, true);
    store.moveGroup(...withQuests(NEW_CM, 'facet-of-forging'));
    store.moveGroup(...withQuests(NEW_CM, 'facet-of-crafting'));
    store.moveGroup(...withQuests(NEW_CM, 'facet-of-nourishing'));
    store.moveGroup(...withQuests(NEW_CM, 'facet-of-gathering'));
    store.moveGroup(...withQuests(NEW_CM, 'facet-of-fishing'));

    const OLD_S = `${CAJ}.studium`;
    const NEW_S = `${OLD_S}-quests`;
    store.moveTasks(OLD_S, `${OLD_S}.studium-quests`, [70009, 70010]);
    store.moveGroup(OLD_S, NEW_S, true);
    store.moveGroup(...withQuests(NEW_S, 'faculty-of-aetherology'));
    store.moveGroup(...withQuests(NEW_S, 'faculty-of-anthropology'));
    store.moveGroup(...withQuests(NEW_S, 'faculty-of-archaeology'));
    store.moveGroup(...withQuests(NEW_S, 'faculty-of-astronomy'));
    store.moveGroup(...withQuests(NEW_S, 'faculty-of-medicine'));
}

function reorganizeRoleQuests(store: ChangeStore): void {
    const ROLE = `${QUEST}.class-and-job-quests.role-quests`;
    const ROLE_SHB = `${ROLE}.shb`;
    const ROLE_EW = `${ROLE}.ew`;

    store.moveGroup(...withQuests(CAJ, 'role'));

    store.moveTasks(ROLE_SHB, `${ROLE}.healer-role-quests-shadowbringers`, [
        68803, 68804, 68805, 68806, 68807, 68808
    ]);
    store.moveTasks(ROLE_EW, `${ROLE}.healer-role-quests-endwalker`, [
        69644, 69645, 69646, 69647, 69648, 69649
    ]);
    store.moveTasks(ROLE_EW, `${ROLE}.magical-ranged-dps-role-quests-endwalker`, [
        69662, 69663, 69664, 69665, 69666, 69667
    ]);
    store.moveTasks(ROLE_SHB, `${ROLE}.magical-ranged-dps-role-quests-shadowbringers`, [
        69159, 69160, 69161, 69162, 69163, 69164
    ]);
    store.moveTasks(ROLE_EW, `${ROLE}.melee-dps-role-quests-endwalker`, [
        69650, 69651, 69652, 69653, 69654, 69655
    ]);
    store.moveTasks(ROLE_SHB, `${ROLE}.physical-dps-role-quests-shadowbringers`, [
        68809, 68810, 68811, 68812, 68813, 68814
    ]);
    store.moveTasks(ROLE_EW, `${ROLE}.physical-ranged-dps-role-quests-endwalker`, [
        69656, 69657, 69658, 69659, 69660, 69661
    ]);
    store.moveTasks(ROLE_EW, `${ROLE}.role-quests-endwalker`, [
        70115, 70116, 70117, 70118
    ]);
    store.moveTasks(ROLE_SHB, `${ROLE}.role-quests-shadowbringers`, [
        69165, 69521
    ]);
    store.moveTasks(ROLE_EW, `${ROLE}.tank-role-quests-endwalker`, [
        69638, 69639, 69640, 69641, 69642, 69643
    ]);
    store.moveTasks(ROLE_SHB, `${ROLE}.tank-role-quests-shadowbringers`, [
        68779, 68780, 68781, 68782, 68783, 68784
    ]);
}

function migrateMsq(store: ChangeStore): void {
    const MSQ = `${QUEST}.main-scenario`;

    store.moveGroup(...withMsq(MSQ, 'seventh-astral-era'));

    store.moveGroup(...withMsq(MSQ, 'heavensward'));
    store.moveGroup(...withMsq(MSQ, 'dragonsong'));
    store.moveGroup(...withMsq(MSQ, 'post-dragonsong'));

    store.moveGroup(...withMsq(MSQ, 'stormblood'));
    store.moveGroup(...withMsq(MSQ, 'post-stormblood'));

    store.moveGroup(...withMsq(MSQ, 'shadowbringers'));
    store.moveGroup(...withMsq(MSQ, 'post-shadowbringers'));
    store.moveGroup(
        `${MSQ}.post-shadowbringers-ii`,
        `${MSQ}.post-shadowbringers-main-scenario-quests-ii`,
    );

    store.moveGroup(...withMsq(MSQ, 'endwalker'));
    store.moveGroup(...withMsq(MSQ, 'post-endwalker'));

    store.moveGroup(
        `${MSQ}.`,
        `${MSQ}.`
    );
}

function migrateSideStoryQuests(store: ChangeStore): void {
    const SSQ = `${SIDE_QUESTS}.side-story-quests`
    store.moveGroup(`${SIDE_QUESTS}.side-story`, SSQ);
    store.moveGroup(...withQuests(SSQ, 'delivery-moogle'));
    store.moveGroup(...withQuests(SSQ, 'scholasticate'));

    const RoUE = `${SIDE_QUESTS}.records-of-unusual-endeavors`;
    store.moveGroup(...withQuests(RoUE, 'doman-adventurers-guild'));
    store.moveGroup(...withQuests(RoUE, 'doman-reconstruction'));
    store.moveGroup(...withQuests(RoUE, 'ishgardian-restoration-main'));
    store.moveGroup(...withQuests(RoUE, 'island-sanctuary'));

    store.moveGroup(
        `${SIDE_QUESTS}.hildibrand-sidequests.hildibrand`,
        `${SIDE_QUESTS}.hildibrand-sidequests.hildibrand-adventures`
    );
}

function migrateSidequests(store: ChangeStore): void {
    store.moveGroup(...withSidequests(SIDE_QUESTS, 'lominsan'));
    store.moveGroup(...withSidequests(SIDE_QUESTS, 'gridanian'));
    store.moveGroup(...withSidequests(SIDE_QUESTS, 'uldahn'));
    store.moveGroup(...withSidequests(SIDE_QUESTS, 'coerthan'));
    store.moveGroup(...withSidequests(SIDE_QUESTS, 'mor-dhonan'));
    store.moveGroup(...withSidequests(SIDE_QUESTS, 'ishgardian'));
    store.moveGroup(...withSidequests(SIDE_QUESTS, 'abalathian'));
    store.moveGroup(...withSidequests(SIDE_QUESTS, 'dravanian'));
    store.moveGroup(...withSidequests(SIDE_QUESTS, 'azys-lla'));
    store.moveGroup(...withSidequests(SIDE_QUESTS, 'gyr-abanian'));
    store.moveGroup(...withSidequests(SIDE_QUESTS, 'othardian'));
    store.moveGroup(...withSidequests(SIDE_QUESTS, 'hingan'));
    store.moveGroup(...withSidequests(SIDE_QUESTS, 'lakeland'));
    store.moveGroup(`${SIDE_QUESTS}.kholusia`, `${SIDE_QUESTS}.kholusian-sidequests`);
    store.moveGroup(...withSidequests(SIDE_QUESTS, 'amh-araeng'));
    store.moveGroup(...withSidequests(SIDE_QUESTS, 'il-mheg'));
    store.moveGroup(...withSidequests(SIDE_QUESTS, 'raktika'));
    store.moveGroup(...withSidequests(SIDE_QUESTS, 'tempest'));
    store.moveGroup(...withSidequests(SIDE_QUESTS, 'sharlayan'));
    store.moveGroup(...withSidequests(SIDE_QUESTS, 'thavnairian'));
    store.moveGroup(...withSidequests(SIDE_QUESTS, 'garlean'));
    store.moveGroup(...withSidequests(SIDE_QUESTS, 'mare-lamentorum'));
    store.moveGroup(...withSidequests(SIDE_QUESTS, 'elpis'));
    store.moveGroup(...withSidequests(SIDE_QUESTS, 'ultima-thule'));
}

function migrateOtherQuests(store: ChangeStore): void {
    const OTHER = `${QUEST}.other-quests`;
    store.moveGroup(...withQuests(QUEST, 'other'));

    const GC = `${OTHER}.grand-company-quests`;
    store.moveGroup(...withQuests(OTHER, 'grand-company'));
    store.moveGroup(...withQuests(GC, 'immortal-flames'));
    store.moveGroup(...withQuests(GC, 'maelstrom'));
    store.moveGroup(...withQuests(GC, 'order-of-the-twin-adder'));

    const SEASONAL = `${OTHER}.seasonal-events`;
    store.moveGroup(...withEvents(SEASONAL, 'all-saints-wake'));
    store.moveGroup(`${SEASONAL}.egg-hunts`, `${SEASONAL}.hatching-tide-events`);
    store.moveGroup(...withEvents(SEASONAL, 'heavensturn'));
    store.moveGroup(...withEvents(SEASONAL, 'little-ladies-and-hatching-tide'));
    store.moveGroup(...withEvents(SEASONAL, 'little-ladies-day'));
    store.moveGroup(...withEvents(SEASONAL, 'moonfire-faire'));
    store.moveGroup(...withEvents(SEASONAL, 'rising'));
    store.moveGroup(...withEvents(SEASONAL, 'starlight-celebration'));
    store.moveGroup(`${SEASONAL}.valentiones-little-ladies-day`, `${SEASONAL}.valentiones-and-little-ladies-day-events`);
    store.moveGroup(...withEvents(SEASONAL, 'valentiones-day'));

    const SPECIAL = `${OTHER}.special-quests`;
    store.moveGroup(...withQuests(OTHER, 'special'));
    store.moveGroup(SPECIAL, `${SPECIAL}.special-quests`);
    store.moveGroup(...withQuests(SPECIAL, 'collaboration'));
}

function migrateTribalAGAIN(store: ChangeStore): void {
    const ASQ = `${QUEST}.allied-society-quests`;
    store.moveGroup(`${QUEST}.tribal-quests`, ASQ);

    const moveSociety = (name: string, ids: number[]) => {
        const dailyQuests = `${ASQ}.${name}-quests.daily-quests`;
        store.moveGroup(`${ASQ}.${name}`, dailyQuests);
        const mainQuests = `${ASQ}.${name}-quests.main-quests`;
        store.moveTasks(dailyQuests, mainQuests, ids);
    };

    moveSociety('amaljaa', [66753, 66754, 66755, 66756, 66757]);
    moveSociety('ananta', [68572, 68573, 68574, 68575, 68576, 68577]);
    moveSociety('arkasodara', [70081, 70082, 70083, 70084, 70085, 70086]);
    moveSociety('dwarf', [69432, 69433, 69434, 69435, 69436, 69437]);
    moveSociety('ixal', [67022, 67023, 67024, 67025, 67026, 67027, 67028, 67029]);
    moveSociety('kobold', [66856, 66857, 66858, 66859, 66860]);
    moveSociety('kojin', [68509, 68510, 68511, 68512, 68513, 68514]);
    moveSociety('loporrit', [70217, 70218, 70219, 70220, 70221, 70222]);
    moveSociety('moogle', [67856, 67857, 67858, 67859, 67860, 67861, 67862, 67863]);
    moveSociety('namazu', [68632, 68633, 68634, 68635, 68636, 68637, 68638]);
    moveSociety('omicron', [70137, 70138, 70139, 70140, 70141, 70142]);
    moveSociety('pixie', [69219, 69220, 69221, 69222, 69223, 69224]);
    moveSociety('qitari', [69330, 69331, 69332, 69333, 69334, 69335, 69336, 69337, 69338, 69339, 69340, 69341]);
    moveSociety('sahagin', [66910, 66911, 66912, 66913, 66914]);
    moveSociety('sylph', [66788, 66789, 66790, 66791, 66792]);
    store.moveGroup(`${ASQ}.vanu`, `${ASQ}.vanu-vanu`); // fix first
    moveSociety('vanu-vanu', [67700, 67701, 67702, 67703, 67704, 67705, 67706, 67761]);
    moveSociety('vath', [67791, 67792, 67793, 67794, 67795, 67796]);

    const IQ = `${ASQ}.intersocietal-quests`;
    store.moveGroup(`${ASQ}.tribal-alliance-quests`, IQ);

    const rename = (n: string): [string, string] => [
        `${IQ}.${n}-tribal-quests`,
        `${IQ}.${n}-allied-society-quests`
    ];
    store.moveGroup(...rename('a-realm-reborn'));
    store.moveGroup(...rename('heavensward'));
    store.moveGroup(...rename('stormblood'));
    store.moveGroup(...rename('endwalker'));
}
