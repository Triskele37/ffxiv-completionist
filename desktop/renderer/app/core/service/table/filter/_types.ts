import type { Subject } from 'rxjs';

export type TableFilterContext = {
    completion: CompletionFilter;
    filters: Filters;
    groupFilters: Record<string, Filters>;

    // observable for when filter values change
    onFilterUpdate$: Subject<void>;

    // observable for when filters have been applied
    onFilterApplied$: Subject<void>;
};

export type CompletionFilter = {
    completed: boolean;
    incomplete: boolean;
    excluded: boolean;
};

export type Filter = {
    key: string;
    value: string | string[];
};

export type Filters = {
    [key: string]: Filter | null;
};
