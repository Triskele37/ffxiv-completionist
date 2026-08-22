import { Task } from '../';
import { mockFullTask } from '../Task.mock';
import { hasChainProps } from './hasChainProps';

describe('hasChainProps', () => {
    let task: Task;

    beforeEach(() => task = mockFullTask());

    it('should return true if cPrev is defined', () => {
        expect(hasChainProps(task)).toEqual(false);
        task.cPrev = [];
        expect(hasChainProps(task)).toEqual(true);
    });

    it('should return true if cPrevAt is defined', () => {
        expect(hasChainProps(task)).toEqual(false);
        task.cPrevAt = {};
        expect(hasChainProps(task)).toEqual(true);
    });

    it('should return true if cNext is defined', () => {
        expect(hasChainProps(task)).toEqual(false);
        task.cNext = [];
        expect(hasChainProps(task)).toEqual(true);
    });

    it('should return true if cSiblings is defined', () => {
        expect(hasChainProps(task)).toEqual(false);
        task.cSiblings = [];
        expect(hasChainProps(task)).toEqual(true);
    });

    it('should return true if cSiblingsAt is defined', () => {
        expect(hasChainProps(task)).toEqual(false);
        task.cSiblingsAt = {};
        expect(hasChainProps(task)).toEqual(true);
    });

    it('should return true if cCombo is defined', () => {
        expect(hasChainProps(task)).toEqual(false);
        task.cCombo = [];
        expect(hasChainProps(task)).toEqual(true);
    });

    it('should return true if cComboAt is defined', () => {
        expect(hasChainProps(task)).toEqual(false);
        task.cComboAt = {};
        expect(hasChainProps(task)).toEqual(true);
    });

    it('should return true if cExclude is defined', () => {
        expect(hasChainProps(task)).toEqual(false);
        task.cExclude = [];
        expect(hasChainProps(task)).toEqual(true);
    });

    it('should return true if cExclusive is defined', () => {
        expect(hasChainProps(task)).toEqual(false);
        task.cExclusive = [];
        expect(hasChainProps(task)).toEqual(true);
    });
});
