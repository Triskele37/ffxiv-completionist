import * as getCompletion from '../getCompletion';
import { mockValidateConstraint } from '../ChainConstraint.mock';
import { validateExcludes } from './validateExcludes'

jest.mock('../getCompletion', () => ({
    isComplete: jest.fn(),
    isExcluded: jest.fn(),
}));

const isComplete = jest.mocked(getCompletion.isComplete);
const isExcluded = jest.mocked(getCompletion.isExcluded);

// export function validateExcludes(constraint: ChainConstraint): boolean {
//     if(!isComplete(constraint.task, constraint.taskThreshold)) return true;
//     return constraint.chainedTasks.every(isExcluded);
// }

describe('validateExcludes', () => {
    beforeEach(() => {
        isComplete.mockReset();
        isExcluded.mockReset();
    });

    describe('when the source task is not complete', () => {
        beforeEach(() => {
            isComplete.mockReturnValueOnce(false);
        });

        it('validates', () => {
            isExcluded.mockReturnValueOnce(false);
            expect(validateExcludes(mockValidateConstraint(1))).toEqual(true);
        });
    });

    describe('when the source task is complete', () => {
        beforeEach(() => {
            isComplete.mockReturnValueOnce(true);
        });

        it('validates when the only chainedTask is excluded', () => {
            isExcluded.mockReturnValueOnce(true);
            expect(validateExcludes(mockValidateConstraint(1))).toEqual(true);
        });

        it('validates when all chainedTasks are excluded', () => {
            isExcluded.mockReturnValueOnce(true);
            isExcluded.mockReturnValueOnce(true);
            expect(validateExcludes(mockValidateConstraint(2))).toEqual(true);
        });

        it('does not validate when the only chainedTask is not excluded', () => {
            isExcluded.mockReturnValueOnce(false);
            expect(validateExcludes(mockValidateConstraint(1))).toEqual(false);
        });

        it('does not validate when the first chainedTask is not excluded', () => {
            isExcluded.mockReturnValueOnce(false);
            isExcluded.mockReturnValueOnce(true);
            expect(validateExcludes(mockValidateConstraint(2))).toEqual(false);
        });

        it('does not validate when a non-first chainedTask is not excluded', () => {
            isExcluded.mockReturnValueOnce(true);
            isExcluded.mockReturnValueOnce(false);
            expect(validateExcludes(mockValidateConstraint(2))).toEqual(false);
        });

        it('does not validate when all chainedTasks are not excluded', () => {
            isExcluded.mockReturnValueOnce(false);
            isExcluded.mockReturnValueOnce(false);
            expect(validateExcludes(mockValidateConstraint(2))).toEqual(false);
        });
    });
});
