import { Completion } from '@constant';
import { updateCompletion } from '@model/DataGroup/updateCompletion';
import type { Task } from '@model/Task';

import type { MarkServiceContext } from '../types';

/**
 * Update `task.completionFlag$` as a numeric value
 * */
export function setCompletionNumber(
    this: MarkServiceContext,
    task: Task,
    value: string | number,
): void {
    if(value === Completion.X) {
        task.completionFlag$.set(value);
    }
    else {
        // Ensure the value stays within the defined bounds
        const defaultValue = this.getDefaultNumericCompletion(task);
        let newValue: number = typeof value === 'string' ? parseFloat(value) : value;

        if(isNaN(newValue)) newValue = defaultValue;
        else if(newValue < task.minValue) newValue = defaultValue;
        else if(newValue > task.maxValue) newValue = task.maxValue;

        // Apply precision
        newValue = parseFloat(newValue.toFixed(task._parent.numericDecimal));

        // Set the flag
        task.completionFlag$.set(newValue.toString());
    }

    // Fire the group's update$ notification
    updateCompletion(task._parent);
}
