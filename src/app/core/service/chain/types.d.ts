import { WritableSignal } from '@angular/core';

import { Task } from '@model/Task';
import { ConfigStoreService } from '@service/store/config-store.service';
import { DataService } from '@service/data/data-service';
import { MarkService } from '@service/mark/mark.service';

import type { ChainApplyFacet } from './apply/_chain.apply';
import type { ChainChainFacet } from './chain/_chain.chain';
import type { ChainConstraintFacet } from './constraint/_chain.constraint';
import type { ChainCurrentFacet } from './current/_chain.current';
import type { ChainHistoryFacet } from './history/_chain.history';

// The shared service properties
export interface ChainServiceContext {
    // Service injections
    svcConfig: ConfigStoreService;
    svcData: DataService;
    svcMark: MarkService;

    // Top-level
    force: boolean;
    chainedTaskCount: WritableSignal<number>;
    chainedGroups: WritableSignal<ChainedGroup[]>;
    chainStart: WritableSignal<ChainStart | null>;

    // Facet containers
    apply: ChainApplyFacet;
    chain: ChainChainFacet;
    constraint: ChainConstraintFacet;
    current: ChainCurrentFacet;
    history: ChainHistoryFacet;
}

// Each unique group containing chained tasks
export type ChainedGroup = {
    path: string;
    tasks: ChainedTask[];
    show?: boolean;
};

// Shared between ChainStart and ChainedTask
type TaskBase = {
    task: Task;
    fromFlag: string;
    toFlag?: string;
};

// The first task to start a chain
export type ChainStart = TaskBase & {
    historyDisabled: boolean;
    path: string;
};

// Tasks that are affected by a chain
export type ChainedTask = TaskBase & {
    count?: number;
};
