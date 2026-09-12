/**
 * Returns the path string as: [everything else, final segment]
 * */
export function splitLastSegment(
    path: string,
): [string, string] {
    const leftSegments = path.split('.');
    const rightSegment = leftSegments.pop(); // Grabs the last dot accessor

    // Recombine the rest of the left hand dots
    return [leftSegments.join('.'), rightSegment ?? ''];
}
