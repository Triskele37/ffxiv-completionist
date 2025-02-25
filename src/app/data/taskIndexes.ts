import { Task } from '@model/Task';

/**
 * Quick lookup indexes for groups with purely unique ids for their tasks
 * - Uses Task id for the Map key
 * - Map is used to ensure uniqueness and additional perf/size gains over a raw object
 */
export const AchievementIndex = new Map<number, Task>();
export const QuestIndex = new Map<number, Task>();

export function addTaskToIndex(task: Task) {
    const key = task.fullStorageKey;
    if(key.includes('character.achievement')) AchievementIndex.set(task.id, task);
    if(key.includes('duty.quest')) QuestIndex.set(task.id, task);
}

export function getIndexedTask(indexKey: string, taskId: number | string) {
    const id = typeof taskId === 'number' ? taskId : parseInt(taskId);
    if(indexKey === 'a') return AchievementIndex[id];
    if(indexKey === 'q') return QuestIndex[id];
}
