import type { Task } from '@model/Task';

/**
 * Quick lookup indexes for groups with purely unique ids for their tasks
 * - Uses Task id for the Map key
 * - Map is used to ensure uniqueness and additional perf/size gains over a raw object
 */
type IndexContainer = Map<string, IndexMeta>;
type IndexMeta = {
    base: string;
    exclude?: string[];
    map: TaskIndex;
};
type TaskIndex = Map<number, Task>;

// This is the actual entity storing indexed tasks via [shorthand][id]
export const INDEX: IndexContainer = new Map([
    ['a', createIndex('character.achievement')],
    ['aes', createIndex('character.character.aesthetician')],
    ['ap', createIndex('character.adventure-plate')],
    ['b', createIndex('character.companion.barding')],
    ['chest', createIndex('reference.chest')],
    ['cj', createIndex('character.character.classes--jobs')],
    ['cl', createIndex('logs.crafting-log', ['master-crafting-books'])],
    ['cm', createIndex('duty.field-operations.cosmic-exploration.mission-log')],
    ['d', createIndex('duty.duty-raid-finder', ['record'])],
    ['e', createIndex('social.emotes')],
    ['f', createIndex('logs.gathering.fishing-guide.fishing')],
    ['fa', createIndex('character.fashion-accessories')],
    ['fw', createIndex('character.facewear')],
    ['fh', createIndex('logs.gathering.fishing-log.fishing')],
    ['fate', createIndex('duty.fate')],
    ['h', createIndex('duty.the-hunt')],
    ['mi', createIndex('character.minion-guide')],
    ['mo', createIndex('character.mount-guide')],
    ['o', createIndex('logs.orchestrion-list')],
    ['q', createIndex('duty.quest')],
    ['sf', createIndex('logs.gathering.fishing-guide.spearfishing')],
    ['sfh', createIndex('logs.gathering.fishing-log.spearfishing')],
    ['t', createIndex('character.character.title')],
    ['tt', createIndex('character.gold-saucer.triple-triad-card-list')],
    ['tto', createIndex('character.gold-saucer.triple-triad-opponents')],
]);

// Reverse lookup of storage key to shorthand
export const LOOKUP: Record<string, string> = {};
for(const [shorthand, meta] of INDEX.entries()) {
    LOOKUP[meta.base] = shorthand;
}

/**
 * Creator helper for initial index structure
 */
function createIndex(base: string, exclude?: string[]): IndexMeta {
    return {
        base: 'overall.' + base,
        exclude,
        map: new Map<number, Task>
    };
}
