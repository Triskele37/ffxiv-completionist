import { app } from 'electron';
import { ConfigObj } from '../../../common/Config';

/**
 * Get the default config file properties
 * */
export function getDefaultConfig(): ConfigObj {
    return {
        'store-name': 'completion',
        'store-loc': app.getPath('userData'),
        'lang': 'en',
        'use-short-names': true,
        'last-breadcrumbs': ['main-menu'],
        'chaining-enabled': true,
        'chain-history-limit': 10,
        'chain-min-threshold': 10,
        'table-filters': {
            completed: true,
            incomplete: true,
            excluded: true
        },
        'show-completed-groups': true,
        'show-empty-groups': true,
        'window': {
            x: 100,
            y: 100,
            width: 1100,
            height: 750,
            max: false
        },
        'theme': {
            'primary-color': '#456c37',
            'primary-text': '#121212',
            'background': '0, 0, 12',
            'text-color-rgb': '255, 255, 255',
            'font-family': 'sans-serif',
            'font-size': 16,
            'incomplete-rgb': '111, 0, 0',
            'partial-complete-rgb': '111, 111, 0',
            'completed-rgb': '0, 111, 0',
            'excluded-rgb': '111, 111, 111'
        }
    };
}
