import { Injectable, signal, inject } from '@angular/core';

import { ConfigStoreService } from '@service/store/config-store.service';
import { DataService } from '@service/data/data-service';
import { MarkService } from '@service/mark/mark.service';

//#region ------------------------------------------------------- Methods
import { applyFlagToTask } from './apply/applyFlagToTask';
import { applyMetNumberToTask } from './apply/applyMetNumberToTask';
import { applyUnmetNumberToTask } from './apply/applyUnmetNumberToTask';
import { applyChainedNumberMet } from './apply/applyChainedNumberMet';
import { applyChainedNumberUnmet } from './apply/applyChainedNumberUnmet';

import { applyChains } from './chain/applyChains';
import { chainPrevSiblingsAt } from './chain/chainPrevSiblingsAt';
import { chainCombo } from './chain/chainCombo';
import { chainComboAt } from './chain/chainComboAt';
import { chainExclude } from './chain/chainExclude';
import { chainExclusive } from './chain/chainExclusive';
import { chainNext } from './chain/chainNext';
import { chainPrev } from './chain/chainPrev';
import { chainSiblings } from './chain/chainSiblings';
import { chainUnlock } from './chain/chainUnlock';

import { getGroupConstraints } from './constraint/getGroupConstraints';
import { diveGroupConstraints } from './constraint/diveGroupConstraints';
import { getTaskConstraints } from './constraint/getTaskConstraints';
import { getPrevConstraints } from './constraint/getPrevConstraints';
import { getNextConstraints } from './constraint/getNextConstraints';
import { getSiblingConstraints } from './constraint/getSiblingConstraints';
import { getExcludeConstraints } from './constraint/getExcludeConstraints';

import { changeCompletion } from './current/changeCompletion';
import { chainTask } from './current/chainTask';
import { hasChainProps } from './current/hasChainProps';
import { shouldChain } from './current/shouldChain';
import { startChain } from './current/startChain';
import { taskAlreadyChained } from './current/taskAlreadyChained';
import { pushChained } from './current/pushChained';

import { addHistory } from './history/addHistory';
import { setHistoryLimit } from './history/setHistoryLimit';
import { undoCurrentChain } from './history/undoCurrentChain';

//#endregion

import { ChainedGroup, ChainHistory, ChainStart } from './types';

@Injectable({
    providedIn: 'root'
})
export class ChainService {
    svcConfig = inject(ConfigStoreService);
    svcData = inject(DataService);
    svcMark = inject(MarkService);

    force: boolean = false;

    chainedTaskCount = signal<number>(0);
    chainedGroups = signal<ChainedGroup[]>([]);
    chainStart = signal<ChainStart | null>(null);

    history = signal<ChainHistory[]>([]);
    historyLimit: number = 10;

    // Methods
    get applyFlagToTask() { return applyFlagToTask(this); }
    get applyMetNumberToTask() { return applyMetNumberToTask(this); }
    get applyUnmetNumberToTask() { return applyUnmetNumberToTask(this); }
    get applyChainedNumberMet() { return applyChainedNumberMet(this); }
    get applyChainedNumberUnmet() { return applyChainedNumberUnmet(this); }

    get applyChains() { return applyChains(this); }
    get chainPrevSiblingsAt() { return chainPrevSiblingsAt(this); }
    get chainCombo() { return chainCombo(this); }
    get chainComboAt() { return chainComboAt(this); }
    get chainExclude() { return chainExclude(this); }
    get chainExclusive() { return chainExclusive(this); }
    get chainNext() { return chainNext(this); }
    get chainPrev() { return chainPrev(this); }
    get chainSiblings() { return chainSiblings(this); }
    get chainUnlock() { return chainUnlock(this); }

    get getGroupConstraints() { return getGroupConstraints(this); }
    get diveGroupConstraints() { return diveGroupConstraints(this); }
    get getTaskConstraints() { return getTaskConstraints(this); }
    get getPrevConstraints() { return getPrevConstraints(this); }
    get getNextConstraints() { return getNextConstraints(this); }
    get getSiblingConstraints() { return getSiblingConstraints(this); }
    get getExcludeConstraints() { return getExcludeConstraints(this); }

    get changeCompletion() { return changeCompletion(this); }
    get chainTask() { return chainTask(this); }
    get hasChainProps() { return hasChainProps(this); }
    get shouldChain() { return shouldChain(this); }
    get startChain() { return startChain(this); }
    get taskAlreadyChained() { return taskAlreadyChained(this); }
    get pushChained() { return pushChained(this); }

    get addHistory() { return addHistory(this); }
    get setHistoryLimit() { return setHistoryLimit(this); }
    get undoCurrentChain() { return undoCurrentChain(this); }
}
