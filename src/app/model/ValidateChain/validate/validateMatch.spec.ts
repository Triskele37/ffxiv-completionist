import * as getCompletion from '../getCompletion/index';
import { mockValidateConstraint } from '../ChainConstraint.mock';
import { validateMatch } from './validateMatch'

jest.mock('../getCompletion/index', () => ({
    isComplete: jest.fn(),
    isCompleteOrExcluded: jest.fn(),
    isExcluded: jest.fn(),
    isIncompleteOrExcluded: jest.fn(),
}));

const isComplete = jest.mocked(getCompletion.isComplete);
const isCompleteOrExcluded = jest.mocked(getCompletion.isCompleteOrExcluded);
const isExcluded = jest.mocked(getCompletion.isExcluded);
const isIncompleteOrExcluded = jest.mocked(getCompletion.isIncompleteOrExcluded);

describe('validateMatch', () => {
    beforeEach(() => {
        isComplete.mockReset();
        isCompleteOrExcluded.mockReset();
        isExcluded.mockReset();
        isIncompleteOrExcluded.mockReset();
    });

    describe('when the source task is excluded', () => {
        beforeEach(() => {
            isExcluded.mockReturnValueOnce(true);
        });

        it('validates', () => {
            // setup a false state
            isComplete.mockReturnValueOnce(true);
            isCompleteOrExcluded.mockReturnValueOnce(false);

            expect(validateMatch(mockValidateConstraint(1))).toEqual(true);
        });
    });

    describe('when the source task is complete', () => {
        beforeEach(() => {
            isExcluded.mockReturnValueOnce(false);
            isComplete.mockReturnValueOnce(true);
        });

        it('validates when the only chainedTask is complete', () => {
            isCompleteOrExcluded.mockReturnValueOnce(true);
            expect(validateMatch(mockValidateConstraint(1))).toEqual(true);
        });

        it('validates when all chainedTasks are complete', () => {
            isCompleteOrExcluded.mockReturnValueOnce(true);
            isCompleteOrExcluded.mockReturnValueOnce(true);
            expect(validateMatch(mockValidateConstraint(2))).toEqual(true);
        });

        it('does not validate when the only chainedTask is incomplete', () => {
            isCompleteOrExcluded.mockReturnValueOnce(false);
            expect(validateMatch(mockValidateConstraint(1))).toEqual(false);
        });

        it('does not validate when the first chainedTask is incomplete', () => {
            isCompleteOrExcluded.mockReturnValueOnce(false);
            isCompleteOrExcluded.mockReturnValueOnce(true);
            expect(validateMatch(mockValidateConstraint(2))).toEqual(false);
        });

        it('does not validate when a non-first chainedTask is incomplete', () => {
            isCompleteOrExcluded.mockReturnValueOnce(true);
            isCompleteOrExcluded.mockReturnValueOnce(false);
            expect(validateMatch(mockValidateConstraint(2))).toEqual(false);
        });

        it('does not validate when all chainedTasks are incomplete', () => {
            isCompleteOrExcluded.mockReturnValueOnce(false);
            isCompleteOrExcluded.mockReturnValueOnce(false);
            expect(validateMatch(mockValidateConstraint(2))).toEqual(false);
        });
    });

    describe('when the source task is incomplete', () => {
        beforeEach(() => {
            isExcluded.mockReturnValueOnce(false);
            isComplete.mockReturnValueOnce(false);
        });

        it('validates when the only chainedTask is incomplete', () => {
            isIncompleteOrExcluded.mockReturnValueOnce(true);
            expect(validateMatch(mockValidateConstraint(1))).toEqual(true);
        });

        it('validates when all chainedTasks are incomplete', () => {
            isIncompleteOrExcluded.mockReturnValueOnce(true);
            isIncompleteOrExcluded.mockReturnValueOnce(true);
            expect(validateMatch(mockValidateConstraint(2))).toEqual(true);
        });

        it('does not validate when the only chainedTask is complete', () => {
            isIncompleteOrExcluded.mockReturnValueOnce(false);
            expect(validateMatch(mockValidateConstraint(1))).toEqual(false);
        });

        it('does not validate when the first chainedTask is complete', () => {
            isIncompleteOrExcluded.mockReturnValueOnce(false);
            isIncompleteOrExcluded.mockReturnValueOnce(true);
            expect(validateMatch(mockValidateConstraint(2))).toEqual(false);
        });

        it('does not validate when a non-first chainedTask is complete', () => {
            isIncompleteOrExcluded.mockReturnValueOnce(true);
            isIncompleteOrExcluded.mockReturnValueOnce(false);
            expect(validateMatch(mockValidateConstraint(2))).toEqual(false);
        });

        it('does not validate when all chainedTasks are complete', () => {
            isIncompleteOrExcluded.mockReturnValueOnce(false);
            isIncompleteOrExcluded.mockReturnValueOnce(false);
            expect(validateMatch(mockValidateConstraint(2))).toEqual(false);
        });
    });
});
