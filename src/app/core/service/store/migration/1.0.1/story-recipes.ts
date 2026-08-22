import { Completion } from '@constant';
import { ChangeStore } from '@service/store/migration/ChangeStore';

/** Merged Crystarium & Studium story recipes
 * */
export function migrateStoryRecipes(store: ChangeStore): void {
    const crystarium = (crafter: string) => `overall.logs.crafting-log.${crafter}.story.crystarium-deliveries`;
    const studium = (crafter: string) => `overall.logs.crafting-log.${crafter}.story.studium`;

    const mergeCrafters = ([crafters, crystariumIds, studiumIds]: [string[], number[], number[]]) => {
        // Complete Crystarium recipes that are completed by any one of crafters
        crystariumIds.forEach((id) => {
            const completed = crafters.some(
                (crafter) => store.getTask(crystarium(crafter), id) === Completion.Y
            );

            if(completed) store.setTask(crystarium('shared'), id, Completion.Y);
        });

        // Complete Studiium recipes that are completed by any one of crafters
        studiumIds.forEach((id) => {
            const completed = crafters.some(
                (crafter) => store.getTask(studium(crafter), id) === Completion.Y
            );

            if(completed) store.setTask(studium('shared'), id, Completion.Y);
        });

        // Clean up old groups
        crafters.forEach((crafter) => {
            store.deleteGroup(crystarium(crafter));
            store.deleteGroup(studium(crafter));
        });
    };

    mergeCrafters([
        ['carpenter', 'leatherworker', 'weaver'],
        [27240, 27241, 27242, 27245, 27243, 27247], // Crystarium
        [35592, 35593, 35594, 35840, 35595, 35842], // Studium
    ]);

    mergeCrafters([
        ['blacksmith', 'armorer', 'goldsmith'],
        [27232, 27233, 27234, 27237, 27235, 27239], // Crystarium
        [35588, 35589, 35590, 35836, 35591, 35838], // Studium
    ]);

    mergeCrafters([
        ['alchemist', 'culinarian'],
        [27248, 27249, 27250, 27253, 27251, 27255], // Crystarium
        [35596, 35597, 35598, 35844, 35599, 35846], // Studium
    ]);
}
