import { TableServiceContext } from '../types';

export function applyShiftSelection(
    this: TableServiceContext,
    fromIndex: number,
    newSelectedState: boolean
): void {
    if(this.selection.lastClickedRowIndex === undefined) return;

    const topDown = fromIndex > this.selection.lastClickedRowIndex;
    const startIndex = topDown ? this.selection.lastClickedRowIndex : fromIndex;
    const endIndex = topDown ? fromIndex : this.selection.lastClickedRowIndex;

    for(let i = 0; i <= endIndex; i++) {
        if(i >= startIndex && i <= endIndex) {
            if(this.tasks()[i].selected() !== newSelectedState) {
                this.tasks()[i].selected.set(newSelectedState);
            }
        }
    }
}
