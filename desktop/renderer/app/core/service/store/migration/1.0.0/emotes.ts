import type { ChangeStore } from '@service/store/migration/ChangeStore';

/** Categorized Emotes to match in-game
 * */
export function migrateEmotes(store: ChangeStore): void {
    const EMOTES = 'overall.social.emotes';

    const GENERAL = `${EMOTES}.general`;
    store.moveTasks(EMOTES, GENERAL, [
        154, 172, 59, 199, 113, 195, 121, 122, 127, 194,
        197, 224, 225, 226, 227, 171, 204, 230, 85, 178,
        148, 151, 231, 191, 208, 206, 220, 221, 232, 207,
        209, 213, 229, 211, 205, 202, 63, 182, 153, 142,
        128, 123, 146, 124, 125, 115, 110
    ]);

    const SPECIAL = `${EMOTES}.special`;
    store.moveTasks(EMOTES, SPECIAL, [
        101, 102, 103, 104, 114, 118, 119, 120, 145, 126,
        130, 134, 131, 135, 132, 136, 167, 64, 65, 66,
        67, 176, 187, 198, 212, 216, 217, 155, 156, 157,
        158, 164, 165, 166, 180, 181, 169, 170, 188, 189,
        203, 214, 215, 222, 223, 201, 200, 210, 193, 192,
        175, 196, 186, 185, 174, 173, 62, 144, 129, 143,
        149, 138, 109
    ]);

    const EXPRESSIONS = `${EMOTES}.expressions`;
    store.moveTasks(EMOTES, EXPRESSIONS, [
        81, 82, 183, 190
    ]);
}
