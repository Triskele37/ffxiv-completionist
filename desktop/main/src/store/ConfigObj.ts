export type ConfigObj = {
    'store-name': string;
    'store-loc': string;
    'lang': string;
    'use-short-names': boolean;
    'last-breadcrumbs': string[];
    'chaining-enabled': boolean;
    'chain-history-limit': number;
    'chain-min-threshold': number;
    'table-filters': TableFilterConfig;
    'show-completed-groups': boolean;
    'show-empty-groups': boolean;
    'window': WindowConfig;
    'theme': ThemeConfig;
    isAdmin?: boolean;
};

type TableFilterConfig = {
    completed: boolean;
    incomplete: boolean;
    excluded: boolean;
};

export type WindowConfig = {
    x: number;
    y: number;
    width: number;
    height: number;
    max?: boolean;
};

type ThemeConfig = {
    'primary-color': string;
    'primary-text': string;
    'background': string;
    'text-color-rgb': string;
    'font-family': string;
    'font-size': number;
    'incomplete-rgb': string;
    'partial-complete-rgb': string;
    'completed-rgb': string;
    'excluded-rgb': string;
};
