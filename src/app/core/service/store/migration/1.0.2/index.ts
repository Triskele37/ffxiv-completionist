import { SaveStoreService } from '../../save-store.service';
import { ChangeStore } from '../ChangeStore';

export function migrateTo_1_0_2(svcSaveStore: SaveStoreService): void {
    const store = new ChangeStore(svcSaveStore, '1.0.2');

    // Screwed up 6.15 title ids
    store.changeKey('overall.character.character.title', 645, 633);
    store.changeKey('overall.character.character.title', 646, 634);
    store.changeKey('overall.character.character.title', 647, 635);

    store.write();
}
