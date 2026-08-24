import { mockValidateConstraint } from '../ChainConstraint.mock';
import * as getCompletion from '../getCompletion';
import { validateRequires } from './validateRequires'

jest.mock('../getCompletion', () => ({
    isComplete: jest.fn(),
    isCompleteOrExcluded: jest.fn(),
}));

const isComplete = jest.mocked(getCompletion.isComplete);
const isCompleteOrExcluded = jest.mocked(getCompletion.isCompleteOrExcluded);

describe('validateRequires', () => {
    beforeEach(() => {
        isComplete.mockReset();
        isCompleteOrExcluded.mockReset();
    });

    describe('when the source task is not complete', () => {
        beforeEach(() => {
            isComplete.mockReturnValueOnce(false);
        });

        it('validates', () => {
            isCompleteOrExcluded.mockReturnValueOnce(false);
            expect(validateRequires(mockValidateConstraint(1))).toEqual(true);
        });
    });

    describe('when the source task is complete', () => {
        beforeEach(() => {
            isComplete.mockReturnValueOnce(true);
        });

        it('validates when the only chainedTask is complete', () => {
            isCompleteOrExcluded.mockReturnValueOnce(true);
            expect(validateRequires(mockValidateConstraint(1))).toEqual(true);
        });

        it('validates when all chainedTasks are complete', () => {
            isCompleteOrExcluded.mockReturnValueOnce(true);
            isCompleteOrExcluded.mockReturnValueOnce(true);
            expect(validateRequires(mockValidateConstraint(2))).toEqual(true);
        });

        it('does not validate when the only chainedTask is incomplete', () => {
            isCompleteOrExcluded.mockReturnValueOnce(false);
            expect(validateRequires(mockValidateConstraint(1))).toEqual(false);
        });

        it('does not validate when the first chainedTask is incomplete', () => {
            isCompleteOrExcluded.mockReturnValueOnce(false);
            isCompleteOrExcluded.mockReturnValueOnce(true);
            expect(validateRequires(mockValidateConstraint(2))).toEqual(false);
        });

        it('does not validate when a non-first chainedTask is incomplete', () => {
            isCompleteOrExcluded.mockReturnValueOnce(true);
            isCompleteOrExcluded.mockReturnValueOnce(false);
            expect(validateRequires(mockValidateConstraint(2))).toEqual(false);
        });

        it('does not validate when all chainedTasks are incomplete', () => {
            isCompleteOrExcluded.mockReturnValueOnce(false);
            isCompleteOrExcluded.mockReturnValueOnce(false);
            expect(validateRequires(mockValidateConstraint(2))).toEqual(false);
        });
    });
});
