import { Task } from '../';
import { createMockTask } from '../Task.mock';
import { hasChainProps } from './hasChainProps';

describe('hasChainProps', () => {
    let task: Task;

    beforeEach(() => task = createMockTask());

    it('should return true if cPrev is defined', () => {
        expect(hasChainProps(task)).toBeFalse();
        task.cPrev = [];
        expect(hasChainProps(task)).toBeTrue();
    });

    it('should return true if cPrevAt is defined', () => {
        expect(hasChainProps(task)).toBeFalse();
        task.cPrevAt = {};
        expect(hasChainProps(task)).toBeTrue();
    });

    it('should return true if cNext is defined', () => {
        expect(hasChainProps(task)).toBeFalse();
        task.cNext = [];
        expect(hasChainProps(task)).toBeTrue();
    });

    it('should return true if cSiblings is defined', () => {
        expect(hasChainProps(task)).toBeFalse();
        task.cSiblings = [];
        expect(hasChainProps(task)).toBeTrue();
    });

    it('should return true if cSiblingsAt is defined', () => {
        expect(hasChainProps(task)).toBeFalse();
        task.cSiblingsAt = {};
        expect(hasChainProps(task)).toBeTrue();
    });

    it('should return true if cCombo is defined', () => {
        expect(hasChainProps(task)).toBeFalse();
        task.cCombo = [];
        expect(hasChainProps(task)).toBeTrue();
    });

    it('should return true if cComboAt is defined', () => {
        expect(hasChainProps(task)).toBeFalse();
        task.cComboAt = {};
        expect(hasChainProps(task)).toBeTrue();
    });

    it('should return true if cExclude is defined', () => {
        expect(hasChainProps(task)).toBeFalse();
        task.cExclude = [];
        expect(hasChainProps(task)).toBeTrue();
    });

    it('should return true if cExclusive is defined', () => {
        expect(hasChainProps(task)).toBeFalse();
        task.cExclusive = [];
        expect(hasChainProps(task)).toBeTrue();
    });
});
