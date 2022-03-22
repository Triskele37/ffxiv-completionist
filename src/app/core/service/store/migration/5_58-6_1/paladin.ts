import { Completion } from '@constant';
import { ChangeStore } from '@service/store/migration/ChangeStore';

/** Paladin trial weapon recipes were combined in 6.0
 * */
export function migrate_6_1_paladin(store: ChangeStore): void {
    const setNewRecipeCompletion = (
        mr: number,
        swordId: number,
        shieldId: number,
        armsId: number // new recipe shares the same ID between BSM/ARM
    ): void => {
        const path = 'logs.crafting-log.{{crafter}}.master-recipes.master-recipes-' + mr;

        const BSM = path.replace('{{crafter}}', 'blacksmith');
        const swordCompleted = store.getTask(BSM, swordId) === Completion.Y;
        if(swordCompleted) store.setTask(BSM, armsId, Completion.Y);
        store.deleteTask(BSM, swordId);

        const ARM = path.replace('{{crafter}}', 'armorer');
        const shieldCompleted = store.getTask(ARM, shieldId) === Completion.Y;
        if(shieldCompleted) store.setTask(ARM, armsId, Completion.Y);
        store.deleteTask(ARM, shieldId);
    };

    setNewRecipeCompletion(2, 15556, 15569, 36122); // Ramuh
    setNewRecipeCompletion(4, 15570, 15583, 36123); // Endless Expanse
    setNewRecipeCompletion(4, 15584, 15597, 36124); // Dead Hive
    setNewRecipeCompletion(4, 15598, 15611, 36615); // Round
    setNewRecipeCompletion(4, 17604, 17617, 36125); // Fiend
    setNewRecipeCompletion(4, 24320, 24335, 36126); // Horde
    setNewRecipeCompletion(4, 25022, 25037, 36127); // Goddess
    setNewRecipeCompletion(4, 25038, 25053, 36128); // Demon
    setNewRecipeCompletion(6, 30068, 30085, 36129); // Shinryu
    setNewRecipeCompletion(6, 30811, 30826, 36131); // Tsukuyomi
    setNewRecipeCompletion(6, 30827, 30842, 36132); // Suzaku
    setNewRecipeCompletion(6, 30843, 30858, 36133); // Seiryu
    setNewRecipeCompletion(6, 33597, 33612, 36130); // Byakko
    setNewRecipeCompletion(7, 33887, 33904, 36134); // Hades
}
