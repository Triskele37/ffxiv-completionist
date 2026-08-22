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

    const tasks = this.tasks();
    for(let i = 0; i <= endIndex; i++) {
        if(i >= startIndex && i <= endIndex) {
            if(tasks[i].selected() !== newSelectedState) {
                tasks[i].selected.set(newSelectedState);
            }
        }
    }
}
