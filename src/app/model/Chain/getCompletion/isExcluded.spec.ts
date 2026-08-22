import { Completion } from '@constant';
import { mockCompletion, mockMinimalTask } from '@model/Task/Task.mock';

import { isExcluded } from './isExcluded';

describe('isExcluded', () => {
    it('should be true with an X', () => {
        const task = mockMinimalTask();

        mockCompletion(task, Completion.X);
        expect(isExcluded(task)).toEqual(true);
    });

    it('should be false with any other flag than X', () => {
        const task = mockMinimalTask();

        mockCompletion(task, Completion.Y);
        expect(isExcluded(task)).toEqual(false);

        mockCompletion(task, Completion.N);
        expect(isExcluded(task)).toEqual(false);

        mockCompletion(task, '10');
        expect(isExcluded(task)).toEqual(false);
    });
});
