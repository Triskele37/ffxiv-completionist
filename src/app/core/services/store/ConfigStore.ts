export type ConfigStore = {
    'lang': string;
    'store-name': string;
    'store-loc': string;
    'starting-class': string;

    'last-breadcrumbs': string[];
    'table-filters': {
        completed: boolean;
        incomplete: boolean;
        excluded: boolean;
    };

    'chaining-enabled': boolean;
    'chain-min-threshold': number;

    'id-column-enabled': boolean;
    'maintain-version': number;
};
