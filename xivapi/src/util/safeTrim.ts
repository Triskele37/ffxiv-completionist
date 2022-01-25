export function safeTrim(val) {
    return (typeof val === 'string') ? val.trim() : val;
}
