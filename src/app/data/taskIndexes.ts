import { Task } from '@model/Task';

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
const INDEX: IndexContainer = new Map([
    ['a', createIndex('character.achievement')],
    ['b', createIndex('character.companion.barding')],
    ['cj', createIndex('character.character.classes--jobs')],
    ['fa', createIndex('character.fashion-accessories')],
    ['mi', createIndex('character.minion-guide')],
    ['mo', createIndex('character.mount-guide')],
    ['d', createIndex('duty.duty-raid-finder', ['record'])],
    ['h', createIndex('duty.the-hunt')],
    ['f', createIndex('duty.fate')],
    ['o', createIndex('logs.orchestrion-list')],
    ['q', createIndex('duty.quest')],
    ['t', createIndex('character.character.title')],
    ['tt', createIndex('character.gold-saucer.triple-triad-card-list')],
]);

// Reverse lookup of storage key to shorthand
const LOOKUP: Record<string, string> = {};
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

/**
 * Attempt to add a task INDEX
 */
export function addTaskToIndex(task: Task) {
    const baseKey = Object.keys(LOOKUP).find((base) => task.fullStorageKey.startsWith(base));
    const shorthand = LOOKUP[baseKey];
    if(shorthand) {
        const { exclude, map } = INDEX.get(shorthand);
        if(exclude && exclude.some((e) => task.fullStorageKey.includes(e))) return;
        map.set(task.id, task);
    }
}

/**
 * Attempt to retrieve a task from INDEX
 */
export function getIndexedTask(indexKey: string, taskId: number | string) {
    const id = typeof taskId === 'number' ? taskId : parseInt(taskId);
    return isNaN(id) ? undefined : INDEX.get(indexKey)?.map.get(id);
}
