/**
 * Escape strings that are injected into html
 * (currently only applies to nav drawer)
 * - Must handle context of <element>value</element>
 * - Must handle context of <element attribute="value">
 * */
export function escapeHtml(text: string): string {
    return text
        .replaceAll('&', '&amp;') // must be first
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#39;');
}
