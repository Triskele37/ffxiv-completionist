import { mockEmptyTask } from '@model/Task/Task.mock';

import * as getCompletion from './index';
import { isIncomplete } from './isIncomplete';

jest.mock('./isComplete', () => ({ isComplete: jest.fn() }));
jest.mock('./isExcluded', () => ({ isExcluded: jest.fn() }));

const isComplete = jest.mocked(getCompletion.isComplete);
const isExcluded = jest.mocked(getCompletion.isExcluded);

describe('isIncomplete', () => {
    beforeEach(() => {
        isComplete.mockReset();
        isExcluded.mockReset();
    });

    it('should be true if not completed and not excluded', () => {
        const task = mockEmptyTask();

        isComplete.mockReturnValueOnce(false);
        isExcluded.mockReturnValueOnce(false);
        expect(isIncomplete(task)).toEqual(true);
    });

    it('should be false if either completed or excluded', () => {
        const task = mockEmptyTask();

        isComplete.mockReturnValueOnce(true);
        expect(isIncomplete(task)).toEqual(false);
        expect(isExcluded).not.toHaveBeenCalled();

        isComplete.mockReturnValueOnce(false);
        isExcluded.mockReturnValueOnce(true);
        expect(isIncomplete(task)).toEqual(false);
        isExcluded.mockReset();

        isComplete.mockReturnValueOnce(true);
        isExcluded.mockReturnValueOnce(true);
        expect(isIncomplete(task)).toEqual(false);
        expect(isExcluded).not.toHaveBeenCalled();
    });
});
