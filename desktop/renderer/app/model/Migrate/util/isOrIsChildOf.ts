/**
 * Determine if `target` is `parent` or a child of `parent`
 * */
export function isOrIsChildOf(
    target: string,
    parent: string,
): boolean {
    return target === parent || target.startsWith(parent + '.');
}
