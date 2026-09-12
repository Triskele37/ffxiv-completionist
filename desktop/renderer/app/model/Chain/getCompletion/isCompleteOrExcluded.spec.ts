import { mockEmptyTask } from '@model/Task/Task.mock';

import * as getCompletion from './index';
import { isCompleteOrExcluded } from './isCompleteOrExcluded';

jest.mock('./isComplete', () => ({ isComplete: jest.fn() }));
jest.mock('./isExcluded', () => ({ isExcluded: jest.fn() }));

const isComplete = jest.mocked(getCompletion.isComplete);
const isExcluded = jest.mocked(getCompletion.isExcluded);

describe('isCompleteOrExcluded', () => {
    beforeEach(() => {
        isComplete.mockReset();
        isExcluded.mockReset();
    });

    it('should be true if completed or excluded', () => {
        const task = mockEmptyTask();

        isComplete.mockReturnValueOnce(true);
        expect(isCompleteOrExcluded(task)).toEqual(true);
        expect(isExcluded).not.toHaveBeenCalled();

        isComplete.mockReturnValueOnce(true);
        expect(isCompleteOrExcluded(task)).toEqual(true);
        expect(isExcluded).not.toHaveBeenCalled();

        isComplete.mockReturnValueOnce(false);
        isExcluded.mockReturnValueOnce(true);
        expect(isCompleteOrExcluded(task)).toEqual(true);
    });

    it('should be false if neither completed or excluded', () => {
        const task = mockEmptyTask();

        isComplete.mockReturnValueOnce(false);
        isExcluded.mockReturnValueOnce(false);
        expect(isCompleteOrExcluded(task)).toEqual(false);
    });
});
