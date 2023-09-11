import { Task } from './';

export function createMockTask(): Task {
    return {
        // Identification
        xivDataType: 'Task',
        id: 0,
        name: 'Mock Task',
        _parent: undefined,
        storageKey: '0',
        fullStorageKey: 'overall.0',

        // UI
        selected: false,

        // Completion
        completionFlag: '',

        // Flag Completion
        defaultCompletion: undefined,

        // Numeric Completion
        isNumericCompletion: false,
        minValue: undefined,
        maxValue: undefined,

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
    };
}
