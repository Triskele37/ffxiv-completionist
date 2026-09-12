import type { ChainServiceContext } from '../types';
import { getGroupConstraints } from './getGroupConstraints';
import { diveGroupConstraints } from './diveGroupConstraints';
import { getTaskConstraints } from './getTaskConstraints';
import { getPrevConstraints } from './getPrevConstraints';
import { getNextConstraints } from './getNextConstraints';
import { getSiblingConstraints } from './getSiblingConstraints';
import { getExcludeConstraints } from './getExcludeConstraints';

export type ChainConstraintFacet = ReturnType<typeof createConstraintFacet>;

export function createConstraintFacet(this: ChainServiceContext) {
    return {
        getGroupConstraints: getGroupConstraints.bind(this),
        diveGroupConstraints: diveGroupConstraints.bind(this),
        getTaskConstraints: getTaskConstraints.bind(this),
        getPrevConstraints: getPrevConstraints.bind(this),
        getNextConstraints: getNextConstraints.bind(this),
        getSiblingConstraints: getSiblingConstraints.bind(this),
        getExcludeConstraints: getExcludeConstraints.bind(this),
    };
}
