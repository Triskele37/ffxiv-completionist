import { Subject } from 'rxjs';

export type TableFilterContext = {
    completion: CompletionFilter;
    filters: Filters;
    groupFilters: Record<string, Filters>;
    onFilterUpdate$: Subject<void>;
};

export type CompletionFilter = {
    completed: boolean;
    incomplete: boolean;
    excluded: boolean;
};

export type Filter = {
    key: string;
    value: string;
};

export type Filters = {
    [key: string]: Filter | null;
};
