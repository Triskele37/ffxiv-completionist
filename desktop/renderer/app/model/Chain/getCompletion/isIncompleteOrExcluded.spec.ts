import { mockEmptyTask } from '@model/Task/Task.mock';

import * as getCompletion from './index';
import { isIncompleteOrExcluded } from './isIncompleteOrExcluded';

jest.mock('./isIncomplete', () => ({ isIncomplete: jest.fn() }));
jest.mock('./isExcluded', () => ({ isExcluded: jest.fn() }));

const isIncomplete = jest.mocked(getCompletion.isIncomplete);
const isExcluded = jest.mocked(getCompletion.isExcluded);

describe('isIncompleteOrExcluded', () => {
    beforeEach(() => {
        isIncomplete.mockReset();
        isExcluded.mockReset();
    });

    it('should be true if incomplete or excluded', () => {
        const task = mockEmptyTask();

        isIncomplete.mockReturnValueOnce(true);
        expect(isIncompleteOrExcluded(task)).toEqual(true);
        expect(isExcluded).not.toHaveBeenCalled();

        isIncomplete.mockReturnValueOnce(true);
        isExcluded.mockReturnValueOnce(true);
        expect(isIncompleteOrExcluded(task)).toEqual(true);

        isIncomplete.mockReturnValueOnce(false);
        isExcluded.mockReturnValueOnce(true);
        expect(isIncompleteOrExcluded(task)).toEqual(true);
    });

    it('should be false if neither incomplete or excluded', () => {
        const task = mockEmptyTask();

        isIncomplete.mockReturnValueOnce(false);
        isExcluded.mockReturnValueOnce(false);
        expect(isIncompleteOrExcluded(task)).toEqual(false);
    });
});
