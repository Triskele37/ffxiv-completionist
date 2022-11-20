import { SaveStoreService } from '../../save-store.service';
import { ChangeStore } from '../ChangeStore';

export function migrateTo_1_0_2(svcSaveStore: SaveStoreService): void {
    const store = new ChangeStore(svcSaveStore, '1.0.2');

    // Screwed up 6.15 title ids
    store.changeKey('overall.character.character.title', 645, 633);
    store.changeKey('overall.character.character.title', 646, 634);
    store.changeKey('overall.character.character.title', 647, 635);

    // Ornament split
    store.moveGroup(
        'overall.logs.crafting-log.alchemist.ornaments',
        'overall.logs.crafting-log.alchemist.ornaments.ornaments-1'
    );

    // Tribal rename
    store.moveGroup(
        'overall.character.character.beast-tribe-reputation',
        'overall.character.character.tribal-relations',
    );

    store.moveGroup(
        'overall.character.achievement.quests.beast-tribe-quests',
        'overall.character.achievement.quests.tribal-quests',
    );

    store.moveGroup(
        'overall.duty.quests.beast-tribe',
        'overall.duty.quests.tribal-quests',
    );

    store.moveGroup(
        'overall.duty.quests.sidequests.side-story.allied-beast-tribe',
        'overall.duty.quests.sidequests.side-story.allied-tribal-quests',
    );

    store.moveGroup(
        'overall.duty.quests.sidequests.side-story.heavensward-beast-tribe',
        'overall.duty.quests.sidequests.side-story.heavensward-tribal-quests',
    );

    store.moveGroup(
        'overall.duty.quests.sidequests.side-story.stormblood-beast-tribe',
        'overall.duty.quests.sidequests.side-story.stormblood-tribal-quests',
    );

    store.moveGroup(
        'overall.logs.crafting-log.shared.beast-tribe-quests',
        'overall.logs.crafting-log.shared.tribal-quests',
    );

    store.write();
}
