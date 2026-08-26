import type { Observable, Subject } from 'rxjs';

import type { CompletionFlag } from '@constant';
import type { Column } from '@model/Column';
import type { Task } from '@model/Task';
import type { ViewToken } from '@view/view-token';

export type DataGroup = {
    updated$: Subject<void>;
    onUpdated$: Observable<void>;

    //#region--------------------------------- Identification
    dataType: 'Group';

    _key: string;

    name: string;

    _parent: DataGroup | null;

    contentLink: string;

    storageKey: string;

    fullStorageKey: string;

    //#endregion

    //#region--------------------------------- Data
    order?: string[];

    subGroups?: Map<string, DataGroup | null>;

    tasks: Task[];

    cPrev?: Task['cPrev'];
    cPrevAt?: Task['cPrevAt'];
    cPrevAny?: Task['cPrevAny'];
    cNext?: Task['cNext'];
    cSiblings?: Task['cSiblings'];
    cSiblingsAt?: Task['cSiblingsAt'];
    cCombo?: Task['cCombo'];
    cComboAt?: Task['cComboAt'];
    cExclude?: Task['cExclude'];
    cExclusive?: Task['cExclusive'];

    columns?: Column[];

    //#endregion

    //#region--------------------------------- Group Type Flags
    isUiGroup?: boolean;

    isCustomGroup?: boolean;

    isBookmarkGroup?: boolean;

    isCraftingLogGroup?: boolean;

    //#endregion

    //#region--------------------------------- UI
    noContent?: boolean;

    component?: ViewToken;

    showAllTasks?: boolean;

    draggable?: boolean;

    /** Whether to hide in the nav-drawer */
    visible?: boolean;

    //#endregion

    //#region--------------------------------- Completion
    defaultCompletion: CompletionFlag;

    isNumericCompletion: boolean;

    numericDecimal: number;

    disableCompletion?: boolean;

    //#endregion
};
