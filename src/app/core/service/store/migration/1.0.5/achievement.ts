import { ChangeStore } from '@service/store/migration/ChangeStore';

const ACH = 'overall.character.achievement';

/** Achievement changes from Generated Resources
 * */
export function migrateAchievements(store: ChangeStore): void {
    const asGeneral = (base: string): [string, string] => [
        `${ACH}.${base}.${base}`,
        `${ACH}.${base}.general`,
    ];

    store.moveGroup(...asGeneral('battle'));
    store.moveGroup(...asGeneral('grand-company'));
    store.moveGroup(...asGeneral('items'));
    store.moveGroup(...asGeneral('quests'));

    store.moveGroup(`${ACH}.character.disciple-of-magic`, `${ACH}.character.disciples-of-magic`);
    store.moveGroup(`${ACH}.character.disciple-of-the-hand`, `${ACH}.character.disciples-of-the-hand`);
    store.moveGroup(`${ACH}.character.disciple-of-the-land`, `${ACH}.character.disciples-of-the-land`);
    store.moveGroup(`${ACH}.character.disciple-of-war`, `${ACH}.character.disciples-of-war`);
    store.moveGroup(`${ACH}.crafting--gathering`, `${ACH}.crafting-and-gathering`);
    store.moveGroup(`${ACH}.quests.job-role-quests`, `${ACH}.quests.job-and-role-quests`);
    store.moveGroup(`${ACH}.quests.tribal-quests`, `${ACH}.quests.allied-society-quests`);
}
