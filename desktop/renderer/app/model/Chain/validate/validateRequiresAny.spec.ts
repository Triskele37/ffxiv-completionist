import * as getCompletion from '../getCompletion';
import { mockValidateConstraint } from '../ChainConstraint.mock';
import { validateRequiresAny } from './validateRequiresAny'

jest.mock('../getCompletion', () => ({
    isComplete: jest.fn(),
    isExcluded: jest.fn(),
}));

const isComplete = jest.mocked(getCompletion.isComplete);
const isExcluded = jest.mocked(getCompletion.isExcluded);

describe('validateRequiresAny', () => {
    beforeEach(() => {
        isComplete.mockReset();
        isExcluded.mockReset();
    });

    function mockChainedTaskCompletion(complete: boolean, excluded: boolean) {
        isComplete.mockReturnValueOnce(complete);
        isExcluded.mockReturnValueOnce(excluded);
    }

    describe('when the source task is not complete', () => {
        beforeEach(() => {
            isComplete.mockReturnValueOnce(false);
        });

        it('validates', () => {
            mockChainedTaskCompletion(false, false);
            expect(validateRequiresAny(mockValidateConstraint(1))).toEqual(true);
        });
    });

    describe('when the source task is complete', () => {
        beforeEach(() => {
            isComplete.mockReturnValueOnce(true);
        });

        describe('validates when', () => {
            it('the only chainedTask is complete', () => {
                mockChainedTaskCompletion(true, false);
                expect(validateRequiresAny(mockValidateConstraint(1))).toEqual(true);
            });

            it('the first chainedTask is complete', () => {
                mockChainedTaskCompletion(true, false);
                mockChainedTaskCompletion(false, false);
                expect(validateRequiresAny(mockValidateConstraint(2))).toEqual(true);
            });

            it('a non-first chainedTask is complete', () => {
                mockChainedTaskCompletion(false, false);
                mockChainedTaskCompletion(true, false);
                expect(validateRequiresAny(mockValidateConstraint(2))).toEqual(true);
            });

            it('all chainedTasks are complete', () => {
                mockChainedTaskCompletion(true, false);
                mockChainedTaskCompletion(true, false);
                expect(validateRequiresAny(mockValidateConstraint(2))).toEqual(true);
            });

            it('the only chainedTask is excluded', () => {
                mockChainedTaskCompletion(false, true);
                expect(validateRequiresAny(mockValidateConstraint(1))).toEqual(true);
            });

            it('all chainedTasks are excluded', () => {
                mockChainedTaskCompletion(false, true);
                mockChainedTaskCompletion(false, true);
                expect(validateRequiresAny(mockValidateConstraint(1))).toEqual(true);
            });
        });

        describe('does not validate when', () => {
            it('the only chainedTask is incomplete', () => {
                mockChainedTaskCompletion(false, false);
                expect(validateRequiresAny(mockValidateConstraint(1))).toEqual(false);
            });

            it('the first chainedTask is incomplete', () => {
                mockChainedTaskCompletion(false, false);
                mockChainedTaskCompletion(false, true);
                expect(validateRequiresAny(mockValidateConstraint(2))).toEqual(false);
            });

            it('a non-first chainedTask is incomplete', () => {
                mockChainedTaskCompletion(false, true);
                mockChainedTaskCompletion(false, false);
                expect(validateRequiresAny(mockValidateConstraint(2))).toEqual(false);
            });

            it('all chainedTasks are incomplete', () => {
                mockChainedTaskCompletion(false, false);
                mockChainedTaskCompletion(false, false);
                expect(validateRequiresAny(mockValidateConstraint(2))).toEqual(false);
            });
        });
    });
});
