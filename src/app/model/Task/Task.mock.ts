import { signal } from '@angular/core';
import { Task } from './';

export function mockFullTask(options: Partial<Task> = {}): Task {
    return {
        // Identification
        dataType: 'Task',
        id: 0,
        name: 'Mock Task',
        _parent: undefined as any,
        storageKey: '0',
        fullStorageKey: 'overall.0',
        contentLink: '0',

        // UI
        selected: signal(false),

        // Completion
        completionFlag$: signal(''),

        // Flag Completion
        defaultCompletion: undefined as any,

        // Numeric Completion
        isNumericCompletion: false,
        minValue: undefined as any,
        maxValue: undefined as any,

        // Chaining
        cPrev: undefined,
        cPrevAt: undefined,
        cPrevAny: undefined,
        cNext: undefined,
        cSiblings: undefined,
        cSiblingsAt: undefined,
        cCombo: undefined,
        cComboAt: undefined,
        cExclude: undefined,
        cExclusive: undefined,

        ...options
    };
}

export function mockMinimalTask(properties: Partial<Task> = {}): Task {
    return {
        completionFlag$: jest.fn(),
        ...properties
    } as Task;
}

export function mockEmptyTask(): Task {
    return {} as Task;
}

export function mockCompletion(task: Task, completion: string) {
    jest.mocked(task.completionFlag$).mockReturnValueOnce(completion);
}
