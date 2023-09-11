export type ConfigStore = {
    'store-name': string;
    'store-loc': string;
    'lang': string;
    'starting-class': string;
    'last-breadcrumbs': string[];
    'chaining-enabled': boolean;
    'chain-history-limit': number;
    'chain-min-threshold': number;
    'table-filters': {
        completed: boolean;
        incomplete: boolean;
        excluded: boolean;
    };
    'show-completed-groups': boolean;
    'show-empty-groups': boolean;
    'window': {
        x: number;
        y: number;
        width: number;
        height: number;
        max: boolean;
    };
    'theme': {
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
};

export type SaveStore = {
    overall: any;
    custom: any;
    'bookmarked-groups': string[];
    'bookmarked-tasks': string[];
    version: string;
};
