/**
 * Patch strings are special, left of the dot is numeric sort, right is alpha
 */
export function sortPatchStrings(patchA: string, patchB: string): number {
    const [majorA, minorA] = patchA.split('.');
    const [majorB, minorB] = patchB.split('.');

    const majorSort = majorA.localeCompare(majorB, undefined, { numeric: true });
    if(majorSort) return majorSort;

    // "!" used to sort "x" before "0"
    return minorA.replace('x', '!').localeCompare(minorB.replace('x', '!'));
}
