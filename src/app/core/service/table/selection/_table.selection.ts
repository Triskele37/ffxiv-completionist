import type { TableServiceContext } from '../types';
import { applyShiftSelection } from './applyShiftSelection';
import { updateLastClickIndex } from './updateLastClickIndex';

export type TableSelectionFacet = ReturnType<typeof createSelectionFacet>;

type SelectionContext = {
    lastClickedRowIndex: number | undefined;
};

export function createSelectionFacet(this: TableServiceContext) {
    const context: SelectionContext = {
        lastClickedRowIndex: undefined,
    };

    return {
        ...context,
        applyShiftSelection: applyShiftSelection.bind(this),
        updateLastClickIndex: updateLastClickIndex.bind(this),
    };
}
