export function matchWildcardPatch(
    wildcardPatch: string,
    testString: string,
): boolean {
    return new RegExp(`^${wildcardPatch.replace('x', '\\d?')}`).test(testString);
}
