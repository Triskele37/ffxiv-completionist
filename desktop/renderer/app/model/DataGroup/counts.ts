import { Completion } from '@constant';
import type { Task } from '@model/Task';

import type { DataGroup } from './index';

/**
 * Common method of counting
 * */
type CountTask = (task: Task) => number;
function countGroup(group: DataGroup | null, countTask: CountTask): number {
    if(!group) return 0;
    if(group.isBookmarkGroup) return 0;
    if(group.disableCompletion) return 0;

    let count: number = 0;
    group.tasks?.forEach((task) => count += countTask(task));
    group.subGroups?.forEach((g) => count += countGroup(g, countTask));
    return count;
}

/**
 * Total tasks including excluded
 * */
export function getTotal(group: DataGroup): number {
    return countGroup(group, (task) => {
        if(task.isNumericCompletion) return task.maxValue - task.minValue;
        return 1;
    });
}

/**
 * Total task excluding excluded
 * */
export function getEffectiveTotal(group: DataGroup): number {
    return countGroup(group, (task) => {
        if(task.completionFlag$() === Completion.X) return 0;
        return task.isNumericCompletion ? task.maxValue - task.minValue : 1;
    });
}

/**
 * Total completed tasks
 * */
export function getCompleted(group: DataGroup): number {
    return countGroup(group, (task) => {
        if(task.isNumericCompletion) {
            if(task.completionFlag$() === Completion.X) return 0;
            const num = parseFloat(task.completionFlag$());
            return num >= task.minValue ? num - task.minValue : 0;
        }

        return task.completionFlag$() === Completion.Y ? 1 : 0;
    });
}

/**
 * Total remaining task excluding excluded
 * */
export function getRemaining(group: DataGroup): number {
    return countGroup(group, (task) => {
        if(task.isNumericCompletion) {
            if(task.completionFlag$() === Completion.X) return 0;
            const num = parseFloat(task.completionFlag$());
            const tot = task.maxValue - task.minValue;
            return num > task.minValue ? tot - (num - task.minValue) : tot;
        }

        return task.completionFlag$() === Completion.N ? 1 : 0;
    });
}

/**
 * Total excluded tasks
 * */
export function getExcluded(group: DataGroup): number {
    return countGroup(group, (task) => {
        if(task.completionFlag$() !== Completion.X) return 0;
        return task.isNumericCompletion ? task.maxValue - task.minValue : 1;
    });
}
