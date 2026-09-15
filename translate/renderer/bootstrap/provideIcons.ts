import {
    provideNgIconsConfig,
    provideIcons,
    withContentSecurityPolicy
} from '@ng-icons/core';
import {
    matArrowBack,
    matArrowDownward,
    matArrowForward,
    matFastForward,
    matFastRewind,
    matRefresh,
} from '@ng-icons/material-icons/baseline';

export function provideNgIcons() {
    return [
        provideNgIconsConfig({}, withContentSecurityPolicy()),
        provideIcons({
            matArrowBack,
            matArrowDownward,
            matArrowForward,
            matFastForward,
            matFastRewind,
            matRefresh,
        })
    ];
}
