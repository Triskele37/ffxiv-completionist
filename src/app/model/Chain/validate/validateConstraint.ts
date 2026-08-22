import { ChainConstraint } from '../ChainConstraint';
import { validateRequires } from './validateRequires';
import { validateRequiresAny } from './validateRequiresAny';
import { validateMatch } from './validateMatch';
import { validateExcludes } from './validateExcludes';

export function validateConstraint(constraint: ChainConstraint): boolean {
    switch(constraint.type) {
        case 'REQUIRES': return validateRequires(constraint);
        case 'REQUIRES_ANY': return validateRequiresAny(constraint);
        case 'MATCH': return validateMatch(constraint);
        case 'EXCLUDES': return validateExcludes(constraint);
        default: return false;
    }
}
