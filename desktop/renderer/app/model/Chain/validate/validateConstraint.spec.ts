import { mockConstraint } from '../ChainConstraint.mock';
import { validateRequires } from './validateRequires';
import { validateRequiresAny } from './validateRequiresAny';
import { validateMatch } from './validateMatch';
import { validateExcludes } from './validateExcludes';
import { validateConstraint } from './validateConstraint';

jest.mock('./validateRequires', () => ({ validateRequires: jest.fn() }));
jest.mock('./validateRequiresAny', () => ({ validateRequiresAny: jest.fn() }));
jest.mock('./validateMatch', () => ({ validateMatch: jest.fn() }));
jest.mock('./validateExcludes', () => ({ validateExcludes: jest.fn() }));

const validateRequiresSpy = jest.mocked(validateRequires);
const validateRequiresAnySpy = jest.mocked(validateRequiresAny);
const validateMatchSpy = jest.mocked(validateMatch);
const validateExcludesSpy = jest.mocked(validateExcludes);

describe('validateConstraint', () => {
    beforeEach(() => {
        validateRequiresSpy.mockReset();
        validateRequiresAnySpy.mockReset();
        validateMatchSpy.mockReset();
        validateExcludesSpy.mockReset();
    });

    describe('when constraint type is invalid', () => {
        const constraint = mockConstraint({ type: 'not a real type' as any });

        it('should not validate', () => {
            validateRequiresSpy.mockReturnValueOnce(true);
            validateRequiresAnySpy.mockReturnValueOnce(true);
            validateMatchSpy.mockReturnValueOnce(true);
            validateExcludesSpy.mockReturnValueOnce(true);
            expect(validateConstraint(constraint)).toEqual(false);
        });
    });

    describe('when constraint type is REQUIRES', () => {
        const constraint = mockConstraint({ type: 'REQUIRES' });

        it('should only call its own validator', () => {
            validateConstraint(constraint);
            expect(validateRequiresSpy).toHaveBeenCalled();
            expect(validateRequiresAnySpy).not.toHaveBeenCalled();
            expect(validateMatchSpy).not.toHaveBeenCalled();
            expect(validateExcludesSpy).not.toHaveBeenCalled();
        });

        it('should return what its validator returns', () => {
            validateRequiresSpy.mockReturnValueOnce(true);
            expect(validateConstraint(constraint)).toEqual(true);
            validateRequiresSpy.mockReturnValueOnce(false);
            expect(validateConstraint(constraint)).toEqual(false);
        });
    });

    describe('when constraint type is REQUIRES_ANY', () => {
        const constraint = mockConstraint({ type: 'REQUIRES_ANY' });

        it('should only call its own validator', () => {
            validateConstraint(constraint);
            expect(validateRequiresSpy).not.toHaveBeenCalled();
            expect(validateRequiresAnySpy).toHaveBeenCalled();
            expect(validateMatchSpy).not.toHaveBeenCalled();
            expect(validateExcludesSpy).not.toHaveBeenCalled();
        });

        it('should return what its validator returns', () => {
            validateRequiresAnySpy.mockReturnValueOnce(true);
            expect(validateConstraint(constraint)).toEqual(true);
            validateRequiresAnySpy.mockReturnValueOnce(false);
            expect(validateConstraint(constraint)).toEqual(false);
        });
    });

    describe('when constraint type is MATCH', () => {
        const constraint = mockConstraint({ type: 'MATCH' });

        it('should only call its own validator', () => {
            validateConstraint(constraint);
            expect(validateRequiresSpy).not.toHaveBeenCalled();
            expect(validateRequiresAnySpy).not.toHaveBeenCalled();
            expect(validateMatchSpy).toHaveBeenCalled();
            expect(validateExcludesSpy).not.toHaveBeenCalled();
        });

        it('should return what its validator returns', () => {
            validateMatchSpy.mockReturnValueOnce(true);
            expect(validateConstraint(constraint)).toEqual(true);
            validateMatchSpy.mockReturnValueOnce(false);
            expect(validateConstraint(constraint)).toEqual(false);
        });
    });

    describe('when constraint type is EXCLUDES', () => {
        const constraint = mockConstraint({ type: 'EXCLUDES' });

        it('should only call its own validator', () => {
            validateConstraint(constraint);
            expect(validateRequiresSpy).not.toHaveBeenCalled();
            expect(validateRequiresAnySpy).not.toHaveBeenCalled();
            expect(validateMatchSpy).not.toHaveBeenCalled();
            expect(validateExcludesSpy).toHaveBeenCalled();
        });

        it('should return what its validator returns', () => {
            validateExcludesSpy.mockReturnValueOnce(true);
            expect(validateConstraint(constraint)).toEqual(true);
            validateExcludesSpy.mockReturnValueOnce(false);
            expect(validateConstraint(constraint)).toEqual(false);
        });
    });
});
