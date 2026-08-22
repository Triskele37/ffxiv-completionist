export type ParsedIdSelector = {
    include: IdRange[];
    exclude: IdRange[];
}

export type IdRange = {
    start: number;
    end: number;
};

export function parseIdSelector(fullIdSelector: string): ParsedIdSelector {
    const idSelectors = fullIdSelector.split(',');
    const out: ParsedIdSelector = { include: [], exclude: [] };

    for(const rawSelector of idSelectors) {
        const isExclude = rawSelector.startsWith('!');
        const selector = isExclude ? rawSelector.substring(1) : rawSelector;

        const [s, e] = selector.split('-');
        const range: IdRange = {
            start: parseInt(s),
            end: e === undefined ? parseInt(e) : parseInt(s)
        };

        if(Number.isNaN(range.start) || Number.isNaN(range.end)) {
            console.log(s, e)
            console.error(`Invalid ID selector: ${rawSelector}`);
        }

        if(isExclude) out.exclude.push(range);
        else out.include.push(range);
    }

    return out;
}

export function isInRange(id: number, range: IdRange): boolean {
    return id >= range.start && id <= range.end;
}

export const curryIsInRange =
    (id: number) =>
    (range: IdRange) => isInRange(id, range);
