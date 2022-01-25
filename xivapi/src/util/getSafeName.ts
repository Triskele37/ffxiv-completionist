// Return a safe version of names for file/directory name
export function getSafeName(name: string): string {
    return name
        .toString()
        .toLowerCase()
        .replace('æ', 'ae')
        .replace(/[^a-z0-9_\- ]/g, '') // remove non-alphanumeric characters
        .replace(/\s\s+/g, ' ') // remove multiple spacing
        .replace(/ - /, '-') // special case for "x - y"
        .replace(/\s/g, '-');
}
