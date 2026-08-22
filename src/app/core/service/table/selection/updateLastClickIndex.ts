import { TableServiceContext } from '../types';

export function updateLastClickIndex(
    this: TableServiceContext,
    newLastClickedIndex: number
): void {
    this.selection.lastClickedRowIndex = newLastClickedIndex;
}
