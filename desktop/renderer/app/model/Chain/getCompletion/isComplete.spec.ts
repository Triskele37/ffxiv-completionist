import { Completion } from '@constant';
import { mockCompletion, mockMinimalTask } from '@model/Task/Task.mock';

import { isComplete } from './isComplete';

describe('isComplete', () => {
    it('should handle basic flags', () => {
        const task = mockMinimalTask();

        mockCompletion(task, Completion.Y);
        expect(isComplete(task)).toEqual(true);

        mockCompletion(task, Completion.N);
        expect(isComplete(task)).toEqual(false);

        mockCompletion(task, Completion.X);
        expect(isComplete(task)).toEqual(false);
    });

    it('should handle numeric completion without a threshold', () => {
        const task = mockMinimalTask({ isNumericCompletion: true, maxValue: 10 });

        mockCompletion(task, '10');
        expect(isComplete(task)).toEqual(true);

        mockCompletion(task, '11');
        expect(isComplete(task)).toEqual(false);

        mockCompletion(task, '9');
        expect(isComplete(task)).toEqual(false);

        mockCompletion(task, Completion.X);
        expect(isComplete(task)).toEqual(false);
    });

    it('should handle numeric completion with a threshold', () => {
        const task = mockMinimalTask({ isNumericCompletion: true, maxValue: 10 });

        mockCompletion(task, '10');
        expect(isComplete(task, 10)).toEqual(true);

        mockCompletion(task, '11');
        expect(isComplete(task, 10)).toEqual(true);

        mockCompletion(task, '9');
        expect(isComplete(task, 10)).toEqual(false);

        mockCompletion(task, Completion.X);
        expect(isComplete(task, 10)).toEqual(false);
    });
});
