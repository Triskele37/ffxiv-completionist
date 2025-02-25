import { Task } from '@model/Task';

/**
 * Quick lookup indexes for groups with purely unique ids for their tasks
 * - Uses Task id for the Map key
 * - Map is used to ensure uniqueness and additional perf/size gains over a raw object
 */
type IndexContainer = {
    baseKey: string;
    shorthand: string;
    map: Map<number, Task>;
};

const createIndex = (baseKey: string, shorthand: string): IndexContainer =>
    ({ baseKey, shorthand, map: new Map<number, Task>() });

const INDEX: Record<string, IndexContainer> = {
    Achievement: createIndex('character.achievement', 'a'),
    ClassAndJob: createIndex('character.character.classes--jobs', 'cj'),
    Fate: createIndex('duty.fate', 'f'),
    Quest: createIndex('duty.quest', 'q'),
    Title: createIndex('character.character.title', 't'),
};

/**
 * Attempt to add tasks to indexes
 */
export function addTaskToIndex(task: Task) {
    for(const { baseKey, map } of Object.values(INDEX)) {
        if(task.fullStorageKey.startsWith(baseKey)) {
            map.set(task.id, task);
            break;
        }
    }
}

export function getIndexedTask(indexKey: string, taskId: number | string) {
    const id = typeof taskId === 'number' ? taskId : parseInt(taskId);
    if(isNaN(id)) return;

    for(const { map, shorthand } of Object.values(INDEX)) {
        if(indexKey === shorthand) return map.get(id);
    }
}
