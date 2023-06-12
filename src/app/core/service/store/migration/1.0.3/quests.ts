import { ChangeStore } from '@service/store/migration/ChangeStore';

/** Quest group restructure
 * */
export function migrateQuests(store: ChangeStore): void {
    const SIDE_STORY = 'overall.duty.quests.sidequests.side-story';

    //#region --------------------------------- Chronciles of Light
    const COL = 'overall.duty.quests.sidequests.chronicles-of-light';

    store.moveGroup(
        `${SIDE_STORY}.tales-of-the-dragonsong-war`,
        `${COL}.tales-of-the-dragonsong-war`
    );

    store.moveGroup(
        `${SIDE_STORY}.tales-from-the-shadows`,
        `${COL}.tales-from-the-shadows`
    );

    store.moveGroup(
        `${SIDE_STORY}.tales-of-newfound-adventure`,
        `${COL}.tales-of-newfound-adventure`
    );

    //#endregion

    //#region --------------------------------- Hildibrand Sidequests
    const HILDIBRAND = 'overall.duty.quests.sidequests.hildibrand-sidequests';

    store.moveGroup(
        `${SIDE_STORY}.hildibrand`,
        `${HILDIBRAND}.hildibrand`
    );

    store.moveGroup(
        `${SIDE_STORY}.further-hildibrand-adventures`,
        `${HILDIBRAND}.further-hildibrand-adventures`
    );

    store.moveGroup(
        `${SIDE_STORY}.even-further-hildibrand-adventures`,
        `${HILDIBRAND}.even-further-hildibrand-adventures`
    );

    store.moveGroup(
        `${SIDE_STORY}.somehow-further-hildibrand-adventures`,
        `${HILDIBRAND}.somehow-further-hildibrand-adventures`
    );

    store.moveGroup(
        `${SIDE_STORY}.manderville-weapons`,
        `${HILDIBRAND}.manderville-weapons`
    );

    //#endregion

    //#region --------------------------------- Weapon Enhancement Sidequests
    const WEAPON = 'overall.duty.quests.sidequests.weapon-enhancement-sidequests';

    store.moveGroup(
        `${SIDE_STORY}.zodiac-weapons`,
        `${WEAPON}.zodiac-weapons`
    );

    store.moveGroup(
        `${SIDE_STORY}.anima-weapons`,
        `${WEAPON}.anima-weapons`
    );

    store.moveGroup(
        `${SIDE_STORY}.the-forbidden-land-eureka`,
        `${WEAPON}.the-forbidden-land-eureka`
    );

    store.moveGroup(
        `${SIDE_STORY}.resistance-weapons`,
        `${WEAPON}.resistance-weapons`
    );

    //#endregion

    //#region --------------------------------- Records of Unusual Endeavors
    const RoUE = 'overall.duty.quests.sidequests.records-of-unusual-endeavors';

    store.moveGroup(
        `${SIDE_STORY}.doman-adventurers-guild`,
        `${RoUE}.doman-adventurers-guild`
    );

    store.moveGroup(
        `${SIDE_STORY}.doman-reconstruction`,
        `${RoUE}.doman-reconstruction`
    );

    store.moveGroup(
        `${SIDE_STORY}.ishgardian-restoration-main`,
        `${RoUE}.ishgardian-restoration-main`
    );

    store.moveGroup(
        `${SIDE_STORY}.ishgardian-restoration-sidequests`,
        `${RoUE}.ishgardian-restoration-sidequests`
    );

    // Splendorous Tools

    //#region PotD
    store.moveTask(
        'overall.duty.quests.sidequests.gridanian.gridania',
        `${RoUE}.palace-of-the-dead`,
        67092
    );
    store.moveTask(
        'overall.duty.quests.sidequests.gridanian.south-shroud',
        `${RoUE}.palace-of-the-dead`,
        67093
    );
    store.moveTask(
        'overall.duty.quests.sidequests.gridanian.south-shroud',
        `${RoUE}.palace-of-the-dead`,
        67924
    );
    //#endregion

    //#region HoH
    store.moveTask(
        'overall.duty.quests.sidequests.othardian.the-ruby-sea',
        `${RoUE}.heaven-on-high`,
        68667
    );
    store.moveTask(
        'overall.duty.quests.sidequests.othardian.the-ruby-sea',
        `${RoUE}.heaven-on-high`,
        68668
    );
    //#endregion

    // Eureka Orthos

    store.moveGroup(
        `${SIDE_STORY}.island-sanctuary`,
        `${RoUE}.island-sanctuary`
    );

    store.moveGroup(
        `${SIDE_STORY}.variant-dungeons`,
        `${RoUE}.variant-dungeons`
    );

    //#endregion

    //#region --------------------------------- Tribal Alliance Quests
    const TRIBAL = 'overall.duty.quests.tribal-quests.tribal-alliance-quests';

    store.moveGroup(
        `${SIDE_STORY}.allied-tribal-quests`,
        `${TRIBAL}.a-realm-reborn-tribal-quests`
    );

    store.moveGroup(
        `${SIDE_STORY}.heavensward-tribal-quests`,
        `${TRIBAL}.heavensward-tribal-quests`
    );

    store.moveGroup(
        `${SIDE_STORY}.stormblood-tribal-quests`,
        `${TRIBAL}.stormblood-tribal-quests`
    );

    //#endregion

    //#region --------------------------------- Wandering Minstrel
    const MINSTREL = 'overall.duty.quests.sidequests.side-story-quests.wandering-minstrel';
    const MOR_DHONA = 'overall.duty.quests.sidequests.mor-dhonan.mor-dhona';

    store.moveTask(MINSTREL, MOR_DHONA, 66844);
    store.moveTask(MINSTREL, MOR_DHONA, 67095);

    store.moveTask(MINSTREL, MOR_DHONA, 67739);
    store.moveTask(MINSTREL, MOR_DHONA, 67825);
    store.moveTask(MINSTREL, MOR_DHONA, 67644);
    store.moveTask(MINSTREL, MOR_DHONA, 67790);
    store.moveTask(MINSTREL, MOR_DHONA, 67876);

    store.deleteGroup(MINSTREL);

    //#enregion

}
