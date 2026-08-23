import type { ChainConstraint, ChainIssue } from '../ChainConstraint';

export function asChainIssue(constraint: ChainConstraint): ChainIssue {
    return {
        ...constraint,
        description: getDescription(constraint),
    };
}

function getDescription(constraint: ChainConstraint): string {
    if(isSimple(constraint)) {
        return `APP.CHAIN_ANALYSIS.${constraint.type}`;
    }

    if(constraint.task.isNumericCompletion) {
        return 'APP.CHAIN_ANALYSIS.LEFT_AT_LEAST';
    }
    else {
        return 'APP.CHAIN_ANALYSIS.RIGHT_AT_LEAST';
    }
}

function isSimple(constraint: ChainConstraint): boolean {
    if(constraint.task.isNumericCompletion) return false;
    if(constraint.chainedTasks[0].isNumericCompletion) return false;
    return true;
}
