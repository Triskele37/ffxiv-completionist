const INLINE_QUOTE = '@@QUOTE@@';
const quoth = (v: string) => INLINE_QUOTE + v + INLINE_QUOTE;

type JSON = Record<string, any>;

/**
 * Standard JSON formatter when writing
 * - This should be used ANY time resource files are written
 */
export function prettyJson(json: JSON): string {
    return JSON.stringify(json, replacer, 4)
            // Remove the placeholders around inlined arrays
            .replace(/"\[ (.*?) \]"/g, '[$1]')
            // Replace inlined array quote tokens with actual quotes
            .replaceAll(INLINE_QUOTE, '"')
            // Make all JSON CRLF (not explicit choice, just how it is currently)
            .replace(/\n/g, '\r\n')
        // Trailing line break
        + '\r\n';
}

function replacer(key: string, value: any): any {
    if(Array.isArray(value) && value.length > 0 && typeof value[0] !== 'object') {
        // Inline short arrays by placing them in placeholders
        const length = JSON.stringify(value).length;
        if(length > 100) return value;

        return `[ ${
            value.map((v) => typeof v === 'string' ? quoth(v) : v).join(', ')
        } ]`;
    }
    return value;
}
