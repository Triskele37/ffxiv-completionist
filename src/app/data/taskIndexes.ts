import { Task } from '@model/Task';

/**
 * Quick lookup indexes for groups with purely unique ids for their tasks
 * - Uses Task id for the Map key
 * - Map is used to ensure uniqueness and additional perf/size gains over a raw object
 */
type TaskIndex = Map<number, Task>;
type IndexContainer = Map<string, TaskIndex>;

// Quick lookup of shorthand from storage key
const LOOKUP: Map<string, string> = new Map([
    ['overall.character.achievement', 'a'],
    ['overall.character.companion.barding', 'b'],
    ['overall.character.character.classes--jobs', 'cj'],
    ['overall.character.fashion-accessories', 'fa'],
    ['overall.character.minion-guide', 'mi'],
    ['overall.character.mount-guide', 'mo'],
    ['overall.duty.duty-raid-finder', 'd'],
    ['overall.duty.the-hunt', 'h'],
    ['overall.duty.fate', 'f'],
    ['overall.logs.orchestrion-list', 'o'],
    ['overall.duty.quest', 'q'],
    ['overall.character.character.title', 't'],
    ['overall.character.gold-saucer.triple-triad-card-list', 'tt'],
]);

// This is the actual entity storing indexed tasks via [shorthand][id]
const INDEX: IndexContainer = new Map<string, TaskIndex>();

// Prepopulate INDEX with all shorthands from LOOKUP
for(const shorthand of LOOKUP.values()) {
    INDEX.set(shorthand, new Map<number, Task>);
}

/**
 * Attempt to add a task INDEX
 */
export function addTaskToIndex(task: Task) {
    const shorthand = LOOKUP.get(task.fullStorageKey);
    if(shorthand) INDEX.get(shorthand).set(task.id, task);
}

/**
 * Attempt to retrieve a task from INDEX
 */
export function getIndexedTask(indexKey: string, taskId: number | string) {
    const id = typeof taskId === 'number' ? taskId : parseInt(taskId);
    return isNaN(id) ? undefined : INDEX.get(indexKey)?.get(id);
}
