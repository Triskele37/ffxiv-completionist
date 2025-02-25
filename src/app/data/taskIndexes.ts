import { Task } from '@model/Task';

type IndexContainer = {
    resourceBase: string;
    shorthand: string;
    map: Map<number, Task>;
};

/**
 * Quick lookup indexes for groups with purely unique ids for their tasks
 * - Uses Task id for the Map key
 * - Map is used to ensure uniqueness and additional perf/size gains over a raw object
 */
const INDEX: Record<string, IndexContainer> = {
    Achievement: {
        resourceBase: 'character.achievement',
        shorthand: 'a',
        map: new Map<number, Task>(),
    },
    Quest: {
        resourceBase: 'duty.quest',
        shorthand: 'q',
        map: new Map<number, Task>(),
    },
    Title: {
        resourceBase: 'character.character.title',
        shorthand: 't',
        map: new Map<number, Task>(),
    }
};

/**
 * Attempt to add tasks to indexes
 */
export function addTaskToIndex(task: Task) {
    for(const { map, resourceBase } of Object.values(INDEX)) {
        if(task.fullStorageKey.startsWith(resourceBase)) {
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
