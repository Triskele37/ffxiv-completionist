import { ChangeStore } from '@service/store/migration/ChangeStore';

const CLOG = 'overall.logs.crafting';

/** Crafting log changes from Generated Resources
 * */
export function migrateCrafting(store: ChangeStore): void {
    migrateCrafterHousing(store, 'carpenter');
    migrateCrafterHousing(store, 'blacksmith');
    migrateCrafterHousing(store, 'armorer');
    migrateCrafterHousing(store, 'goldsmith');
    migrateCrafterHousing(store, 'leatherworker');
    migrateCrafterHousing(store, 'weaver');
    migrateCrafterHousing(store, 'alchemist');
    migrateCrafterHousing(store, 'culinarian');
}

function migrateCrafterHousing(store: ChangeStore, crafter: string): void {
    // Renames
    const HOUSING = `${CLOG}.${crafter}.special-recipes.housing`;
    store.moveGroup(`${HOUSING}.indoor`, `${HOUSING}.indoor-furnishings`);
    store.moveGroup(`${HOUSING}.outdoor`, `${HOUSING}.outdoor-furnishings`);
    store.moveGroup(`${HOUSING}.table-rugs`, `${HOUSING}.tables-and-rugs`);

    const SHARED = `${CLOG}.shared`;
    store.moveGroup(`${SHARED}.class.studium`, `${SHARED}.class.studium-deliveries`);
    store.moveGroup(`${SHARED}.tribal-quests`, `${SHARED}.society-quests`);

    // Restoration merge
    const RESTO = `${CLOG}.${crafter}.special-recipes.sidequests.restoration`;
    store.moveGroup(`${RESTO}-1`, RESTO);
    store.moveGroup(`${RESTO}-2`, RESTO);
    store.moveGroup(`${RESTO}-3`, RESTO);
    store.moveGroup(`${RESTO}-4`, RESTO);
}
