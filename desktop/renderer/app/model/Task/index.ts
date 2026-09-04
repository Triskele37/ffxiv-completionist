import type { WritableSignal } from '@angular/core';
import type { CompletionFlag } from '@constant';
import type { AtLinks, Links } from '@model/Chain/ChainLink';
import type { DataGroup } from '@model/DataGroup';

export type Task = {
    dataType: 'Task';

    //#region--------------------------------- Identification
    /** The numeric id for this task unique within its group */
    id: number;

    /** Common task prop, all tasks must declare a `name` */
    name: string;

    /** Reference to the parent DataGroup of this task */
    _parent: DataGroup;

    contentLink: string;

    storageKey: string;

    fullStorageKey: string;

    //#endregion

    //#region--------------------------------- UI
    /** Whether this task is currently selected in the app */
    selected: WritableSignal<boolean>;

    //#endregion

    //#region--------------------------------- Completion
    /** Current completion setting for this task */
    completionFlag$: WritableSignal<CompletionFlag>;

    /** Default completion setting for this task when unmodified */
    defaultCompletion: CompletionFlag;

    /** Whether this task uses numeric completion vs flags */
    isNumericCompletion: boolean;

    /** Minimum value for this numeric task */
    minValue: number;

    /** Maximum value for this numeric task */
    maxValue: number;

    //#endregion

    //#region--------------------------------- Chaining
    /** Tasks that must be completed if this one is */
    cPrev?: Links;

    /** cPrev for numeric completion tasks */
    cPrevAt?: AtLinks;

    /** If cPrev should be treated as any or all complete */
    cPrevAny?: boolean;

    /** Tasks that unlock this task */
    cUnlock?: Links;

    /** Tasks that cannot be completed without this one */
    cNext?: Links;

    /** Tasks that this task unlocks */
    cUnlocks?: Links;

    /** Tasks that should mirror this one's completion */
    cSiblings?: Links;

    /** cSiblings for numeric completion tasks */
    cSiblingsAt?: AtLinks;

    /** Tasks that should be checked when this one is marked */
    cCombo?: Links;

    /** cCombo for numeric completion tasks */
    cComboAt?: AtLinks;

    /** Tasks that should be excluded if this is marked Y */
    cExclude?: Links;

    /** hack for starting city spaghetti */
    cExclusive?: Links;

    //#endregion

    // Hack to allow any task property without explicit declaration here
    [key: string]: any;
};
