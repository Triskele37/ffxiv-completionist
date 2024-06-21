import { Observable, Subject } from 'rxjs';

import { CompletionFlag } from '@constant';
import { Column } from '@model/Column';
import { Task } from '@model/Task';

export type DataGroup = {
    updated$: Subject<void>;
    onUpdated$: Observable<void>;

    //#region--------------------------------- Identification
    xivDataType: 'Group';

    _key: string;

    name: string;

    _parent: DataGroup;

    contentLink: string;

    storageKey: string;

    fullStorageKey: string;

    //#endregion

    //#region--------------------------------- Data
    subGroups?: Map<string, DataGroup>;

    tasks: Task[];

    cCombo?; //TODO:

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

    component?: any;

    draggable?: boolean;

    /** Whether to hide in the nav-drawer */
    visible?: boolean;

    //#endregion

    //#region--------------------------------- Completion
    defaultCompletion: CompletionFlag;

    isNumericCompletion: boolean;

    numericDecimal: number;

    //#endregion
};
