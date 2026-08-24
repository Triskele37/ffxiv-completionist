import { mockEmptyTask } from '@model/Task/Task.mock';
import { ChainConstraint } from './types';

export function mockConstraint(
    properties: Partial<ChainConstraint>
): ChainConstraint {
    return {
        ...properties
    } as ChainConstraint;
}

export function mockValidateConstraint(chainedTasksLength: number) {
    return mockConstraint({
        task: mockEmptyTask(),
        chainedTasks: Array.from(
            { length: chainedTasksLength },
            () => mockEmptyTask()
        )
    });
}
