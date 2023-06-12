import { ChangeStore } from '@service/store/migration/ChangeStore';

/** Ishgard Restoration converted to Sidequests
 * Mimicking 3 menu setup
 * */
export function migrateCraftingLog(store: ChangeStore): void {
    migrateCrafter(store, 'overall.logs.crafting.carpenter');
    migrateCrafter(store, 'overall.logs.crafting.blacksmith');
    migrateCrafter(store, 'overall.logs.crafting.armorer');
    migrateCrafter(store, 'overall.logs.crafting.goldsmith');
    migrateCrafter(store, 'overall.logs.crafting.leatherworker');
    migrateCrafter(store, 'overall.logs.crafting.weaver');
    migrateCrafter(store, 'overall.logs.crafting.alchemist');
    migrateCrafter(store, 'overall.logs.crafting.culinarian');

    store.moveGroup(
        'overall.logs.crafting.shared.story',
        'overall.logs.crafting.shared.class',
    );
}

function migrateCrafter(store: ChangeStore, crafter: string) {
    store.moveGroup(
        `${crafter}.housing`,
        `${crafter}.special-recipes.housing`
    );

    store.moveGroup(
        `${crafter}.collectables`,
        `${crafter}.special-recipes.collectables`
    );

    store.moveGroup(
        `${crafter}.story`,
        `${crafter}.special-recipes.class`
    );

    store.moveGroup(
        `${crafter}.ishgard-restoration.skysteel-tools`,
        `${crafter}.special-recipes.sidequests.skysteel-tools`
    );
    store.moveGroup(
        `${crafter}.ishgard-restoration.restoration-1`,
        `${crafter}.special-recipes.sidequests.restoration-1`
    );
    store.moveGroup(
        `${crafter}.ishgard-restoration.restoration-2`,
        `${crafter}.special-recipes.sidequests.restoration-2`
    );
    store.moveGroup(
        `${crafter}.ishgard-restoration.restoration-3`,
        `${crafter}.special-recipes.sidequests.restoration-3`
    );
    store.moveGroup(
        `${crafter}.ishgard-restoration.restoration-4`,
        `${crafter}.special-recipes.sidequests.restoration-4`
    );
    store.moveGroup(
        `${crafter}.ishgard-restoration.other`,
        `${crafter}.special-recipes.sidequests.other`
    );

    if(crafter.endsWith('alchemist')) {
        store.moveGroup(
            `${crafter}.ornaments`,
            `${crafter}.special-recipes.others`
        );
    }
}
